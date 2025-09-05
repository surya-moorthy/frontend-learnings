import { useRef, useState } from "react"
import { tokencreate } from "../utils/token";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function Submit(e) {
      e.preventDefault();
      const registered = localStorage.getItem("registered");
      if(registered == "yes") {
            const token = await tokencreate(username);
            localStorage.setItem("usertoken",token);
            return;
      }else {
        alert("you have not registered yet");
        navigate("/register")
        return;
      }   
    }

  return (
    <form onSubmit={Submit} className="flex flex-col items-center i w-lg bg-neutral-900 border-white border-1 rounded-2xl p-10 text-white" >
           <h4 className="text-neutral-50 text-3xl font-semibold tracking-tight">
               Language experience
           </h4>
          <div className="flex flex-col mx-auto justify-center w-[80%] gap-1.5">
                <label htmlFor="name" className="text-2xl font-semibold py-1.5 mt-1">Enter your name:</label>
                <input onChange={(e)=>{setUsername(e.target.value)}} type="text" name="name" id="name" className="bg-neutral-700 rounded-xl px-4 py-2 text-lg" required={true}/>
          </div>
         
          <div className="flex flex-col mx-auto justify-center w-[80%] gap-1.5">
                <label htmlFor="reason"  className="text-xl font-semibold p-1.5 mt-1">Name of the Language:</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="text" name="reason" id="reason" className="bg-neutral-700 rounded-xl px-4 py-2 text-lg"  required={true}/>
          </div>
          <button type="submit" className="mt-2.5 font-bold bg-purple-400 text-neutral-50 w-[75%] px-4 py-2 rounded-xl text-xl cursor-pointer hover:scale-90">
              Submit
          </button>
    </form>
  )
}
