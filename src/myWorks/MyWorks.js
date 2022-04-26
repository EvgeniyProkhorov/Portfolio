import React from "react";
import css from './MyWorks.module.scss';
import {motion} from 'framer-motion';
import {Project} from "./Project/Project";
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
                        variants={textAnimation}
                        viewport={{amount: 0.1, once: true}}
                />
                <motion.div className={css.projects}
                            initial='hidden'
                            whileInView='visible'
                            custom={3}
                            variants={blockAnimation}
                            viewport={{amount: 0.1, once: true}}
                >
                    <Project style={social}
                             projectTitle={'Social Network'}
                             description={"Project on Typescript/React/Redux"}
                             duration={0.5}
                    />
                    <Project style={todo}
                             projectTitle={'Todo List'}
                             description={"Project on Typescript/React/Redux Project on Typescript/React/Redux\""}
                             duration={1}

                    />
                    <Project projectTitle={'React Pizza'}
                             description={"Project on Typescript/React/Redux"}
                             duration={1.5}

                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default MyWorks;