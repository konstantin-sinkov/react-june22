import React, {useEffect, useState} from 'react';
import {services} from "../../services/service";

import {Todo} from "../index";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        services.getTodos().then(data => setTodos([...data]));
    },[]);
    
    return (
        <div>
            <h2 className={'header-page'}>Todos page</h2>
            <div className={'wrapper'}>
                {
                    todos.map(todo => <Todo todo={todo} key={todo.id}/>)
                }
            </div>
        </div>
    );
}

export {Todos};
