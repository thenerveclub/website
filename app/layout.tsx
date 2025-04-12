import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import Footer from './Footer';
import './globals.css';
import Header from './Header';

export const metadata: Metadata = {
	metadataBase: new URL('https://nerveglobal.com'),
	title: {
		default: 'Nerve Global',
		template: '%s | Nerve Global',
	},
	description: 'Building Web3 Infrastructure for the Open Internet',
	keywords: [
		'Nerve Global',
		'Web3',
		'Blockchain',
		'NFTs',
		'Digital Innovation',
		'High-End Technology',
		'Crypto Projects',
		'Exclusive Web3 Experiences',
		'Web3 Development',
		'Web3 Consulting',
		'Web3 Marketing',
		'Web3 Design',
		'Web3 Development',
		'Web3 Consulting',
		'Web3 Marketing',
		'Web3 Strategy',
		'Decentralized Applications',
		'Smart Contracts',
		'DeFi',
		'Decentralized Finance',
	],
	authors: [{ name: 'Nerve Global' }],
	creator: 'Nerve Global',
	openGraph: {
		title: 'Nerve Global',
		description: 'Building Web3 Infrastructure for the Open Internet',
		url: 'https://nerveglobal.com',
		siteName: 'Nerve Global',
		images: [
			{
				url: 'https://nerveglobal.com/og.png',
				width: 1200,
				height: 630,
				alt: 'Nerve Global Website Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nerve Global',
		description: 'Building Web3 Infrastructure for the Open Internet',
		images: ['https://nerveglobal.com/og.png'],
		creator: '@Nerve_Global',
	},
	icons: {
		icon: '/favicon.ico',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
};

const unbounded = Unbounded({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head></head>
			<body className={`antialiased min-h-screen relative bg-cover bg-center bg-no-repeat ${unbounded.className}`}>
				{/* Fixed Header */}
				<header className="fixed top-0 left-0 w-full z-20 h-auto bg-transparent">
					<Header />
				</header>

				{/* Main content area */}
				<main className="w-[80%] m-auto pt-[100px] z-20">{children}</main>

				{/* Fixed Footer */}
				<footer className="bottom-0 left-0 w-full z-20">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
