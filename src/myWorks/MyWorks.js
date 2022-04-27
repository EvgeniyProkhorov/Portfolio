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
                    custom={0.9}
                    variants={blockAnimation}
                    viewport={{amount: 'some', once: true}}
        >
            <div className={css.container}>
                <MTitle title={"My Works"}
                        initial='hidden'
                        whileInView='visible'
                        custom={0.9}
                        variants={textAnimation}
                        viewport={{amount: 0.1, once: true}}
                />
                <div className={css.projects}>
                    <Project style={social}
                             projectTitle={'Social Network'}
                             description={"Project on Typescript/React/Redux"}
                             duration={0.9}
                    />
                    <Project style={todo}
                             projectTitle={'Todo List'}
                             description={"Project on Typescript/React/Redux Project on Typescript/React/Redux\""}
                             duration={1.3}

                    />
                    <Project projectTitle={'Cards App'}
                             description={"Project on Typescript/React/Redux"}
                             duration={1.7}

                    />
                </div>
            </div>
        </motion.div>
    )
}

export default MyWorks;