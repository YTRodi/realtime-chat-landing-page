import AvatarCard from '../AvatarCard';

interface Props {
	avatarSrc?: string;
}

const TestimonyCard = ({ avatarSrc }: Props) => (
	<div className='testimony-card'>
		<p>
			“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam.”
		</p>
		<AvatarCard src={avatarSrc} />
	</div>
);

export default TestimonyCard;
