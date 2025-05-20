import React, { useContext } from "react";

// Example JobContext (should be provided higher in your app)
const JobContext = React.createContext();

const statusColors = {
	interview: "bg-green-100 text-green-700",
	declined: "bg-red-100 text-red-700",
	pending: "bg-yellow-100 text-yellow-700",
};

const TrackJob = React.memo(({ job }) => {
	// If job is not passed as prop, get it from context
	const context = useContext(JobContext);
	const jobData = job || context?.job;

	if (!jobData) {
		return (
			<div className='p-6 bg-white rounded-xl shadow text-gray-500 text-center'>
				No job data available.
			</div>
		);
	}

	return (
		<article
			className='w-full bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2'
			role='listitem'
			aria-label={`Job at ${jobData.company}`}
		>
			<header>
				<h2 className='text-xl font-bold text-gray-800'>{jobData.position}</h2>
				<p className='text-gray-600'>
					<span className='font-medium'>Company:</span> {jobData.company}
				</p>
			</header>
			<div className='flex items-center justify-between mt-2'>
				<span
					className={`px-3 py-1 rounded-full text-sm font-semibold ${
						statusColors[jobData.status] || "bg-gray-100 text-gray-700"
					}`}
				>
					{jobData.status.charAt(0).toUpperCase() + jobData.status.slice(1)}
				</span>
				<time
					className='text-gray-400 text-sm'
					dateTime={jobData.createdAt}
				>
					Applied: {new Date(jobData.createdAt).toLocaleDateString()}
				</time>
			</div>
		</article>
	);
});

export default TrackJob;
