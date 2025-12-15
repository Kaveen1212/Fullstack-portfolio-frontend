import MaskText from "../ui/MaskText"
import Navigation from '../navigation/Navigation';
import LogoLoop from '../ui/LogoLoop'
import { SiFigma, SiNotion, SiJavascript, SiNodedotjs, SiTailwindcss, SiHtml5, SiPython, SiFastapi, SiLangchain } from 'react-icons/si'

const techLogos = [
  { node: <SiFigma />, title: "Figma" },
  { node: <SiNotion />, title: "Notion" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiPython />, title: "Python" },
  { node: <SiFastapi />, title: "Fastapi" },
  { node: <SiLangchain />, title: "Langchain" },
];

const About = () => {
  // Responsive gap for mobile screens
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const logoGap = isMobile ? 80 : 160;

  return (
     <div
        className="relative w-full h-screen bg-[#1b1b1b] text-white overflow-hidden flex flex-col items-center justify-center font-mona"
        style={{ fontFamily: "'Mona Sans Variable', 'Mona Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
     >
      <Navigation />
        {/* Image  */}
         <div className="absolute items-center left-125 justify-center w-150 h-full">
        <img
          src="download.png"
          alt="Classical sculpture background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

        {/* Main topic  */}
    <div className="z-20 mb-10 lg:mb-12 xl:mb-16 -mt-0 lg:mt-10 xl:mt-10">
    <MaskText
      maskColor="#FFF"
      method="whole"
      className="text-3xl lg:text-5xl xl:text-6xl font-bold tracking-widest text-center"
      delay={0.8}
    >
      ABOUT ME
    </MaskText>
  </div>

    {/* pharagrhaphe 1*/}
    <div className="px-8 lg:px-15 xl:px-60 text-center items-center z-20 max-w-full mx-auto font-light space-y-5 lg:space-y-12 xl:space-y-12 text-lg lg:text-2xl xl:text-3xl">
    <div className="text-center z-20 font-extralight text-[14px] lg:text-2xl xl:text-3xl">
    <MaskText
      maskColor="#FFF"
      method="line"
      className="block text-center"
      delay={0.2}
    >
      Software Engineer - Undergraduate - B.Tech in Software Technology
    </MaskText>
    </div>

    {/* Description paragraphs 2*/}
    <div className="space-y-1 text-[12px] lg:text-2xl xl:text-3xl">
      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.3}
      >
        An enthusiastic Software Engineering undergraduate at the University of Vocational Technology,
      </MaskText>

      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.3}
      >
        specializing in software development, system optimization, and scalable web applications. Proficient in
      </MaskText>

      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.3}
      >
        Java, JavaScript, Python, cloud computing, and database management. Strong problem-solving,
      </MaskText>

      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.3}
      >
        analytical, and AI-driven decision-making skills, with excellent teamwork, leadership, and
      </MaskText>

      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.3}
      >
        communication abilities.
      </MaskText>
    </div>

    {/* Description paragraphs 2*/}
    <div className="space-y-1 text-[12px] lg:text-2xl xl:text-3xl">
      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.4}
      >
        A motivated Software Engineering student skilled in software development, cloud computing, and
      </MaskText>

      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.4}
      >
        system optimization. Proficient in Java, JavaScript, Python, and databases, with a passion for AI-driven
      </MaskText>

      <MaskText
        maskColor="#FFF"
        method="line"
        className="block text-center"
        delay={0.4}
      >
      solutions. Strong in critical thinking, leadership, and collaboration, thriving in fast-paced environments.
      </MaskText>
    </div>


            {/* Technology Stack Logo Loop */}
            <div className="w-full mt-20 lg:mt-25 xl:mt-25">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={38}
                    gap={logoGap}

                    scaleOnHover
                    fadeOut
                    fadeOutColor="#1b1b1b"
                    ariaLabel="Technology stack"
                />
            </div>
        </div>
    </div>
  )
}

export default About