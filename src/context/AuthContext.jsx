import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useTrackJob } from "./TrackJobContext";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(sessionStorage.getItem("token")|| '');
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const navigate = useNavigate();

	const { API_URL } = useTrackJob();

	// Restore token and user from sessionStorage on app load
	useEffect(() => {
		const storedToken = sessionStorage.getItem("token");
		const storedUser = sessionStorage.getItem("user");
		if (storedToken && !token) {
			setToken(storedToken);
		}
		if (storedUser && !user) {
			setUser(JSON.parse(storedUser));
			setIsAuthenticated(true);
		}
	}, [isAuthenticated, token, user]);

	// Login function
	// This function will be used to log in the user
	const login = async (email, password) => {
		try {
			const response = await axios.post(
				`${API_URL}/auth/login`,
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);

			setUser(response.data.user);
			setIsAuthenticated(true);
			setToken(response.data.token);
			sessionStorage.setItem("token", response.data.token); // persist token
			sessionStorage.setItem("user", JSON.stringify(response.data.user)); // persist user
			return response;
		} catch (error) {
			console.error("Error logging in:", error);
			throw error;
		}
	};

	// Logout function
	// This function will be used to log out the user
	const logout = async () => {
		try {
			await axios.post(`${API_URL}/auth/logout`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				withCredentials: true,
			});
			setUser(null);
			setToken();
			sessionStorage.removeItem("token"); // remove token
			sessionStorage.removeItem("user"); // remove user
			setIsAuthenticated(false);
			navigate("/login");
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	const register = async (username, email, password) => {
		try {
			await axios.post(
				`${API_URL}/auth/register`,
				{
					username,
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
			navigate("/login");
		} catch (error) {
			console.error("Error registering:", error);
		}
	};

	const contextValue = {
		user,
		login,
		logout,
		register,
		isAuthenticated,
		token,
		navigate,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
