import React from "react";
import css from './Header.module.css'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={css.header}>
            <Nav/>
        </div>
    )
}

export default Header;