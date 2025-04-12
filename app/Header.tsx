'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import { FiMenu } from 'react-icons/fi';
import { RiCloseLargeFill } from 'react-icons/ri';

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	// Detect scrolling
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`fixed top-0 left-0 w-full px-8 py-6 transition-all duration-300 z-50 ${
					isScrolled ? 'backdrop-blur-lg bg-transparent' : 'bg-transparent'
				}`}
			>
				<div className="flex items-center justify-between">
					{/* Brand */}
					{/* <Link href="/" className="text-2xl xxl:text-4xl text-gray-400 flex items-center space-x-2 hover:text-white">
						<div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2">
							<Image src="/logo.png" alt="Logo" fill className="object-contain pointer-events-none select-none transition-transform duration-200" />
						</div>
						Nerve Global
					</Link> */}

					<div className="flex items-center">
						{/* Desktop Menu */}
						{/* <div className="hidden md:flex space-x-8">
							<Link href="/about" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 xxl:text-2xl">
								About
							</Link>
							<Link href="/portfolio" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 xxl:text-2xl">
								Projects
							</Link>
						</div> */}

						{/* Mobile Menu Button */}
						{/* <button
							onClick={() => setIsOpen(true)}
							className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400"
							aria-label="Open Navigation Menu"
						>
							<FiMenu size={20} />
						</button> */}
					</div>
				</div>
			</nav>

			{/* Mobile Drawer */}
			{isOpen && (
				<div className="fixed inset-0 z-50 flex">
					{/* Overlay */}
					<div className="absolute inset-0 bg-white opacity-50" onClick={handleClose}></div>
					{/* Drawer Panel */}
					<div className="relative ml-auto w-full h-full bg-black shadow-lg p-4 text-gray-400 flex flex-col">
						<div className="flex items-center justify-between text-gray-400 text-center mx-auto mb-0">
							<div className="flex items-center space-x-2 text-center mx-auto mt-8">
								{/* You can pass extra classes to your Logo component if needed */}
								<Link href="/" className="text-2xl text-gray-400 flex items-center space-x-2 hover:text-white">
									<div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2">
										<Image
											src="/logo.png"
											alt="Logo"
											fill
											className="object-contain pointer-events-none select-none transition-transform duration-200"
										/>
									</div>
									Nerve Global
								</Link>
							</div>
						</div>
						{/* Centered Menu + Close */}
						<div className="flex flex-1 flex-col items-center justify-center space-y-14 -mt-10">
							<Link onClick={handleClose} href="/" className="block hover:text-gray-400 transition-colors">
								Home
							</Link>
							<Link onClick={handleClose} href="/about" className="block hover:text-gray-400 transition-colors">
								About
							</Link>
							<Link onClick={handleClose} href="/portfolio" className="block hover:text-gray-400 transition-colors">
								Projects
							</Link>
							<button
								onClick={handleClose}
								className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400"
								aria-label="Close Navigation Menu"
							>
								<RiCloseLargeFill size={24} />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
