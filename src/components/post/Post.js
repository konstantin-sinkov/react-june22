import React from 'react';

const Post = ({post: {id, name, body}}) => {
    return (
        <div className={'small_item'}>
            <p>{id} -- {name}</p>
            <p>{body}</p>
        </div>
    );
}

export {Post};
