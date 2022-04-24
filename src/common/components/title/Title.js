import React, {forwardRef} from "react";
import css from './Title.module.scss';
import {motion} from 'framer-motion';

export const Title = forwardRef((props, ref) => {
    return (
        <div className={css.title}
             ref={ref}>
            <h3>{props.title}</h3>
        </div>
    )
})

export const MTitle = motion(Title)