import { iconMap } from "../iconMap"
import styles from './ItemContact.module.scss'

export const ItemContact = ({ icon, info }) => {
    const IconComponent = iconMap[icon];

    return (
        <div className={styles.itemContact}>
            <div className={styles.iconContainer}>
                <IconComponent className={styles.icon} />
            </div>
            <p className={styles.info}>{info}</p>
        </div>
    )
}
