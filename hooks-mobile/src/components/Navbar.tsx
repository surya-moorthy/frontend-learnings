import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { Menu } from "lucide-react";

export default function Navbar() {
  const {loggedIn,setLoggedIn} = useContext(AuthContext);
  const [open,setOpen] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");
    if (stored === "yes") setLoggedIn(true);
  }, [setLoggedIn]);

  // Persist auth state to localStorage
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn ? "yes" : "no");
  }, [loggedIn]);

  return (
    
        <div className="fixed top-10 m-auto inset-x-0 w-[80%] md:max-w-[1200px] bg-neutral-800 rounded-2xl py-2 px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold">
                Title
            </h1>
            <div className="hidden md:flex justify-center items-center">
                    {
                        loggedIn && (
                            <div className="rounded-full px-4 py-2">
                                Logo
                            </div>
                        )
                    }
                    {
                    !loggedIn && (
                        <div className="flex justify-center items-center gap-2.5">
                            <button 
                            onClick={()=>{setLoggedIn(true)}}
                            className="rounded-2xl px-4 py-2 text-lg font-semibold cursor-pointer hover:bg-neutral-700">
                                Login
                            </button>
                            <button className="rounded-2xl px-4 py-2 text-lg font-semibold cursor-pointer hover:bg-neutral-700">
                                Register
                            </button>
                        </div>
                    )   
                    }
            </div>
           
           <div className="flex md:hidden">
              <button 
              onClick={()=>{
                setOpen((prev)=> !prev)
              }}
              className="bg-neutral-600 px-2 py-1 rounded-lg cursor-pointer">
                   <Menu />
              </button>

              {
                open && (
                    <div className="relative flex justify-center mt-10">
                    {
                    !loggedIn && (
                        <div className="absolute flex flex-col justify-center gap-2.5">
                            <button 
                            onClick={()=>{setLoggedIn(true)}}
                            className="rounded-2xl px-4 py-2 text-lg font-semibold cursor-pointer hover:bg-neutral-700">
                                Login
                            </button>
                            <button className="rounded-2xl px-4 py-2 text-lg font-semibold cursor-pointer hover:bg-neutral-700">
                                Register
                            </button>
                        </div>
                    )   
                    }

                    </div>
                )
              }
           </div>

        </div>
  )
}
