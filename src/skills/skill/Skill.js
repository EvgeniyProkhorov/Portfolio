import React from "react";
import css from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={css.skill}>
            <div className={css.icon}></div>
            <h3 className={css.skillTitle}>{props.title}</h3>
            <span className={css.description}>{props.description}</span>
        </div>
    )
}

export default Skill;