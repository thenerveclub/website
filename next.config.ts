import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	trailingSlash: true,
	headers: async () => [
		{
			source: '/(.*)',
			headers: [
				{
					key: 'Content-Security-Policy',
					value: [
						// "default-src 'self';",
						"connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com;",
						"img-src 'self' data:;",
						"style-src 'self' 'unsafe-inline';",
						"font-src 'self';",
						'frame-src https://vercel.live;',
					].join(' '),
				},
			],
		},
	],
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['nerveglobal.com', 'thenerveclub.com', 'thenerve.club'],
	},
};

export default nextConfig;
