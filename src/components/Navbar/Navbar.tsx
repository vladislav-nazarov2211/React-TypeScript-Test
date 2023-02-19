import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__header}>
                <li>
                    <NavLink to='/main' className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="18" height="18" viewBox="0 0 18 18" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4288 7.90363L9.41951 0.170579C9.18619 -0.0568596 8.81404 -0.0568596 8.58072 0.170579L0.571694 7.90333C0.453785 8.01712 0.387207 8.17394 0.387207 8.33782C0.387207 8.67135 0.657597 8.94171 0.991092 8.94171H2.05544V17.3961C2.05544 17.7296 2.32579 18 2.65932 18H6.88652C7.22005 18 7.4904 17.7296 7.4904 17.3961V12.565H10.5098V17.3961C10.5098 17.7296 10.7802 18 11.1137 18H15.3409C15.6744 18 15.9448 17.7296 15.9448 17.3961V8.94171H17.0091C17.1729 8.94171 17.3295 8.87524 17.4433 8.75752C17.6751 8.5177 17.6686 8.13541 17.4288 7.90363ZM15.9448 8.33782C15.6113 8.33782 15.3409 8.60817 15.3409 8.94171V17.3961H11.1137V12.565C11.1137 12.2315 10.8434 11.9611 10.5098 11.9611H7.4904C7.15687 11.9611 6.88652 12.2315 6.88652 12.565V17.3961H2.65932V8.94171C2.65932 8.60817 2.38897 8.33782 2.05544 8.33782H0.991092L9.00012 0.605074L17.0122 8.33782H15.9448Z"/>
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Главная
                        </div>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/profile' className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="17" height="18" viewBox="0 0 17 18" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 0.611084C3.8131 0.611084 0 4.42418 0 9.11108C0 11.1638 0.731567 13.0489 1.94763 14.5194C1.95075 14.5236 1.95103 14.529 1.95443 14.533C2.83248 15.5918 3.93522 16.4035 5.16403 16.928C5.1782 16.9339 5.19208 16.9404 5.20625 16.9464C5.3057 16.9883 5.40628 17.0271 5.50715 17.0651C5.54682 17.0801 5.58648 17.0954 5.62672 17.1099C5.7137 17.141 5.80125 17.1705 5.88937 17.1988C5.94575 17.217 6.00213 17.2348 6.05908 17.2518C6.137 17.275 6.2152 17.2974 6.29397 17.3187C6.3631 17.3374 6.4328 17.3547 6.5025 17.3714C6.57305 17.3884 6.64388 17.4054 6.715 17.4204C6.79433 17.4374 6.87452 17.4524 6.95498 17.4672C7.01958 17.4791 7.0839 17.4915 7.14907 17.502C7.23832 17.5165 7.32813 17.5278 7.41823 17.5394C7.47632 17.5468 7.53412 17.5553 7.59248 17.5615C7.69448 17.5723 7.79733 17.5799 7.90047 17.587C7.94835 17.5904 7.99595 17.5955 8.04412 17.5981C8.19457 17.6066 8.34672 17.6111 8.5 17.6111C8.65328 17.6111 8.80543 17.6066 8.95645 17.5986C9.00462 17.5961 9.05222 17.591 9.1001 17.5876C9.20323 17.5802 9.30608 17.5728 9.40808 17.5621C9.46645 17.5558 9.52425 17.5473 9.58233 17.54C9.67243 17.5284 9.76225 17.517 9.8515 17.5026C9.91638 17.4921 9.98098 17.4796 10.0456 17.4677C10.1258 17.453 10.2059 17.438 10.2856 17.421C10.3567 17.4057 10.4272 17.389 10.4981 17.372C10.5678 17.3549 10.6375 17.3377 10.7066 17.3193C10.7854 17.2983 10.8636 17.2756 10.9415 17.2524C10.9984 17.2354 11.0548 17.2175 11.1112 17.1994C11.1993 17.1711 11.2869 17.1416 11.3739 17.1104C11.4138 17.096 11.4535 17.0807 11.4934 17.0657C11.5946 17.0277 11.6949 16.9886 11.7943 16.947C11.8085 16.941 11.8224 16.9345 11.8365 16.9285C13.0651 16.4041 14.1681 15.5923 15.0461 14.5335C15.0495 14.5296 15.0498 14.5239 15.0529 14.5199C16.2684 13.0489 17 11.1638 17 9.11108C17 4.42418 13.1869 0.611084 8.5 0.611084ZM11.9445 16.2568C11.9402 16.2587 11.9363 16.261 11.932 16.263C11.8309 16.3117 11.728 16.3576 11.6243 16.4024C11.6008 16.4123 11.5776 16.4225 11.554 16.4324C11.4634 16.4704 11.3716 16.5064 11.2792 16.5409C11.2407 16.5554 11.2022 16.5696 11.1633 16.5832C11.0815 16.6123 10.9993 16.6404 10.9163 16.667C10.8647 16.6835 10.8128 16.699 10.761 16.7143C10.6873 16.7364 10.6134 16.7577 10.5386 16.7775C10.4757 16.7942 10.4122 16.8095 10.3488 16.8246C10.2822 16.8404 10.2159 16.8566 10.1487 16.8707C10.0753 16.8863 10.0014 16.8996 9.92772 16.913C9.86793 16.924 9.80843 16.9356 9.74808 16.9453C9.66507 16.9583 9.5812 16.9688 9.49762 16.9792C9.44463 16.9861 9.39193 16.994 9.33838 16.9997C9.2429 17.0098 9.14657 17.0164 9.05052 17.0232C9.00773 17.026 8.96523 17.0308 8.92188 17.0331C8.78163 17.0405 8.6411 17.0444 8.5 17.0444C8.3589 17.0444 8.21837 17.0405 8.0784 17.0331C8.03533 17.0308 7.99283 17.0263 7.94977 17.0232C7.85343 17.0167 7.75738 17.0098 7.6619 16.9997C7.60835 16.994 7.55565 16.9861 7.50267 16.9792C7.41908 16.9688 7.33522 16.9583 7.2522 16.9453C7.19185 16.9356 7.13235 16.924 7.07257 16.913C6.99862 16.8996 6.92467 16.886 6.85157 16.8707C6.78442 16.8566 6.71783 16.8404 6.65153 16.8246C6.58807 16.8092 6.5246 16.7942 6.4617 16.7775C6.38718 16.7577 6.31295 16.7362 6.23928 16.7143C6.18743 16.699 6.13558 16.6835 6.08402 16.667C6.001 16.6404 5.91855 16.6123 5.83695 16.5832C5.79813 16.5693 5.7596 16.5551 5.72107 16.5409C5.6287 16.5064 5.5369 16.4704 5.44623 16.4324C5.42272 16.4228 5.39977 16.4126 5.37625 16.4027C5.27255 16.3582 5.1697 16.312 5.06827 16.2633C5.06402 16.2613 5.06005 16.2593 5.0558 16.257C4.06725 15.7788 3.19402 15.0999 2.4854 14.2754C3.03308 12.2586 4.58348 10.6329 6.57815 9.98602C6.61753 10.0101 6.65862 10.0316 6.69913 10.0543C6.72293 10.0676 6.74645 10.0818 6.77053 10.0945C6.85497 10.1393 6.94053 10.1812 7.02808 10.2189C7.09523 10.2484 7.16465 10.2733 7.23378 10.2988C7.24738 10.3036 7.26098 10.309 7.27458 10.3138C7.65878 10.4498 8.0699 10.5278 8.5 10.5278C8.9301 10.5278 9.34122 10.4498 9.72513 10.3138C9.73873 10.309 9.75233 10.3036 9.76593 10.2988C9.83507 10.2733 9.90448 10.2484 9.97163 10.2189C10.0592 10.1812 10.1447 10.1393 10.2292 10.0945C10.2533 10.0815 10.2768 10.0676 10.3006 10.0543C10.3411 10.0316 10.3825 10.0101 10.4221 9.98573C12.4168 10.6329 13.9669 12.2586 14.5149 14.2751C13.8063 15.0993 12.933 15.7782 11.9445 16.2568ZM5.38333 6.84442C5.38333 5.126 6.78158 3.72775 8.5 3.72775C10.2184 3.72775 11.6167 5.126 11.6167 6.84442C11.6167 7.93752 11.0497 8.89943 10.1955 9.4559C10.0838 9.52843 9.96767 9.59332 9.84838 9.64998C9.83422 9.65678 9.82033 9.66387 9.80617 9.67038C8.98563 10.0435 8.01437 10.0435 7.19383 9.67038C7.17967 9.66387 7.1655 9.65678 7.15162 9.64998C7.03205 9.59332 6.91617 9.52843 6.80453 9.4559C5.95028 8.89943 5.38333 7.93752 5.38333 6.84442ZM14.9399 13.7359C14.2976 11.8393 12.8322 10.3065 10.9599 9.5783C11.7087 8.90368 12.1833 7.92958 12.1833 6.84442C12.1833 4.81348 10.5309 3.16108 8.5 3.16108C6.46907 3.16108 4.81667 4.81348 4.81667 6.84442C4.81667 7.92958 5.29125 8.90368 6.04038 9.5783C4.16812 10.3068 2.70272 11.8393 2.0604 13.7359C1.12172 12.4329 0.566667 10.836 0.566667 9.11108C0.566667 4.7367 4.12562 1.17775 8.5 1.17775C12.8744 1.17775 16.4333 4.7367 16.4333 9.11108C16.4333 10.836 15.8783 12.4329 14.9399 13.7359Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Константин Константиновский
                        </div>
                    </NavLink>
                </li>
            </ul>
            
            <ul className={styles.navbar__menu}>
                <li>
                    <NavLink to='/events' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="17" height="19" viewBox="0 0 17 19" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0H5C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V2H11V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V2C14.7956 2 15.5587 2.31607 16.1213 2.87868C16.6839 3.44129 17 4.20435 17 5V16C17 16.7956 16.6839 17.5587 16.1213 18.1213C15.5587 18.6839 14.7956 19 14 19H3C2.20435 19 1.44129 18.6839 0.87868 18.1213C0.316071 17.5587 0 16.7956 0 16V5C0 4.20435 0.316071 3.44129 0.87868 2.87868C1.44129 2.31607 2.20435 2 3 2V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM12 2H13V1H12V2ZM5 2V1H4V2H5ZM3 3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H3ZM1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V7H1V16ZM9 11H14V16H9V11ZM10 12V15H13V12H10Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Мероприятия
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/staff' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="22" height="14" viewBox="0 0 22 14" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 8C14.3 8 12.43 8.34 11 9C9.57 8.33 7.7 8 6.5 8C4.33 8 0 9.08 0 11.25V14H22V11.25C22 9.08 17.67 8 15.5 8ZM11.5 12.5H1.5V11.25C1.5 10.71 4.06 9.5 6.5 9.5C8.94 9.5 11.5 10.71 11.5 11.25V12.5ZM20.5 12.5H13V11.25C13 10.79 12.8 10.39 12.48 10.03C13.36 9.73 14.44 9.5 15.5 9.5C17.94 9.5 20.5 10.71 20.5 11.25V12.5ZM6.5 7C8.43 7 10 5.43 10 3.5C10 1.57 8.43 0 6.5 0C4.57 0 3 1.57 3 3.5C3 5.43 4.57 7 6.5 7ZM6.5 1.5C7.6 1.5 8.5 2.4 8.5 3.5C8.5 4.6 7.6 5.5 6.5 5.5C5.4 5.5 4.5 4.6 4.5 3.5C4.5 2.4 5.4 1.5 6.5 1.5ZM15.5 7C17.43 7 19 5.43 19 3.5C19 1.57 17.43 0 15.5 0C13.57 0 12 1.57 12 3.5C12 5.43 13.57 7 15.5 7ZM15.5 1.5C16.6 1.5 17.5 2.4 17.5 3.5C17.5 4.6 16.6 5.5 15.5 5.5C14.4 5.5 13.5 4.6 13.5 3.5C13.5 2.4 14.4 1.5 15.5 1.5Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Сотрудники
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/notes' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="20" height="19" viewBox="0 0 20 19" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H9.764C9.27112 17.4505 8.99898 16.7381 9 16H1ZM12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16V3C14 2.232 14.289 1.53 14.764 1H6C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3V15H10V16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18ZM3 3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0H17C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V5H15V16C15 16.7956 14.6839 17.5587 14.1213 18.1213C13.5587 18.6839 12.7956 19 12 19H3C2.20435 19 1.44129 18.6839 0.87868 18.1213C0.316071 17.5587 0 16.7956 0 16V15H3V3ZM19 4V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1C16.4696 1 15.9609 1.21071 15.5858 1.58579C15.2107 1.96086 15 2.46957 15 3V4H19Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Заметки
                        </div>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/statistics' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="19" height="19" viewBox="0 0 19 19" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0H11C13.1217 0 15.1566 0.842855 16.6569 2.34315C18.1572 3.84344 19 5.87827 19 8V9H10V0ZM11 8H18C18 6.14348 17.2625 4.36301 15.9498 3.05025C14.637 1.7375 12.8565 1 11 1V8ZM8 11H16C16 12.5823 15.5308 14.129 14.6518 15.4446C13.7727 16.7602 12.5233 17.7855 11.0615 18.391C9.59966 18.9965 7.99113 19.155 6.43928 18.8463C4.88743 18.5376 3.46197 17.7757 2.34315 16.6569C1.22433 15.538 0.462403 14.1126 0.153721 12.5607C-0.15496 11.0089 0.00346625 9.40034 0.608967 7.93853C1.21447 6.47672 2.23985 5.22729 3.55544 4.34824C4.87103 3.46919 6.41775 3 8 3V11ZM7 12V4.07C5.25105 4.32628 3.66373 5.23456 2.55663 6.61256C1.44954 7.99055 0.904589 9.73628 1.03116 11.4994C1.15773 13.2625 1.94645 14.9125 3.23902 16.1182C4.5316 17.3239 6.23237 17.9962 8 18C9.68351 18.0002 11.3107 17.3938 12.5835 16.2918C13.8562 15.1899 14.6893 13.6662 14.93 12H7Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Статистика
                        </div>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/fertilizers' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="17" height="20" viewBox="0 0 17 20" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5.5C5.5 2.20435 5.81607 1.44129 6.37868 0.87868C6.94129 0.316071 7.70435 0 8.5 0C9.29565 0 10.0587 0.316071 10.6213 0.87868C11.1839 1.44129 11.5 2.20435 11.5 3H14C14.7956 3 15.5587 3.31607 16.1213 3.87868C16.6839 4.44129 17 5.20435 17 6V17C17 17.7956 16.6839 18.5587 16.1213 19.1213C15.5587 19.6839 14.7956 20 14 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3ZM3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H14C14.5304 19 15.0391 18.7893 15.4142 18.4142C15.7893 18.0391 16 17.5304 16 17V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H13V7H4V4H3ZM5 6H12V4H5V6ZM8.5 1C7.96957 1 7.46086 1.21071 7.08579 1.58579C6.71071 1.96086 6.5 2.46957 6.5 3H10.5C10.5 2.46957 10.2893 1.96086 9.91421 1.58579C9.53914 1.21071 9.03043 1 8.5 1ZM14.15 9.6L7 16.75L3.8 13.55L4.507 12.843L7 15.336L13.442 8.893L14.149 9.6H14.15Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Удобрения
                        </div>
                    </NavLink>
                </li>
                

                <li>
                    <NavLink to='/weather' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="20" height="20" viewBox="0 0 20 20" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.3232 13.7824C3.48027 13.8349 3.61008 13.9476 3.68414 14.0957C3.75821 14.2438 3.77045 14.4153 3.7182 14.5724L3.0932 16.4474C3.06966 16.5281 3.03007 16.6032 2.97682 16.6683C2.92357 16.7334 2.85773 16.787 2.78326 16.826C2.70879 16.865 2.62722 16.8886 2.54342 16.8954C2.45962 16.9021 2.37531 16.8919 2.29555 16.8653C2.2158 16.8387 2.14222 16.7963 2.07923 16.7407C2.01625 16.685 1.96514 16.6171 1.92898 16.5413C1.89281 16.4654 1.87233 16.3829 1.86876 16.2989C1.86519 16.2149 1.8786 16.1311 1.9082 16.0524L2.5332 14.1774C2.58568 14.0203 2.69835 13.8905 2.84647 13.8165C2.99459 13.7424 3.16605 13.7301 3.3232 13.7824ZM15.1982 13.7824C15.3553 13.8349 15.4851 13.9476 15.5591 14.0957C15.6332 14.2438 15.6455 14.4153 15.5932 14.5724L14.9682 16.4474C14.9447 16.5281 14.9051 16.6032 14.8518 16.6683C14.7986 16.7334 14.7327 16.787 14.6583 16.826C14.5838 16.865 14.5022 16.8886 14.4184 16.8954C14.3346 16.9021 14.2503 16.8919 14.1706 16.8653C14.0908 16.8387 14.0172 16.7963 13.9542 16.7407C13.8912 16.685 13.8401 16.6171 13.804 16.5413C13.7678 16.4654 13.7473 16.3829 13.7438 16.2989C13.7402 16.2149 13.7536 16.1311 13.7832 16.0524L14.4082 14.1774C14.4607 14.0203 14.5734 13.8905 14.7215 13.8165C14.8696 13.7424 15.0411 13.7301 15.1982 13.7824ZM5.8232 15.6574C5.98027 15.7099 6.11008 15.8226 6.18414 15.9707C6.25821 16.1188 6.27045 16.2903 6.2182 16.4474L5.5932 18.3224C5.56966 18.4031 5.53007 18.4782 5.47682 18.5433C5.42357 18.6084 5.35773 18.662 5.28326 18.701C5.20879 18.74 5.12722 18.7636 5.04342 18.7704C4.95962 18.7771 4.87531 18.7669 4.79555 18.7403C4.7158 18.7137 4.64222 18.6713 4.57923 18.6157C4.51625 18.56 4.46514 18.4921 4.42898 18.4163C4.39281 18.3404 4.37233 18.2579 4.36876 18.1739C4.36519 18.0899 4.3786 18.0061 4.4082 17.9274L5.0332 16.0524C5.08568 15.8953 5.19835 15.7655 5.34647 15.6915C5.49459 15.6174 5.66605 15.6051 5.8232 15.6574ZM17.6982 15.6574C17.8553 15.7099 17.9851 15.8226 18.0591 15.9707C18.1332 16.1188 18.1455 16.2903 18.0932 16.4474L17.4682 18.3224C17.4447 18.4031 17.4051 18.4782 17.3518 18.5433C17.2986 18.6084 17.2327 18.662 17.1583 18.701C17.0838 18.74 17.0022 18.7636 16.9184 18.7704C16.8346 18.7771 16.7503 18.7669 16.6706 18.7403C16.5908 18.7137 16.5172 18.6713 16.4542 18.6157C16.3912 18.56 16.3401 18.4921 16.304 18.4163C16.2678 18.3404 16.2473 18.2579 16.2438 18.1739C16.2402 18.0899 16.2536 18.0061 16.2832 17.9274L16.9082 16.0524C16.9607 15.8953 17.0734 15.7655 17.2215 15.6915C17.3696 15.6174 17.5411 15.6051 17.6982 15.6574ZM16.7569 5.03365C16.4974 3.72511 15.826 2.53392 14.8409 1.63425C13.8559 0.734588 12.6089 0.173636 11.2823 0.0334142C9.95559 -0.106807 8.61887 0.181056 7.46752 0.854915C6.31618 1.52877 5.4106 2.55329 4.8832 3.77865C4.29174 3.71052 3.69261 3.76382 3.12247 3.93529C2.55233 4.10676 2.02319 4.39279 1.56744 4.77587C1.1117 5.15896 0.738931 5.63103 0.471973 6.16319C0.205016 6.69535 0.0494827 7.27639 0.0148962 7.87075C-0.0196903 8.46511 0.0673979 9.06028 0.270829 9.61981C0.474259 10.1793 0.789752 10.6915 1.19799 11.1248C1.60623 11.5582 2.09862 11.9037 2.64502 12.1401C3.19142 12.3765 3.78033 12.499 4.3757 12.4999H16.2507C17.2021 12.501 18.1183 12.1404 18.8138 11.4912C19.5093 10.8421 19.932 9.9528 19.9964 9.00359C20.0608 8.05439 19.7619 7.1162 19.1604 6.37907C18.5589 5.64195 17.6998 5.161 16.7569 5.03365ZM10.6257 1.2499C11.8556 1.24965 13.0425 1.70274 13.9594 2.52254C14.8763 3.34235 15.4589 4.47134 15.5957 5.69365C15.6127 5.84723 15.686 5.98906 15.8014 6.09179C15.9168 6.19451 16.0662 6.25084 16.2207 6.2499H16.2507C16.9137 6.2499 17.5496 6.5133 18.0185 6.98214C18.4873 7.45098 18.7507 8.08686 18.7507 8.7499C18.7507 9.41294 18.4873 10.0488 18.0185 10.5177C17.5496 10.9865 16.9137 11.2499 16.2507 11.2499H4.3757C3.93329 11.2497 3.49597 11.1555 3.09267 10.9737C2.68937 10.7918 2.32928 10.5264 2.03622 10.195C1.74316 9.86355 1.52381 9.47368 1.39268 9.05115C1.26155 8.62862 1.22163 8.18307 1.27556 7.74396C1.32949 7.30485 1.47604 6.8822 1.70552 6.50396C1.93499 6.12572 2.24217 5.80052 2.60672 5.54986C2.97127 5.29921 3.38488 5.12881 3.82021 5.04995C4.25553 4.97109 4.70263 4.98556 5.13195 5.0924C5.28511 5.13061 5.44705 5.10944 5.58525 5.03315C5.72344 4.95686 5.82765 4.83111 5.87695 4.68115C6.2073 3.68262 6.84397 2.81361 7.69647 2.19763C8.54897 1.58164 9.57394 1.25003 10.6257 1.2499ZM8.81695 14.0949C8.8689 13.9912 8.94868 13.904 9.04736 13.8431C9.14604 13.7822 9.25972 13.7499 9.3757 13.7499H10.6257C10.7247 13.75 10.8222 13.7736 10.9103 13.8187C10.9984 13.8639 11.0745 13.9293 11.1323 14.0096C11.1902 14.0899 11.2281 14.1828 11.2431 14.2807C11.258 14.3785 11.2495 14.4785 11.2182 14.5724L10.8682 15.6249H11.8757C11.9933 15.6251 12.1085 15.6584 12.208 15.7211C12.3075 15.7838 12.3873 15.8733 12.4382 15.9793C12.4891 16.0853 12.5091 16.2036 12.4958 16.3204C12.4826 16.4373 12.4366 16.548 12.3632 16.6399L9.8632 19.7649C9.774 19.8757 9.64967 19.9528 9.51075 19.9834C9.37183 20.014 9.22663 19.9962 9.09914 19.9331C8.97165 19.8701 8.8695 19.7654 8.80955 19.6364C8.74961 19.5074 8.73546 19.3618 8.76945 19.2237L9.2007 17.4999H8.1257C8.01912 17.4999 7.91431 17.4726 7.82123 17.4207C7.72815 17.3688 7.6499 17.2939 7.59391 17.2032C7.53792 17.1126 7.50605 17.0091 7.50133 16.9026C7.49661 16.7961 7.5192 16.6902 7.56695 16.5949L8.81695 14.0949Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Погода
                        </div>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/organizations' className={({ isActive }) => (isActive ? `${styles.activeBorder} ${styles.point}` : styles.point)}>
                        <div className={styles.point__img}>
                            <svg width="23" height="17" viewBox="0 0 23 17" className={styles.svgStyle} xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0L11 3H3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.31607 4.44129 0 5.20435 0 6L0 9C0 9.79565 0.31607 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H6C6.53043 17 7.03914 16.7893 7.41421 16.4142C7.78929 16.0391 8 15.5304 8 15V12H11L14 15H16V0H14ZM14.414 1H15V14H14.414L11.414 11H3C2.46957 11 1.96086 10.7893 1.58579 10.4142C1.21071 10.0391 1 9.53043 1 9V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4H11.414L14.414 1ZM18 3V4.008C18.8331 4.1284 19.5949 4.54494 20.1459 5.1813C20.6969 5.81766 21.0002 6.63124 21.0002 7.473C21.0002 8.31476 20.6969 9.12834 20.1459 9.7647C19.5949 10.4011 18.8331 10.8176 18 10.938V11.945C19.1007 11.8228 20.1177 11.2989 20.8563 10.4737C21.5949 9.64854 22.0033 8.57996 22.0033 7.4725C22.0033 6.36504 21.5949 5.29646 20.8563 4.47128C20.1177 3.64609 19.1007 3.12225 18 3ZM18 6.059V8.887C18.2923 8.78351 18.5454 8.59198 18.7243 8.33876C18.9033 8.08554 18.9994 7.78308 18.9994 7.473C18.9994 7.16292 18.9033 6.86046 18.7243 6.60724C18.5454 6.35402 18.2923 6.16249 18 6.059ZM4 12H7V15C7 15.2652 6.89464 15.5196 6.70711 15.7071C6.51957 15.8946 6.26522 16 6 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V12Z" />
                            </svg>
                        </div>
                        <div className={styles.point__title}>
                            Организации
                        </div>
                    </NavLink>
                </li>
            </ul>    
        </nav>
    )
}