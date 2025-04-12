'use client';

import { useEffect, useState } from 'react';

export default function Landing() {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	// Update window size on resize
	useEffect(() => {
		const updateDimensions = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};
		updateDimensions(); // Initialize on mount
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return (
		<div
			className="font-baskervville min-h-screen flex justify-center items-center p-0"
			style={{ minHeight: windowSize.height > 800 ? 'calc(100vh - 0px)' : 'calc(100vh - 260px)' }}
		>
			<div className="flex flex-col items-center justify-center w-[80%] cursor-default text-center sm:w-[95%]">
				<h1 className="text-4xl xl:text-7xl xxl:text-8xl font-light uppercase text-transparent bg-[linear-gradient(350.21deg,_white_-13.99%,_rgba(255,255,255,0)_136.74%)] bg-clip-text [-webkit-background-clip:text] mb-10">
					Nerve Global
				</h1>
				<p className="text-xl xl:text-4xl xxl:text-6xl font-light uppercase text-transparent bg-[linear-gradient(350.21deg,_white_-13.99%,_rgba(255,255,255,0)_136.74%)] bg-clip-text [-webkit-background-clip:text] no-underline mt-4 sm:text-[1.5rem]">
					We exclusively work on unique ideas in the emerging
					<br />
					sector of blockchain technology.
				</p>
			</div>
		</div>
	);
}
