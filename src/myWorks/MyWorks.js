import React from "react";
import css from './MyWorks.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import {Title} from "../common/components/title/Title";
import socialNet from "../assets/images/2_Building-Application-with-React-JS.png"
import todoList from "../assets/images/Todo-List-board.jpeg"


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
        <div className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.myWorksContainer}`}>
                <Title title={"My Works"}/>
                <div className={css.projects}>
                    <Project style={social}
                             projectTitle={'Social Network'}
                             description={"Project on Typescript/React/Redux"}/>
                    <Project style={todo}
                             projectTitle={'Todo List'}
                             description={"Project on Typescript/React/Redux Project on Typescript/React/Redux\""}/>
                    <Project projectTitle={'React Pizza'}
                             description={"Project on Typescript/React/Redux"}/>
                    <Project projectTitle={'Example 1'}
                             description={"Project on Typescript/React/Redux"}/>
                    <Project projectTitle={'Example 2'}
                             description={"Project on Typescript/React/Redux"}/>
                    {/*<Project projectTitle={'Example 3'}*/}
                    {/*         description={"Project on Typescript/React/Redux"}/>*/}
                    {/*<Project projectTitle={'Example 4'}*/}
                    {/*         description={"Project on Typescript/React/Redux"}/>*/}
                </div>
            </div>
        </div>
    )
}

export default MyWorks;