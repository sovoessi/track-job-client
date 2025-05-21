import { useTrackJob } from "../context/TrackJobContext";
import { useAuth } from "../context/AuthContext";
import TrackJob from "./TrackJob";

const TrackJobList = () => {
	const { jobs, loading } = useTrackJob();
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <div className='text-center mt-8'>Please log in to view jobs.</div>;
	}

	if (loading) {
		return (
			<div
				role='status'
				aria-live='polite'
			>
				Loading...
			</div>
		);
	}

	if (!jobs || jobs.length === 0) {
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
				{jobs.map((job) => (
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
