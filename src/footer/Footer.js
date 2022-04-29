import React from "react";
import css from './Footer.module.scss';
import {motion} from 'framer-motion';
import linkedinIcon from '../assets/contactsIcons/linkedin500.png';
import telegramIcon from '../assets/contactsIcons/telegram500.png';
import gitHubIcon from '../assets/contactsIcons/github500.png';

const telegram = 'https://t.me/EvgenFrontEnd'
const gitHub = 'https://github.com/EvgeniyProkhorov'

const textAnimation = {
    hidden: {
        x: -100,
        y: 50,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {duration: custom}
    })
}

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.container}>
                <motion.h2 className={css.title}
                           initial='hidden'
                           whileInView='visible'
                           custom={0.5}
                           variants={textAnimation}
                           viewport={{amount: 'some', once: true}}>Evgeniy Prokhorov
                </motion.h2>
                <div className={css.socialIcons}>
                    <motion.a target={'_blank'} href={''}
                              initial='hidden'
                              whileInView='visible'
                              custom={0.5}
                              variants={textAnimation}
                              viewport={{amount: 'some', once: true}}><img className={css.socialIcon} src={linkedinIcon}
                                                                           alt={'LinkedIn'}/></motion.a>
                    <motion.a target={'_blank'} href={telegram}
                              initial='hidden'
                              whileInView='visible'
                              custom={0.9}
                              variants={textAnimation}
                              viewport={{amount: 'some', once: true}}><img className={css.socialIcon} src={telegramIcon}
                                                                           alt={'Telegram'}/></motion.a>
                    <motion.a target={'_blank'} href={gitHub}
                              initial='hidden'
                              whileInView='visible'
                              custom={1.3}
                              variants={textAnimation}
                              viewport={{amount: 'some', once: true}}><img className={css.socialIcon} src={gitHubIcon}
                                                                           alt={'GitHub'}/></motion.a>
                </div>
                <motion.span className={css.title}
                             initial={{opacity: 0}}
                             whileInView={{opacity: 1, transition: {duration: 2}}}
                             viewport={{amount: 'some', once: true}}> 2022 copyright
                </motion.span>
            </div>
        </div>
    )
}

export default Footer;