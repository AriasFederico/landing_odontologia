import { Cta, ItemContact, Title, TopSection } from '../../components';
import styles from './CTASection.module.scss';

export const CTASection = ({ cta }) => {

    const data = {
        title: '¿Listo para transformar tu sonrisa?',
        text: 'Agenda tu primera consulta sin costo. Estamos aquí para ayudarte a lograr la sonrisa que mereces.',

        contactInfo: [
            { icon: 'phone', label: '+1 (234) 567-890' },
            { icon: 'map', label: 'Av. Principal 123, Ciudad' },
            { icon: 'clock', label: 'Lun - Vie: 9:00 - 19:00' },
        ]
    }

    const { title, text, contactInfo } = data;

    return (
        <section className={styles.CTASection} id='contact'>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Title subtitle={title} />
                    <p className={styles.text}>{text}</p>
                    <Cta text={'Agenda por WhatsApp'} url={cta} icon={'bsChat'} />
                </div>
                <div className={styles.infoContact}>
                    {
                        contactInfo?.map(({ icon, label }) => (
                            <ItemContact icon={icon} info={label} key={label} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
