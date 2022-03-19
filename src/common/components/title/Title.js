import React from "react";
import css from './Title.module.css'


const Title = (props) => {
    return (
        <div className={css.title}>
            <h3>{props.title}</h3>
        </div>
    )
}
export default Title;