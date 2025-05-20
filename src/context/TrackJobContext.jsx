import { createContext, useContext } from "react";

const TrackJobContext = createContext();

export function TrackJobProvider({ children }) {

    const API_URL = import.meta.env.VITE_API_URL;

    const contextValue = {
        API_URL,
    };

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
}

