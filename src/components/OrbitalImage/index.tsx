import VideoCallCard from '../VideoCallCard';

const OrbitalImage = () => (
	<div className='orbital-image'>
		<img
			alt='girl chatting on a computer'
			className='orbital-image__main-photo'
			src='/assets/main-content/main-content-3.png'
		/>
		<img
			alt='girl smiling with headphones'
			className='orbital-image__img'
			src='/assets/main-content/main-content-4.png'
		/>
		<VideoCallCard />
	</div>
);

export default OrbitalImage;
