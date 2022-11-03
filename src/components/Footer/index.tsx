import { CASE_STUDIES } from '../../constants';
import CaseStudy from '../CaseStudy';

const Footer = () => (
	<div className='footer'>
		<div className='footer__content'>
			<h2>Browse our Case Study</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>
		</div>

		<div className='footer__case-studies'>
			{CASE_STUDIES.map((title, index) => (
				<CaseStudy
					key={index}
					caseNumber={`0${index + 1}`}
					subtitle='3 Case Studies'
					title={title}
				/>
			))}
		</div>
	</div>
);

export default Footer;
