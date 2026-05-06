import './App.scss';
import { CtaWhatsApp, Header } from './components/';
import {
	About,
	CTASection,
	Footer,
	Home,
	Services,
	Testimonies,
} from './section';

function App() {

	const WHATSAPP_URL = 'https://wa.me/2213186889?text=Hola%2C%20quiero%20agendar%20una%20cita';

	return (
		<div className='app'>
			<Header />
			<Home cta={WHATSAPP_URL} />
			<Services />
			<About />
			<Testimonies />
			<CTASection cta={WHATSAPP_URL} />
			<Footer name={'DentalCare'} />
			<CtaWhatsApp url={WHATSAPP_URL} />
		</div>
	);
}

export default App;
