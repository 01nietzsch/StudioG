// import React, { useRef, useState, useEffect } from "react";

// export default function MusicPlayer() {
//   const audioRef = useRef();
//   const [isPlaying, setIsPlaying] = useState(false);

//   function playNpause() {
//     isPlaying ? audioRef.current.pause() : audioRef.current.play();

//     setIsPlaying(!isPlaying);
//   }

//   return (
//     <>
//       <audio autoPlay loop ref={audioRef} src="/assets/sounds/music.wav" />
//       <button
//         className=" cursor-pointer bg-gray-900 text-center w-14 h-14 rounded-full"
//         onClick={playNpause}
//       >
//         {isPlaying ? (
//           <svg
//             className="mx-auto"
//             width="22"
//             height="18"
//             viewBox="0 0 22 18"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10 2L5 6H1V12H5L10 16V2Z"
//               stroke="white"
//               strokeWidth="1.5"
//               stroke-linecap="square"
//             />
//             <path
//               d="M15 6V6C16.6544 7.48898 16.7823 10.0395 15.285 11.6865L15 12"
//               stroke="white"
//               strokeWidth="1.5"
//             />
//             <path
//               d="M17 4V4C19.7574 6.48163 19.9704 10.7325 17.4751 13.4774L17 14"
//               stroke="white"
//               strokeWidth="1.5"
//             />
//           </svg>
//         ) : (
//           <svg
//             className="mx-auto"
//             width="24"
//             height="18"
//             viewBox="0 0 24 18"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10 2L5 6H1V12H5L10 16V2Z"
//               stroke="white"
//               stroke-width="1.5"
//               stroke-linecap="square"
//             />
//             <path
//               d="M22 6L16 12"
//               stroke="white"
//               strokeWidth="1.5"
//               stroke-linecap="square"
//             />
//             <path
//               d="M16 6L22 12"
//               stroke="white"
//               strokeWidth="1.5"
//               stroke-linecap="square"
//             />
//           </svg>
//         )}
//       </button>
//     </>
//   );
// }
