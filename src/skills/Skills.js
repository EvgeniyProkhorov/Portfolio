import React from "react";
import css from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";


const Skills = () => {
    return (
        <div className={css.skillsBlock}>
            <div className={css.container}>
                <Title title={"My Skills"}/>
                <div className={css.skills}>
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill title={"CSS"}
                           description={"Vivamus mollis sed massa id tincidunt."}/>
                    <Skill title={"React"}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"Html"}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"Angular"}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"Vue"}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                </div>
            </div>

        </div>
    )
}

export default Skills;