const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://rishikesh32002:rishi0@cluster0.e1h4myx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")    //creating a database hello
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err))