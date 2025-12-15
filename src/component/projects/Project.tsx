// Project.tsx
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Navigation from '../navigation/Navigation';


const FigmaIcon = ({ fill = "#000" }: { fill?: string }) => (
  <svg width="40" height="34" viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_5_58)">
      <path d="M95 192C108.807 192 120 180.807 120 167V142H95C81.1929 142 70 153.193 70 167C70 180.807 81.1929 192 95 192Z" fill={fill} />
      <path d="M70 117C70 103.193 81.1929 92 95 92H120V142H95C81.1929 142 70 130.807 70 117Z" fill={fill} />
      <path d="M70 67C70 53.1929 81.1929 42 95 42H120V92H95C81.1929 92 70 80.8071 70 67Z" fill={fill} />
      <path d="M120 42H145C158.807 42 170 53.1929 170 67C170 80.8071 158.807 92 145 92H120V42Z" fill={fill} />
      <path d="M170 117C170 130.807 158.807 142 145 142C131.193 142 120 130.807 120 117C120 103.193 131.193 92 145 92C158.807 92 170 103.193 170 117Z" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip0_5_58">
        <rect width="240" height="234" fill="black" />
      </clipPath>
    </defs>
  </svg>
);

const GitIcon = ({ fill = "#000" }: { fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12.2666 11C12.8189 11 13.2666 11.4477 13.2666 12V16C13.2666 16.5523 12.8189 17 12.2666 17C11.7143 17 11.2666 16.5523 11.2666 16V12C11.2666 11.4477 11.7143 11 12.2666 11ZM11.2666 8C11.2666 7.44772 11.7143 7 12.2666 7H12.2766C12.8289 7 13.2766 7.44772 13.2766 8C13.2766 8.55228 12.8289 9 12.2766 9H12.2666C11.7143 9 11.2666 8.55228 11.2666 8Z"
      fill={fill}
    />
  </svg>
);

type ProjectItem = {
  id: string;
  img?: string;
  icon: React.ReactElement<{ fill?: string }>;
  title: string;
  description: string;
  detail?: string;
};

const projects: ProjectItem[] = [
  {
    id: 'barrett',
    img: 'rama.png',
    icon: <FigmaIcon />,
    title: 'RAMADBK',
    description: 'Branding, Website',
    detail: 'Crafted a modern, user-focused UI/UX for RAMA DBK’s car export platform, integrating product engineering principles inspired by Marty Cagan. Through continuous discovery and usability testing, I simplified the browsing and purchasing journey, ensuring value, usability, and feasibility. The design features an engaging car gallery, clear CTAs, and optimized filters, balancing customer satisfaction with business goals. Using Figma for prototyping, I aligned user needs with technical and business viability, delivering a seamless, scalable digital experience.'
  },
  {
    id: 'mystudio-1',
    img: 'absol.gif',
    icon: <FigmaIcon />,
    title: 'ABSLOX Military',
    description: 'Gavenment, Website, Art Direction',
    detail:'I designed the modern UI/UX and product engineering for ABSOLX — an agentic defense intelligence platform — focusing on a high-contrast, mission-oriented visual system and a conversational agent interface that reduces cognitive load for operators. Using Figma prototypes and iterative usability testing, I refined workflows to prioritize speed, clarity, and accessibility while enabling secure, modular integrations for real-time intelligence. The result is a polished digital experience that supports rapid decision-making and scalable deployment across devices.'
  },
  {
    id: 'mystudio-2',
    img: 'rise management.png',
    icon: <FigmaIcon />,
    title: 'Rise Management',
    description: 'Company Mobile App, Product Engineering',
    detail:'Crafted a modern, user-focused UI/UX and led product engineering for RISE Management — a unified operations platform that fully manages Kitchen, HR, Cattle Hut, Housekeeping, MEP, Food Store, Oil Extraction, and the RISE Bot. Through in-depth UX research and iterative usability testing, I simplified complex operational workflows into clear task flows and dashboard views to support fast, error-resistant decision-making across devices. The design features modular domain-specific interfaces, real-time data visualizations, contextual automation, and clear CTAs that reduce manual overhead. Using Figma prototypes and engineering-ready specs, I prioritized accessibility, scalability, and secure integrations to deliver a polished operational experience aligned with both user needs and business goals.'
  },
  {
    id: 'mystudio-3',
    img: 'luina.png',
    icon: <FigmaIcon />,
    title: 'Luina E-commerce',
    description: 'Branding, Website, Art Direction',
    detail:'Designed a modern, customer-centric UI for Luina’s e-commerce platform, focusing on intuitive navigation, engaging product displays, and seamless checkout flow. Through UX research and prototyping in Figma, I optimized filters, CTAs, and mobile responsiveness to enhance usability and accessibility. The design balances visual appeal with business goals, ensuring a smooth shopping journey that increases customer satisfaction and conversion rates.'
  },
  {
    id: 'mystudio-4',
    img: 'rama.png',
    icon: <GitIcon />,
    title: 'RamaDBK',
    description: 'Branding, Website, Development',
    detail:'Developed the RAMA DBK car export platform using React and Tailwind CSS, ensuring a responsive and high-performance front end. Integrated GSAP animations to deliver smooth, engaging transitions that elevate the browsing experience. Focused on clean code architecture, component reusability, and optimized rendering to support scalability and maintainability. The development aligned closely with the UI/UX vision, transforming design prototypes into a polished, interactive, and user-friendly web application.'
  },
  {
    id: 'mystudio-5',
    img: 'uovt.png',
    icon: <GitIcon />,
    title: 'University E-Commerce Web Application',
    description: 'Branding, Website, Development',
    detail: 'Developed an online merchandise store for the University of Vocational Technology using Next.js and Tailwind CSS, with Wix BaaS powering the backend. The platform enables users to create accounts, browse a catalog of university-branded products (t-shirts, bangles, and more), and make secure purchases. Focused on responsive design, smooth navigation, and efficient account management, the project delivers a scalable and user-friendly e-commerce experience tailored to the university community.'
  },
];

const Project = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.cdnfonts.com/css/canela-trial';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const montserratLink = document.createElement('link');
    montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap';
    montserratLink.rel = 'stylesheet';
    document.head.appendChild(montserratLink);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(montserratLink)) document.head.removeChild(montserratLink);
    };
  }, []);

  return (
        <div
          className="relative min-h-screen bg-white text-black overflow-auto flex flex-col items-center justify-start pt-20"
          style={{ fontFamily: "'Canela Trial', serif" }}
        >
          <Navigation/>
      {/* Header */}
      <h1 className="text-3xl lg:text-4xl xl:text-6xl font-light tracking-widest text-black mb-8">
        PROJECTS
      </h1>

      {/* Projects List */}
      <div className="relative z-10 w-full max-w-6xl px-2 lg:px-4 xl:px-8 mx-5">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className={`relative transition-colors duration-300 ${
              hoveredIdx === idx ? 'bg-black' : 'bg-transparent'
            }`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, delay: idx * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 sm:py-8 gap-2 min-h-[80px]">
              {/* Icon + Text */}
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-lg sm:text-2xl">
                  {/* Change SVG color on hover */}
                  {React.isValidElement(project.icon)
                    ? React.cloneElement(project.icon as React.ReactElement<{ fill?: string }>, { fill: hoveredIdx === idx ? '#fff' : '#000' })
                    : null}
                </span>
                <span className={`h-6 sm:h-8 w-px mx-1 sm:mx-2 ${hoveredIdx === idx ? 'bg-[#F8FBF8]' : 'bg-black'}`} />
                <span className={`text-base sm:text-xl font-normal ${hoveredIdx === idx ? 'text-white' : 'text-black'}`}>{project.title}</span>
                <span className={`mx-2 sm:mx-4 text-sm sm:text-lg ${hoveredIdx === idx ? 'text-white' : 'text-black'}`}>—</span>
                <span className={`text-sm sm:text-lg ${hoveredIdx === idx ? 'text-white' : 'text-black'}`}>{project.description}</span>
              </div>

              {/* Button */}
              <button className={`flex items-center gap-1 sm:gap-2 border rounded-md px-2 py-1 sm:px-4 sm:py-2 mr-0 sm:mr-4 text-xs sm:text-sm font-semibold transition ${
                hoveredIdx === idx
                  ? 'bg-white text-black border-white'
                  : 'border-black hover:bg-black hover:text-white'
              }`}>
                <span className={`text-xs sm:text-base ${hoveredIdx === idx ? 'text-black' : 'text-black'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8V6a4 4 0 118 0v2m-9 4h10a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1zm5 3v2" />
                  </svg>
                </span>
                CONTACT FOR DETAILS
              </button>
            </div>

            {/* Divider */}
            {idx < projects.length - 1 && (
              <hr className={`border-t ${hoveredIdx === idx ? 'border-white' : 'border-black'}`} />
            )}

            {/* Hover Overlay */}
            {hoveredIdx === idx && (
              <div className="absolute mx-5 left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4 w-[100vw] max-w-xs h-auto border-2 border-black bg-white text-black shadow-2xl flex flex-col items-center justify-center z-50 transition-all duration-300">
                {project.img && (
                  <img src={project.img} alt={project.title} className="w-full h-1/2 object-cover mb-2 rounded" />
                )}
                <h2 className="text-lg font-bold mb-1 text-black">{project.title}</h2>
                <p className="text-sm mx-5 text-black mb-5">{project.detail}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Left side box */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex-col items-center z-10 hidden lg:flex">
        <div className="border border-black flex flex-col">
          <div className="border-b border-black p-20 flex items-center justify-center">
            <div className="custom-star-container animate-star-float">
              {/* ...SVG remains unchanged... */}
               <svg className="custom-star" viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="40,5 48,30 75,30 52,45 60,70 40,55 20,70 28,45 5,30 32,30"
                  fill="#000"
                />
              </svg>

            </div>
          </div>

          <div className="h-[5px]" />

          <div className="border-t border-black p-8 h-145 w-50 flex items-center justify-center relative">
            <div className="-rotate-90 origin-center whitespace-nowrap flex items-center">
              <span className="text-9xl font-light tracking-wider text-black">React.js</span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
              <div className="border border-black rounded-full px-4 py-1">
                <span className="text-xl tracking-wider text-black">KAVEEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side box */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center z-10 hidden lg:flex">
        <div className="border border-black flex flex-col">
          <div className="border-b border-black p-8 h-145 w-50 flex items-center justify-center relative">
            <div className="rotate-90 origin-center whitespace-nowrap flex items-center justify-center">
              <span className="text-9xl font-light tracking-wider text-black">Node.js</span>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 rotate-90">
              <div className="border border-black rounded-full px-4 py-1">
                <span className="text-xl tracking-wider text-black">KAVEEN</span>
              </div>
            </div>
          </div>

          <div className="h-[5px]" />

          <div className="border-t border-black p-20 flex items-center justify-center">
            <div className="circle">
              <div className="wave" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner frames */}
      <div className="absolute top-8 left-8 z-10 hidden md:block">
        <div className="border-t border-l border-black w-32 h-32" />
      </div>
      <div className="absolute top-8 right-8 z-10 hidden md:block">
        <div className="border-t border-r border-black w-32 h-32" />
      </div>
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <div className="border-b border-l border-black w-32 h-32" />
      </div>
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="border-b border-r border-black w-32 h-32" />
      </div>

      {/* Inline CSS */}
      <style>{`
        .custom-star-container {
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @keyframes starFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-star-float { animation: starFloat 3s ease-in-out infinite; }
        .custom-star { width: 100%; height: 100%; }

        .circle {
          position: relative;
          width: 100px;
          height: 100px;
          background: #fff;
          border: 2px solid #000;
          border-radius: 50%;
          overflow: hidden;
        }
        .wave {
          position: relative;
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: 50%;
        }
        .wave:before, .wave:after {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: 0;
          left: 50%;
          transform: translate(-50%, -75%);
        }
        .wave:before {
          border-radius: 45%;
          background: rgba(0, 0, 0, 1);
          animation: animate 5s linear infinite;
        }
        .wave:after {
          border-radius: 40%;
          background: rgba(0, 0, 0, 0.5);
          animation: animate 10s linear infinite;
        }
        @keyframes animate {
          0% { transform: translate(-50%, -75%) rotate(0deg); }
          100% { transform: translate(-50%, -75%) rotate(360deg); }
        }
        .ocean-container, .ocean, .animate-water-fill { display: none; }
      `}</style>
    </div>
  );
};

export default Project;
