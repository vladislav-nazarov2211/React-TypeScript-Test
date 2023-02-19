import { useState } from "react"
import { NavLink } from "react-router-dom"
import { OrganizationsType } from './../../types/types'
import headerStyles from './../HeaderStyles/Header.module.css'
import styles from './Organizations.module.css'
import add from './../../img/main/add.png'
import graphRed from './../../img/organizations/graphRed.png'
import graphBlue from './../../img/organizations/graphBlue.png'
import graphCyan from './../../img/organizations/graphCyan.png'
import settings from './../../img/main/settings.png'
import { OrgTable } from "./OrgTable"


export const Organizations = () => {

    const [organizations, setOrganizations] = useState<Array<OrganizationsType>>([
        {id: 1, img: graphRed, name: 'Фонд "Сколково"', number: 7706412961, director: 'Балега Юрий Юрьевич', adress: 'обл. Московская, г. Одинцово, д. Сколково, ул. Новая, 100'},
        {id: 2, img: graphRed, name: 'АНО "Издательство РАМН"', number: 7709202761, director: 'Султыгов Марат Магомедович', adress: 'г. Москва, Переулок Яковоапостольский, д. 11-13, стр. 1, пом. 1'},
        {id: 3, img: graphRed, name: 'Российское историческое об...', number: 7704280029, director: 'Иванов  Петр Иванович', adress: 'г. Москва, ул. Воронцово поле, д. 13, стр 1'},
        {id: 4, img: graphRed, name: 'Академический учебно-науч...', number: 7704274804, director: 'Иванов  Иван Николаевич', adress: 'г. Москва, переулок Борисоглебский, д. 13, 3'},
        {id: 5, img: graphRed, name: 'ЦИПБ РАН', number: 7728514244, director: 'Петров  Иван Федорович', adress: 'г. Москва, ул. Гарибальди, д. 21Б'},
        {id: 6, img: graphBlue, name: 'ООО “Прибор -ресурс”', number: 7743226441, director: 'Кудряшов  Борис  Андреевич', adress: 'г. Москва, просп. Ленинградский, д. 77, кор. 1, под пом VIII К 7'},
        {id: 7, img: graphBlue, name: 'ООО “Прибор -ресурс”', number: 7743226441, director: 'Сергеев Александр Михайлоич', adress: 'г. Москва, просп. Ленинградский, д. 77, кор. 1, под пом VIII К 7'},
        {id: 8, img: graphBlue, name: 'ООО “Прибор -ресурс”', number: 7743226441, director: 'Балега Юрий Юрьевич', adress: 'г. Москва, просп. Ленинградский, д. 77, кор. 1, под пом VIII К 7'},
        {id: 9, img: graphBlue, name: 'Фонд "Сколково"', number: 7706412961, director: 'Султыгов Марат Магомедович', adress: 'обл. Московская, г. Одинцово, д. Сколково, ул. Новая, 100'},
        {id: 10, img: graphBlue, name: 'АНО "Издательство РАМН"', number: 7709202761, director: 'Иванов  Петр Иванович', adress: 'г. Москва, Переулок Яковоапостольский, д. 11-13, стр. 1, пом. 1'},
        {id: 11, img: graphCyan, name: 'Российское историческое об...', number: 7704280029, director: 'Иванов  Иван Николаевич', adress: 'г. Москва, ул. Воронцово поле, д. 13, стр 1'},
        {id: 12, img: graphCyan, name: 'Академический учебно-науч...', number: 7704274804, director: 'Балега Юрий Юрьевич', adress: 'г. Москва, переулок Борисоглебский, д. 13, 3'},
        {id: 13, img: graphCyan, name: 'ЦИПБ РАН', number: 7728514244, director: 'Султыгов Марат Магомедович', adress: 'г. Москва, ул. Гарибальди, д. 21Б'},
        {id: 14, img: graphCyan, name: 'ООО “Прибор -ресурс”', number: 7743226441, director: 'Султыгов Марат Магомедович', adress: 'г. Москва, просп. Ленинградский, д. 77, кор. 1, под пом VIII К 7'},
    ])
    
    return (
        <section className={styles.organizations}>
            <header className={headerStyles.header}>
                <div className={headerStyles.header__titleWrapper}>
                    <h2 className={headerStyles.header__title}>Организации</h2>
                </div>
                
                <div className={headerStyles.header__icons}>
                    <div className={styles.header__input}>
                        <input placeholder='Поиск организации по ИНН или ОГРН' /> 
                        <svg width="13" height="16" viewBox="0 0 13 16" className={styles.inputSVG} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9664 0.133645C12.9431 0.0931701 12.9087 0.0594165 12.867 0.0359082C12.8252 0.0123999 12.7776 -1.0422e-06 12.7292 0H0.270839C0.222358 -1.05976e-06 0.174765 0.0123981 0.133029 0.0359031C0.0912927 0.0594082 0.0569431 0.0931573 0.0335657 0.133628C0.0101884 0.174098 -0.00135953 0.219806 0.000127446 0.26598C0.00161442 0.312153 0.0160817 0.357101 0.0420192 0.396129L5.14583 8.07484V14.1935C5.14583 14.2336 5.15562 14.2731 5.17443 14.309C5.19323 14.3448 5.22053 14.376 5.25417 14.4L7.42083 15.9484C7.46107 15.9771 7.50892 15.9947 7.55901 15.999C7.6091 16.0033 7.65947 15.9942 7.70445 15.9728C7.74944 15.9513 7.78727 15.9184 7.81372 15.8776C7.84016 15.8368 7.85417 15.7899 7.85417 15.7419V8.07484L12.958 0.396129C12.9839 0.357103 12.9984 0.31216 12.9999 0.26599C13.0014 0.219819 12.9898 0.174114 12.9664 0.133645ZM7.35451 7.86194C7.32707 7.90324 7.3125 7.95112 7.3125 8V15.2258L5.6875 14.0645V8C5.6875 7.95112 5.67293 7.90324 5.64549 7.86194L0.762943 0.516129H12.2371L7.35451 7.86194Z" fill="white"/>
                        </svg>
                    </div>
                    <div className={headerStyles.header__btn}>
                        <button className={headerStyles.btnWhiteColor}>Найти</button>
                    </div>
                    <NavLink to=''>
                        <img src={add} alt='add.png' />
                    </NavLink>
                    <NavLink to=''>
                        <img src={settings} alt='add.png' />
                    </NavLink>
                </div>
            </header>

            <div className={styles.content}>
                <div className={styles.tbodyWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tHead1}>Наименование организации</th>
                                <th className={styles.tHead2}>ИНН</th>
                                <th className={styles.tHead3}>Руководитель</th>
                                <th className={styles.tHead4}>Адрес</th>
                                <th className={styles.tHead5}></th>
                            </tr>
                        </thead>

                        <tbody className={styles.tbody}>
                            {organizations.map((item: OrganizationsType) => {
                                return <OrgTable key={item.id} item={item} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>            
        </section>    
    )
}
