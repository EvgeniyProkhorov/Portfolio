import React from "react";
import css from './Hire.module.scss'
import {Title} from "../common/components/title/Title";


const Hire = () => {
    return (
        <div className={css.hireBlock}>
            <div className={css.container}>
                <Title title={'Considering remote work options.'}/>
                <button className={css.hireButton}>Hire Me</button>
            </div>
        </div>
    )
}

export default Hire;