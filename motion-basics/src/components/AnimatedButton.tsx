import { motion } from "motion/react";
import { useState } from "react";

export default function AnimatedButton() {
  const [left, setLeft] = useState(0);

  return (
    <div className="flex items-center justify-center bg-neutral-900 w-screen h-screen">
      <div className="flex flex-col items-center gap-6 ">
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 50,
            position: "absolute",
            cursor: "grab"
          }}
          animate={{
            top : 300,
            scale: 1.1,
            rotate: left,
            backgroundColor: "#84cc16",
            boxShadow: "0px 0px 25px 0px #f8fafc"
          }}

          drag
          dragConstraints={{right : 140 , left: -140}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="z-10 flex gap-4">
          <motion.button
            whileTap={{scale : 1.5}}
            whileHover={{scale: 0.9}}
            onClick={() => setLeft(left - 90)}
            className=" px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-300 text-white font-semibold shadow-md hover:from-rose-500 hover:to-pink-600 transition duration-300"
          >
            Rotate +          
          </motion.button>
          <motion.button
            whileTap={{scale : 1.5}}
            whileHover={{scale: 0.9}}
            onClick={() => setLeft(left - 90)}
            
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-300 text-white font-semibold shadow-md hover:from-rose-500 hover:to-pink-600 transition duration-300"
          >
            Rotate -
          </motion.button>
        </div>
      </div>
    </div>
  );
}
