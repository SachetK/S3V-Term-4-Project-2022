import React, { useEffect } from 'react';
import { useLocation } from "react-router";

const useRedirectToHTTPS = () => {
    let location = useLocation()
    useEffect(() => {
        
        if (window.location.protocol !== "https:") {
            window.location.replace("https://event-check-in-tracker.herokuapp.com" + location.pathname);
        }
    })
};

export default useRedirectToHTTPS;