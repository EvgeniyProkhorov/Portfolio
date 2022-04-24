import React, {forwardRef} from "react";
import css from './Skill.module.scss';
import {motion} from 'framer-motion';


export const Skill = forwardRef((props, ref) => {
    return (
        <div className={css.skill} ref={ref}>
            <img src={props.img} className={css.icon}></img>
            <h3 className={css.skillTitle}>{props.title}</h3>
            {/*<span className={css.description}>{props.description}</span>*/}
        </div>
    )
})

export const MSkill = motion(Skill)