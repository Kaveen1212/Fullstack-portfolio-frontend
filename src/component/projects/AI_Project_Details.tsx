import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../navigation/Navigation';

gsap.registerPlugin(ScrollTrigger);

type DesktopListSection = {
    label: string;
    heading: string;
    img: string;
    alt: string;
    items: string[];
};

type DesktopLinesSection = {
    label: string;
    heading: string;
    img: string;
    alt: string;
    lines: string[];
};

type BrandingSection = {
    img: string;
    alt: string;
    secondaryImg?: {
        src: string;
        alt: string;
        className: string;
    };
};

type ProjectTheme = {
    backgroundClass: string;
    textClass: string;
    fontClass: string;
    accordionBorderClass: string;
    hoverCardClass: string;
    hoverCardTextClass: string;
    hoverCardHeadingBorderClass: string;
};

type ProjectDesktop = {
    techStack: DesktopListSection;
    keyScenarios: DesktopListSection;
    coreFeatures: DesktopListSection;
    howItWorks: DesktopLinesSection;
    branding?: BrandingSection;
};

type MobileAccordion =
    | {
          key: string;
          title: string;
          type: 'list';
          source: 'techStack' | 'keyScenarios' | 'coreFeatures';
      }
    | {
          key: string;
          title: string;
          type: 'lines';
          source: 'howItWorks';
      };

type ProjectMobile = {
    image: {
        src: string;
        alt: string;
        className: string;
    };
    accordions: MobileAccordion[];
};

type Project = {
    id: string;
    title: string;
    description: string;
    theme: ProjectTheme;
    desktop: ProjectDesktop;
    mobile: ProjectMobile;
};

type DesktopListKey = 'techStack' | 'keyScenarios' | 'coreFeatures';
type DesktopLinesKey = 'howItWorks';

const desktopSectionLayout = {
    techStack: {
        wrapperClass: 'hidden lg:block absolute top-24 left-12 group',
        imageClass: 'w-[17.5rem] h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105',
        labelClass: 'text-sm font-semibold uppercase tracking-wide text-left',
        cardPosition: 'top',
        cardMaxClass: 'max-w-sm',
        headingAlignClass: 'text-center',
    },
    keyScenarios: {
        wrapperClass: 'hidden lg:block absolute top-12 right-46 group',
        imageClass: 'w-64 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105',
        labelClass: 'text-sm font-semibold uppercase tracking-wide text-left',
        cardPosition: 'top',
        cardMaxClass: '',
        headingAlignClass: 'text-center',
    },
    coreFeatures: {
        wrapperClass: 'hidden lg:flex flex-col items-start absolute left-1/2 top-72 transform -translate-x-1/2 group',
        imageClass: 'max-w-sm w-30 lg:w-full lg:max-w-[20rem] mb-2 cursor-pointer transition-transform hover:scale-105',
        labelClass: 'text-sm font-semibold uppercase tracking-wide text-left mb-4',
        cardPosition: 'top',
        cardMaxClass: 'max-w-2xl',
        headingAlignClass: 'text-left',
    },
    howItWorks: {
        wrapperClass: 'hidden lg:block absolute bottom-[0.5rem] left-50 group',
        imageClass: 'w-[18rem] h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105',
        labelClass: 'text-sm font-semibold uppercase tracking-wide text-left',
        cardPosition: 'bottom',
        cardMaxClass: 'max-w-md',
        headingAlignClass: 'text-left',
    },
    branding: {
        wrapperClass: 'hidden lg:block absolute bottom-16 space-y-10 right-32',
        imageClass: 'w-[14.5rem] h-auto object-contain',
    },
} as const;

const lightLamoraTheme: ProjectTheme = {
    backgroundClass: 'bg-[#F8FBF8]',
    textClass: 'text-[#1b1b1b]',
    fontClass: "font-['Lamora']",
    accordionBorderClass: 'border-[#1b1b1b]',
    hoverCardClass: 'bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 z-10',
    hoverCardTextClass: '',
    hoverCardHeadingBorderClass: 'border-[#1b1b1b]/20',
};

const darkTiemposTheme: ProjectTheme = {
    backgroundClass: 'bg-[#1b1b1b]',
    textClass: 'text-[#F8FBF8]',
    fontClass: "font-['tiempos']",
    accordionBorderClass: 'border-[#F8FBF8]',
    hoverCardClass: 'bg-[#F8FBF8]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#F8FBF8]/10 z-10',
    hoverCardTextClass: 'text-[#1b1b1b]',
    hoverCardHeadingBorderClass: 'border-[#1b1b1b]/20',
};

const projects: Project[] = [
    {
        id: 'agronomics',
        title: 'ACRONOMICS AI PROJECT',
        description: 'Intelligent farm assistant providing crop disease diagnosis, weather forecasts, document search, expert advice.',
        theme: lightLamoraTheme,
        desktop: {
            techStack: {
                label: 'Tech Stack',
                heading: 'Tech Stack',
                img: '/glass 3.png',
                alt: 'Glass',
                items: [
                    '• FRONTEND: REACT 19, VITE, TAILWIND, FIREBASE, REACT ROUTER',
                    '• BACKEND: FASTAPI, LANGGRAPH, LANGCHAIN, OPENAI GPT-4O-MINI',
                    '• DATA: QDRANT (VECTORS), FIRESTORE (CHATS)',
                    '• APIS: OPENWEATHERMAP, AGROMONITORING, OPENAI VISION',
                ],
            },
            keyScenarios: {
                label: 'Key Scenarios',
                heading: 'Key Scenarios',
                img: '/simulation.png',
                alt: 'Graph',
                items: [
                    '• "WILL IT RAIN FOR PADDY SOWING?" → WEATHER TOOL',
                    '• LEAF PHOTO UPLOAD → VISION DIAGNOSIS + REMEDY',
                    '• "FIND DOSAGE IN MY PDF" → RAG OVER UPLOADED DOCS',
                    '• "LATEST RUST CONTROL METHODS" → WEB SEARCH + CITATIONS',
                ],
            },
            coreFeatures: {
                label: 'Core Features',
                heading: 'Core Features',
                img: '/STROBERY.png',
                alt: 'Acronomics Agent',
                items: [
                    '• AI CHAT: EXPERT AGRONOMY Q&A WITH SAVED HISTORY',
                    '• PLANT DISEASE DETECTION: IMAGE UPLOADS → DIAGNOSIS + TREATMENT',
                    '• DOC INTELLIGENCE (RAG): UPLOAD PDFS/XLSX, SEMANTIC SEARCH',
                    '• WEATHER: LOCATION-AWARE FORECASTS FOR FARMING DECISIONS',
                    '• LIVE WEB SEARCH: FRESH AGRONOMY INFO RETRIEVAL',
                    '• AUTH & MULTI-USER: GOOGLE/GITHUB OAUTH, ISOLATED DATA',
                ],
            },
            howItWorks: {
                label: 'How It Works',
                heading: 'How It Works (Flow)',
                img: '/ai_grow 1.png',
                alt: 'Tomato',
                lines: [
                    '• USER MESSAGE → FASTAPI → LANGGRAPH ROUTES TOOLS (WEATHER/',
                    'SEARCH/RAG/VISION) → LANGCHAIN + GPT GENERATE ANSWER →',
                    'STREAM TO REACT UI → PERSIST TO FIRESTORE.',
                ],
            },
            branding: {
                img: '/soundcore.png',
                alt: 'Soundcore',
                secondaryImg: {
                    src: '/langghaph.svg',
                    alt: 'Soundcore Mark',
                    className: 'w-[12.5rem] h-auto',
                },
            },
        },
        mobile: {
            image: {
                src: '/acronomics.png',
                alt: 'Acronomics Agent',
                className: 'w-[13.5rem] sm:w-[15rem] md:w-[18rem] max-w-xs',
            },
            accordions: [
                { key: 'features', title: 'CORE FEATURES:', type: 'list', source: 'coreFeatures' },
                { key: 'flow', title: 'HOW IT WORKS (FLOW):', type: 'lines', source: 'howItWorks' },
                { key: 'tech', title: 'TECH STACK:', type: 'list', source: 'techStack' },
                { key: 'scenarios', title: 'KEY SCENARIOS:', type: 'list', source: 'keyScenarios' },
            ],
        },
    },
    {
        id: 'autocare',
        title: 'AUTOCARE VOICE AI PROJECT',
        description: 'Voice-powered automotive assistant for vehicle diagnostics, maintenance scheduling, parts lookup, and repair guidance.',
        theme: darkTiemposTheme,
        desktop: {
            techStack: {
                label: 'Tech Stack',
                heading: 'Tech Stack',
                img: '/autocare/autocare 3.png',
                alt: 'Tech Stack',
                items: [
                    '• FRONTEND: REACT 19, VITE, TAILWIND, WEB SPEECH API',
                    '• BACKEND: NODE.JS, EXPRESS, SOCKET.IO, OPENAI WHISPER',
                    '• AI: GPT-4, WHISPER (SPEECH-TO-TEXT), TTS (TEXT-TO-SPEECH)',
                    '• DATA: MONGODB, REDIS CACHE, VEHICLE DATABASE API',
                    '• APIS: VIN DECODER, PARTS CATALOG, DIAGNOSTIC CODES',
                ],
            },
            keyScenarios: {
                label: 'Key Scenarios',
                heading: 'Key Scenarios',
                img: '/autocare/autocare 4.png',
                alt: 'Scenarios',
                items: [
                    '• "CHECK ENGINE LIGHT P0420" → DIAGNOSTIC CODE LOOKUP + FIX',
                    '• "SCHEDULE OIL CHANGE FOR MY CIVIC" → MAINTENANCE BOOKING',
                    '• "FIND BRAKE PADS FOR 2020 TOYOTA CAMRY" → PARTS SEARCH',
                    '• "HOW TO REPLACE CABIN AIR FILTER" → REPAIR GUIDE + VIDEO',
                ],
            },
            coreFeatures: {
                label: 'Core Features',
                heading: 'Core Features',
                img: '/autocare/stive.png',
                alt: 'AutoCare Voice',
                items: [
                    '• VOICE INTERACTION: HANDS-FREE VEHICLE DIAGNOSTICS & QUERIES',
                    '• DIAGNOSTIC CODES: OBD-II CODE LOOKUP WITH REPAIR SOLUTIONS',
                    '• MAINTENANCE SCHEDULER: AUTOMATED SERVICE REMINDERS & BOOKING',
                    '• PARTS FINDER: VIN-BASED PARTS SEARCH WITH PRICING',
                    '• REPAIR GUIDES: STEP-BY-STEP INSTRUCTIONS WITH VIDEOS',
                    '• VEHICLE PROFILE: MULTI-VEHICLE MANAGEMENT & HISTORY TRACKING',
                ],
            },
            howItWorks: {
                label: 'How It Works',
                heading: 'How It Works (Flow)',
                img: '/autocare/autocare 2.png',
                alt: 'Workflow',
                lines: [
                    '• VOICE INPUT → WHISPER SPEECH-TO-TEXT → EXPRESS API →',
                    'INTENT CLASSIFICATION → ROUTE TO SERVICE (DIAGNOSTIC/PARTS/',
                    'MAINTENANCE) → GPT-4 GENERATES RESPONSE → TTS →',
                    'VOICE OUTPUT + UI UPDATE → SAVE TO MONGODB.',
                ],
            },
            branding: {
                img: '/autocare/autocare5.png',
                alt: 'AutoCare Logo',
            },
        },
        mobile: {
            image: {
                src: '/autocare/stive.png',
                alt: 'AutoCare Voice',
                className: 'w-[13.5rem] sm:w-[15rem] md:w-[18rem] max-w-xs',
            },
            accordions: [
                { key: 'features', title: 'CORE FEATURES:', type: 'list', source: 'coreFeatures' },
                { key: 'flow', title: 'HOW IT WORKS (FLOW):', type: 'lines', source: 'howItWorks' },
                { key: 'tech', title: 'TECH STACK:', type: 'list', source: 'techStack' },
                { key: 'scenarios', title: 'KEY SCENARIOS:', type: 'list', source: 'keyScenarios' },
            ],
        },
    },
    {
        id: 'research',
        title: 'ADVANCED MULTI-DOMAIN RESEARCH AGENT',
        description: 'AI-powered research assistant with deep web search across 5 specialized domains with intelligent content analysis.',
        theme: lightLamoraTheme,
        desktop: {
            techStack: {
                label: 'Tech Stack',
                heading: 'Tech Stack',
                img: '/research/reserch1.png',
                alt: 'Tech Stack',
                items: [
                    '• FRONTEND: REACT 19, VITE 7, TAILWIND CSS, REACT MARKDOWN',
                    '• BACKEND: PYTHON 3.13, FASTAPI, UVICORN, LANGCHAIN, LANGGRAPH',
                    '• AI: OPENAI GPT-4O-MINI, TEXT-EMBEDDING-3-SMALL',
                    '• DATA: MARKDOWN KB + OPENAI EMBEDDINGS',
                    '• APIS: FIRECRAWL (SEARCH + SCRAPE), OPENAI SDK',
                    '• TOOLS: TYPER CLI, RICH CONSOLE, UV PACKAGE MANAGER',
                ],
            },
            keyScenarios: {
                label: 'Key Scenarios',
                heading: 'Key Scenarios',
                img: '/research/reserch2.png',
                alt: 'Scenarios',
                items: [
                    '• "BEST PYTHON TESTING FRAMEWORKS" → SEARCHES → ANALYZES',
                    '• "TOP AI DIAGNOSTIC TOOLS FOR CARDIOLOGY" → MEDICAL DOMAIN',
                    '• "COMPARE EV CHARGING STANDARDS" → AUTOMOTIVE PIPELINE',
                    '• "CBT TOOLS WITH HIPAA COMPLIANCE" → PSYCHOLOGY DOMAIN',
                    '• "ECO-FRIENDLY FASHION BRANDS" → FASHION INSIGHTS',
                ],
            },
            coreFeatures: {
                label: 'Core Features',
                heading: 'Core Features',
                img: '/research/RESEARCH AGENT.png',
                alt: 'Research Agent',
                items: [
                    '• AI RESEARCH ASSISTANT: DEEP WEB RESEARCH ACROSS 5 DOMAINS',
                    '• MULTI-DOMAIN INTELLIGENCE: DEVELOPER, MEDICAL, AUTO, PSYCH, FASHION',
                    '• SMART WEB SCRAPING: AUTOMATED CONTENT DISCOVERY WITH FIRECRAWL',
                    '• KNOWLEDGE BASE (RAG): MARKDOWN + OPENAI EMBEDDINGS',
                    '• LANGGRAPH WORKFLOW: PARALLEL ENTITY ANALYSIS, FAULT-TOLERANT',
                    '• CHAT INTERFACE: REAL-TIME CONVERSATION WITH MARKDOWN RENDERING',
                ],
            },
            howItWorks: {
                label: 'How It Works',
                heading: 'How It Works (Flow)',
                img: '/research/reserch3.png',
                alt: 'Workflow',
                lines: [
                    '• USER QUERY → FASTAPI ENDPOINT (/API/CHAT) → LANGGRAPH ENGINE',
                    '→ DETECT SMALL TALK / EXTRACT ENTITIES → FIRECRAWL SEARCH +',
                    'SCRAPE → ANALYZE RESULTS USING OPENAI GPT-4O-MINI →',
                    'STREAM RESPONSE → REACT UI → PERSIST TO LOCAL KB.',
                ],
            },
            branding: {
                img: '/research/reserch4.png',
                alt: 'Research Agent Logo',
            },
        },
        mobile: {
            image: {
                src: '/research/RESEARCH AGENT.png',
                alt: 'Research Agent',
                className: 'w-[13.5rem] sm:w-[15rem] md:w-[18rem] max-w-xs',
            },
            accordions: [
                { key: 'features', title: 'CORE FEATURES:', type: 'list', source: 'coreFeatures' },
                { key: 'flow', title: 'HOW IT WORKS (FLOW):', type: 'lines', source: 'howItWorks' },
                { key: 'tech', title: 'TECH STACK:', type: 'list', source: 'techStack' },
                { key: 'scenarios', title: 'KEY SCENARIOS:', type: 'list', source: 'keyScenarios' },
            ],
        },
    },
];

const DesktopListSection = ({ project, sectionKey }: { project: Project; sectionKey: DesktopListKey }) => {
    const section = project.desktop[sectionKey];
    const layout = desktopSectionLayout[sectionKey];
    const cardPositionClass =
        (layout.cardPosition as string) === 'bottom'
            ? 'absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6'
            : 'absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6';

    return (
        <div className={layout.wrapperClass}>
            <img src={section.img} alt={section.alt} className={layout.imageClass} />
            <p className={`${layout.labelClass} ${project.theme.fontClass}`}>{section.label}</p>

            <div className={`${cardPositionClass} ${project.theme.hoverCardClass} ${layout.cardMaxClass} ${project.theme.hoverCardTextClass}`}>
                <h4
                    className={`text-sm font-semibold mb-3 uppercase tracking-wide ${project.theme.fontClass} ${layout.headingAlignClass} border-b ${project.theme.hoverCardHeadingBorderClass} pb-2 ${project.theme.hoverCardTextClass}`}
                >
                    {section.heading}
                </h4>
                <ul className="space-y-2 text-xs leading-relaxed">
                    {section.items.map((item, index) => (
                        <li key={`${project.id}-${sectionKey}-${index}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const DesktopLinesSection = ({ project, sectionKey }: { project: Project; sectionKey: DesktopLinesKey }) => {
    const section = project.desktop[sectionKey];
    const layout = desktopSectionLayout[sectionKey];
    const cardPositionClass =
        layout.cardPosition === 'bottom'
            ? 'absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6'
            : 'absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6';

    return (
        <div className={layout.wrapperClass}>
            <img src={section.img} alt={section.alt} className={layout.imageClass} />
            <p className={`${layout.labelClass} ${project.theme.fontClass}`}>{section.label}</p>

            <div className={`${cardPositionClass} ${project.theme.hoverCardClass} ${layout.cardMaxClass} ${project.theme.hoverCardTextClass}`}>
                <h4
                    className={`text-sm font-semibold mb-3 uppercase tracking-wide ${project.theme.fontClass} ${layout.headingAlignClass} border-b ${project.theme.hoverCardHeadingBorderClass} pb-2 ${project.theme.hoverCardTextClass}`}
                >
                    {section.heading}
                </h4>
                <div className="text-xs leading-relaxed space-y-1">
                    {section.lines.map((line, index) => (
                        <p key={`${project.id}-${sectionKey}-${index}`} className={index === 0 ? '' : 'pl-4'}>
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

function AI_Projects_Details() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [openSections, setOpenSections] = useState<Record<string, string | null>>({});

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return;

        // Only apply horizontal scroll on desktop (lg and above)
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        if (!mediaQuery.matches) return; // Exit early on mobile

        const section = sectionRef.current;
        const container = containerRef.current;
        const slides = container.querySelectorAll('.section-slide');

        // Calculate total width
        const totalWidth = slides.length * window.innerWidth;

        // Create horizontal scroll animation (desktop only)
        const scrollTween = gsap.to(container, {
            x: () => -(totalWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => {
            scrollTween.scrollTrigger?.kill();
            scrollTween.kill();
        };
    }, []);

    const toggleSection = (projectId: string, sectionKey: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [projectId]: prev[projectId] === sectionKey ? null : sectionKey,
        }));
    };

    return (
        <div ref={sectionRef} className="horizontal-scroll-section w-full lg:h-screen lg:overflow-hidden">
            <div ref={containerRef} className="horizontal-container lg:flex h-full" style={{ width: 'fit-content' }}>
                <Navigation />

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`section-slide w-screen lg:h-screen flex flex-col ${project.theme.backgroundClass} ${project.theme.textClass} px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 relative lg:overflow-hidden min-h-screen`}
                    >
                        {/* Title */}
                        <div className="flex flex-col items-center text-center mb-6 md:mb-8 lg:mb-24 mt-10 md:mt-14 lg:mt-20 tracking-wide z-10 space-y-3 md:space-y-5">
                            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">{project.title}</h1>
                            <p className="text-sm md:text-lg lg:text-2xl text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
                                {project.description}
                            </p>
                        </div>

                        {/* Positioned Images - Desktop Only */}
                        <DesktopListSection project={project} sectionKey="techStack" />
                        <DesktopListSection project={project} sectionKey="keyScenarios" />
                        <DesktopListSection project={project} sectionKey="coreFeatures" />
                        <DesktopLinesSection project={project} sectionKey="howItWorks" />

                        {project.desktop.branding && (
                            <div className={desktopSectionLayout.branding.wrapperClass}>
                                <img
                                    src={project.desktop.branding.img}
                                    alt={project.desktop.branding.alt}
                                    className={desktopSectionLayout.branding.imageClass}
                                />
                                {project.desktop.branding.secondaryImg && (
                                    <img
                                        src={project.desktop.branding.secondaryImg.src}
                                        alt={project.desktop.branding.secondaryImg.alt}
                                        className={project.desktop.branding.secondaryImg.className}
                                    />
                                )}
                            </div>
                        )}

                        {/* Mobile Image - Shows only on mobile */}
                        <div className="flex justify-center items-center mt-6 lg:hidden">
                            <img src={project.mobile.image.src} alt={project.mobile.image.alt} className={project.mobile.image.className} />
                        </div>

                        {/* Mobile Accordion Sections - Shows only on mobile */}
                        <div className="lg:hidden space-y-4 px-4 sm:px-6 md:px-8 md:max-w-3xl md:mx-auto overflow-y-auto flex-1 mt-6">
                            {project.mobile.accordions.map((accordion) => {
                                const isOpen = openSections[project.id] === accordion.key;

                                if (accordion.type === 'list') {
                                    const section = project.desktop[accordion.source];
                                    return (
                                        <div key={`${project.id}-${accordion.key}`} className={`border-b ${project.theme.accordionBorderClass}`}>
                                            <button
                                                onClick={() => toggleSection(project.id, accordion.key)}
                                                className="w-full flex justify-between items-center py-4 text-left"
                                            >
                                                <h3 className={`text-lg font-semibold uppercase tracking-wide ${project.theme.fontClass}`}>
                                                    {accordion.title}
                                                </h3>
                                                <svg
                                                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {isOpen && (
                                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                                    {section.items.map((item, index) => (
                                                        <li key={`${project.id}-${accordion.key}-${index}`}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    );
                                }

                                const section = project.desktop[accordion.source];
                                return (
                                    <div key={`${project.id}-${accordion.key}`} className={`border-b ${project.theme.accordionBorderClass}`}>
                                        <button
                                            onClick={() => toggleSection(project.id, accordion.key)}
                                            className="w-full flex justify-between items-center py-4 text-left"
                                        >
                                            <h3 className={`text-lg font-semibold uppercase tracking-wide ${project.theme.fontClass}`}>
                                                {accordion.title}
                                            </h3>
                                            <svg
                                                className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isOpen && (
                                            <div className="pb-4 text-sm leading-relaxed space-y-1">
                                                {section.lines.map((line, index) => (
                                                    <p key={`${project.id}-${accordion.key}-${index}`} className={index === 0 ? '' : 'pl-4'}>
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AI_Projects_Details;
