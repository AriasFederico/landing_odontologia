import { Testimony, Title, TopSection } from '../../components';
import styles from './Testimonies.module.scss';

export const Testimonies = () => {
    const PATIENT_IMAGE = 'https://media.base44.com/images/public/69eef1a76a4842c47fa75bb0/29f578866_generated_a26fb03b.png';

    const data = {
        title: 'Lo que dicen nuestros pacientes',
        testomies: [
            {
                text: 'Increíble experiencia. El equipo fue muy profesional y los resultados superaron mis expectativas. Mi sonrisa nunca se había visto tan bien.', user: 'María García', adjetive: 'Blanqueamiento dental'
            },
            {
                text: 'Tenía mucho miedo pero el trato fue excepcional. Me explicaron todo paso a paso y el resultado es perfecto. Totalmente recomendado.', user: 'Carlos Rodríguez', adjetive: 'Implantes dentales'
            },
            {
                text: 'El proceso fue mucho más rápido de lo que esperaba. El seguimiento constante y la atención personalizada hicieron toda la diferencia.', user: 'Ana Martinez', adjetive: 'Ortodoncia invisible'
            },

        ]
    }

    const { title, testomies } = data;

    return (
        <section className={styles.testimonies}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <TopSection text={'TESTIMONIOS'} />
                    <Title subtitle={'Lo que dicen nuestros pacientes'} />

                    <div className={styles.items}>
                        {
                            testomies?.map(({ text, user, adjetive }) => (
                                <Testimony key={user} text={text} adjetive={adjetive} user={user} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.media}>
                    <img src={PATIENT_IMAGE} alt={'Paciente'} className={styles.image} />
                </div>
            </div>
        </section>
    );
};
