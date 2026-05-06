import { Feature, Title, TopSection } from '../../components';
import styles from './About.module.scss';

export const About = () => {


    const data = {
        DENTIST_IMAGE: 'https://media.base44.com/images/public/69eef1a76a4842c47fa75bb0/9cd313fb7_generated_68969d22.png',
        text: 'En DentalCare combinamos experiencia, tecnología y un trato humano para ofrecerte la mejor atención odontológica. Nuestro equipo se mantiene actualizado con las últimas tendencias y técnicas.',
        features: ['Tecnología de última generación', 'Equipo profesional certificado', 'Ambiente cálido y acogedor', 'Planes de pago flexibles', 'Atención personalizada', 'Materiales de primera calidad']
    }


    const { DENTIST_IMAGE, text, features } = data;


    return (
        <section className={styles.about} id='about'>
            <div className={styles.container} >
                <div className={styles.media}>
                    <img src={DENTIST_IMAGE} alt='' className={styles.image} />
                    <div className={styles.exp_absolute}>
                        <h3 className={styles.exp}>+15</h3>
                        <p className={styles.exp_text}>Años de experiencia transformando sonrisas</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <TopSection text={'SOBRE NOSOTROS'} />
                    <Title subtitle={'Comprometidos con tu bienestar dental'} />
                    <p className={styles.text}>{text}</p>
                    <div className={styles.features_container}>
                        {
                            features?.map((feature, index) => (
                                <Feature text={feature} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
