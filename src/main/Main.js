import React from "react";
import css from './Main.module.scss'

const Main = () => {
    return (
        <div className={css.mainBlock}>
            <div className={css.container}>
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