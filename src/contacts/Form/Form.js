import React from "react";
import css from './Form.module.css'


const Form = () => {
    return (
        <div className={css.formBlock}>
            <form className={css.form}>
                <input type={'text'} className={css.input} placeholder={'Name'}/>
                <input type={'phone'} className={css.input} placeholder={'Phone number'}/>
                <textarea className={css.textarea} placeholder={'Message'}></textarea>
            </form>
        </div>
    )
}

export default Form;
