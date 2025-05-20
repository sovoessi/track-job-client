import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TrackJobProvider } from "./context/TrackJobContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TrackJobProvider>
			<App />
		</TrackJobProvider>
	</StrictMode>
);
