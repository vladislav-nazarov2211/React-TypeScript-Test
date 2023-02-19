import add from './../../img/main/add.png'
import map from './../../img/main/map.png'
import group from './../../img/main/group.png'
import frame from './../../img/main/frame.png'
import circleGraph from './../../img/main/circleGraph.png'
import styles from './Main.module.css'
import headerStyles from './../HeaderStyles/Header.module.css'
import settings from './../../img/main/settings.png'
import { NavLink } from 'react-router-dom'
import graph from './../../img/main/graph.png'


export const Main = () => {
    return (
        <section className={styles.main}>
            <header className={headerStyles.header}>
                <h2 className={headerStyles.header__title}>ИП Васильев</h2>
                <div className={headerStyles.header__icons}>
                    <NavLink to=''>
                        <img src={add} alt='add.png' />
                    </NavLink>
                    <NavLink to=''>
                        <img src={settings} alt='add.png' />
                    </NavLink>
                </div>
            </header>
            
            <div className={styles.content}>
                <div className={`${styles.col2} ${styles.content__item}`}>
                    <h3 className={styles.content__itemTitle}>Работа с полями</h3> 
                    <div className={styles.imageGroup}>
                        <img src={group} alt='group.png' />
                    </div>
                </div>

                <div className={`${styles.col2} ${styles.content__item}`}>
                    <h3 className={styles.content__itemTitle}>Статистика урожая</h3>
                    <h4 className={styles.content__itemSubtitle}>Поволжье</h4>
                    <div className={styles.imageMap}>
                        <img src={map} alt='map.png' />
                    </div>
                </div>

                <div className={`${styles.col2} ${styles.content__item}`}>
                    <h3 className={styles.content__itemTitle}>Погода в курской области</h3>
                    
                    <div className={styles.weatherWrapper}>
                        <div className={styles.date}>
                            28.08.2020
                            <p>Среда</p>
                        </div>
                        <div className={styles.weather}>
                            +28<span>&#8451;</span>
                        </div>
                    </div>
                    <div className={styles.pressureWrapper}>
                        <div className={styles.pressure}>
                            750 мм рт. ст.
                            <p>3,5 м/c</p>
                        </div>
                        <div className={styles.precipitation}>
                            Солнечно
                            <p>Осадки 7%</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.col4} ${styles.content__item}`}>
                    <h3 className={styles.content__itemTitle}>Отчеты и статистика</h3>
            
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.tHead}>2020 год</th>
                                    <th className={styles.tHead}>2019 год</th>
                                    <th className={styles.tHead}>2018 год</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th className={styles.tBodyBorder}>123 000 000</th>
                                    <th className={styles.tBodyBorder}>90 568 668</th>
                                    <th className={styles.tBodyWithoutBorder}>200 568 668</th>
                                </tr>
                                <tr>
                                    <th className={styles.tBodyBorder}>123 587 569</th>
                                    <th className={styles.tBodyBorder}>123 587 569</th>
                                    <th className={styles.tBodyWithoutBorder}>123 587 569</th>
                                </tr>
                                <tr>
                                    <th className={styles.tBodyBorder}>258 654 588</th>
                                    <th className={styles.tBodyBorder}>258 654 588</th>
                                    <th className={styles.tBodyWithoutBorder}>258 654 588</th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.imageGraph}>
                            <img src={graph} alt='graph.png' />
                        </div>
                    </div>
                </div>

                <div className={`${styles.col2} ${styles.content__item}`}>
                    <h3 className={styles.content__itemTitle}>Погода в курской области</h3>
                    
                    <div className={styles.staffWrapper}>
                        <div className={styles.staff}>
                            Иванов Иван Иванович
                            <p>Заместитель</p>
                        </div>
                        <div className={styles.staffIcons}>
                            <NavLink to=''>
                                <svg width="16" height="16" viewBox="0 0 16 16" className={styles.staffIcon} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5802 12.3426L12.3417 10.1829C11.9307 9.91104 11.3798 10.0005 11.076 10.3885L10.1327 11.6013C10.0114 11.7612 9.79107 11.8076 9.61569 11.7101L9.43625 11.6112C8.8414 11.287 8.10126 10.8833 6.61001 9.39155C5.11876 7.89977 4.71429 7.15907 4.39006 6.56531L4.29167 6.38587C4.1929 6.21052 4.23839 5.98921 4.39831 5.86701L5.61038 4.92396C5.9982 4.6201 6.08778 4.06937 5.81622 3.65827L3.65654 0.419815C3.37824 0.00118918 2.81989 -0.12448 2.38904 0.134513L1.03484 0.947987C0.609337 1.19814 0.297165 1.60326 0.163778 2.07848C-0.323868 3.85528 0.0429834 6.92176 4.56019 11.4395C8.15353 15.0326 10.8286 15.9988 12.6673 15.9988C13.0904 16.0006 13.5119 15.9456 13.9204 15.8351C14.3957 15.7019 14.8009 15.3897 15.0509 14.9641L15.8652 13.6107C16.1246 13.1797 15.999 12.621 15.5802 12.3426ZM15.4058 13.3371L14.5934 14.6913C14.4139 14.9985 14.1224 15.2244 13.7801 15.3216C12.1399 15.7719 9.27415 15.3989 4.93745 11.0622C0.600745 6.72554 0.227769 3.86009 0.678108 2.21955C0.775469 1.87685 1.00162 1.58505 1.3092 1.40526L2.66341 0.592852C2.85035 0.480368 3.09269 0.534891 3.21345 0.716552L4.38662 2.47789L5.37129 3.95473C5.48921 4.13305 5.45047 4.37204 5.28224 4.50399L4.06989 5.44704C3.70094 5.72915 3.59558 6.23961 3.82274 6.64474L3.919 6.81965C4.25977 7.44462 4.68342 8.2221 6.23013 9.76856C7.77684 11.315 8.55407 11.7387 9.17876 12.0794L9.35392 12.1759C9.75902 12.403 10.2695 12.2977 10.5516 11.9288L11.4947 10.7164C11.6266 10.5483 11.8655 10.5096 12.0439 10.6274L15.2821 12.787C15.4639 12.9077 15.5184 13.1502 15.4058 13.3371Z" />
                                </svg>
                            </NavLink>
                            <NavLink to=''>
                                <svg width="19" height="13" viewBox="0 0 19 13" className={styles.staffIcon} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4429 0H1.2429C0.745837 0 0.342899 0.415729 0.342899 0.928571V12.0714C0.342337 12.2665 0.402112 12.4567 0.513599 12.6143C0.682574 12.8563 0.953887 12.9997 1.2429 13H17.4429C17.7315 12.9998 18.0025 12.8568 18.1716 12.6156C18.2833 12.4576 18.3434 12.267 18.3429 12.0714V0.928571C18.3429 0.415729 17.94 0 17.4429 0ZM0.942899 11.8941V2.03543L7.1274 6.96429L0.942899 11.8941ZM1.3134 12.381L7.6179 7.35552L8.793 8.29152C9.11696 8.54951 9.56883 8.54951 9.8928 8.29152L11.0679 7.35552L17.3724 12.381H1.3134ZM17.7429 11.8941L11.5584 6.96429L17.7429 2.03543V11.8941ZM17.7429 1.25326L9.5262 7.80155C9.4182 7.88756 9.2676 7.88756 9.1596 7.80155L0.942899 1.25326V0.928571C0.942899 0.757637 1.07722 0.619048 1.2429 0.619048H17.4429C17.6086 0.619048 17.7429 0.757637 17.7429 0.928571V1.25326Z" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.staffWrapper}>
                        <div className={styles.staff}>
                            Константинов Иван Иванович
                            <p>Секретарь</p>
                        </div>
                        <div className={styles.staffIcons}>
                            <NavLink to=''>
                                <svg width="16" height="16" viewBox="0 0 16 16" className={styles.staffIcon} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5802 12.3426L12.3417 10.1829C11.9307 9.91104 11.3798 10.0005 11.076 10.3885L10.1327 11.6013C10.0114 11.7612 9.79107 11.8076 9.61569 11.7101L9.43625 11.6112C8.8414 11.287 8.10126 10.8833 6.61001 9.39155C5.11876 7.89977 4.71429 7.15907 4.39006 6.56531L4.29167 6.38587C4.1929 6.21052 4.23839 5.98921 4.39831 5.86701L5.61038 4.92396C5.9982 4.6201 6.08778 4.06937 5.81622 3.65827L3.65654 0.419815C3.37824 0.00118918 2.81989 -0.12448 2.38904 0.134513L1.03484 0.947987C0.609337 1.19814 0.297165 1.60326 0.163778 2.07848C-0.323868 3.85528 0.0429834 6.92176 4.56019 11.4395C8.15353 15.0326 10.8286 15.9988 12.6673 15.9988C13.0904 16.0006 13.5119 15.9456 13.9204 15.8351C14.3957 15.7019 14.8009 15.3897 15.0509 14.9641L15.8652 13.6107C16.1246 13.1797 15.999 12.621 15.5802 12.3426ZM15.4058 13.3371L14.5934 14.6913C14.4139 14.9985 14.1224 15.2244 13.7801 15.3216C12.1399 15.7719 9.27415 15.3989 4.93745 11.0622C0.600745 6.72554 0.227769 3.86009 0.678108 2.21955C0.775469 1.87685 1.00162 1.58505 1.3092 1.40526L2.66341 0.592852C2.85035 0.480368 3.09269 0.534891 3.21345 0.716552L4.38662 2.47789L5.37129 3.95473C5.48921 4.13305 5.45047 4.37204 5.28224 4.50399L4.06989 5.44704C3.70094 5.72915 3.59558 6.23961 3.82274 6.64474L3.919 6.81965C4.25977 7.44462 4.68342 8.2221 6.23013 9.76856C7.77684 11.315 8.55407 11.7387 9.17876 12.0794L9.35392 12.1759C9.75902 12.403 10.2695 12.2977 10.5516 11.9288L11.4947 10.7164C11.6266 10.5483 11.8655 10.5096 12.0439 10.6274L15.2821 12.787C15.4639 12.9077 15.5184 13.1502 15.4058 13.3371Z" />
                                </svg>
                            </NavLink>
                            <NavLink to=''>
                                <svg width="19" height="13" viewBox="0 0 19 13" className={styles.staffIcon} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4429 0H1.2429C0.745837 0 0.342899 0.415729 0.342899 0.928571V12.0714C0.342337 12.2665 0.402112 12.4567 0.513599 12.6143C0.682574 12.8563 0.953887 12.9997 1.2429 13H17.4429C17.7315 12.9998 18.0025 12.8568 18.1716 12.6156C18.2833 12.4576 18.3434 12.267 18.3429 12.0714V0.928571C18.3429 0.415729 17.94 0 17.4429 0ZM0.942899 11.8941V2.03543L7.1274 6.96429L0.942899 11.8941ZM1.3134 12.381L7.6179 7.35552L8.793 8.29152C9.11696 8.54951 9.56883 8.54951 9.8928 8.29152L11.0679 7.35552L17.3724 12.381H1.3134ZM17.7429 11.8941L11.5584 6.96429L17.7429 2.03543V11.8941ZM17.7429 1.25326L9.5262 7.80155C9.4182 7.88756 9.2676 7.88756 9.1596 7.80155L0.942899 1.25326V0.928571C0.942899 0.757637 1.07722 0.619048 1.2429 0.619048H17.4429C17.6086 0.619048 17.7429 0.757637 17.7429 0.928571V1.25326Z" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button className={styles.btnBlueColor}>Показать еще:</button>
                    </div>
                </div>

                <div className={`${styles.col3} ${styles.content__item}`}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.content__itemTitle}>Статистика пшена на полях ЦАО</h3>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.btnBlueColor}>По годам</button>
                            <svg width="17" height="9" viewBox="0 0 17 9" className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.865222 0.498883C1.1074 0.254716 1.50166 0.253103 1.74582 0.49528L8.92971 7.62063C9.17387 7.8628 9.17549 8.25706 8.93331 8.50123C8.69113 8.7454 8.29687 8.74701 8.05271 8.50483L0.868824 1.37949C0.624658 1.13731 0.623045 0.743049 0.865222 0.498883Z" />
                                <path d="M16.162 0.498883C15.9198 0.254716 15.5256 0.253103 15.2814 0.49528L8.09752 7.62063C7.85335 7.8628 7.85174 8.25706 8.09392 8.50123C8.33609 8.7454 8.73035 8.74701 8.97452 8.50483L16.1584 1.37949C16.4026 1.13731 16.4042 0.743049 16.162 0.498883Z" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className={styles.statistikWrapper}> 
                        <div className={styles.statistic}>
                            <div className={styles.statistic__title}>
                                <span className={styles.statistic__iconBefore}>Урожай 2020</span>
                                <p>15 150 000 тонн</p>
                                <p>120 областей</p>
                            </div>
                            <div className={styles.statistic__title}>
                                <span className={`${styles.statistic__iconBefore} ${styles.violet}`}>Урожай 2019</span>
                                <p>102 650 980 тонн</p>
                                <p>250 областей</p>
                            </div>
                            
                        </div>
                        <div className={styles.circleGraph}>
                            <img src={circleGraph} alt='circleGraph.png' />    
                        </div>
                    </div>
                </div>

                <div className={`${styles.col3} ${styles.content__item}`}>
                    <h3 className={styles.content__itemTitle}>Арендуемая техника</h3>
        
                    <div className={styles.statistikWrapper}> 
                        <div className={styles.statistic}>
                            <div className={styles.statistic__subTitle}>
                                ООО "Магнат Мед"
                            </div>
                            <div className={styles.statistic__title}>
                                <span className={styles.statistic__iconBefore}>Экскаваторы 2020</span>
                                <p>15 100 машин</p>
                                <p>130 областей</p>
                                <p>5 предприятий</p>
                            </div>
                            
                            <div className={styles.btnWrapper}>
                                <button className={styles.btnBlueColor}>Добавить технику:</button>
                            </div>   
                        </div>
                        <div className={styles.frame}>
                            <svg width="16" height="16" viewBox="0 0 16 16" className={styles.star} xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2356 5.86455L10.6244 5.16017L8.55751 0.757671C8.40313 0.428921 7.86376 0.428921 7.70938 0.757671L5.64313 5.16017L1.03189 5.86455C0.653135 5.92267 0.501885 6.3833 0.76751 6.65517L4.11751 10.0889L3.32564 14.9433C3.26251 15.3289 3.67438 15.6183 4.01501 15.4289L8.13376 13.1527L12.2525 15.4295C12.59 15.617 13.0056 15.3333 12.9419 14.9439L12.15 10.0895L15.5 6.6558C15.7656 6.3833 15.6138 5.92267 15.2356 5.86455Z" fill="#43E8FF"/>
                            </svg>
                            <img src={frame} className={styles.frameImage} alt='frame.png' />
                            <div className={styles.frameLine}></div>    
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}