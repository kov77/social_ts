import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.carlogos.org/car-logos/tesla-logo.png" alt="logo"/>
        </header>
    )
}

export default Header;
