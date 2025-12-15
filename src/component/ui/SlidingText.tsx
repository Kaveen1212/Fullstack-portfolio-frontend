// import React from "react";
import ParallaxText from "./ParallaxText";

const SlidingText = () => {
  return (
    <section className="w-screen h-20 lg:h-25 xl:h-40 flex flex-col items-center justify-between relative z-10">
      <ParallaxText baseVelocity={-2}>
        Kaveen c deshapriya,
      </ParallaxText>
      <ParallaxText baseVelocity={1}>
        Product Designer, UX Enginner, AI/ML Engineer,
      </ParallaxText>
    </section>
  );
};

export default SlidingText;