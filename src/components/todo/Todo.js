import React from 'react';

const Todo = ({todo: {id, title, completed}}) => {
    
    return (
        <div className={'item'}>
            <p>{id} -- {title}</p>
            <p>status -- {completed ? 'completed' : 'uncompleted'}</p>
        </div>
    );
}

export {Todo};
