import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate,NavLink } from 'react-router-dom';
const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className='bg-[#0b4e0e] min-h-screen pl-[4vw]'>
      <img
        src={assets.logo}
        className='w-[max(10vw,100px)] pt-4 hidden sm:block'
        alt='logo'
      />
      <img
        src={assets.logo_small}
        className='mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block'
        alt='small logo'
      />
      <div className='flex flex-col gap-5 mt-10'>
        <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5B] text-sm font-medium'>
          <img src={assets.add_song} className='w-5' alt='Add Song' />
          <p className='hidden sm:flex sm:flex-col'>Add Song</p>

        </NavLink>
        <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5B] text-sm font-medium'>
          <img src={assets.song_icon} className='w-5' alt='Add Song' />
          <p className='hidden sm:block'>Add List Song</p>
        </NavLink>
         <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5B] text-sm font-medium'>
          <img src={assets.add_album} className='w-5' alt='Add Song' />
          <p className='hidden sm:block'>Add Album</p>
        </NavLink>
        <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5B] text-sm font-medium'>
          <img src={assets.album_icon} className='w-5' alt='Add Song' />
          <p className='hidden sm:block'>List album</p>
        </NavLink>


      </div>
    </div>
  );
};

export default Sidebar;
