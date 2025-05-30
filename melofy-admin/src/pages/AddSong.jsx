import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';
const AddSong = () => {
    const [image,setImage]=useState(false);
    const [song,setSong]=useState(false);
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [album,setAlbum]=useState("none");
    const [loading,setLoading]=useState(false);
    const [albumData,setAlbumData]=useState([]);

const fetchAlbum=async()=>
{
    try{
    const response=await axios.get(`${url}/api/album/list`);
    console.log(response);
    setAlbumData(response.data.list)
    }
    catch(error)
    {
        console.log(error);
    }
   
}

    const onSumitHandler=async(e)=>
    {
        e.preventDefault();
        setLoading(true);
        try{
            const formData=new FormData();{/**FormData is a built-in JavaScript object that allows you to easily construct a set of key/value pairs to send data—especially form inputs—using HTTP requests, typically with fetch() or XMLHttpRequest. */}
            formData.append('name',name);
            formData.append('desc',desc);
            formData.append('image',image);
            formData.append('audio',song);
            formData.append('album',album);

            const response = await axios.post(`${url}/api/song/add`, formData);

            if(response.data.success)
            {
                toast.success("song added");
                setName("");
                setDesc("");
                setAlbum("none");
                setImage(false);
                setSong(false);
            }
            else{
                toast.error("Something went error")
            }
            
        }
        catch(e)
        {
            toast.error("Error occured")
        }
setLoading(false);
    }

    useEffect(()=>
    {
        fetchAlbum();
    },[])

  return loading? <div className='grid place-items-center min-h-[80vh]'>
    <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>

  </div> :(
   <form onSubmit={onSumitHandler} className='flex flex-col items-start gap-8 btext-gray-600'>
    <div className='flex gap-8'>
        <div className='flex flex-col gap-4'>
            <p>Upload song</p>
            <input onChange={(e)=>{
setSong(e.target.files[0])
            }} type='file'id='song' accept="audio/*" hidden></input>  {/*it accept only the audio file*/}
            <label htmlFor="song">
                <img src={song?assets.upload_added:assets.upload_song} className='w-24 cursor-pointer' alt="" ></img>
            </label>
        </div>
        <div className='flex flex-col gap-4'>
            <p>Upload Image</p>
            <input onChange={(e)=>{
                setImage(e.target.files[0])
            }} type="file" id="image" accept='image/*' hidden></input>
            <label htmlFor='image'>
                <img src={image? URL.createObjectURL(image):assets.upload_area} className='w-24 cursor-pointer' alt=""></img>{/** URL.CreateObject URl help to display the upload image */}
            </label>
        </div>
    </div>
    <div className='flex flex-col gap-2.5'>
<p>Song Name </p>
<input onChange={(e)=>{
    setName(e.target.value)
}} value={name}className='bg-transparent outline-green-600 border-2 bortder-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' type='text' required></input>
  <p>{name}</p>
    </div>


    <div className='flex flex-col gap-2.5'>
<p>Song Description </p>
<input onChange={(e)=>{
    setDesc(e.target.value)
}} value={desc} className='bg-transparent outline-green-600 border-2 bortder-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' type='text' required></input>
    </div>
   
<div className='flex flex-col gap-2.5 ' >
        <p>Album</p>
        
        <select 

  onChange={(e) => setAlbum(e.target.value)}
  defaultValue={album}
  className="bg-transparent outline-green-600 border-2 border-gray-400 p-2"
>
<option  value="none">none</option>

  {
    albumData.map((item, index) => (
      <option key={index} value={item.name}>{item.name}</option>
    ))
  
}

 
</select>

    </div>

  
    
    <button type="submit" className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
   </form>
  )
}

export default AddSong
