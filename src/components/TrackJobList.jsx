import {useState, useEffect} from 'react'
import axios from 'axios'
import { useTrackJob } from '../context/TrackJobContext'
import TrackJob from './TrackJob'

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
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const displayJobs = () => {
        if (trackJobs.length === 0) {
            return <div>No jobs found</div>;
        }
        return trackJobs.map((job) => (
            <TrackJob key={job.id} job={job} />
        ));
    }
    
    return (
    <>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Track Job List</h1>
            {error && <div className="text-red-500">{error.message}</div>}
         {displayJobs()}
        </div>
    </>
  )
}

export default TrackJobList