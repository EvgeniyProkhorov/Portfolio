import React from "react";
import css from './Skills.module.scss';
import {motion} from 'framer-motion';
import {MSkill} from "./skill/Skill";
import {MTitle} from "../common/components/title/Title";
import jsIcon from '../assets/skillIcons/javascript500.png';
import tsIcon from '../assets/skillIcons/typescript500.png';
import reactIcon from '../assets/skillIcons/react500.png';
import reduxIcon from '../assets/skillIcons/redux500.png';
import storyIcon from '../assets/skillIcons/storybook500.png';
import htmlIcon from '../assets/skillIcons/html5-500.png';
import css3Icon from '../assets/skillIcons/css3-500.png';
import scssIcon from '../assets/skillIcons/sass500.png';
import apiIcon from '../assets/skillIcons/rest-api500.png';
import muiIcon from '../assets/skillIcons/material-ui500.png';

const skills = [
    {
        title: 'JavaScript',
        img: jsIcon
    },
    {
        title: 'TypeScript',
        img: tsIcon
    },
    {
        title: 'React',
        img: reactIcon
    },
    {
        title: 'Redux',
        img: reduxIcon
    },
    {
        title: 'StoryBook',
        img: storyIcon
    },
    {
        title: 'HTML',
        img: htmlIcon
    },
    {
        title: 'CSS',
        img: css3Icon
    },
    {
        title: 'SCSS',
        img: scssIcon
    },
    {
        title: 'Rest API',
        img: apiIcon
    },
    {
        title: 'MUI',
        img: muiIcon
    },
]

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

const skillAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        // transition: {delay: custom * 0.1}
        // transition: {duration: (custom + 1) * 0.2}
        transition: {duration: (custom / 10) + 0.4}

    })
}


const Skills = () => {
    return (
        <motion.div className={css.skillsBlock}
                    initial='hidden'
                    whileInView='visible'
                    custom={0.9}
                    variants={blockAnimation}
                    viewport={{amount: 'some', once: true}}
        >
            <div className={css.container}>
                <MTitle title={"My Skills"}
                        initial='hidden'
                        whileInView='visible'
                        custom={0.9}
                        variants={textAnimation}
                        viewport={{amount: 0.1, once: true}}
                />
                <motion.div className={css.skills}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.3, once: true}}>
                    {skills.map((el, index) => {
                        return <MSkill key={`${index}_A`}
                                       title={el.title}
                                       img={el.img}
                                       initial='hidden'
                                       whileInView='visible'
                                       custom={index === 0 ? 0.8 : index}
                                       variants={skillAnimation}
                                       viewport={{amount: 0.2, once: true}}
                        />
                    })}
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Skills;