import { Logo } from '../../components';
import styles from './Footer.module.scss';

export const Footer = ({ name }) => {
	return (
		<footer className={styles.footer}>
			<Logo text={'Dental'} span={'Care'} size='sm' url={'#'} />
			<p className={styles.copyright}>
				© 2026 {name}. Todos los derechos reservados.
			</p>
		</footer>
	);
};
