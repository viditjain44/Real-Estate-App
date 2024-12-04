import express  from "express";
import router from "./routes/auth.route.js";
 const app =express();
 console.log("hello world");
 app.use("/api/test",(req,res)=>{
    res.send("Are ho gya guru ")
 } )
 app.listen(8081,()=>{
    console.log("Server is running");

 });
 async function main() {
   await mongoose.connect('mongodb://localhost:27017/Real_estate');
   console.log('database connencted');
 }
 app.use("/auth",router );