import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <NavLink to='/albums'>Albums</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
                <hr />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export {Header};
