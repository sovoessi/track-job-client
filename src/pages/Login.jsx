import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const location = useLocation();
	const { navigate, login } = useAuth();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const res = await login(form.email, form.password);

			if (res.status !== 200) {
				throw new Error("Login failed");
			}
			// Redirect or handle success
			// Redirect to the last page or home if no previous page
			const redirectPath = location.state?.from?.pathname || "/";
			navigate(redirectPath);
		} catch (err) {
			setError(
				err.response?.data?.message || "Login failed. Please try again."
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			<form
				onSubmit={handleSubmit}
				className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'
			>
				<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
					Sign In
				</h2>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 mb-2 font-medium'
					>
						Email
					</label>
					<input
						id='email'
						name='email'
						type='email'
						value={form.email}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						autoComplete='email'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='password'
						className='block text-gray-700 mb-2 font-medium'
					>
						Password
					</label>
					<input
						id='password'
						name='password'
						type='password'
						value={form.password}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						autoComplete='current-password'
					/>
				</div>
				{error && (
					<div className='mb-4 text-red-600 text-center text-sm'>{error}</div>
				)}
				<button
					type='submit'
					disabled={loading}
					className='w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors disabled:opacity-60'
				>
					{loading ? "Signing in..." : "Sign In"}
				</button>
				<div className='mt-4 text-center text-sm'>
					Don't have an account?{" "}
					<Link
						to='/register'
						className='text-blue-600 hover:underline'
					>
						Register
					</Link>
				</div>
			</form>
		</div>
	);
}
