import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {

    return (
        <header className={classes.header}>
            <img src="https://www.carlogos.org/car-logos/tesla-logo.png" alt="logo"/>
            <div className={classes.loginClass}>
                {props.authorizationData.isAuth
                    ? <div>{props.authorizationData.login } - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={"/login"} >Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
