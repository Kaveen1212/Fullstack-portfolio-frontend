import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// BlurText component for animating each letter
const BlurText = ({
  text,
  delay = 150,
  className = "",
  inView = false,
}: {
  text: string;
  delay?: number;
  className?: string;
  inView?: boolean;
}) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
        animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
        transition={{
          delay: delay / 1000 + i * 0.07,
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

export default function ContactMe() {
  const ApostropheSVG = ({ className = "", rotate = false }) => (
    <svg
      width="191"
      height="443"
      viewBox="0 0 191 443"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${rotate ? 'rotate-180' : ''}`}
    >
      <path
        d="M191 443V253V252H90C89.6 223.2 97.5 192.333 101.5 180.5C117.5 120.5 166.167 92.8333 188.5 86.5V0C179.5 3 139.5 14 106.5 37.5C73.5 61 36.5 101.5 18.5 155C4.1 197.8 0.5 235.5 0.5 249L0 443H1H191Z"
        fill="white"
      />
    </svg>
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 30, damping: 20 },
    },
  };

  // Ref and inView for center content
  const centerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(centerRef, { amount: 0.5, once: false });

  return (
    <div className="min-h-30 lg:min-h-screen xl:min-h-screen bg-[#1b1b1b] text-white flex items-center justify-center p-4 md:p-8">
      {/* <SplashCursor /> */}
      <div className="relative w-full max-w-6xl">
        {/* Main content area */}
        <div className="flex items-center justify-center min-h-[300px] md:min-h-100vh z-10">
          {/* Left apostrophe with positioned text */}
          <motion.div
            className="relative flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeUp}
          >
            <ApostropheSVG className="h-30 w-auto md:h-55 opacity-90 mb-15 md:mb-20" />
            <div className="absolute top-0 left-15 md:left-25 flex flex-col items-start">
              <span className="text-[10px] md:text-xs font-bold leading-none">SPECIAL</span>
              <span className="text-[10px] md:text-xs font-bold leading-none">EDITION</span>
            </div>
          </motion.div>

          {/* Center content */}
          <motion.div
            ref={centerRef}
            className="flex flex-col items-center mx-1 md:mx-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }} // <-- not once!
            variants={fadeUp}
          >
            <div className="mb-1 md:mb-2">
              <span className="text-xs md:text-sm">Get in touch with</span>
            </div>
            <div className="flex items-center">
              <BlurText
                text="CONTACT ME"
                delay={150}
                className="text-2xl md:text-9xl font-bold tracking-tight"
                inView={isInView} // <-- pass inView state
              />
            </div>
          </motion.div>

          {/* Right apostrophe (rotated) */}
          <motion.div
            className="relative flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeUp}
          >
            <ApostropheSVG className="h-30 w-auto md:h-55 opacity-90 mt-30 md:mt-45 rotate-180" />
            <div className="absolute bottom-0 right-15 md:right-25 flex flex-col items-end">
              <span className="text-[10px] md:text-xs font-bold leading-none">I'M</span>
              <span className="text-[10px] md:text-xs font-bold leading-none">KAVEEN</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}