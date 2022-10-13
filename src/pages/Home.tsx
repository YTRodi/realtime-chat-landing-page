import { Hero, Layout, MainContent, Navbar } from '../components';
import { GAP_BETWEEN_NAVBAR_AND_HERO } from '../constants';

const Home = () => (
	<div>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: `${GAP_BETWEEN_NAVBAR_AND_HERO}px`,
			}}
		>
			<Navbar />
			<Hero />
		</div>
		<Layout>
			<MainContent />
		</Layout>
	</div>
);

export default Home;
