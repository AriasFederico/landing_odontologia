import { ItemCard, Title, TopSection } from '../../components';
import styles from './Services.module.scss';
export const Services = () => {
    const data = {
        text: 'Ofrecemos una amplia gama de tratamientos para mantener tu salud bucal en óptimas condiciones.',

        services: [
            {
                icon: 'star',
                title: 'Blanqueamiento',
                text: 'Devuelve la luminosidad natural a tu sonrisa con técnicas seguras y resultados visibles.',
            },
            {
                icon: 'shield',
                title: 'Implantes Dentales',
                text: 'Soluciones permanentes y estéticas para reemplazar piezas dentales perdidas.',
            },
            {
                icon: 'smile',
                title: 'Ortodoncia',
                text: 'Alineadores invisibles y brackets estéticos para una sonrisa perfectamente alineada.',
            },
            {
                icon: 'heart',
                title: 'Endodoncia',
                text: 'Tratamientos de conducto indoloros con tecnología avanzada para salvar tus dientes.',
            },
            {
                icon: 'design',
                title: 'Diseño de Sonrisa',
                text: 'Planificación digital personalizada para lograr la sonrisa que siempre soñaste.',
            },
            {
                icon: 'vaccine',
                title: 'Cirujía Oral',
                text: 'Procedimientos quirúrgicos mínimamente invasivos con recuperación rápida.',
            },
        ],
    };

    const { text, services } = data;

    return (
        <section className={styles.services}>
            <div className={styles.servicesContainer}>
                <div className={styles.servicesContainer__header}>
                    <TopSection text={'NUESTROS SERVICIOS'} />
                    <Title subtitle={'Cuidado dental integral'} />
                    <p className={styles.servicesContainer__text}>{text}</p>
                </div>

                <div className={styles.servicesContainer__items}>
                    {
                        services?.map(({ icon, title, text }) => (
                            <ItemCard icon={icon} title={title} text={text} key={title} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
