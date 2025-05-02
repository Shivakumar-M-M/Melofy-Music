import {v2 as  cloudinary} from 'cloudinary';
import { connect } from 'mongoose';

const connectCloudinary=async()=>
{
    await cloudinary.config(
        {
            cloud_name:process.env.ClOUDINARY_NAME,
            api_key:process.env.ClOUDINARY_API_KEY,
            api_secret:process.env.ClOUDINARY_SECRETE_KEY
        }
    )
}

export default connectCloudinary;