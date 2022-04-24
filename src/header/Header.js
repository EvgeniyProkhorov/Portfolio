import React from "react";
import css from './Header.module.scss';
import {motion} from 'framer-motion';
import Nav from "../nav/Nav";

const textAnimation = {
    hidden: {
        x: 400,
        opacity: 0.5,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}


const Header = () => {
    return (
        <motion.div className={css.header}
             initial='hidden'
             whileInView='visible'
             custom={2}
             variants={textAnimation}
             viewport={{amount: 0.2, once: true}}
        >
            <Nav/>
        </motion.div>
    )
}

export default Header;