import { motion } from 'framer-motion';
import styles from './Title.module.scss';
export const Title = ({ title, subtitle, span }) => {
	return title ? (
		<motion.h1
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
			className={styles.title}
		>
			{title} <span className={styles.span}>{span}</span>
		</motion.h1>
	) : (
		<motion.h2
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
			className={styles.subtitle}
		>
			{subtitle} <span className={styles.span}>{span}</span>
		</motion.h2>
	);
};
