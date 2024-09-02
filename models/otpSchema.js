
import mongoose from "mongoose";
const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please provide your Name'],
    },
    otp:{
        type:Number,
        // required:[true,"Please provide OTP"],
    },
   
    used:{
        type:Boolean,
        // required:[true]
    },
    creationDate:{
        type:String,
    },
    expire:{
        type:String,
    }
})



export const Otp=mongoose.model("Otp", otpSchema)