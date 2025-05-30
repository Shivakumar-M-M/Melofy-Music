// import React, { useContext } from "react";
// import Sidebar from "./components/Sidebar";
// import Player from "./components/Player";
// import Display from "./components/Display";
// import { PlayerContext } from "./context/Playercontext";
// const App = () => {
//   const { audioRef, track, songData } = useContext(PlayerContext);
//   return (
//     <div className="h-screen bg-black ">
//       {songData.length !== 0 ? (
//         <>
//           <div className="h-[90%] flex">
//             <Sidebar></Sidebar>
//             <Display></Display>
//           </div>
//           <Player></Player>
//         </>
//       ) : null}

//       <audio ref={audioRef} src={track?track.file:""} preload="auto"></audio>
//     </div>
//   );
// };

// export default App;

import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/Playercontext";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0 ? (
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : null}

      {track && (
        <audio ref={audioRef} src={track.file} preload="auto" />
      )}
    </div>
  );
};

export default App;
