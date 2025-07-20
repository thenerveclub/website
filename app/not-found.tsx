'use client';

import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_#627eea_-250%,_#000000_50%)] bg-no-repeat bg-fixed bg-black px-4 font-sans">
			<div className="text-center space-y-6">
				<h1 className="text-5xl font-semibold text-white">Page not found</h1>
				<p className="text-lg text-gray-400 max-w-md mx-auto">The page you’re looking for doesn’t exist.</p>
				<Link
					href="/"
					aria-label="Go to home page"
					className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:bg-gray-100 hover:shadow-lg"
				>
					Return to Home
				</Link>
			</div>
		</div>
	);
}
