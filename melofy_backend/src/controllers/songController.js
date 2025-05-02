import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
const addSong = async (req, res) => {
    try {
      const name = req.body.name;
      const desc = req.body.desc;
      const album = req.body.album;
  
      console.log("FILES:", req.files); // Debug log
      console.log("BODY:", req.body);
console.log("FILES:", req.files);
  
      const audioFile = req.files.audio[0];
      const imageFile = req.files.image[0];
  
      const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
        resource_type: "video",
      });
  
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });

      const duration=`${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
  
     const songData={
        name,
        desc,
        album,
        image:imageUpload.secure_url,
        file:audioUpload.secure_url,
        duration
     }

     const item =await songModel.create({
        
            name,
            desc,
            album,
            image:imageUpload.secure_url,
            file:audioUpload.secure_url,
            duration
     })
      res.status(200).json({ success:true,message: "Song uploaded successfully" });
      console.log("exaclyt below")
      console.log(imageUpload)
    } catch (error) {
      console.error("Error adding song:", error);
      res.status(500).json({ success:false,error: "Failed to add song" });
    }
  };
  
const listSong= async(req,res)=>{
        try{
            const val=await songModel.find();
       
            res.json({success:true,songs:val});
        }
        catch(error)
        {
          console.log(error)
            res.json({success:false});
        }

}
const removeSong= async(req,res)=>{
  try {
    const songId = req.body.id;

    if (!songId) {
      return res.status(400).json({ success: false, message: "No song ID provided" });
    }

    await songModel.findByIdAndDelete(songId);
    res.json({ success: true, message: "Song removed" });
  } catch (error) {
  
    res.status(500).json({ success: false, message: "Server error" });
  }

}

export {addSong,listSong,removeSong}