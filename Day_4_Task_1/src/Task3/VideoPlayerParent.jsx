import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import video1 from "./movie.mp4";

const VideoPlayerParent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 relative overflow-hidden">
      {/* Responsive Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 [animation-delay:2000ms]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-3 [animation-delay:4000ms]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Responsive Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-400 to-purple-300 mb-2 sm:mb-3 tracking-wider">
            VIDEO PLAYER
          </h1>
          <p className="text-purple-200/60 text-xs sm:text-sm tracking-widest uppercase font-light">Professional Media Controller</p>
        </div>

        {/* Video Container */}
        <div className="relative mb-6 sm:mb-8 w-full max-w-3xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30 bg-black/50 backdrop-blur-xl">
            <VideoPlayer play={isPlaying} src={video1} />
            
            {/* Status indicator */}
            <div className="absolute top-4 right-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse shadow-lg" style={{ backgroundColor: isPlaying ? '#10b981' : '#ef4444' }}></div>
          </div>
        </div>

        {/* Styled Play/Pause Buttons */}
        <div className="flex gap-4 sm:gap-6 justify-center">
          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(true)}
            disabled={isPlaying}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-sm sm:text-base shadow-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white border-2 border-green-400/50 hover:from-green-400 hover:to-emerald-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            <span className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 00.001-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap tracking-wider">PLAY</span>
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>

          {/* Pause Button */}
          <button
            onClick={() => setIsPlaying(false)}
            disabled={!isPlaying}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-sm sm:text-base shadow-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white border-2 border-red-400/50 hover:from-red-400 hover:to-rose-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            <span className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap tracking-wider">PAUSE</span>
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-rose-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Status Display */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-purple-200/60 text-sm sm:text-base">
            Status: <span className={`font-bold tracking-wider ${isPlaying ? 'text-green-400' : 'text-red-400'}`}>
              {isPlaying ? 'PLAYING' : 'PAUSED'}
            </span>
          </p>
          <p className="text-purple-200/40 text-xs sm:text-sm mt-2">
            Professional Video Controller with Enhanced UI
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerParent;
