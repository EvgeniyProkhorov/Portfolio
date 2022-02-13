import React from "react";
import css from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";


const MyWorks = () => {
    return (
        <div className={css.worksBlock}>
            <div className={`${styleContainer.container} ${css.myWorksContainer}`}>
                <h2 className={css.blockTitle}>My Works</h2>
                <div className={css.projects}>
                    <Project projectTitle={'Social Network'}
                             description={"Project on Typescript/React/Redux"}/>
                    <Project projectTitle={'Todo List'}
                             description={"Project on Typescript/React/Redux"}/>
                    <Project projectTitle={'React Pizza'}
                             description={"Project on Typescript/React/Redux"}/>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;