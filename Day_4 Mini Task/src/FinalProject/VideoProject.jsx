import React, { useEffect, useRef, useState } from "react";
import video from "./video.mp4";

const VideoProject = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current.muted = isMute;
  }, [isMute]);

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
    };
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="border-2 w-75 h-85 bg-red-100 flex justify-center items-center flex-col gap-4 border-blue-500 rounded ">
      <video ref={videoRef} src={video} className="w-70 rounded"></video>

      <span
        className={` font-medium  px-5 py-2  rounded ${isPlaying ? "text-green-500" : "text-red-500"}`}
      >
        {isPlaying ? "Playing...." : "Stop...."}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={` font-medium text-white px-5 py-2 mt-4 rounded ${isPlaying ? "bg-red-500" : "bg-green-500"}`}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>

        <button
          onClick={() => setIsMute(!isMute)}
          className={` font-medium text-white px-5 py-2 mt-4 rounded ${isMute ? "bg-red-500" : "bg-pink-500"}`}
        >
          {isMute ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

export default VideoProject;
