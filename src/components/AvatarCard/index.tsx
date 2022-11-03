interface Props {
	src?: string;
}

const AvatarCard = ({ src = '/assets/avatar/avatar-1.png' }: Props) => (
	<div className='avatar-card'>
		<img alt='avatar' {...{ src }} />
		<div className='avatar-card__content'>
			<p>Samantha William</p>
			<span>Owner of Online Fashion Store</span>
		</div>
	</div>
);

export default AvatarCard;
