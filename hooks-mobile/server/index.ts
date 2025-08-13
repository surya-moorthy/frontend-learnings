import express from "express";
import cookie from "cookie-parser";
import jwt from "jsonwebtoken"
import cors from "cors";
const  jwt_secret = "jsonsecret";

const app = express();

app.use(cors());

app.use(express.json());



app.post("/login",async (req,res)=> {
     const {user,password} = req.body;
     console.log(user,password);
     if(user == "surya" && password == "password") {
         const token = await jwt.sign({user : user},jwt_secret,{
            algorithm: "HS512",
            expiresIn: 60,
         },);
         res.status(200).json({
            message: "login success",
            token : token
         })
         return;
     } 
     res.status(404).json({
            message: "login unsuccess",
         })
})

const userMiddleware = ()=> {

}

app.get("/dashboard",(req,res,next)=>{
   
})

app.listen(3000,()=>{
    console.log("app is running it on port 3000");
});