import styles from './Nav.module.scss';
export const Nav = ({ links, variant = 'default', customClass = '' }) => {
	return (
		<nav className={styles.nav}>
			<ul className={`${styles.ul} ${styles[`ul-${variant}`]} ${customClass}`}>
				{links?.map(({ text, url }) => (
					<li key={text} className={styles.li}>
						<a href={url}>{text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
