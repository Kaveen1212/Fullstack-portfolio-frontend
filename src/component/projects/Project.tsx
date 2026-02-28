// Project.tsx
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Navigation from '../navigation/Navigation';
import FlowingMenu from './ProjectMenu';


const FigmaIcon = ({ fill = "#1b1b1b" }: { fill?: string }) => (
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
        <rect width="240" height="234" fill="#1b1b1b" />
      </clipPath>
    </defs>
  </svg>
);

const GitIcon = ({ fill = "#1b1b1b" }: { fill?: string }) => (
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
  link?: string;
};

const projects: ProjectItem[] = [
  {
    id: 'barrett',
    img: 'zeven.png',
    icon: <FigmaIcon />,
    title: 'ZEVEN',
    description: 'Marketing Website',
    detail: 'Designed and developed a full marketing website for ZEVEN, a marketing and software company dedicated to building intelligent digital solutions that help businesses grow, scale, and lead in a rapidly evolving digital world. The site communicates ZEVEN\'s dual expertise in innovative technology and impactful digital marketing — positioning them as a globally trusted partner for excellence and innovation. Built in React with Tailwind CSS, the design features a bold dark-mode aesthetic with neon green pixel typography, cinematic visuals including a black hole render and cosmic imagery, barcode-style project cards, a radar UI element, and immersive sections spanning About, Project Plans, Business Expansion, Team, Project Showcase, and Contact — all crafted to reflect ZEVEN\'s identity as a forward-thinking, results-driven digital powerhouse.',
    link: 'https://magnificent-froyo-0af59b.netlify.app/',
  },
  {
    id: 'mystudio-1',
    img: 'absol.gif',
    icon: <FigmaIcon />,
    title: 'ABSLOX Military',
    description: 'Gavenment, Website, Art Direction',
    detail:'I designed the modern UI/UX and product engineering for ABSOLX — an agentic defense intelligence platform — focusing on a high-contrast, mission-oriented visual system and a conversational agent interface that reduces cognitive load for operators. Using Figma prototypes and iterative usability testing, I refined workflows to prioritize speed, clarity, and accessibility while enabling secure, modular integrations for real-time intelligence. The result is a polished digital experience that supports rapid decision-making and scalable deployment across devices.',
    link: 'https://www.figma.com/design/EMPBm6SbyD2P98HzCecosK/Absolx-militury?node-id=0-1&t=IK26w4y65TomyZ4s-1',
  },
  {
    id: 'mystudio-2',
    img: 'rise management.png',
    icon: <FigmaIcon />,
    title: 'Rise Management',
    description: 'Company Mobile App, Product Engineering',
    detail:'Crafted a modern, user-focused UI/UX and led product engineering for RISE Management — a unified operations platform that fully manages Kitchen, HR, Cattle Hut, Housekeeping, MEP, Food Store, Oil Extraction, and the RISE Bot. Through in-depth UX research and iterative usability testing, I simplified complex operational workflows into clear task flows and dashboard views to support fast, error-resistant decision-making across devices. The design features modular domain-specific interfaces, real-time data visualizations, contextual automation, and clear CTAs that reduce manual overhead. Using Figma prototypes and engineering-ready specs, I prioritized accessibility, scalability, and secure integrations to deliver a polished operational experience aligned with both user needs and business goals.',
    link: 'https://www.figma.com/design/DYqPB4NR1Au0ZdQ1UhGhvv/THE-RISE-MANAGEMENT-APP?node-id=0-1&t=1gtiqEuz3yDzGAPo-1',
  },
  {
    id: 'mystudio-3',
    img: 'luina.png',
    icon: <FigmaIcon />,
    title: 'Luina E-commerce',
    description: 'Branding, Website, Art Direction',
    detail:'Designed a modern, customer-centric UI for Luina’s e-commerce platform, focusing on intuitive navigation, engaging product displays, and seamless checkout flow. Through UX research and prototyping in Figma, I optimized filters, CTAs, and mobile responsiveness to enhance usability and accessibility. The design balances visual appeal with business goals, ensuring a smooth shopping journey that increases customer satisfaction and conversion rates.',
    link: 'https://www.figma.com/design/6UMf4LT2K6xvDhbhAkCB8i/Luina?node-id=0-1&t=by9Dki0nOgCgW3y6-1',
  },
  {
    id: 'mystudio-4',
    img: 'rama.png',
    icon: <GitIcon />,
    title: 'RamaDBK',
    description: 'Branding, Website, Development',
    detail:'Developed the RAMA DBK car export platform using React and Tailwind CSS, ensuring a responsive and high-performance front end. Integrated GSAP animations to deliver smooth, engaging transitions that elevate the browsing experience. Focused on clean code architecture, component reusability, and optimized rendering to support scalability and maintainability. The development aligned closely with the UI/UX vision, transforming design prototypes into a polished, interactive, and user-friendly web application.',
    link: 'https://magnificent-froyo-0af59b.netlify.app/',
  },
  {
    id: 'mystudio-5',
    img: 'uovt.gif',
    icon: <GitIcon />,
    title: 'E-Commerce Web',
    description: 'Branding, Website, Development',
    detail: 'Developed an online merchandise store for the University of Vocational Technology using Next.js and Tailwind CSS, with Wix BaaS powering the backend. The platform enables users to create accounts, browse a catalog of university-branded products (t-shirts, bangles, and more), and make secure purchases. Focused on responsive design, smooth navigation, and efficient account management, the project delivers a scalable and user-friendly e-commerce experience tailored to the university community.',
    link: 'https://splendorous-dragon-b27352.netlify.app/',
  },
  
];

const ITEMS_PER_PAGE = 6;

const Project = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  const startIndex = pageIndex * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < totalPages - 1;

  const handlePrevPage = () => setPageIndex((prev) => Math.max(0, prev - 1));
  const handleNextPage = () => setPageIndex((prev) => Math.min(totalPages - 1, prev + 1));

  const menuItems = visibleProjects.map((project) => ({
    id: project.id,
    link: project.link ?? '#',
    text: project.title,
    image: project.img ?? ''
  }));

  const focusedProject =
    activeProjectId ? projects.find((project) => project.id === activeProjectId) ?? null : null;

  const handleProjectClick = (projectId?: string) => {
    if (!projectId) return;
    setActiveProjectId((prev) => (prev === projectId ? null : projectId));
  };

  useEffect(() => {
    setPageIndex((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    if (!activeProjectId) return;
    const isVisible = visibleProjects.some((project) => project.id === activeProjectId);
    if (!isVisible) setActiveProjectId(null);
  }, [activeProjectId, visibleProjects]);

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

  const contactLink = focusedProject?.link?.trim() ?? '';
  const hasContactLink = contactLink.length > 0;
  const contactButtonClasses =
    'mt-3 inline-flex items-center gap-2 border border-white rounded-md px-2 py-1.5 text-[10px] sm:text-[11px] lg:text-xs font-semibold transition hover:bg-white hover:text-[#1b1b1b]';
  const contactButtonContent = (
    <>
      <span className="text-[11px] sm:text-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          className="w-3.5 h-3.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 8V6a4 4 0 118 0v2m-9 4h10a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1zm5 3v2"
          />
        </svg>
      </span>
      CONTACT FOR DETAILS
    </>
  );

  const pagerButtonBase =
    'inline-flex items-center gap-2 border border-[#1b1b1b] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold transition';
  const pagerButtonEnabled = 'hover:bg-[#1b1b1b] hover:text-white';
  const pagerButtonDisabled = 'opacity-40 cursor-not-allowed';
  const pagerButtonClasses = (enabled: boolean) =>
    `${pagerButtonBase} ${enabled ? pagerButtonEnabled : pagerButtonDisabled}`;

  return (
        <div
          className="relative min-h-screen bg-white text-[#1b1b1b] overflow-x-hidden overflow-y-auto flex flex-col items-center justify-start pt-20"
          style={{ fontFamily: "'Canela Trial', serif" }}
        >
          <Navigation/>
      {/* Header */}
      <div className="w-full flex flex-col sm:relative sm:flex-row sm:justify-center sm:items-start mb-8 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-2 mb-3 sm:mb-0 sm:absolute ml-10 sm:left-0 sm:top-0">
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={!canGoPrev}
            className={pagerButtonClasses(canGoPrev)}
            aria-label="Previous projects"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.5 4.5L7.5 10l5 5.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            disabled={!canGoNext}
            className={pagerButtonClasses(canGoNext)}
            aria-label="Next projects"
          >
        
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.5 4.5L12.5 10l-5 5.5" />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl lg:text-4xl xl:text-6xl font-semibold tracking-widest text-[#1b1b1b]">
          PROJECTS
        </h1>
      </div>

      {/* Projects Menu + Details */}
      <div className="relative z-10 w-full">
        <div className="relative w-full">
          <div className="h-[420px] sm:h-[480px] md:h-[520px] lg:h-[600px] overflow-hidden border-y border-[#1b1b1b]/10 shadow-lg">
            <FlowingMenu
              items={menuItems}
              speed={15}
              textColor="#1b1b1b"
              bgColor="#ffffff"
              marqueeBgColor="#1b1b1b"
              marqueeTextColor="#ffffff"
              borderColor="#1b1b1b"
              onItemClick={(item) => handleProjectClick(item.id)}
            />
          </div>
        </div>

        <div className="relative lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 w-full px-4 sm:px-6 lg:px-0 mt-4 sm:mt-6 lg:mt-0">
          <AnimatePresence>
            {focusedProject && (
              <motion.div
                key={focusedProject.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="relative border-2 border-white bg-[#1b1b1b] text-white shadow-2xl p-3 sm:p-4 max-w-[360px] lg:max-w-[500px] ml-0 sm:ml-auto"
              >
                <button
                  type="button"
                  aria-label="Close project details"
                  className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full border border-white/70 w-6 h-6 text-[10px] font-semibold transition hover:bg-white hover:text-[#1b1b1b]"
                  onClick={() => setActiveProjectId(null)}
                >
                  ✕
                </button>
                {focusedProject.img && (
                  <img
                    src={focusedProject.img}
                    alt={focusedProject.title}
                    className="w-full h-32 sm:h-36 object-cover rounded mb-2"
                  />
                )}
                <div className="flex items-center gap-2 mb-2 pr-7">
                  <span className="text-base">
                    {React.isValidElement(focusedProject.icon)
                      ? React.cloneElement(
                          focusedProject.icon as React.ReactElement<{ fill?: string }>,
                          { fill: '#fff' }
                        )
                      : null}
                  </span>
                  <h2 className="text-base sm:text-lg lg:text-xl font-light tracking-wide">{focusedProject.title}</h2>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm uppercase tracking-[0.2em] text-white/70 mb-2">
                  {focusedProject.description}
                </p>
                <p className="text-[12px] sm:text-sm lg:text-base leading-relaxed text-white/80">
                  {focusedProject.detail}
                </p>
                {hasContactLink ? (
                  <a
                    className={contactButtonClasses}
                    href={contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactButtonContent}
                  </a>
                ) : (
                  <button
                    className={`${contactButtonClasses} opacity-60 cursor-not-allowed hover:bg-transparent hover:text-white`}
                    type="button"
                    disabled
                    aria-disabled="true"
                  >
                    {contactButtonContent}
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
          border: 2px solid #1b1b1b;
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
          background: rgba(27, 27, 27, 1);
          animation: animate 5s linear infinite;
        }
        .wave:after {
          border-radius: 40%;
          background: rgba(27, 27, 27, 0.5);
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
