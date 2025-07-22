import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div  className='fixed top-0 left-0 right-0 z-50 flex flex-row justify-around items-center border-b border-neutral-200 h-12 px-10 bg-white backdrop-blur-md'>
        <Logo/>
        <div className='flex justify-around items-center gap-4'>
              <button className='outline-0 text-md text-stone-600 font-bold px-2.5 py-0.5 rounded-lg hover:bg-neutral-100 cursor-pointer '>
                Docs
              </button>
                <button className='outline-0 text-md text-stone-600 font-bold px-2.5 py-0.5 rounded-lg hover:bg-neutral-100 cursor-pointer '>
                Pricing
              </button>
               <button className='group flex items-center gap-2.5 outline-0 text-md text-stone-600 font-bold px-2.5 py-0.5 rounded-lg hover:bg-neutral-100 cursor-pointer '>  
                 <span> Guides</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:rotate-90 transition-all duration-300"><path d="m9 18 6-6-6-6"/></svg>
               </button>
               <button className=' text-md border-1 border-neutral-300 text-stone-600 font-semibold font-noto px-2.5 py-0.5 rounded-xl hover:bg-neutral-100 cursor-pointer '>  
                  log in
               </button>
               <button className='outline-0 text-md text-white bg-neutral-900 font-semibold font-noto px-4 py-0.5 rounded-lg cursor-pointer '>  
                     Start
               </button>
        </div>
    </div>
  )
}
