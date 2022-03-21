import React from "react";
import css from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={css.nav}>
            <a className={css.navBtn} href="">Главная</a>
            <a className={css.navBtn} href="">Скиллы</a>
            <a className={css.navBtn} href="">Проекты</a>
            <a className={css.navBtn} href="">Контакты</a>
        </div>
    )
}

export default Nav;