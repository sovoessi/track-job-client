import { useState, useEffect } from "react";
import axios from "axios";
import { useTrackJob } from "../context/TrackJobContext";
import TrackJob from "./TrackJob";

const TrackJobList = () => {
	const { API_URL } = useTrackJob();
	const [trackJobs, setTrackJobs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTrackJobs = async () => {
			try {
				const response = await axios.get(`${API_URL}/jobs`, {
					withCredentials: true,
				});
				setTrackJobs(response.data.jobs);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTrackJobs();
	}, [API_URL]);

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

	if (error) {
		return <div className='text-red-500'>{error.message}</div>;
	}

	if (trackJobs.length === 0) {
		return <div>No jobs found</div>;
	}

	return (
		<section style={{ paddingLeft: "5%", paddingRight: "5%" }}>
			<h1 className='text-center text-2xl font-bold mb-4 p-4'>List of offers</h1>
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
