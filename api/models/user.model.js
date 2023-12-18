import mongoose from "mongoose";



const userschema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true,   //for unique username 
    },
    email:{
        type: String,
        required : true,
        unique: true,
    },
    password:{
        type: String,
        required : true,
       
    },
    avatar:{
        type: String,
        default:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
    },

},{timestamps:true});

const User = mongoose.model('User',userschema);

export default User; 