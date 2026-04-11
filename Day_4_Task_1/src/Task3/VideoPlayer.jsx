import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ play, src }) => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (play) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [play]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Element */}
      <video
        ref={ref}
        src={src}
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onLoadedData={handleLoadedData}
        style={{
          filter: isLoaded ? 'none' : 'brightness(0.3)',
        }}
      />

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-12 lg:w-12 lg:h-12 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-purple-300 text-xs sm:text-sm font-medium">Loading Video...</p>
          </div>
        </div>
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Play/Pause Overlay Icon */}
      {!play && isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 shadow-2xl transform transition-all duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      {/* Playing Indicator */}
      {play && isLoaded && (
        <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20">
          <div className="flex gap-0.5 sm:gap-1">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full animate-pulse [animation-delay:200ms]"></div>
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full animate-pulse [animation-delay:400ms]"></div>
          </div>
          <span className="text-white text-[10px] sm:text-xs font-medium">NOW PLAYING</span>
        </div>
      )}

      {/* Video Border Frame */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-purple-500/30 pointer-events-none"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-purple-400/50 rounded-tl-sm sm:rounded-tl-lg"></div>
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-sm sm:rounded-tr-lg"></div>
      <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-sm sm:rounded-bl-lg"></div>
      <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 border-purple-400/50 rounded-br-sm sm:rounded-br-lg"></div>

      {/* Hover Effect Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 pointer-events-none animate-pulse"></div>
      )}
    </div>
  );
};

export default VideoPlayer;
