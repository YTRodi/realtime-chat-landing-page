import Divider from '../Divider';
import Pills from '../Pills';
import TestimonyCard from '../TestimonyCard';

const MainContent = () => (
	<div className='main-content'>
		<BlockOne />

		{/* <div>
            <h2>Block 2</h2>
        </div> */}
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
