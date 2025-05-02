import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Routes,Route } from 'react-router-dom';
import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListAlbum from './pages/ListAlbum';
import ListSong from './pages/ListSong';
import NotFound from './pages/NotFound';
import SideBar from "./components/Sidebar"
import Navbar from './components/Navbar';
export const url='http://localhost:4000';
const App = () => {
  
  return (
<div className='flex items-start min-h-screen' >


  <ToastContainer />
  <SideBar></SideBar>

 <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FF7'>
 <Navbar></Navbar>
  <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
    <Routes>
    <Route path="/add-song" element={<AddSong className="bg-green-200" />} />

      <Route path="/add-album" element={<AddAlbum></AddAlbum>}></Route>
      <Route  path="/List-song" element={<ListSong></ListSong>}></Route>
      <Route path="/List-album" element={<ListAlbum></ListAlbum>}></Route>
      <Route path="*" element={<NotFound/>}></Route>

     
    </Routes>
  </div>

 </div>


      
    </div>
  )
}

export default App
