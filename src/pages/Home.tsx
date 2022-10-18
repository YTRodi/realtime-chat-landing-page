import gsap from 'gsap';
import { useEffect } from 'react';

import { Footer, Hero, Layout, MainContent, Navbar } from '../components';
import { GAP_BETWEEN_NAVBAR_AND_HERO, NAVBAR_HEIGHT } from '../constants';

const Home = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap
				.timeline()
				.fromTo('.header', { y: -NAVBAR_HEIGHT }, { y: 0, duration: 1 })
				.from(['.hero__header > h1', '.hero__header > p', '.register-card'], {
					xPercent: -130,
					duration: 1,
					stagger: 0.2,
					ease: 'back',
				})
				.fromTo(
					'.pill',
					{ rotateX: -90 },
					{ rotateX: 0, duration: 1.25, stagger: 0.2 }
				)
				.to('.register-card__button', { scale: 1.05 })
				.to('.register-card__button', { scale: 1 });
		});

		return () => ctx.revert();
	}, []);

	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: `${GAP_BETWEEN_NAVBAR_AND_HERO}px`,
				}}
			>
				<Navbar />
				<Hero />
			</div>
			<Layout>
				<MainContent />
				<Footer />
			</Layout>
		</div>
	);
};

export default Home;
