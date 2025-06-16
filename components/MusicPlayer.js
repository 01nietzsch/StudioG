import React, { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Ensure audio is paused on mount so the icon matches
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        loop
        ref={audioRef}
        src="/assets/sounds/Queen - We Are The Champions (Official Video).wav"
      />
      <button
        onClick={togglePlayPause}
        className="flex items-center justify-center w-14 h-14 bg-gray-900 bg-opacity-75 text-white rounded-full shadow-lg cursor-pointer"
      >
        {isPlaying ? (
          // Pause Icon
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="2" width="4" height="14" fill="white" />
            <rect x="13" y="2" width="4" height="14" fill="white" />
          </svg>
        ) : (
          // Play Icon
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2L22 9L2 16V2Z" fill="white" />
          </svg>
        )}
      </button>
    </div>
  );
}
