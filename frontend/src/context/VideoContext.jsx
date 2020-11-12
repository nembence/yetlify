import React, { useState, createContext } from "react";

export const VideoContext = createContext();

export const VideoProvider = (props) => {
    const [videos, setVideos] = useState([]);
    return (
        <VideoContext.Provider value={[videos, setVideos]}>
            {props.children}
        </VideoContext.Provider>
    );
};
