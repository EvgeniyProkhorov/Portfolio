import React from "react";
import css from './MyWorks.module.scss';
import {motion} from 'framer-motion';
import Project, {MProject} from "./Project/Project";
import {MTitle} from "../common/components/title/Title";
import socialNet from "../assets/images/2_Building-Application-with-React-JS.png";
import todoList from "../assets/images/Todo-List-board.jpeg";

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
        transition: custom
    })
}

const projectAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        // transition: {delay: custom * 0.1}
        transition: {duration: (custom + 2) * 0.2}

    })
}

const MyWorks = () => {
    const social = {
        backgroundImage: `url(${socialNet})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    const todo = {
        backgroundImage: `url(${todoList})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    }

    return (
        <motion.div className={css.worksBlock}
                    initial='hidden'
                    whileInView='visible'
                    custom={1}
                    variants={blockAnimation}
                    viewport={{amount: 0.1, once: true}}
        >
            <div className={css.container}>
                <MTitle title={"My Works"}
                        initial='hidden'
                        whileInView='visible'
                        custom={2}
                        variants={projectAnimation}
                        viewport={{amount: 0.1, once: true}}
                />
                <div className={css.projects}>
                    <MProject style={social}
                             projectTitle={'Social Network'}
                             description={"Project on Typescript/React/Redux"}
                              initial='hidden'
                              whileInView='visible'
                              custom={2}
                              variants={textAnimation}
                              viewport={{amount: 0.2, once: true}}
                    />
                    <MProject style={todo}
                             projectTitle={'Todo List'}
                             description={"Project on Typescript/React/Redux Project on Typescript/React/Redux\""}/>
                    <MProject projectTitle={'React Pizza'}
                             description={"Project on Typescript/React/Redux"}/>
                </div>
            </div>
        </motion.div>
    )
}

export default MyWorks;