import { X } from "lucide-react";
import Image from "next/image"; 
import {AnimatePresence, motion} from "motion/react";
import { useState } from "react";

export default function Card() {
    const [openstate , SetOpenstate] =useState(true);
  return (
    <>
    <AnimatePresence>
    {openstate && <motion.div 
    initial={{
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)"
    }}
    animate= {{
       opacity: 1,
       scale: 1.05,
       filter: "blur(0px)"
    }}
    exit={{
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)"
    }}
    transition={{
        duration: 0.5,
        ease: "easeInOut"
    }}
    className="flex flex-col p-6 w-72 h-[26rem] rounded-xl text-neutral-900 bg-white [box-shadow:0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
      <h1 className="font-bold text-[10px]">
          Acerternity UI Components
      </h1>
      <p className="text-neutral-600 mt-2 text-[10px]">
       A collection of beautiful UI Components, let's get on with it.
      </p>
      <div className="flex items-center justify-center">
        <button className="
            flex items-center gap-1 text-[10px] mt-4 rounded-md px-2 py-1
            [box-shadow:0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
            <Image 
            width={15} 
            height={15} 
            alt="acerternity image" src={"/logo.png"}/>
            <span>Acerternity</span>
           <X className="h-3 w-3 text-neutral-400" onClick={()=>{SetOpenstate(false)}}/>
        </button>
      </div>
      <div className="relative flex-1 bg-gray-100 mt-4 rounded-lg border border-neutral-200">
         <motion.div 
         initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)"
         }}
         whileHover={{
            opacity: 1, 
            scale: 1.05,
            filter: "blur(0px)"
         }}
         transition={{
            type: "spring",
            duration: 0.5,
            ease: "easeInOut"
         }}
         className="absolute border border-neutral-200
         inset-0 h-full w-full rounded-lg bg-white divide-y divide-neutral-400">
             <div className="p-4 text-[10px] flex items-start">
                    abcd
             </div>
             <div className="p-4 text-[10px] flex items-start">
                    abcd
             </div>
              <div className="p-4 text-[10px] flex items-start">
                    abcd
             </div>
              <div className="p-4 text-[10px] flex items-start">
                    abcd
             </div>
              <div className="p-4 text-[10px] flex items-start">
                    abcd
             </div>
         </motion.div>
      </div>
    </motion.div>
    }
    </AnimatePresence>
    </>
  );
}
