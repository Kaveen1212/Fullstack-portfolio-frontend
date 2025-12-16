"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SlidingText from "./ui/SlidingText";
import CircularTextAnimation from "./ui/CircularTextAnimation";

const SECTION_HEIGHT = 1500;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["60%", "20%"]);
  const screenH = window.innerHeight;
  const pointerEvents = useTransform(opacity, (o) => (o < 0.01 ? "none" : "auto"));

  const videoYRaw = useTransform(scrollY, [0, 600], [0, -900]);
  const videoOpacityRaw = useTransform(scrollY, [0, 400, 600], [1, 0.7, 0]);
  const videoPositionRaw = useTransform(scrollY, [0, 600], [10, screenH - 500 - 10]);

  const springConfig = { stiffness: 80, damping: 30 };
  const videoY = useSpring(videoYRaw, springConfig);
  const videoOpacity = useSpring(videoOpacityRaw, springConfig);
  const videoPosition = useSpring(videoPositionRaw, springConfig);

  return (
    <motion.section
    className="fixed top-0 left-0 w-screen h-screen text-black bg-[#F8FBF8] overflow-hidden z-0"
    style={{
      zIndex: 30,
      opacity,
      pointerEvents
    }}
  >
    <div
      className="absolute inset-0 opacity-40 z-5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px"
      }}
    />

    <div className="w-full h-full flex items-center justify-center relative z-10">
      <CircularTextAnimation />
      <div className="absolute inset-0 flex items-center z-0 overflow-hidden">
        <SlidingText />
      </div>
      <div className="relative flex flex-col top-10 items-center z-10">
        <motion.img
            src="/hi.png" alt=""
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] object-contain z-10"
          style={{
            opacity: opacity,
            backgroundSize,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        
      </div>
    </div>

    <motion.div
  className="fixed right-2
    z-30 shadow-lg rounded-lg overflow-hidden bg-black
    w-[150px] h-[75px]
    lg:w-[250px] lg:h-[150px]
    xl:w-[350px] xl:h-[200px]
    hidden lg:block"
  style={{
    bottom: videoPosition,
    y: videoY,
    opacity: videoOpacity
  }}
>
  <video
    src="/Matrix_Effect.mp4"
    controls
    autoPlay
    loop
    muted
    className="w-full h-full object-cover"
  />
</motion.div>
    </motion.section>
  );
};

export default Hero;