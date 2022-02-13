import React from "react";
import css from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={`${styleContainer.container} ${css.container}`}>
                <h2>Evgeniy Prokhorov</h2>
                <div className={css.socialMedia}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <span> 2022 copyright</span>
            </div>
        </div>
    )
}

export default Footer;