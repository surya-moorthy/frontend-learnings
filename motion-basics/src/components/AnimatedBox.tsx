import { motion, useAnimation, type Easing } from "framer-motion";
import { useState } from "react";

// learnt useAnimation() component.

export default function AnimatedBox() {
  
    const [easing , setEase]= useState<Easing>("anticipate");
     const [rotated, setRotated] = useState(false);
    const controls = useAnimation();

     const handleClick = ({ ease }: { ease: Easing }) => {
    setEase(ease);
    setRotated((r) => !r); // toggle value to force animation
    controls.start({
      rotate: rotated ? 0 : 360,
      scale: rotated ? 1 : 1.5,
      transition: {
        type: "decay",
        duration: 2,
        ease: ease,
        repeat: Infinity,
        delay : 0.5
      },
    });
  };   
   
  return (
    <div className="flex w-[80%] p-10  space-y-4 mt-20">
      <div className="flex items-center justify-center w-1/2">
           <motion.div
                className="w-[100px] h-[100px] bg-white rounded-[20px]"
                animate={controls}

            />
      </div>
      <div className="flex flex-col justify-center border border-neutral-100 px-4 py-6 rounded-2xl items-center gap-5">
           <button className="px-4 py-2 bg-white text-black glowing-box " onClick={()=> {setEase("anticipate"),handleClick({ease : "anticipate" })}}>
                Animate with anticipate
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box"  onClick={()=> {setEase("backIn"),handleClick({ease : "backIn" })}}> 
                Animate with backIn
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box "  onClick={()=> {setEase("backInOut"),handleClick({ease : "backInOut" })}}>
                Animate with backInOut
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box " onClick={()=> {setEase("backOut"),handleClick({ease : "backOut" })}}>
                Animate with backOut
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("circIn"),handleClick({ease : "circIn" })}}>
                Animate with circIn
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("circInOut"),handleClick({ease : "circInOut" })}}>
                Animate with circInOut
            </button>
            <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("circOut"),handleClick({ease : "circOut" })}}>
                Animate with circOut
            </button>
            <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("easeIn"),handleClick({ease : "easeIn" })}}>
                Animate with easeIn
            </button>
            <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("easeInOut"),handleClick({ease : "easeInOut" })}}>
                Animate with easeInOut
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("easeOut"),handleClick({ease : "easeOut" })}}>
                Animate with easeOut
            </button>
             <button className="px-4 py-2 bg-white text-black glowing-box "onClick={()=> {setEase("linear"),handleClick({ease : "linear" })}}>
                Animate with linear
            </button>
      </div>
    </div>
  );
}


