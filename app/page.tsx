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
			className="min-h-screen flex justify-center items-center p-0"
			style={{ minHeight: windowSize.height > 800 ? 'calc(100vh - 248px)' : 'calc(100vh - 260px)' }}
		>
			<div
				className={`flex flex-col items-center space-y-8 max-w-full text-center text-4xl font-bold text-[#D3D3D3] relative ${
					windowSize.height > 800 || windowSize.height < 645 ? 'mt-0' : 'mt-5'
				}`}
			>
				Nerve Global
			</div>
		</div>
	);
}
