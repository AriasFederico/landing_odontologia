import { useEffect, useState } from 'react';
import { Logo, Menu, Nav } from '../';
import styles from './Header.module.scss';

export const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	const handleMenuActive = () => {
		setMenuActive(!menuActive);
		console.log(menuActive);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setMenuActive(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const links = [
		{ text: 'Inicio', url: '#' },
		{ text: 'Servicios', url: '#services' },
		{ text: 'Nosotros', url: '#about' },
		{ text: 'Testimonio', url: '#testimonies' },
		{ text: 'Contacto', url: '#contact' },
	];

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Logo text={'Dental'} span={'Care'} url={'#'} />
				<Nav
					links={links}
					menuActive={menuActive}
					onCloseMenu={() => setMenuActive(false)}
				/>
				<Menu state={menuActive} active={handleMenuActive} />
			</div>
		</header>
	);
};
