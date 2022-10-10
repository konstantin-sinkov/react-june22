import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer); //get state with useSelector and extract {users} from it
    // console.log(state);
    
    useEffect(() => {
        // console.log(userActions.getUsers());
        usersService.getUsers().then(({data}) => dispatch(userActions.getUsers(data)))
    }, [])
    
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export {Users};
