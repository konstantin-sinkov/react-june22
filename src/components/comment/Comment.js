import React from 'react';
import {NavLink} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email, postId} = comment;
    
    return (
        <div className={'item'}>
            <NavLink to={postId.toString()} postId={postId}>
                <p>{id} -- {name}</p>
                <p>user email -- {email}</p>
            </NavLink>
            
        </div>
    );
}

export {Comment};
