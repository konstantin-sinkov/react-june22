import React from 'react';

import css from './Header.module.css';
import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser: {name}, currentUser} = useSelector(state => state.userReducer);
    
    
    return (
        <div className={css.Header}>
            {currentUser && name}
        </div>
    );
}

export {Header};
