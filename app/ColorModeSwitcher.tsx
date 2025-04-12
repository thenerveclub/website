'use client';

import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ColorModeSwitcher: React.FC = () => {
	const [isDark, setIsDark] = useState<boolean>(false);

	// On mount, check localStorage or system preference and update document accordingly
	useEffect(() => {
		if (typeof window === 'undefined') return;
		// Check if a theme is stored in localStorage
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setIsDark(storedTheme === 'dark');
			if (storedTheme === 'dark') {
				document.documentElement.classList.add('dark');
			}
		} else {
			// If not, use the system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setIsDark(prefersDark);
			if (prefersDark) {
				document.documentElement.classList.add('dark');
			}
		}
	}, []);

	const toggleDarkMode = () => {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setIsDark(false);
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setIsDark(true);
		}
	};

	return (
		<button onClick={toggleDarkMode} className="p-2 rounded focus:outline-none focus:ring-none" aria-label="Toggle color mode">
			{isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
		</button>
	);
};

export default ColorModeSwitcher;
