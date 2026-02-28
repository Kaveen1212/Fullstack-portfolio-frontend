import { useEffect, useState } from 'react'
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
  const [logoGap, setLogoGap] = useState(120);
  const [logoHeight, setLogoHeight] = useState(34);

  useEffect(() => {
    const updateLogoSizing = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;

      if (width < 640) {
        setLogoGap(56);
        setLogoHeight(24);
        return;
      }

      if (width < 1024) {
        setLogoGap(88);
        setLogoHeight(30);
        return;
      }

      if (width < 1440) {
        setLogoGap(120);
        setLogoHeight(34);
        return;
      }

      setLogoGap(160);
      setLogoHeight(40);
    };

    updateLogoSizing();
    window.addEventListener('resize', updateLogoSizing);
    return () => window.removeEventListener('resize', updateLogoSizing);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-[#1b1b1b] text-white overflow-hidden font-mona"
      style={{ fontFamily: "'Mona Sans Variable', 'Mona Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <Navigation />

      {/* Image  */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 hidden md:block w-[58vw] max-w-[720px] opacity-80">
          <img
            src="/download.png"
            alt="Classical sculpture background"
            className="h-full w-full object-cover object-left"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1b1b1b]/10 via-transparent to-[#1b1b1b]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-24 sm:py-28 lg:py-32">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <MaskText
            maskColor="#FFF"
            method="whole"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[0.1em] text-center"
            delay={0.8}
          >
            ABOUT ME
          </MaskText>
        </div>

        <div className="w-full max-w-5xl text-left items-left z-10 font-light space-y-0">
          <div className="text-left font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90">
            <MaskText
              maskColor="#FFF"
              method="line"
              className="block text-center"
              delay={0.2}
            >
              Software Engineer - Undergraduate - B.Tech in Software Technology
            </MaskText>
          </div>

          <div className="space-y-1 sm:space-y-1 lg:space-y-2 text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed">
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

          <div className="space-y-1 sm:space-y-1 lg:space-y-2 text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed">
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

          <div className="w-full mt-10 sm:mt-12 lg:mt-16">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={logoHeight}
              gap={logoGap}
              scaleOnHover
              fadeOut
              fadeOutColor="#1b1b1b"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
