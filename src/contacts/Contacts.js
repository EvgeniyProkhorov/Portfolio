import React from "react";
import css from './Contacts.module.scss'
import Form from "./Form/Form";
import {Title} from "../common/components/title/Title";


const Contacts = () => {
    return (
        <div className={css.contactsBlock}>
            <div className={`${css.container} ${css.container}`}>
                <Title title={'Contacts'}/>
                <Form/>
                <button className={css.submitButton}>Submit</button>
            </div>
        </div>
    )
}

export default Contacts;