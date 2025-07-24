"use client"

import {motion} from "motion/react";

export default function Home() {
  return (
    <div 
    className="[perspective::1000px] [transform-style:preserve-3d] w-full h-screen bg-neutral-950 flex items-center justify-center"
    style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px,rgba(6,182,212,0.2) 1px,transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat",
    }}
    >
      <motion.button 
      whileHover={{
        rotateX: 25,
        rotateY: 10,
        boxShadow: "0px 20px 25px rgba(8,112,184,0.7)",
        y: -20 
      }}
      style={{
        translateZ: 100
      }}
      // initial={{
      //   rotate: 0
      // }}
      // animate={{
      //   rotate: 360
      // }}
      transition={{
        duration: 0.5,
        ease: "easeIn"
      }}
      className="group relative  px-12 py-4 rounded-lg bg-black text-neutral-500 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] overflow-hidden">
        <span className="group-hover:text-cyan-500 transition-colors duration-300">Subscribe</span>
        <span className="absolute bottom-px inset-x-0
        bg-gradient-to-r from-transparent via-cyan-500 to-transparent
        h-px w-full mx-auto "/>
        <span className="absolute opacity-0 group-hover:opacity-20 bottom-px inset-x-0
        bg-gradient-to-r from-transparent via-cyan-500 to-transparent
        h-[20px] w-full mx-auto blur-md transition-opacity duration-300 animate-pulse" />
      </motion.button>
    </div>
  );
}
