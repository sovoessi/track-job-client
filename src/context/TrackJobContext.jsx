import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const TrackJobContext = createContext();

export function TrackJobProvider({ children }) {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { token } = useAuth();

	const API_URL = import.meta.env.VITE_API_URL;

	// Fetch jobs
	const fetchJobs = async () => {
		setLoading(true);
		try {
			const res = await axios.get(`${API_URL}/jobs`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				withCredentials: true,
			});

			setJobs(res.data.jobs || []);
			setError(null);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	// Create job
	const createJob = async (job) => {
		try {
			await axios.post(`${API_URL}/jobs`, job, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				withCredentials: true,
			});
			await fetchJobs();
		} catch (err) {
			setError(err);
		}
	};

	// Update job
	const updateJob = async (id, job) => {
		try {
			await axios.put(`${API_URL}/jobs/${id}`, job, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				withCredentials: true,
			});
			await fetchJobs();
		} catch (err) {
			setError(err);
		}
	};

	// Delete job
	const deleteJob = async (id) => {
		try {
			await axios.delete(`${API_URL}/jobs/${id}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				withCredentials: true,
			});
			await fetchJobs();
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		if (token) {
			fetchJobs();
		}
	}, [token]);

	// Memoize context value
	const contextValue = useMemo(
		() => ({
			jobs,
			loading,
			error,
			fetchJobs,
			createJob,
			updateJob,
			deleteJob,
		}),
		[jobs, loading, error]
	);
	return (
		<TrackJobContext.Provider value={contextValue}>
			{children}
		</TrackJobContext.Provider>
	);
}

export const useTrackJob = () => {
	const context = useContext(TrackJobContext);
	if (!context) {
		throw new Error("useTrackJob must be used within a TrackJobProvider");
	}
	return context;
};
