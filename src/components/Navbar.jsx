import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { user, isAuthenticated, logout } = useAuth();

	return (
		<nav className='bg-white shadow-md'>
			<div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
				{/* Logo/Brand */}
				<Link
					to='/'
					className='text-xl font-bold text-blue-700'
				>
					TrackJob
				</Link>
				{/* Hamburger for mobile */}
				<button
					className='md:hidden flex items-center px-2 py-1 border rounded text-blue-700 border-blue-700'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'
				>
					<svg
						className='h-6 w-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
				{/* Navigation Links */}
				<div
					className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent top-16 md:top-auto z-20 transition-all duration-200 ease-in ${
						menuOpen ? "flex" : "hidden"
					} md:flex`}
				>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 md:p-0 ${
								isActive ? "text-blue-700 font-bold" : ""
							}`
						}
						end
					>
						Home
					</NavLink>
					<NavLink
						to='/about'
						className={({ isActive }) =>
							`text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 md:p-0 ${
								isActive ? "text-blue-700 font-bold" : ""
							}`
						}
					>
						About
					</NavLink>
					<NavLink
						to='/contact-us'
						className={({ isActive }) =>
							`text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 md:p-0 ${
								isActive ? "text-blue-700 font-bold" : ""
							}`
						}
					>
						Contact Us
					</NavLink>
					{isAuthenticated && (
						<NavLink
							to='/dashboard'
							className={({ isActive }) =>
								`text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 md:p-0 ${
									isActive ? "text-blue-700 font-bold" : ""
								}`
							}
						>
							Dashboard
						</NavLink>
					)}
				</div>
				{/* Auth Section */}
				<div className='hidden md:block'>
					{isAuthenticated && user ? (
						<div className='flex items-center space-x-4'>
							<span className='text-gray-800 font-semibold'>
								Hello, {user.username}
							</span>
							<button
								className='px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-medium transition-colors'
								onClick={logout}
							>
								Logout
							</button>
						</div>
					) : (
						<NavLink
							to='/login'
							className='px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium transition-colors'
						>
							Login
						</NavLink>
					)}
				</div>
			</div>
			{/* Mobile Auth Section */}
			{menuOpen && (
				<div className='md:hidden px-4 pb-4'>
					{isAuthenticated && user ? (
						<div className='flex flex-col space-y-2'>
							<span className='text-gray-800 font-semibold'>
								Hello, {user.username}
							</span>
							<button
								className='px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-medium transition-colors'
								onClick={logout}
							>
								Logout
							</button>
						</div>
					) : (
						<NavLink
							to='/login'
							className='block px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium transition-colors'
						>
							Login
						</NavLink>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
