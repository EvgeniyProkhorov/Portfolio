import React from "react";
import css from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import {Title} from "../common/components/title/Title";


const MyWorks = () => {
    return (
        <div className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.myWorksContainer}`}>
                <Title title={"My Works"}/>
                <div className={css.projects}>
                    <Project projectTitle={'Social Network'}
                             description={"Project on Typescript/React/Redux"}/>
                    <Project projectTitle={'Todo List'}
                             description={"Project on Typescript/React/Redux"}/>
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