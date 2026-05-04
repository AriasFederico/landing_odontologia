import styles from './Logo.module.scss';
export const Logo = ({ logo, text, span, url, variant = 'default', size = 'md' }) => {
	return (
		<a href={url} className={styles.logoContainer}>
			{logo && (
				<img
					src={logo}
					alt={text || 'logo'}
					className={`${styles.logo} ${styles[`logo-${size}`]}`}
				/>
			)}

			{text && (
				<p className={`${styles.logoText} ${styles[`logoText-${variant}`]}`}>
					{text}
					<span className={styles.span}>{span}</span>
				</p>
			)}
		</a>
	);
};
