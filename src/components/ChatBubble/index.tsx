interface Props {
	text: string;
	color?: 'primary' | 'secondary';
	kind?: 'sender' | 'receiver';
}

const ChatBubble = ({ text, color = 'primary', kind = 'sender' }: Props) => (
	<div className={`chat-bubble chat-bubble--${kind} chat-bubble--${color}`}>
		<h5>{text}</h5>
	</div>
);

export default ChatBubble;
