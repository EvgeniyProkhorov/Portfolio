import React from "react";
import css from './Project.module.css'


const Project = (props) => {
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
}

export default Project;