import React from "react";
import css from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={css.skillsBlock}>
            <div className={`${styleContainer.container} ${css.skillsContainer}`}>
                <h2 className={css.title}>My skills</h2>
                <div className={css.skills}>
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill title={"CSS"}
                           description={"Vivamus mollis sed massa id tincidunt."}/>
                    <Skill title={"React"}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                </div>
            </div>

        </div>
    )
}

export default Skills;