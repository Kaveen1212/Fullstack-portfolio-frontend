"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity?: number;
}

const ParallaxText: React.FC<ParallaxProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
  ref={ref}
  className="relative overflow-hidden whitespace-nowrap flex flex-nowrap tracking-tight leading-[0.8] m-0 w-screen p-0"
  style={{ scale: scale.get(), opacity: opacity.get() }}
>
      <div
        className="absolute left-0 top-0 w-12 lg:w-24 xl:w-32 h-full z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #F9F8EB 0%, rgba(249, 248, 235, 0.8) 30%, rgba(249, 248, 235, 0.4) 60%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 w-32 h-full z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #F9F8EB 0%, rgba(249, 248, 235, 0.8) 30%, rgba(249, 248, 235, 0.4) 60%, transparent 100%)",
        }}
      />

      <motion.div
  className="font-plaster font-semibold uppercase text-[28px] md:text-[36px] xl:text-[64px] flex whitespace-nowrap text-gray-500"
  style={{ x }}
>
  {Array.from({ length: 12 }).map((_, i) => (
    <span
      className="block mr-[10px] md:mr-[20px] xl:mr-[30px]"
      key={i}
    >
      {children}{" "}
    </span>
  ))}
</motion.div>
    </div>
  );
};

export default ParallaxText;