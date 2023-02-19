import { OrganizationsType } from "../../types/types"
import styles from './Organizations.module.css'

type propsType = {
    item: OrganizationsType
}

export const OrgTable: React.FC<propsType> = ({item}) => {
    return (
        <tr>
            <th className={`${styles.tBodyBorder} ${styles.thWrapper}`}>
                <img src={item.img} alt={item.img} />
                <span>{item.name}</span>
            </th>
            <th className={styles.tBodyBorder}>{item.number}</th>
            <th className={styles.tBodyBorder}>{item.director}</th>
            <th className={styles.tBodyBorder}>{item.adress}</th>
            <th className={styles.tBodyWithoutBorder}>
                <svg width="15" height="14" viewBox="0 0 15 14" className={styles.tableSVG} xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_208_1174)">
                    <path d="M1.15559 8.7947C1.36193 8.7947 1.52917 8.95079 1.52917 9.14337V12.2392C1.5299 12.8167 2.03116 13.2847 2.6499 13.2852H13.1321C13.7508 13.2847 14.2521 12.8167 14.2528 12.2392V3.15315C14.2521 2.5758 13.7508 2.10782 13.1321 2.10714H9.81515C9.60881 2.10714 9.44157 1.95105 9.44157 1.75846C9.44157 1.56601 9.60881 1.40979 9.81515 1.40979H13.1321C14.1632 1.41088 14.9988 2.19076 15 3.15315V12.2393C14.9988 13.2017 14.1632 13.9816 13.1321 13.9827H2.6499C1.61877 13.9816 0.783178 13.2017 0.782011 12.2393V9.14337C0.782011 8.95079 0.949245 8.7947 1.15559 8.7947Z" />
                    <path d="M0.929955 0.512674C1.58649 -0.100091 2.65089 -0.100091 3.30743 0.512674L9.9723 6.73321C10.018 6.77584 10.051 6.82869 10.0682 6.88671L10.9446 9.83994C10.9807 9.96102 10.944 10.0907 10.8489 10.1796C10.7536 10.2684 10.6147 10.3026 10.4849 10.2691L7.32077 9.45095C7.2586 9.43488 7.20198 9.4041 7.1563 9.36147L0.491584 3.14079C-0.163929 2.52762 -0.163929 1.53499 0.491584 0.92182L0.929955 0.512674ZM9.1583 6.95985L3.70363 1.86868L1.94445 3.51058L7.39928 8.60174L9.1583 6.95985ZM9.5097 7.61797L8.10426 8.92985L10.0483 9.43256L9.5097 7.61797ZM1.01985 2.64775L1.41604 3.01753L3.17536 1.3755L2.77902 1.00572C2.41434 0.665355 1.82304 0.665355 1.45836 1.00572L1.01985 1.41486C0.655754 1.75564 0.655754 2.30711 1.01985 2.64775Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_208_1174">
                    <rect width="15" height="14" transform="matrix(-1 0 0 1 15 0)"/>
                    </clipPath>
                    </defs>
                </svg>
            </th>
        </tr>
    )
}