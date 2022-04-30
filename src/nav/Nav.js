import React from "react";
import css from './Nav.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll';

const Nav = () => {
    return (
        <div className={css.nav}>
            <Link className={css.navBtn}
                  activeClass={css.active}
                  to='main'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
            >Главная</Link>
            <Link activeClass={css.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
            >Скиллы</Link>
            <Link activeClass={css.active}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
            >Проекты</Link>
            <Link activeClass={css.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
            >Контакты</Link>
            {/*<a className={css.navBtn} href="#">Главная</a>*/}
            {/*<a className={css.navBtn} href="#skills">Скиллы</a>*/}
            {/*<a className={css.navBtn} href="#projects">Проекты</a>*/}
            {/*<a className={css.navBtn} href="#contacts">Контакты</a>*/}
        </div>
    )
}

export default Nav;