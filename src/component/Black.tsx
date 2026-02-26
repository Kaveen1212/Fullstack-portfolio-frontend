import { motion } from "framer-motion";
import "../index.css";
import { Highlighter } from "./ui/Highlighter";
import Navigation from "./navigation/Navigation";

function Black() {

  const AnimatedBlock = ({ children, idx }: { children: React.ReactNode; idx?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      className="w-full relative my-6 md:my-8 xl:my-10"
      style={{ overflow: "visible" }}
      transition={{
        y: { type: "spring", stiffness: 30, damping: 14, mass: 0.9, velocity: 0 },
        opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        delay: (idx ?? 0) * 0.06
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      className="w-full h-auto md:h-screen bg-[#1b1b1b] py-10"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        pointerEvents: "auto",
        marginTop: "100vh",
      }}
    >
      <Navigation/>
      {/* Mobile Layout */}
      <div className="flex flex-col h-full xl:hidden px-5 md:px-10 lg:px-14 py-6 md:py-10 gap-6 md:gap-10">
        <div>
          <h1 className="uppercase text-white text-3xl md:text-4xl lg:text-5xl font-light">
            <AnimatedBlock idx={0}>
              <span className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">Product engineering </span>
            </AnimatedBlock>
          </h1>
        </div>

        <div className="flex flex-col justify-end mt-2 md:mt-6">
          <div className="space-y-5 md:space-y-8">
            <AnimatedBlock idx={1}>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed line-space-5">
                Kaveen Deshapriya (he/him) is a globe-trotting product and digital experience designer with a passion for blending technology, functionality, and aesthetics. Rooted in Sri Lanka and active globally, he fuses low-code platforms and savvy prototyping tools to shape elegant, user-centered products.
              </p>
            </AnimatedBlock>

            <AnimatedBlock idx={2}>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed line-space-5">
                Having trained in <Highlighter action="underline" 
                color="#FF9800" 
                strokeWidth={2}
                animationDuration={800}
                iterations={1}>software technology</Highlighter> at the {" "}
                <Highlighter action="underline" color="#FF9800">University of Vocational Technology</Highlighter>{" "} 
                in Colombo, Kaveen brings a <Highlighter action="underline" color="#87CEFA">strong technical foundation</Highlighter>, 
                while his hands-on experience at <Highlighter action="underline" color="#FF6B6B">ABSOL X</Highlighter> sharpened 
                his collaboration, innovation, and delivery under pressure. He thrives working across 
                <Highlighter action="underline" color="#98FB98">virtual teams</Highlighter>, guiding concepts from initial 
                sketches to polished digital experiences.
              </p>
            </AnimatedBlock>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:flex flex-row items-center h-full px-16 2xl:px-24 gap-12">
        <div className="basis-1/3 flex items-center justify-start">
          <h1 className="flex items-center justify-center uppercase text-white text-5xl 2xl:text-6xl font-light">
            <AnimatedBlock idx={3}>
              <span className="text-white text-5xl 2xl:text-6xl font-medium">Product designing</span>
            </AnimatedBlock>
          </h1>
        </div>

        <div className="basis-2/3 flex flex-col justify-end max-w-full gap-8">
          <AnimatedBlock idx={4}>
            <p className="text-white text-2xl 2xl:text-3xl leading-relaxed">
              Kaveen Deshapriya (he/him) is aglobe-trotting product and 
              digital experience designer with a passion for blending 
              technology, functionality, and aesthetics Rooted in {" "}
              <Highlighter action="highlight" color="#87CEFA">Sri Lanka</Highlighter> and active globally, he fuses 
              low-code platforms and savvy prototyping tools to shape elegant, user-centered products.
            </p>
          </AnimatedBlock>

          <AnimatedBlock idx={5}>
            <p className="text-white text-2xl 2xl:text-3xl leading-relaxed">
              Having trained in software technology at the{" "}
              <Highlighter action="underline" color="#FF9800" strokeWidth={2} animationDuration={800} iterations={1}> University </Highlighter> <Highlighter action="underline" color="#FF9800" strokeWidth={2} animationDuration={800} iterations={1}> of</Highlighter> <Highlighter action="underline" color="#FF9800" strokeWidth={2} animationDuration={800} iterations={1}>Vocational</Highlighter> <Highlighter action="underline" color="#FF9800" strokeWidth={2} animationDuration={800} iterations={1}>Technology</Highlighter> in Colombo, Kaveen brings a 
              strong technical foundation, while his hands-on experience at {" "}
              <Highlighter action="highlight" color="#87CEFA">CodeGen</Highlighter> sharpened his collaboration, innovation, and delivery under pressure. He thrives working across 
              virtual teams, guiding concepts from initial sketches to polished digital experiences.
            </p>
          </AnimatedBlock>
        </div>
      </div>
    </div>
  );
}

export default Black;
