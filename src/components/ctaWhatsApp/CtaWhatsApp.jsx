import { BsChat } from 'react-icons/bs';
import styles from './CtaWhatsApp.module.scss';

export const CtaWhatsApp = ({ url }) => {
    return <a href={url} className={styles.CtaWhatsApp}>
        <BsChat className={styles.icon} />
    </a>;
};
