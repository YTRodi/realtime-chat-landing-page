import ChatBubble from '../ChatBubble';

const Pills = () => (
	<div className='grid-pills'>
		<div className='grid-pills__cell' />
		<div className='grid-pills__cell'>
			<ChatBubble text='Hi Karen, I’m wandering is it possible to order custom drawing?' />
			<img
				alt='girl chatting on a computer'
				src='/assets/main-content/main-content-2.png'
			/>
		</div>
		<div className='grid-pills__cell'>
			<ChatBubble position='right' text='Hi Samantha' />
			<ChatBubble position='right' text='Yes, You can order custom drawing' />
			<img
				alt='girl chatting on a computer'
				src='/assets/main-content/main-content-1.png'
			/>
		</div>
		<div className='grid-pills__cell' />
	</div>
);

export default Pills;
