import React from "react";

const Footer = () => {
	return (
		<footer className='bg-gray-100 border-t mt-8 fixed bottom-0 left-0 w-full z-50'>
			<div className='max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2'>
				<div className='text-gray-600 text-sm text-center md:text-left mb-2 md:mb-0'>
					© {new Date().getFullYear()} TrackJob. All rights reserved.
				</div>
				<div className='flex justify-center md:justify-end space-x-6'>
					<a
						href='https://www.linkedin.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-500 hover:text-blue-700 transition-colors'
						aria-label='LinkedIn'
					>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z' />
						</svg>
					</a>
					<a
						href='https://github.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-500 hover:text-gray-900 transition-colors'
						aria-label='GitHub'
					>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z' />
						</svg>
					</a>
					<a
						href='mailto:your@email.com'
						className='text-gray-500 hover:text-red-600 transition-colors'
						aria-label='Email'
					>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z' />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
