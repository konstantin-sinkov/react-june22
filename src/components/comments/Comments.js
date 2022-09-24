import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {services} from "../../services/service";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        services.getComments().then(value => setComments([...value]));
    }, []);
    
    
    return (
        <div>
            <div>
                <Outlet />
                <hr />
            </div>
            <h2 className={'header-page'}>Comments page</h2>
            <div className={'wrapper'}>
                {comments.map(comment =>
                    <Comment
                        comment={comment}
                        key={comment.id}
                    />)}
            </div>
        </div>
    );
}

export {Comments};
