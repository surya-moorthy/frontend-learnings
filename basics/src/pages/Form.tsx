import { useRef, useState } from "react"

export default function Form() {

    const [name,setName] = useState("");
    const [reason,setReason] = useState("");
    const [language,setLanguage] = useState("");
    const [experience,setExperience] = useState("");

    function Submit(e) {
      e.preventDefault();
       console.log({
            language,
            experience,
            name,
            reason
       })
    }
  return (
    <form onSubmit={Submit} className="flex flex-col items-center i w-lg bg-neutral-900 border-white border-1 rounded-2xl p-10 text-white" >
           <h4 className="text-neutral-50 text-3xl font-semibold tracking-tight">
               Language experience
           </h4>
          <div className="flex flex-col mx-auto justify-center w-[80%] gap-1.5">
                <label htmlFor="name" className="text-2xl font-semibold py-1.5 mt-1">Enter your name:</label>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" name="name" id="name" className="bg-neutral-700 rounded-xl px-4 py-2 text-lg" required={true}/>
          </div>
          <div className="flex flex-col mx-auto justify-center w-[80%] gap-1.5">
                <label htmlFor="language"  className="text-2xl font-semibold p-1.5 mt-1">Language:</label>
                 <select
                 onChange={(e)=> {setLanguage(e.target.value)}}
                 name="language" id="language" className="bg-neutral-700 rounded-xl px-4 py-2 text-lg" >
                    <option value="">--select an option--</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                    <option value="C">C</option>
                    <option value="Go">Golang</option>
                    <option value="Rust">Rust</option>
                    <option value="Solidity">Solidity</option>
                 </select>
          </div>
          <div className="flex flex-col mx-auto justify-center w-[80%] gap-1.5">
                <label htmlFor="experience"  className="text-2xl font-semibold p-1.5 mt-1">Experience:</label>
                <select 
                onChange={(e)=> {setExperience(e.target.value)}}
                name="experience" id="experience" className="bg-neutral-700 rounded-xl px-4 py-2 text-lg" >
                    <option value="">--select an option--</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Pro">Pro</option>
                </select>
          </div>
          <div className="flex flex-col mx-auto justify-center w-[80%] gap-1.5">
                <label htmlFor="reason"  className="text-xl font-semibold p-1.5 mt-1">Name of the Language:</label>
                <input onChange={(e)=>{setReason(e.target.value)}} type="text" name="reason" id="reason" className="bg-neutral-700 rounded-xl px-4 py-2 text-lg"  required={true}/>
          </div>
          <button type="submit" className="mt-2.5 font-bold bg-purple-400 text-neutral-50 w-[75%] px-4 py-2 rounded-xl text-xl cursor-pointer hover:scale-90">
              Submit
          </button>
    </form>
  )
}
