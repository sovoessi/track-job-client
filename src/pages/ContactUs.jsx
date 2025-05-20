import React from "react";

const ContactUs = () => {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12'>
			<div className='max-w-xl w-full bg-white rounded-xl shadow-lg p-8'>
				<h1 className='text-4xl font-bold text-gray-800 mb-4 text-center'>
					Contact Us
				</h1>
				<p className='text-lg text-gray-600 mb-6 text-center'>
					Have questions, feedback, or need support? Fill out the form below and
					our team will get back to you as soon as possible.
				</p>
				<form className='space-y-6'>
					<div>
						<label
							className='block text-gray-700 font-medium mb-1'
							htmlFor='name'
						>
							Name
						</label>
						<input
							className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
							type='text'
							id='name'
							name='name'
							placeholder='Your Name'
							required
						/>
					</div>
					<div>
						<label
							className='block text-gray-700 font-medium mb-1'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
							type='email'
							id='email'
							name='email'
							placeholder='you@example.com'
							required
						/>
					</div>
					<div>
						<label
							className='block text-gray-700 font-medium mb-1'
							htmlFor='message'
						>
							Message
						</label>
						<textarea
							className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
							id='message'
							name='message'
							rows='5'
							placeholder='How can we help you?'
							required
						></textarea>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors'
					>
						Send Message
					</button>
				</form>
				<div className='text-center mt-6'>
					<span className='text-sm text-gray-400'>
						© {new Date().getFullYear()} TrackJob. All rights reserved.
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
