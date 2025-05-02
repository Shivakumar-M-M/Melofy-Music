import React, { useContext } from 'react'
import { PlayerContext } from '../context/Playercontext'

const Songitem = ({name,image,desc,id}) => {
  const {playWithId}=useContext(PlayerContext);
  return (
    <div onClick={()=>playWithId(id)}className='m-w-[180px] p-2 px-3 rounded curor-pointer hover:bg-[#ffffff26'>
        <img className='rounded' src={image}></img>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-bold '>{desc} </p>

      <div></div>
    </div>
  )
}

export default Songitem
