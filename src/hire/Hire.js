import React from "react";
import css from './Hire.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Hire = () => {
    return (
        <div className={css.hireBlock}>
            <div className={`${styleContainer.container} ${css.container}`}>
                <h2 className={css.headerTitle}>Considering remote work options.</h2>
                <button className={css.hireButton}>Hire Me</button>
            </div>
        </div>
    )
}

export default Hire;