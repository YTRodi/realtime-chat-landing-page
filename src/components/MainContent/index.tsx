import Divider from '../Divider';

const MainContent = () => {
	return (
		<div className='main-content'>
			<div className='main-content-block-1'>
				<div className='main-content-block-1__left'>
					<h2>Chat with visitors while they browse your site</h2>
					<Divider />
					<TestimonyCard />
				</div>

				<div className='main-content-block-1__right'>
					<GridPills />
				</div>
			</div>

			{/* <div>
				<h2>Block 2</h2>
			</div> */}
		</div>
	);
};

const GridPills = () => (
	// TODO: me quedé acá!!!!
	// TODO: create the <ChatBubble/> component

	<div className='grid-pills'>
		<div className='grid-pills__cell' />
		<img
			alt='girl chatting on a computer'
			className='grid-pills__cell'
			src='/assets/main-content/main-content-2.png'
		/>
		<img
			alt='girl chatting on a computer'
			className='grid-pills__cell'
			src='/assets/main-content/main-content-1.png'
		/>
		<div className='grid-pills__cell' />
	</div>
);

const TestimonyCard = () => (
	<div className='testimony-card'>
		<p>
			“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam.”
		</p>
		<AvatarCard />
	</div>
);

const AvatarCard = () => (
	<div className='avatar-card'>
		<img alt='avatar' src='/assets/avatar.png' />
		<div className='avatar-card__content'>
			<p>Samantha William</p>
			<span>Owner of Online Fashion Store</span>
		</div>
	</div>
);

export default MainContent;
