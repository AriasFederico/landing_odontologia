import styles from './TopSection.module.scss';

export const TopSection = ({ text }) => {
	return <p className={styles.topSection}>{text}</p>;
};
