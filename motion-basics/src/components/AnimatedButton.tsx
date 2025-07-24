import { motion } from "motion/react";
import { useState } from "react";

export default function AnimatedButton() {
  const [left, setLeft] = useState(0);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-6 ">
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 50,
            position: "absolute",
          }}
          animate={{
            top : 300,
            scale: 1.1,
            rotate: left,
            backgroundColor: "#84cc16",
          }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="z-10 flex gap-4">
          <button
            onClick={() => setLeft(left + 90)}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold shadow-md hover:from-green-500 hover:to-lime-600 transition duration-300"
          >
            Rotate +
          </button>
          <button
            onClick={() => setLeft(left - 90)}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold shadow-md hover:from-rose-500 hover:to-pink-600 transition duration-300"
          >
            Rotate -
          </button>
        </div>
      </div>
    </div>
  );
}
