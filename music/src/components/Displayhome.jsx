import React from 'react'
import Navbar from './Navbar'
// import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import Songitem from './Songitem'
import { useContext } from 'react'
import { PlayerContext } from '../context/Playercontext'
const Displayhome = () => {
  const {songsData,albumsData}=useContext(PlayerContext);
  return (
    <>
      <Navbar></Navbar>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'> Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((albumb,index)=>(
            <Albumitem key={index} name={albumb.name} image={albumb.image} desc={albumb.desc} id={albumb._id} ></Albumitem>
        ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Fest</h1>
        <div className='flex overflow-auto'>
        {songsData.map((albumb,index)=>(
            <Songitem key={index} name={albumb.name} desc={albumb.desc} image={albumb.image} id={albumb._id}></Songitem>
        ))}
        </div>
      </div>
      
    </>
  )
}

export default Displayhome
