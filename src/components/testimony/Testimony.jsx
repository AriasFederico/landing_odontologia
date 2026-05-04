import { iconMap } from '../iconMap';
import styles from './Testimony.module.scss';

export const Testimony = ({ text, user, adjetive }) => {

	const IconComponent = iconMap.quote;
	return (
		<div className={styles.testimony}>
			<IconComponent className={styles.quote} />
			<p className={styles.text}>"{text}"</p>
			<div className={styles.userContainer}>
				<p className={styles.userName}>{user}</p>
				<span className={styles.userAdjetive}>{adjetive}</span>
			</div>
		</div>
	);
};
