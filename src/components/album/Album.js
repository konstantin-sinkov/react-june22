import React from 'react';

const Album = ({album: {id, title}}) => {
    return (
        <div className={'item'}>
            <p>{id} -- {title}</p>
        </div>
    );
}

export {Album};
