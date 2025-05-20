import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useTrackJob } from "./TrackJobContext";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    const { API_URL } = useTrackJob();

    // Get User data using axios
    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const response = await axios.get(`${API_URL}/auth/me`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        withCredentials: true,
                    });
                    setUser(response.data.user);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };
            getUser();
        }
    }, [token]);

    // Login function
    // This function will be used to log in the user
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password,
            }, {
                withCredentials: true,
            });
            setUser(response.data.user);
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    }

    // Logout function
    // This function will be used to log out the user
    const logout = async () => {
        try {
            await axios.post(`${API_URL}/auth/logout`, {}, {
                withCredentials: true,
            });
            setUser(null);
            setToken(null);
            localStorage.removeItem("token");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    const register = async (username, email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                username,
                email,
                password,
            }, {
                withCredentials: true,
            });
            setUser(response.data.user);
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error("Error registering:", error);
        }
    }

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
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
