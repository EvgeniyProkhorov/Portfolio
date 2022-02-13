import React from "react";
import css from './Nav.module.css'

const Nav = () => {
    return (
        <div className={css.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    )
}

export default Nav;