import { iconMap } from '../iconMap';
import styles from './Cta.module.scss';

export const Cta = ({ text, url, variant, icon }) => {
	const IconComponent = iconMap[icon];
	return (
		<a href={url} className={`${styles.cta} ${styles[variant]}`}>
			{icon && <IconComponent className={styles.icon} />}
			{text}
		</a>
	);
};
