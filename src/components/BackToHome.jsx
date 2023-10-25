import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
margin: '15px 0'
}

const BackToHome = () => {
    return (
        <NavLink to={'/'} style={style}>
            retour page principal
        </NavLink>
    );
};

export default BackToHome;