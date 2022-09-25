import React from 'react';

const Todo = ({todo: {id, title, completed}}) => {
    
    return (
        <div className={'item'}>
            <p>{id} -- {title}</p>
            <p><b>status -- {completed ? 'completed' : 'uncompleted'}</b></p>
        </div>
    );
}

export {Todo};
