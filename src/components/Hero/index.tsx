const Hero = () => (
	<div>
		<WaveGallery />
	</div>
);

const WaveGallery = () => (
	<div className='wave-gallery'>
		<img
			alt='hero-1'
			className='wave-gallery__img'
			src='/assets/hero/hero-1.png'
		/>
		<img
			alt='hero-2'
			className='wave-gallery__img'
			src='/assets/hero/hero-2.png'
		/>
		<img
			alt='hero-3'
			className='wave-gallery__img'
			src='/assets/hero/hero-3.png'
		/>
	</div>
);

export default Hero;
