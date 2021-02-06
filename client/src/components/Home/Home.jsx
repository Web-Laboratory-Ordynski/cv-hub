import React from 'react'
import { Human } from './Human'
import s from './home.module.css'


export const Home = () => {
    return (
        <div>
            <div className={s.header__conteiner}>
                <h1>
                    СОЗДАЙ РЕЗЮМЕ <br/>ДЛЯ ПОИСКА РАБОТЫ <br/>В ОНЛАЙН КОНСТРУКТОРЕ
                </h1>
                <Human />
            </div>
        </div>
    )
}
