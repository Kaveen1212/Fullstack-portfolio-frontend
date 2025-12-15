"use client";

import React from "react";
import { motion } from "framer-motion";

interface CircularTextProps {
  text?: string;
}

const CircularTextAnimation: React.FC<CircularTextProps> = ({
  text = "design · kaveen · creative · "
}) => {
  const characters = text.split("");
  const anglePerCharacter = 360 / characters.length;

  return (
    <div className="absolute xl:left-10 left-5 top-5 xl:top-10 w-24 h-24 md:w-36  md:h-36 flex items-center justify-center">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {characters.map((char, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex justify-center"
              style={{ transformOrigin: "center", rotate: `${index * anglePerCharacter}deg` }}
            >
              <span
                className="font-Quantum text-black text-[8px] md:text-xs absolute"
                style={{ transformOrigin: "center", top: "3px" }}
              >
                {char}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 2px rgba(0,0,0,0.5))",
              "drop-shadow(0 0 5px rgba(0,0,0,0.8))",
              "drop-shadow(0 0 2px rgba(0,0,0,0.5))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="30" height="30" viewBox="0 0 70 70" className="md:w-[50px] md:h-[50px]">
            <path
              d="M52.6046 33.6064C44.0165 32.7789 37.2209 25.9866 36.3944 17.4058L34.9998 2.91666L33.6053 17.4058C32.7787 25.988 25.9832 32.7804 17.3951 33.6064L2.9165 35L17.3951 36.3936C25.9832 37.221 32.7787 44.0134 33.6053 52.5942L34.9998 67.0833L36.3944 52.5942C37.2209 44.012 44.0165 37.2196 52.6046 36.3936L67.0832 35L52.6046 33.6064Z"
              fill="black"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default CircularTextAnimation;