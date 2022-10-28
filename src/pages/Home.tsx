import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import { Footer, Hero, Layout, MainContent, Navbar } from '../components';
import { LAYOUT_OFFSET } from '../components/Layout';
import { GAP_BETWEEN_NAVBAR_AND_HERO, NAVBAR_HEIGHT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// HEADER TIMELINE
			gsap
				.timeline()
				.from('.header', { y: -NAVBAR_HEIGHT })
				.from(['.hero__header > h1', '.hero__header > p', '.register-card'], {
					xPercent: -LAYOUT_OFFSET,
					duration: 1,
					stagger: 0.2,
					ease: 'back',
				})
				.from('.pill', { rotateX: -90, duration: 1.25, stagger: 0.2 })
				.to('.register-card__button', { scale: 1.05 })
				.to('.register-card__button', { scale: 1 });

			// MAIN CONTENT TIMELINE
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.main-content-block-1',
						markers: true,
						start: 'top 60%',
						// end: '80% cenqter',
						toggleActions: 'restart reverse restart reverse',
					},
				})
				.from(
					[
						'.main-content-block-1__left',
						'.main-content-block-1__left > .divider',
					],
					{
						xPercent: -LAYOUT_OFFSET,
						duration: 1,
						stagger: 0.2,
						ease: 'back',
					}
				)
				.from('.main-content-block-1__left > .testimony-card', { opacity: 0 })
				.from('.main-content-block-1__right', { rotateX: -90, duration: 1.25 });
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
