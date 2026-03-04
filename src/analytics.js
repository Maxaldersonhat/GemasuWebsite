// src/analytics.js
import ReactGA from "react-ga4";

const InitializeAnalytics = () => {
  // Replace "G-XXXXXXXXXX" with your actual Measurement ID from Google Analytics
  ReactGA.initialize("G-9T3XKRZZ8Q"); 
  console.log("GA Initialized"); // Optional: checks if it runs
};

const TrackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export default { InitializeAnalytics, TrackPageView };