import AvatarCard from '../AvatarCard';
import Divider from '../Divider';
import Pills from '../Pills';
import TestimonyCard from '../TestimonyCard';
import VideoCallCard from '../VideoCallCard';

const MainContent = () => (
	<main className='main-content'>
		<BlockOne />
		<div className='main-content-block-2'>
			<div className='main-content-block-2__left'>
				<OrbitalImage />
				{/* <img
					alt='girl chatting on a computer'
					src='/assets/main-content/main-content-3.png'
				/> */}
			</div>

			<div className='main-content-block-2__right'>
				<h2>It’s possible to do video call with your customers</h2>
				<Divider />
				<TestimonyCard avatarSrc='/assets/avatar/avatar-2.png' />
			</div>
		</div>
	</main>
);

const OrbitalImage = () => (
	<div className='orbital-image'>
		<img
			alt='girl smiling with headphones'
			className='orbital-image__img'
			src='/assets/main-content/main-content-4.png'
		/>
		<img
			alt='girl chatting on a computer'
			src='/assets/main-content/main-content-3.png'
		/>
		<VideoCallCard />
	</div>
);

const BlockOne = () => (
	<div className='main-content-block-1'>
		<div className='main-content-block-1__left'>
			<h2>Chat with visitors while they browse your site</h2>
			<Divider />
			<TestimonyCard />
		</div>

		<div className='main-content-block-1__right'>
			<Pills />
		</div>
	</div>
);

export default MainContent;
