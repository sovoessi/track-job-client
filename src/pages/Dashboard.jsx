import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTrackJob } from "../context/TrackJobContext";

const initialForm = { company: "", position: "", status: "pending" };

const Dashboard = () => {
	const { isAuthenticated } = useAuth();
	const { jobs, loading, error, createJob, updateJob, deleteJob } =
		useTrackJob();

	const [form, setForm] = useState(initialForm);
	const [editingId, setEditingId] = useState(null);

	if (!isAuthenticated) {
		return (
			<div className='flex justify-center items-center h-96 text-xl font-semibold'>
				Please login to access the dashboard.
			</div>
		);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editingId) {
			updateJob(editingId, form);
		} else {
			createJob(form);
		}
		setForm(initialForm);
		setEditingId(null);
	};

	const handleEdit = (job) => {
		setForm({
			company: job.company,
			position: job.position,
			status: job.status,
		});
		setEditingId(job._id);
	};

	const handleCancel = () => {
		setForm(initialForm);
		setEditingId(null);
	};

	return (
		<div className='max-w-3xl mx-auto py-8 px-4'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Dashboard</h1>
			{/* Job Form */}
			<form
				onSubmit={handleSubmit}
				className='bg-white rounded-lg shadow p-6 mb-8 flex flex-col gap-4'
			>
				<div className='flex flex-col md:flex-row gap-4'>
					<input
						type='text'
						name='company'
						placeholder='Company'
						value={form.company}
						onChange={handleChange}
						className='border rounded px-3 py-2 flex-1'
						required
					/>
					<input
						type='text'
						name='position'
						placeholder='Position'
						value={form.position}
						onChange={handleChange}
						className='border rounded px-3 py-2 flex-1'
						required
					/>
					<select
						name='status'
						value={form.status}
						onChange={handleChange}
						className='border rounded px-3 py-2'
					>
						<option value='pending'>Pending</option>
						<option value='interview'>Interview</option>
						<option value='declined'>Declined</option>
					</select>
				</div>
				<div className='flex gap-2'>
					<button
						type='submit'
						className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
					>
						{editingId ? "Update" : "Add"} Job
					</button>
					{editingId && (
						<button
							type='button'
							onClick={handleCancel}
							className='bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition'
						>
							Cancel
						</button>
					)}
				</div>
			</form>
			{/* Job List */}
			{loading ? (
				<div className='text-center'>Loading...</div>
			) : error ? (
				<div className='text-red-500 text-center'>
					{error.message || "Error loading jobs"}
				</div>
			) : jobs.length === 0 ? (
				<div className='text-center text-gray-500'>No jobs found.</div>
			) : (
				<ul className='space-y-4'>
					{jobs.map((job) => (
						<li
							key={job._id}
							className='bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2'
						>
							<div>
								<div className='font-semibold text-lg'>{job.position}</div>
								<div className='text-gray-600'>{job.company}</div>
								<span
									className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${
										job.status === "pending"
											? "bg-yellow-100 text-yellow-700"
											: job.status === "interview"
											? "bg-green-100 text-green-700"
											: "bg-red-100 text-red-700"
									}`}
								>
									{job.status.charAt(0).toUpperCase() + job.status.slice(1)}
								</span>
							</div>
							<div className='flex gap-2'>
								<button
									onClick={() => handleEdit(job)}
									className='px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition'
								>
									Edit
								</button>
								<button
									onClick={() => deleteJob(job._id)}
									className='px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition'
								>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dashboard;
