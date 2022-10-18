import { BRAND_NAME, NAVBAR_HEIGHT } from '../../constants';

const Navbar = () => (
	<header className='header' style={{ height: `${NAVBAR_HEIGHT}px` }}>
		<nav className='nav'>
			<div className='nav__logo'>
				<p className='nav__img'>S</p>
				<p className='nav__brand-name'>{BRAND_NAME}</p>
			</div>
			<ul className='nav__links'>
				<li className='nav__link'>
					<a href=''>How it works</a>
				</li>
				<li className='nav__link'>
					<a href=''>Library</a>
				</li>
				<li className='nav__link'>
					<a href=''>Pricing</a>
				</li>
			</ul>
		</nav>
		<div>
			<ul className='auth__links'>
				<li className='auth__link'>
					<a href=''>Sign up</a>
				</li>
				<li className='auth__link'>
					<a href=''>Login</a>
				</li>
			</ul>
		</div>
	</header>
);

export default Navbar;
