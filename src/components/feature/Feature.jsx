import { iconMap } from '../iconMap'
import styles from './Feature.module.scss'

export const Feature = ({ text }) => {
    const IconComponent = iconMap.check
    return (
        <div className={styles.feature}>
            <IconComponent className={styles.icon} />
            <span className={styles.span}>
                {text}
            </span>
        </div>
    )
}
