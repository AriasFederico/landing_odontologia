import { Logo, Nav } from "../";
import styles from './Header.module.scss'

export const Header = () => {
	const links = [
		{ text: 'Inicio', url: '#' },
		{ text: 'Servicios', url: '#' },
		{ text: 'Nosotros', url: '#' },
		{ text: 'Testimonio', url: '#' },
		{ text: 'Contacto', url: '#' },
	]

	return <header className={styles.header}>
		<div className={styles.headerContainer}>
			<Logo text={'Dental'} span={'Care'} url={'#'} />
			<Nav links={links} />
		</div>
	</header>;
};
