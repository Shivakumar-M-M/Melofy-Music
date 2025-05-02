import express from "express";
import { addSong, listSong, removeSong} from "../controllers/songController.js";
import upload from "../middelware/multer.js";


const songRouter = express.Router();

songRouter.post(
    "/add",
    upload.fields([
      { name: "image", maxCount: 1 }, // ✅ corrected name from "imaage" to "image" 
      //the immage is stored in req.file and audio stored in req.files
      { name: "audio", maxCount: 1 },
    ]),
    addSong
  );
  
songRouter.get('/list', listSong);
songRouter.post('/remove',removeSong)

export default songRouter;