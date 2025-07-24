import { motion, type RepeatType } from "motion/react";
import { useState } from "react";

export default function Tween() {
    const [repeatType , setRepeatType] = useState<RepeatType>("loop");
    return(
        <motion.div
        className="w-40 h-40 rounded-2xl bg-white"
        animate={{
            rotate: 360
        }}
        transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 1,
                delay: 1,
                repeatType: repeatType
            }}
        />
    )
} 