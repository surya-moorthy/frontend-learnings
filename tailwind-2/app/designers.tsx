"use client";
import { motion } from "framer-motion";
import { ArrowButton } from "@/components/ArrowButton"
import { SubCard } from "@/components/SubCard"

export default function Designer() {
    return (
        <div className="flex flex-col justify-center m-auto text-center gap-2.5 mt-20">
             <p className="text-md text-neutral-500 font-poppins">Designers</p>
             <h1 className="text-3xl text-neutral-900 font-bold  font-poppins">Simplicity meets polish at scale</h1>

             <div className="flex rounded-xl bg-neutral-100 w-[850px] overflow-hidden mt-10">
              {/* Left column */}
              <div className="w-1/2 flex flex-col justify-center border-r-1">
                <SubCard func="Write" desc="Craft an email like you're writing a doc" />
                <SubCard func="Polish" desc="Your email, your branding" />
                <SubCard func="Personalize" desc="Make it relevant, out of the box" />
              </div>

              {/* Right column: video */}
              <div className="w-1/2 p-4 flex items-center justify-center">
                <video
                  src="/cardvideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="max-w-[850px] flex gap-10 mt-5">
                <Card 
                  image="themes.png" 
                  title="Themes" 
                  desc="Save attributes in a single, reusable theme that anyone on your team can apply to any email."/>
                <Card 
                  image="components.png"
                  title="Components"
                  desc="Create a Component, update it in one place, and it updates everywhere."
                  />
                </div>
         </div>  
    )
}

const Card = ({image,title , desc } : {image : string,title : string, desc : string}) => {
  return (
     <div className="bg-neutral-100 justify-center items-center p-8 w-1/2 rounded-2xl">
        <div className="px-5">
             <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            >
             <img 
              src={image} 
              alt={title} 
              className="rounded-xl shadow"
            />
        </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-3 mt-8">
             <p className='text-sm font-bold text-neutral-700'>{title}</p>
             <p className='text-neutral-400 tracking-wide text-sm font-semibold'>
              {desc}
             </p>
             <ArrowButton title="Learn More"/>
        </div>
     </div>
  )
} 
