import React from "react";
import css from './Contacts.module.scss';
import {motion} from 'framer-motion';
import Form from "./Form/Form";
import {MTitle} from "../common/components/title/Title";

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {duration: custom * 0.2}
    })
}


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

const Contacts = () => {
    return (
        <motion.div className={css.contactsBlock}
                    initial='hidden'
                    whileInView='visible'
                    custom={1}
                    variants={blockAnimation}
                    viewport={{amount: 'some', once: true}}
        >
            <div className={css.container}>
                <MTitle title={"Contacts"}
                        initial='hidden'
                        whileInView='visible'
                        custom={2}
                        variants={textAnimation}
                        viewport={{amount: 0.1, once: true}}
                />
                <Form/>
                <motion.button className={css.submitButton}>Submit</motion.button>
            </div>
        </motion.div>
    )
}

export default Contacts;