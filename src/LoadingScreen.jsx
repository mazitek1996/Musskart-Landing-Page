import React from 'react';
import Lottie from 'lottie-react';
import LoadingAnimation from "./components/lotties/138485-3d-website-launch.json"
import "./loading_screen.css"

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Lottie animationData={LoadingAnimation} />
    </div>
  );
};

export default LoadingScreen;