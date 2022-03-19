import React from "react";
import css from './Project.module.css'


const Project = (props) => {
    return (
        <div className={css.project}>
            <div className={css.image}>
                <a className={css.viewBtn}>Смотреть</a>
            </div>
            <h3 className={css.projectTitle}>{props.projectTitle}</h3>
            <span className={css.description}>{props.description}</span>
        </div>
    )
}

export default Project;