import React from "react";
import css from './Header.module.scss';
import {motion} from 'framer-motion';
import Nav from "../nav/Nav";

const textAnimation = {
    hidden: {
        x: 200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {duration: custom}
    })
}


const Header = () => {
    return (
        <motion.div className={css.header}
             initial='hidden'
             whileInView='visible'
             custom={0.5}
             variants={textAnimation}
             viewport={{amount: 0.1, once: true}}
        >
            <Nav/>
        </motion.div>
    )
}

export default Header;