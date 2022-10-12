import RegisterCard from '../RegisterCard';
import WaveGallery from '../WaveGallery';

const Hero = () => (
	<div className='hero'>
		<div className='hero__content'>
			<HeroHeader />
			<RegisterCard />
		</div>
		<WaveGallery />
	</div>
);

const HeroHeader = () => (
	<div className='hero__header'>
		<h1>Let’s Connect with Your Visitors in Real Time</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore
		</p>
	</div>
);

export default Hero;
