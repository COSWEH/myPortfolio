import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ isDarkMode, setIsDarkMode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<nav className="bg-gray-100 dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
			<div className="flex items-center justify-between px-6 py-4">
				{/* Brand Name */}
				<div className="text-xl font-bold text-gray-800 dark:text-white">
					<NavLink to="/">Ooap.</NavLink>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					onClick={toggleMenu}
					className="block md:hidden text-gray-800 dark:text-white focus:outline-none">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>

				{/* Navigation Links */}
				<ul
					className={`absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 md:static md:flex md:space-x-8 md:bg-transparent md:dark:bg-transparent text-gray-600 dark:text-gray-300 ${
						isMenuOpen ? "block" : "hidden"
					} justify-center md:justify-center`}>
					<li className="block px-4 py-2 md:inline hover:text-gray-800 dark:hover:text-white cursor-pointer">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "underline decoration-4 decoration-gray-800 dark:decoration-white transition-all"
									: "hover:underline"
							}
							to="/">
							Home
						</NavLink>
					</li>
					<li className="block px-4 py-2 md:inline hover:text-gray-800 dark:hover:text-white cursor-pointer">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "underline decoration-4 decoration-gray-800 dark:decoration-white transition-all"
									: "hover:underline"
							}
							to="/about">
							About
						</NavLink>
					</li>
					<li className="block px-4 py-2 md:inline hover:text-gray-800 dark:hover:text-white cursor-pointer">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "underline decoration-4 decoration-gray-800 dark:decoration-white transition-all"
									: "hover:underline"
							}
							to="/projects">
							Projects
						</NavLink>
					</li>
					<li className="block px-4 py-2 md:inline hover:text-gray-800 dark:hover:text-white cursor-pointer">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "underline decoration-4 decoration-gray-800 dark:decoration-white transition-all"
									: "hover:underline"
							}
							to="/contact">
							Contact
						</NavLink>
					</li>
				</ul>

				{/* Action Buttons */}
				<div className="flex items-center space-x-4">
					<button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
						Resume
					</button>
					<button
						onClick={toggleTheme}
						className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white">
						{isDarkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
