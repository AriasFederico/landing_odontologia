import { Cta, ExpCard, Title, TopSection } from '../../components';
import { iconMap } from '../../components/iconMap';
import styles from './Home.module.scss';

export const Home = ({ cta }) => {
    const data = {
        text: 'Tratamientos dentales personalizados con tecnología de vanguardia en un ambiente cálido y profesional. Tu bienestar es lo primero.',

        expCard: [
            { exp: '+15', text: 'Años de experiencia' },
            { exp: '+5k', text: 'Clientes felices' },
            { exp: '98%', text: 'Satisfacción' },
        ],
    };

    const { text, expCard } = data;

    return (
        <main className={styles.home}>
            <div className={styles.home__absolute} />
            <div className={styles.homeContainer}>
                <TopSection text={'ODONTOLOGÍA DE EXCELENCIA'} />
                <Title title={'Tu sonrisa, nuestra'} span={' prioridad'} />
                <p className={styles.homeText}>{text}</p>
                <div className={styles.homeButtons}>
                    <Cta text={'Escríbenos por Whatsapp'} url={cta} icon={'bsChat'} />
                    <Cta
                        text={'Conoce nuestros servicios'}
                        variant={'secondary'}
                        url={'#services'}
                    />
                </div>
                <div className={styles.homeExpcard__container}>
                    {expCard?.map(({ exp, text }) => (
                        <ExpCard key={text} exp={exp} text={text} />
                    ))}
                    {/* {} */}
                </div>
            </div>
        </main>
    );
};
