import React from "react";
import css from './Form.module.scss';
import {motion} from 'framer-motion';

const blockAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {duration: custom}
    })
}


const Form = () => {
    return (
        <motion.div className={css.formBlock}
                    initial='hidden'
                    whileInView='visible'
                    custom={1.3}
                    variants={blockAnimation}
                    viewport={{amount: 'some', once: true}}>
            <form className={css.form}>
                <input type={'text'} className={css.input} placeholder={'Name'}/>
                <input type={'phone'} className={css.input} placeholder={'Phone number'}/>
                <textarea className={css.textarea} placeholder={'Message'}></textarea>
            </form>
        </motion.div>
    )
}

export default Form;
