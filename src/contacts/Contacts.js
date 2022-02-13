import React from "react";
import css from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Form from "./Form/Form";


const Contacts = () => {
    return (
        <div className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.container}`}>
                <h2 className={css.headerTitle}>Contacts</h2>
                <Form/>
                <button className={css.submitButton}>Submit</button>
            </div>
        </div>
    )
}

export default Contacts;