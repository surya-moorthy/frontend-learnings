import { ArrowButton } from "@/components/ArrowButton";
import DashboardImg from "@/components/DashboardImg";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sliding from "@/components/Sliding";
import { SubCard } from "@/components/SubCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-full">
      
      <Navbar/>
    
     <div className="flex flex-col justify-center m-auto max-w-[1250px]">
        <div>
             <Hero/>
              <Sliding />
              <DashboardImg/>
        </div>
         <div className="flex flex-col justify-center m-auto text-center gap-2.5 mt-20">
             <p className="text-md text-neutral-500 font-poppins">Designers</p>
             <h1 className="text-2xl text-neutral-900 tracking-wide font-poppins">Simplicity meets polish at scale</h1>

             <div className="flex rounded-xl bg-gray-100 w-[850px] overflow-hidden mt-10">
              {/* Left column */}
              <div className="w-1/2 flex flex-col justify-center">
                <SubCard func="Write" desc="Craft an email like you're writing a doc" />
                <SubCard func="Polish" desc="Your email, your branding" />
                <SubCard func="Personalize" desc="Make it relevant, out of the box" />
              </div>

              {/* Right column: video */}
              <div className="w-1/2 p-2 flex items-center justify-center">
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
                  image="component.png"
                  title="Components"
                  desc="Create a Component, update it in one place, and it updates everywhere."
                  />
                </div>
         </div> 
      
      </div>
     </div>
  );
}

const Card = ({image,title , desc } : {image : string,title : string, desc : string}) => {
  return (
     <div className="bg-gray-100 justify-center items-center p-8 w-1/2 rounded-2xl">
        <div className="px-5">
             <img 
              src={image} 
              alt={title} 
              className="rounded-xl"
            />
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
