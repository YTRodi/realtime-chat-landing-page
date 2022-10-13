interface Props {
	caseNumber: string;
	title: string;
	subtitle: string;
}

const CaseStudy = ({ caseNumber, title, subtitle }: Props) => (
	<div className='case_study'>
		<div className='case_study__content'>
			<span>{caseNumber}</span>
			<div className='case_study__info'>
				<h3>{title}</h3>
				<h5>{subtitle}</h5>
			</div>
		</div>
		<img alt='arrow' src='/assets/footer/arrow.png' />
	</div>
);

export default CaseStudy;
