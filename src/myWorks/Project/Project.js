import React from "react";
import css from './Project.module.scss';
import {motion} from 'framer-motion';

const blockAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {duration: custom }
    })
}


export const Project = (props) => {
    return (
        <motion.div className={css.project}
                    initial='hidden'
                    whileInView='visible'
                    custom={props.duration}
                    variants={blockAnimation}
                    viewport={{amount: 0.1, once: true}}
        >
            <div className={css.image} style={props.style}>
                <a className={css.viewBtn}>Смотреть</a>
            </div>
            <div className={css.projectInfo}>
                <h3 className={css.projectTitle}>{props.projectTitle}</h3>
                <span className={css.description}>{props.description}</span>
            </div>
        </motion.div>
    )
}
