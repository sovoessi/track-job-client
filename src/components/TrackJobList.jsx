import { useState, useEffect } from "react";
import { useTrackJob } from "../context/TrackJobContext";
import { useAuth } from "../context/AuthContext"; // <-- import
import TrackJob from "./TrackJob";

const TrackJobList = () => {
	const { API_URL, jobs } = useTrackJob();
	const { isAuthenticated } = useAuth(); // <-- get auth state
	const [trackJobs, setTrackJobs] = useState(jobs || []);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!isAuthenticated) {
			setIsLoading(false);
			return;
		}
		setTrackJobs(jobs);
	}, [API_URL, isAuthenticated, jobs]);

	if (!isAuthenticated) {
		return <div className='text-center mt-8'>Please log in to view jobs.</div>;
	}

	if (isLoading) {
		return (
			<div
				role='status'
				aria-live='polite'
			>
				Loading...
			</div>
		);
	}

	if (trackJobs.length === 0) {
		return <div>No jobs found</div>;
	}

	return (
		<section style={{ paddingLeft: "5%", paddingRight: "5%" }}>
			<h1 className='text-center text-2xl font-bold mb-4 p-4'>
				List of offers
			</h1>
			<div
				className='
                grid gap-6
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
            '
				role='list'
			>
				{trackJobs.map((job) => (
					<TrackJob
						key={job._id}
						job={job}
					/>
				))}
			</div>
		</section>
	);
};

export default TrackJobList;
