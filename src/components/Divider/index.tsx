interface Props {
	full?: boolean;
}

const Divider = ({ full = false }: Props) => (
	<hr className={`divider ${full ? 'divider-full' : ''}`} />
);

export default Divider;
