import Divider from '../Divider';
import OrbitalImage from '../OrbitalImage';
import Pills from '../Pills';
import TestimonyCard from '../TestimonyCard';

const MainContent = () => (
	<main className='main-content'>
		<BlockOne />
		<BlockTwo />
	</main>
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

const BlockTwo = () => (
	<div className='main-content-block-2'>
		<div className='main-content-block-2__left'>
			<OrbitalImage />
		</div>

		<div className='main-content-block-2__right'>
			<h2>It’s possible to do video call with your customers</h2>
			<Divider />
			<TestimonyCard avatarSrc='/assets/avatar/avatar-2.png' />
		</div>
	</div>
);

export default MainContent;
