import React, { useEffect, useState } from 'react'
import { url } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
const ListAlbum = () => {
  const [data,setData]=useState([]);
  const fetchAlbum=async()=>
  {
    try{
      const response=await axios.get(`${url}/api/album/list`);
      console.log(response);
      if(response.data.succes)
      {
        setData(response.data.list);
        toast.success("fetching")
      }
    }
    catch(error)
    {
      toast.error("Error Ocuured")
    }
  }

  useEffect(()=>
{
    fetchAlbum();
},[])

const removeAlbum=async(id)=>
{
  console.log(id);
  try{
      const response=await axios.post(`${url}/api/album/remove`,{"id":id});
      if(response.data.succes)
      {
     await fetchAlbum();
      }
      else{
        toast.error("Some error occured");
      }
      
  }
  catch(error){
    toast.error("Some error occured ");
    console.log("errror");
  }
}
  return (
    <div>
     <p>All Albums List</p>
     <br></br>
     <div>
      <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] itmes-center gap-2.5 p-3 border border-gray-3-300 text-sm mr-5 bg-gray-100'>
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Album Color</b>
        <b>Action</b>
              </div>
              {data.map((item,index)=>
              {
                return(
                  <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] itmes-center gap-2.5 p-3 border-gray-300 text-sm mr-5'>
<img className='w-12' src={item.image}></img>
<p> {item.name}</p>
<p>{item.desc}</p>
<input type="color" value={item.bgColor} readOnly />
<p onClick={(e)=>removeAlbum(item._id)} className='cursor-pointer'>✖</p>
                    </div>
                )
              })}
     </div>
    </div>
  )
}

export default ListAlbum
