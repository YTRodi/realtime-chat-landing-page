interface Props {
	text: string;
	position?: 'left' | 'right';
}

const ChatBubble = ({ text, position = 'left' }: Props) => (
	<div className={`chat-bubble chat-bubble--${position}`}>
		<h5>{text}</h5>
	</div>
);

export default ChatBubble;
