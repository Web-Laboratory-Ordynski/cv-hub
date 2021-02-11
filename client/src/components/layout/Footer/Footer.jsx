import React from 'react'
import s from './footer.module.css'

export const Footer = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contactsBlock}>
                <h1>Контакти</h1>

                <div className={s.phoneAndMail}>
                    <h4>CV-HUB</h4>
                    <p>+380 (67) 504-15-98</p>
                    <p className={s.mail}>example@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
