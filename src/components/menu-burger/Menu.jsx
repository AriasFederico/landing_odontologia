import { BsList, BsX } from "react-icons/bs";
import styles from './Menu.module.scss';

export const Menu = ({ state, active }) => {
	return (
		<div className={styles.menu}>
			{state ? (
				<BsX onClick={active} className={styles.svg} />
			) : (
				<BsList onClick={active} className={styles.svg} />
			)}
		</div>
	);
};
