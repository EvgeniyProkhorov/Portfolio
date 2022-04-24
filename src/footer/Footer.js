import React from "react";
import css from './Footer.module.scss'
import linkedinIcon from '../assets/contactsIcons/linkedin500.png'
import telegramIcon from '../assets/contactsIcons/telegram500.png'
import gitHubIcon from '../assets/contactsIcons/github500.png'

const telegram = 'https://t.me/EvgenFrontEnd'
const gitHub = 'https://github.com/EvgeniyProkhorov'


const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.container}>
                <h2 className={css.title}>Evgeniy Prokhorov</h2>
                <div className={css.socialIcons}>
                    <a target={'_blank'} href={''}><img className={css.socialIcon} src={linkedinIcon} alt={'LinkedIn'}/></a>
                    <a target={'_blank'} href={telegram}><img className={css.socialIcon} src={telegramIcon} alt={'Telegram'}/></a>
                    <a target={'_blank'} href={gitHub}><img className={css.socialIcon} src={gitHubIcon} alt={'GitHub'}/></a>
                </div>
                <span className={css.title}> 2022 copyright</span>
            </div>
        </div>
    )
}

export default Footer;