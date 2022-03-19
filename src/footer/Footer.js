import React from "react";
import css from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={`${styleContainer.container} ${css.container}`}>
                <h2 className={css.title}>Evgeniy Prokhorov</h2>
                <div className={css.socialIcons}>
                    <div className={css.socialIcon}></div>
                    <div className={css.socialIcon}></div>
                    <div className={css.socialIcon}></div>
                    <div className={css.socialIcon}></div>
                </div>
                <span className={css.title}> 2022 copyright</span>
            </div>
        </div>
    )
}

export default Footer;