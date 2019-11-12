import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <header className="header">
            <NavLink to="/profile"><img src="https://www.smartbonny.com/wp-content/uploads/2019/05/logo-ash-7.png" alt="logo" className="logo"/></NavLink>
        </header>
    );
}

export default Header;