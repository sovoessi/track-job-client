import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
	const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { navigate, register } = useAuth();
	const location = useLocation();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		if (form.password !== form.confirm) {
			setError("Passwords do not match.");
			setLoading(false);
			return;
		}
		try {
			// Replace with your registration logic/API call
			// await register(form.email, form.password);
			// On success, return to previous page or home
			const res = await register(form.username, form.email, form.password);
			if (res.status !== 200) {
				throw new Error("Registration failed");
			}
			const redirectPath = location.state?.from?.pathname || "/";
			navigate(redirectPath);
		} catch (err) {
			setError(`Registration failed. Please try again. ${err.message}`);
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
					Register
				</h2>
				<div className='mb-4'>
					<label
						htmlFor='username'
						className='block text-gray-700 mb-2 font-medium'
					>
						Name
					</label>
					<input
						id='username'
						name='username'
						type='username'
						value={form.username}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						autoComplete='username'
					/>
				</div>
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
						autoComplete='new-password'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='confirm'
						className='block text-gray-700 mb-2 font-medium'
					>
						Confirm Password
					</label>
					<input
						id='confirm'
						name='confirm'
						type='password'
						value={form.confirm}
						onChange={handleChange}
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						autoComplete='new-password'
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
					{loading ? "Registering..." : "Register"}
				</button>
				<div className='mt-4 text-center text-sm'>
					<button
						type='button'
						onClick={() => navigate(-1)}
						className='text-blue-600 hover:underline'
					>
						Return to previous page
					</button>
					<span className='mx-2'>|</span>
					<Link
						to='/login'
						className='text-blue-600 hover:underline'
					>
						Already have an account? Sign In
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
