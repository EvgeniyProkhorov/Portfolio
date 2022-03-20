import React from "react";
import css from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={css.mainBlock}>
            <div className={styleContainer.container}>
                <div className={css.text}>
                    <span>Hi There</span>
                    <h1>I am Evgeniy Prokhorov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={css.photo}></div>
            </div>
        </div>
    )
}

export default Main;