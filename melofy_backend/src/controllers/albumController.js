import {v2 as cloudinary} from "cloudinary"
import albumModel from "../models/albumModel.js"
const addAlbum =async(req,res)=>
{
try{
    const name=req.body.name;
    const desc=req.body.desc;
    const bgColor=req.body.bgColor;
    const imageFile=req.file;
    const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
    const albumData={name,
        desc,
        bgColor,
        image:imageUpload.secure_url
    }
    const album= await albumModel.create(albumData);
    
    res.json({succes:true,message:"album added"})
}
catch(error)
{
    res.json({succes:false})
}

}

const listAlbum=async(req,res)=>
{
try{
    const list=await albumModel.find();
    console.log(list);
    res.json({succes:true,list:list})
}
catch(error)
{
    console.log(error)
    res.json({message:failed})
}
}

const removeAlbum=async(req,res)=>
{
    try{
        const delet=await albumModel.findByIdAndDelete(req.body.id);
        console.log("deleted");
        res.json({succes:true})
    }
    catch(error)
    {
        console.log(error);
        res.json({succes:false});
    }
}

export {addAlbum,listAlbum,removeAlbum};