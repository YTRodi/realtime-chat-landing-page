const PillImage = ({
	imagePosition = 'top',
	...rest
}: {
	imagePosition?: 'top' | 'bottom';
	src: string;
	alt: string;
}) => (
	<div className='pill'>
		<img className={`pill__img pill__img--${imagePosition}`} {...rest} />
	</div>
);

export default PillImage;
