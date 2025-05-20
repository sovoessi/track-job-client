import React from "react";

const About = () => {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12'>
			<div className='max-w-2xl w-full bg-white rounded-xl shadow-lg p-8'>
				<h1 className='text-4xl font-bold text-gray-800 mb-4 text-center'>
					About TrackJob
				</h1>
				<p className='text-lg text-gray-600 mb-6 text-center'>
					TrackJob is your all-in-one solution for managing job applications,
					interviews, and career progress. Our mission is to help you stay
					organized and motivated throughout your job search journey.
				</p>
				<div className='border-t border-gray-200 my-6'></div>
				<h2 className='text-2xl font-semibold text-gray-700 mb-2'>Features</h2>
				<ul className='list-disc list-inside text-gray-600 mb-6 space-y-1'>
					<li>Track applications, interviews, and offers in one place</li>
					<li>Set reminders for follow-ups and deadlines</li>
					<li>Visualize your progress with intuitive dashboards</li>
					<li>Secure and private—your data stays with you</li>
				</ul>
				<div className='border-t border-gray-200 my-6'></div>
				<h2 className='text-2xl font-semibold text-gray-700 mb-2'>Our Team</h2>
				<p className='text-gray-600 mb-4'>
					Built by passionate developers who understand the challenges of job
					hunting, TrackJob is designed to make your search easier and more
					effective.
				</p>
				<div className='text-center'>
					<span className='text-sm text-gray-400'>
						© {new Date().getFullYear()} TrackJob. All rights reserved.
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
