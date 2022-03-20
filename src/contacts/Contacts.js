import React from "react";
import css from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Form from "./Form/Form";
import {Title} from "../common/components/title/Title";


const Contacts = () => {
    return (
        <div className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.container}`}>
                <Title title={'Contacts'}/>
                <Form/>
                <button className={css.submitButton}>Submit</button>
            </div>
        </div>
    )
}

export default Contacts;