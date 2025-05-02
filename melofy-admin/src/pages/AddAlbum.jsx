import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {
  
  const [image,setImage]=useState(false);
  const [color,setColor]=useState("#ffffff")
  const [name,setName]=useState("");
  const [desc,setdesc]=useState("");
  const [loading,setLoading]=useState(false);
  
  const onSumitHandler=async(e)=>
  {
    e.preventDefault();
    setLoading(true);
    
    try{
      const formdata=new FormData();
      formdata.append('name',name);
      formdata.append('desc',desc);
      formdata.append('bgColor',color);
      formdata.append('image',image);
      const response=await axios.post(`${url}/api/album/add`,formdata);
      console.log(response)
      if(response.data.succes)
      {
        setImage(false);
        setColor('#ffffff');
        setName("");
        setdesc("");
        toast.success("added succesfully");
      }
      else{
        toast.error("Some Error Ocuures");
      }
    }
    catch(error)
    {
      toast.error("Some Error Ocuures");
    }
    setLoading(false);

  }
  

  return ( loading?<div className='grid place-items-center min-h-[80vh]'>
    <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>

  </div>:
    <div>
      <form onSubmit={onSumitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex flex-col gap-4'>
          <p>Upload Image</p>
          
          <input 
            type='file' 
            id='image' 
            accept='image/*' 
            hidden 
            onChange={(e)=>setImage(e.target.files[0])}
          />

          <label htmlFor='image'>
            <img 
              className='w-24 h-24 object-cover border cursor-pointer' 
              src={image?URL.createObjectURL(image):assets.upload_area} 
              alt='Upload Preview' 
            />
          </label>
        </div>
        <div className='flex flex-col gap-2.5'>
          <p>Album name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className=" bg-transparent outline-green-600 border-gray-400 p-2.5 w-[max(40vw,250px)]" type="text" placeholder='type here'></input>
          </div>

          <div className='flex flex-col gap-2.5'>
          <p>Album Description</p>
          <input onChange={(e)=>setdesc(e.target.value)} value={desc} className=" bg-transparent outline-green-600 border-gray-400 p-2.5 w-[max(40vw,250px)]" type="text" placeholder='type here'></input>
          </div>

          <div className='flex flex-col gap-2.5'>
          <p>Background Color</p>
          <input onChange={(e)=>setColor(e.target.value)} value={color}type='color' ></input>
          </div>
          <button className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'  type="submit">
            Add
          </button>
          
      </form>
    </div>
  );
};

export default AddAlbum;
