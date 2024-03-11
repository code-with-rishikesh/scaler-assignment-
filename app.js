const express=require("express");
require("./database/conn")

const student = require("./database/students");
const app= express();
const port= process.env.PORT||3000;
app.use(express.json());   //for recognising the json received as request in post from postman
app.set("view engine", "hbs");
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{              //home directory
    res.render("index")
})




app.post("/n",async(req,res)=>{
try{
    const user= new student(req.body);
console.log(req.body);
 const saved=await user.save() ;
 const names=saved.name;
// const fetched_data = await student.find()
 res.send("<h1>Congratulations! you have added data succesfully!</h1>" );
}
catch(e){
       res.send(e);
}
})






app.listen(port,()=>{
    console.log("connection is succesful");

})