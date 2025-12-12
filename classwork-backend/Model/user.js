import mongoose from "mongoose";
const studentsSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true, unique:false},
        phoneNumber:{type:String, required:true,unique:false},
        password:{type:String, required:true},
        country:{type:String, required:false},
        state:{type:String, required:false},
        address:{type:String, required:false},
        userName:{type:String,required:false}
    },
    {timestamps:true}
)

const students = mongoose.model("student",
    studentsSchema)
    export default students
