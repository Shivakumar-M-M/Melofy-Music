import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios';

export const PlayerContext=createContext();

const PlayerContextProvider=(props)=>
{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
    
    const url='https://melofy-backend-69ui.onrender.com';
    const [songsData,setSongData]=useState([]);
    const [albumsData,setAlbumData]=useState([]);
    const [track,setTrack]=useState(songsData[0]);
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:
        {
            second:0,
            minute:0 
        }
    })
    
    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause=()=>
    {
        audioRef.current.pause();
        setPlayStatus(false);
    }
    const playWithId=async(id)=>
    {
        await songsData.map((item)=>
        {
          if(id===item._id)
          {
            setTrack(item);
          }
        })
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async ()=>
    {
       songsData.map(async (item,index)=>
      {
        if(track._id==item._id  && index >0)
        {
await setTrack(songsData[index-1]);
await audioRef.current.play();
setPlayStatus(true);
        }
        {

        }
      })
    }

    const next = async ()=>
        {
          songsData.map(async (item,index)=>
            {
              if(track._id==item._id  && index < songsData.length-1)
              {
      await setTrack(songsData[index+1]);
      await audioRef.current.play();
      setPlayStatus(true);
              }
              {
      
              }
            })
        }
        const seekSong =async (e)=>
        {
          audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
        }
const getSongsData=async() => {
  try{
    const response=await axios.get(`${url}/api/song/list`);
    setSongData(response.data.songs);
    setTrack(response.data.songs[0]);

  }
  catch(error)
  {

  }
}

const getAlbumsData=async()=>
{
  try{
      const response=await axios.get(`${url}/api/album/list`);
      setAlbumData(response.data.list)
  }
  catch(error)
  {

  }
}
    useEffect(() => {
        const timeout = setTimeout(() => {
          if (!audioRef.current) return;
      
          audioRef.current.ontimeupdate = () => {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 1;
      
        
            if (seekBar.current) {
              seekBar.current.style.width = `${Math.floor((current / duration) * 100)}%`;
            }
      
            // Update time state
            setTime({
              currentTime: {
                minute: Math.floor(current / 60),
                second: Math.floor(current % 60),
              },
              totalTime: {
                minute: Math.floor(duration / 60),
                second: Math.floor(duration % 60),
              }
            });
          };
        }, 1000);
      
        return () => clearTimeout(timeout); // cleanup
      }, [audioRef]);


      useEffect(()=>
      {
          getSongsData();
          getAlbumsData();
      },[])
      

    const contextValue={
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong,
        songsData,
        albumsData
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;

