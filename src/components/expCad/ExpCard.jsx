import styles from './ExpCard.module.scss'
export const ExpCard = ({ exp, text }) => {
    return (
        <div className={styles.expCard}>
            <p className={styles.expCardNumber}>{exp}</p>
            <p className={styles.expCardText}>{text}</p>
        </div>
    )
}
