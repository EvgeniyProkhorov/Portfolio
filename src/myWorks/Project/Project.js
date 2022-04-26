import React, {forwardRef} from "react";
import css from './Project.module.scss';
import {motion} from 'framer-motion';



export const Project = forwardRef((props, ref) => {
    return (
        <div className={css.project}>
            <div className={css.image} style={props.style}>
                <a className={css.viewBtn}>Смотреть</a>
            </div>
            <div className={css.projectInfo}>
                <h3 className={css.projectTitle}>{props.projectTitle}</h3>
                <span className={css.description}>{props.description}</span>
            </div>
        </div>
    )
})

export const MProject = motion(Project)