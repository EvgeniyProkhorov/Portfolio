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
        transition: {duration: custom}
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
const buttonAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {duration: custom}
    })
}

const Contacts = () => {
    return (
        <div id='contacts'>
            <motion.div className={css.contactsBlock}
                        initial='hidden'
                        whileInView='visible'
                        custom={0.9}
                        variants={blockAnimation}
                        viewport={{amount: 'some', once: true}}
            >
                <div className={css.container}>
                    <MTitle title={"Contacts"}
                            initial='hidden'
                            whileInView='visible'
                            custom={0.9}
                            variants={textAnimation}
                            viewport={{amount: 'some', once: true}}
                    />
                    <Form/>
                    <motion.button className={css.submitButton}
                                   initial='hidden'
                                   whileInView='visible'
                                   custom={1.5}
                                   variants={buttonAnimation}
                                   viewport={{amount: 'some', once: true}}>Submit
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Contacts;