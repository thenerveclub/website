'use client';
// import { useRouter } from 'next/navigation';
import React from 'react';
// import { FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
	// const router = useRouter();
	const currentYear = new Date().getFullYear();

	return (
		<>
			{/* Footer Section */}
			<footer className="absolute bottom-0 left-0 w-full bg-transparent text-gray-400 py-6 px-8 flex flex-col md:flex-row justify-between items-center text-center">
				{/* Left Side: Logo & Name */}
				<div className="flex flex-col w-full space-y-1 mb-2 md:mb-0 items-center justify-center mx-auto md:mx-0 md:items-start md:justify-start">
					{/* <div className="flex items-start space-x-10 mb-2 md:mb-0">
						<button className="hover:text-white hover:scale-110 transition-all duration-300" onClick={() => router.push('/terms')}>
							Terms
						</button>
						<button className="hover:text-white hover:scale-110 transition-all duration-300" onClick={() => router.push('/privacy')}>
							Privacy
						</button>
					</div> */}
				</div>

				{/* Center: Links */}
				<div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm mt-16 md:mt-0 w-full">
					<div className="flex items-start mt-1 ml-0 mb-2 md:mb-0 justify-center w-full cursor-default">
						<p className="text-[0.5rem] xxl:text-sm text-gray-400 text-left">© {currentYear} Nerve Global GmbH. All rights reserved.</p>
					</div>
				</div>

				{/* Right Side: Social Links */}
				<div className="flex space-x-5 mt-6 md:mt-0 text-gray-400">
					{/* <a
						href="https://github.com/Nerve-Global"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit Nerve Global on GitHub"
						className="hover:text-white hover:scale-110 transition-all duration-300"
					>
						<FaGithub size={20} />
					</a>
					<a
						href="https://twitter.com/Nerve_Global"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit Nerve Global on X"
						className="hover:text-white hover:scale-110 transition-all duration-300"
					>
						<FaXTwitter size={20} />
					</a> */}
				</div>
			</footer>
		</>
	);
};

export default Footer;
