const { strict } = require("assert")
const { error } = require("console")
const mongoose = require("mongoose")


const required = new mongoose.Schema({
    teacher_name : {
        type: String,
    },
    student_name:{
        type: String,

    },
    marks:{
        type:Number,      
    }

})
//now a new collection 
const student= new mongoose.model("student", required)

module.exports= student