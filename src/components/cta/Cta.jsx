import styles from './Cta.module.scss';

export const Cta = ({ text, url, variant }) => {
	return (
		<a href={url} className={`${styles.cta} ${styles[variant]}`}>
			{text}
		</a>
	);
};
