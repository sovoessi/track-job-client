import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { TrackJobProvider } from "./context/TrackJobContext.jsx";

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<TrackJobProvider>
						<Navbar />
						<Routes>
							<Route
								index
								element={<Home />}
							/>
							<Route
								path='/about'
								element={<About />}
							/>
							<Route
								path='/contact-us'
								element={<ContactUs />}
							/>
							<Route
								path='/register'
								element={<Register />}
							/>
							<Route
								path='/login'
								element={<Login />}
							/>
							<Route
								path='/dashboard'
								element={<Dashboard />}
							/>
							<Route
								path='/profile'
								element={<Profile />}
							/>
						</Routes>
						<Footer />
					</TrackJobProvider>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
