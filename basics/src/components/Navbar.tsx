import { Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    function navigateCart() {
        navigate("/cart" ,  {
            replace : true
        })
    }

  return (
     <header className='sticky top-0 w-full h-20 py-2 px-5 shadow-lg bg-nuetral-900 text-white flex justify-between items-center bg-gray-900'>
           <h3>
            Shopping Cary
           </h3>
           <div className='flex flex-1  justify-start gap-2 items-center  mx-8 bg-gray-700 px-5 rounded-2xl py-2  '>
               <Search size={20}/>
               <input type='text' className='outline-none border-none px-2 py-1 text-lg' placeholder='Search....'/>
           </div>
           <div className='flex justify-center gap-5 items-center'>
                 <button className="font-bold bg-purple-400 text-neutral-50 w-[50] px-4 py-2 rounded-xl text-xl cursor-pointer hover:scale-90">
                    Profile
                </button>
                <ShoppingCart size={30} onClick={navigateCart} className="cursor-pointer rounded-xl bg-neutral-700 text-white size-10 p-2"/>
           </div>
     </header>
  )
}
