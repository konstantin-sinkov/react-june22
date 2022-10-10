import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user: {id, name, email}, user}) => {
    const dispatch = useDispatch();
    
    return (
        <div>
            {id} -- {name} -- {email}
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Set User</button>
        </div>
    );
}

export {User};
