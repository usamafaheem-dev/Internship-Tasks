import React, { useRef, useState, useEffect } from "react";

const LuxuryStopwatch = () => {
  const intervalRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 0.01);
      }, 10);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const milliseconds = Math.floor((totalSeconds % 1) * 100);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 relative overflow-hidden">
      {/* Responsive Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 [animation-delay:2000ms]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-3 [animation-delay:4000ms]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        {/* Responsive Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 mb-2 sm:mb-3 tracking-wider">
            STOPWATCH
          </h1>
          <p className="text-amber-200/60 text-xs sm:text-sm tracking-widest uppercase font-light">Professional Precision Timer</p>
        </div>

        {/* Responsive Time Display */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl border-2 sm:border-3 border-amber-500/30 flex items-center justify-center relative">
            {/* Rotating ring when running */}
            <div className={`absolute inset-0 rounded-full border sm:border-2 border-amber-500/20 ${isRunning ? 'animate-spin' : ''}`} style={{ animationDuration: '60s' }}></div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 blur-2xl opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-xl px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl border sm:border-2 border-amber-500/50 shadow-2xl">
                <div className="text-3xl sm:text-4xl font-black text-amber-300 font-mono tracking-wider text-center min-w-[180px] sm:min-w-[220px]">
                  {formatTime(time)}
                </div>
              </div>
            </div>

            {/* Responsive Status indicator */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse" style={{ backgroundColor: isRunning ? '#10b981' : '#ef4444' }}></div>
          </div>
        </div>

        {/* Responsive Three Separate Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
          {/* Start Button */}
          <button 
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl bg-gradient-to-br from-green-500 to-green-600 text-white border sm:border-2 border-green-400 hover:from-green-400 hover:to-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            onClick={handleStart}
            disabled={isRunning}
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 00.001-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">START</span>
            </span>
          </button>

          {/* Stop Button */}
          <button 
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl bg-gradient-to-br from-red-500 to-red-600 text-white border sm:border-2 border-red-400 hover:from-red-400 hover:to-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            onClick={handleStop}
            disabled={!isRunning}
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
              <span className="whitespace-nowrap">STOP</span>
            </span>
          </button>

          {/* Reset Button */}
          <button 
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl bg-gradient-to-br from-gray-500 to-gray-600 text-white border sm:border-2 border-gray-400 hover:from-gray-400 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            onClick={handleReset}
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="whitespace-nowrap">RESET</span>
            </span>
          </button>
        </div>

        {/* Responsive Status Display */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-amber-200/60 text-xs sm:text-sm">
            Status: <span className={`font-bold ${isRunning ? 'text-green-400' : 'text-red-400'}`}>
              {isRunning ? 'RUNNING' : 'STOPPED'}
            </span>
          </p>
          <p className="text-amber-200/40 text-[10px] sm:text-xs mt-2">
            Precision: 10ms | Format: MM:SS.MS
          </p>
        </div>
      </div>
    </div>
  );

};

export { LuxuryStopwatch };
export default LuxuryStopwatch;