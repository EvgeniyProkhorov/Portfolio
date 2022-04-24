import React from "react";
import css from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import scssIcon from '../assets/skillIcons/sass500.png'
import jsIcon from '../assets/skillIcons/javascript500.png'
import tsIcon from '../assets/skillIcons/typescript500.png'
import reactIcon from '../assets/skillIcons/react500.png'
import reduxIcon from '../assets/skillIcons/redux500.png'
import storyIcon from '../assets/skillIcons/storybook500.png'
import htmlIcon from '../assets/skillIcons/html5-500.png'
import css3Icon from '../assets/skillIcons/css3-500.png'
import muiIcon from '../assets/skillIcons/material-ui500.png'
import apiIcon from '../assets/skillIcons/rest-api500.png'


const Skills = () => {
    return (
        <div className={css.skillsBlock}>
            <div className={css.container}>
                <Title title={"My Skills"}/>
                <div className={css.skills}>
                    <Skill title={"JS"}
                           img={jsIcon}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill title={"TS"}
                           img={tsIcon}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill title={"React"}
                           img={reactIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"Redux"}
                           img={reduxIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"StoryBook"}
                           img={storyIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"Html"}
                           img={htmlIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"CSS"}
                           img={css3Icon}
                           description={"Vivamus mollis sed massa id tincidunt."}/>
                    <Skill title={"SCSS"}
                           img={scssIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"Rest API"}
                           img={apiIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                    <Skill title={"MUI"}
                           img={muiIcon}
                           description={"Nunc tempor pretium ante, sit amet aliquet tellus sagittis ac."}/>
                </div>
            </div>

        </div>
    )
}

export default Skills;