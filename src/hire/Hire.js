import React from "react";
import css from './Hire.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";


const Hire = () => {
    return (
        <div className={css.hireBlock}>
            <div className={`${styleContainer.container} ${css.container}`}>
                <Title title={'Considering remote work options.'}/>
                <button className={css.hireButton}>Hire Me</button>
            </div>
        </div>
    )
}

export default Hire;