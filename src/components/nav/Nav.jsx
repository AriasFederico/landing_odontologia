import styles from './Nav.module.scss';

export const Nav = ({
	links,
	variant = 'default',
	customClass = '',
	onCloseMenu,
	menuActive,
}) => {
	return (
		<nav className={`${styles.nav} ${menuActive ? styles.mobile : ''}`}>
			<ul className={`${styles.ul} ${styles[`ul-${variant}`]} ${customClass}`}>
				{links?.map(({ text, url }) => (
					<li key={text} className={styles.li}>
						<a href={url} onClick={onCloseMenu}>
							{text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};