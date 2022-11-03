import { GAP_BETWEEN_NAVBAR_AND_HERO, NAVBAR_HEIGHT } from '../../constants';
import { useWindowSize } from '../../hooks';
import PillImage from '../PillImage';

const WaveGallery = () => {
	const size = useWindowSize();
	const height = size.height - NAVBAR_HEIGHT - GAP_BETWEEN_NAVBAR_AND_HERO;

	return (
		<div className='wave-gallery' style={{ height }}>
			<PillImage
				alt='hero-1'
				imagePosition='bottom'
				src='/assets/hero/hero-1.png'
			/>
			<PillImage alt='hero-2' src='/assets/hero/hero-2.png' />
			<PillImage
				alt='hero-3'
				imagePosition='bottom'
				src='/assets/hero/hero-3.png'
			/>
		</div>
	);
};

export default WaveGallery;
