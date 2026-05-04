import './App.scss';
import { Header } from './components/';
import { About, Home, Services, Testimonies } from './section';

function App() {
	const HERO_IMAGE = 'https://media.base44.com/images/public/69eef1a76a4842c47fa75bb0/617c12145_generated_02dc712a.png';

	return (
		<div className='app'>
			<Header />
			<Home />
			<Services />
			<About />
			<Testimonies />
		</div>
	);
}

export default App;
