const mongoose=require('mongoose')
const {Schema}=mongoose;

const userSchema=new Schema({
    // userName:{
    //     type:String,
    //     required:true,
     
       
    // },
    
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    
        
        
    // },
    
    password:{
        type:String,
        required:true,
        // minLength:6,
        
       
       }
    

   
    })
    export const model =mongoose.model('user',userSchema);
