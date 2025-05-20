import { useAuth } from "../context/AuthContext";

// Dummy authentication state for demonstration
// Replace with your actual authentication logic/context

const Navbar = () => {

  const { user, isAuthenticated } = useAuth();

	return (
		<nav className='bg-white shadow-md'>
			<div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
				{/* Logo/Brand */}
				<div className='text-xl font-bold text-blue-700'>TrackJob</div>
				{/* Navigation Links */}
				<div className='flex space-x-6'>
					<a
						href='/'
						className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
					>
						Home
					</a>
					<a
						href='/about'
						className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
					>
						About
					</a>
					<a
						href='/contact'
						className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
					>
						Contact Us
					</a>
				</div>
				{/* Auth Section */}
				<div>
					{isAuthenticated ? (
						<div className='flex items-center space-x-4'>
							<span className='text-gray-800 font-semibold'>
								Hello, {user.name}
							</span>
							<button
								className='px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-medium transition-colors'
								// onClick={logout} // Add your logout logic here
							>
								Logout
							</button>
						</div>
					) : (
						<a
							href='/login'
							className='px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium transition-colors'
						>
							Login
						</a>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
