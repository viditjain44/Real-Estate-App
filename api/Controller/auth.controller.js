 import bcrypt from "bcrypt";
import {model }from "../../Schema/Registration.js"

 export const REGISTER=  async (req,res) => {
    
    // res.send(Password);
    // const hashedpassword =  await bcrypt.hash(Password,12);
//     const newUser = await prisma.user.create({
//         data : {
//             Password: "hashedpassword",

//         },
//     }) ;
// res.send(newUser);
// 
const user= new model(req.body);
res.json(user);
};
export const LOGIN= (req,res) => {
    console.log("Registration ");
}
export const LOGOUT= (req,res) => {
    console.log("Registration ");
}

