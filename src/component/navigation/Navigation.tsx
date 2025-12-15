import React, { useState, useEffect } from 'react';

interface NavLink {
  name: string;
  href: string;
  sectionId: string;
}

const navLinks: NavLink[] = [
  { name: 'HOME', href: '/', sectionId: 'home' },
  { name: 'CARRIER', href: '#carrier', sectionId: 'carrier' },
  { name: 'FRONTEND PROJECTS', href: '#frontend-projects', sectionId: 'frontend-projects' },
  { name: 'AI PROJECTS', href: '#ai-projects', sectionId: 'ai-projects' },
  { name: 'ABOUT ME', href: '#about-me', sectionId: 'about-me' },
  { name: 'CONTACT ME', href: '#contact-me', sectionId: 'contact-me' },
];


interface SocialLink {
  name: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { name: 'TIKTOK', href: '#tiktok' },
  { name: 'INSTAGRAM', href: '#instagram' },
  { name: 'YOUTUBE', href: '#youtube' },
  { name: 'TWITCH', href: '#twitch' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.sectionId,
        name: link.name,
        element: document.getElementById(link.sectionId)
      }));

      // Find which section is currently in view
      let currentSection = 'home';

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for the navbar)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get active link name based on current section
  const getActiveLinkName = () => {
    const link = navLinks.find(link => link.sectionId === activeSection);
    return link ? link.name : 'HOME';
  };

  const activeLink = getActiveLinkName();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Navigation - Desktop & Mobile */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] bg-transparent pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-screen mx-auto py-6">
          <div className="flex items-center justify-end pr-8">
            {/* Menu Button - Both Desktop & Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 lg:w-14 h-12 lg:h-14 flex items-center group duration-300 animate-fadeInRight cursor-pointer hover:bg-[#00A67D] hover:rounded-lg pointer-events-auto"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="menu-panel"
            >
              {!isOpen ? (
                <svg width="584" height="584" viewBox="0 0 584 584" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300">
                    <g clipPath="url(#clip0_345_594)">
                    <rect x="17.5" y="17.5" width="549" height="549" rx="42.5" stroke="#00A67D" strokeWidth="35" className="transition-all duration-300 group-hover:stroke-[#e9ff32]"/>
                    <path d="M244.5 226H501.5" stroke="#00A67D" strokeWidth="35" className="transition-all duration-300 group-hover:stroke-[#e9ff32]"/>
                    <path d="M82 351H339" stroke="#00A67D" strokeWidth="35" className="transition-all duration-300 group-hover:stroke-[#e9ff32]"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_345_594">
                    <rect width="584" height="584" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
              ) : (
                <div className="relative w-14 h-14 flex items-center hover:bg-black justify-center">
                  <span className="absolute w-8 h-0.5 bg-[#00A67D]  transform rotate-45 transition-all duration-300" />
                  <span className="absolute w-8 h-0.5 bg-[#00A67D] transform -rotate-45 transition-all duration-300" />
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay - Desktop & Mobile */}
      <div
        id="menu-panel"
        className={`
          fixed inset-0 z-[90] transition-all duration-500
          ${isOpen ? 'visible' : 'invisible'}
        `}
        aria-hidden={!isOpen}
      >
        {/* Backdrop with fade-in animation */}
        <div
          className={`
            absolute inset-0 bg-black/80 backdrop-blur-sm
            transition-opacity duration-400 ease-out
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          role="button"
          tabIndex={0}
        />

        {/* Slide-in Menu Panel */}
        <div
          className={`
            absolute right-0 top-0 h-full w-full bg-[#1a1a1a]/95 backdrop-blur-md
            shadow-2xl
            transition-transform duration-500 ease-spring
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex h-full">
            {/* Left Side - Image Grid (Desktop Only) */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0 w-1/2 h-full overflow-hidden">
              {/* Image placeholders - Replace with your actual images */}
              <div className="relative bg-[#2a2a2a] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                  <img src="ps kaveen.png" alt="" />
                </div>
              </div>
              <div className="relative bg-[#252525] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                  Image 2
                </div>
              </div>
              <div className="relative bg-[#2f2f2f] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                  Image 3
                </div>
              </div>
              <div className="relative bg-[#242424] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                  Image 4
                </div>
              </div>
            </div>

            {/* Right Side - Navigation Content */}
            <div className="w-full lg:w-1/2 flex flex-col h-full p-8 lg:p-12 pt-24 items-center justify-center text-center">
              {/* Name */}
              <div
                className={`
                  mb-12 transition-all duration-500 ease-spring w-full
                  ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  transitionDelay: isOpen ? '100ms' : '0ms',
                }}
              >
                <h2 className="text-white text-xl lg:text-2xl font-bold tracking-wider text-left">
                  <span>KAVEEN</span><br />DESHAPRIYA
                </h2>
              </div>

              {/* Main Navigation Links */}
              <ul className="flex-1 space-y-6 flex flex-col justify-center items-center w-full">
                {navLinks.map((link, index) => (
                  <li
                    key={link.name}
                    className={`
                      transition-all duration-500 ease-spring
                      ${isOpen
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-12'
                      }
                    `}
                    style={{
                      transitionDelay: isOpen ? `${index * 80 + 200}ms` : '0ms',
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.sectionId)}
                      className={`
                        relative inline-block text-3xl lg:text-5xl font-bold transition-all duration-300 ease-spring cursor-pointer
                        ${activeLink === link.name
                          ? 'text-white'
                          : 'text-white/30 hover:text-white/80'
                        }
                      `}
                    >
                      {link.name}
                      {/* SVG underline for active link */}
                      {activeLink === link.name && (
                        <span className="absolute left-0 right-0 bottom-4 w-full h-[8px] overflow-visible pointer-events-none" aria-hidden="true">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 412 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="text-[#96bb29] w-full h-full"
                          >
                            <path
                              d="M0 2h73.539c5.858 0 11.47 2.35 15.58 6.525l8.565 8.7a21.863 21.863 0 0 0 15.58 6.525h72.678c6.045 0 11.82-2.503 15.954-6.914l6.485-6.922A21.865 21.865 0 0 1 224.336 3h76.752a21.864 21.864 0 0 1 16.806 7.88l4.362 5.24A21.864 21.864 0 0 0 339.063 24H412"
                              stroke="currentColor"
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                strokeDasharray: '433.208',
                                strokeDashoffset: '0',
                                animation: 'drawLine 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
                              }}
                            />
                          </svg>
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Business Enquiries Section */}
              <div
                className={`
                  border-t border-white/10 pt-8 transition-all duration-600 ease-spring w-full
                  ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                  }
                `}
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 80 + 300}ms` : '0ms',
                }}
              >
                <h3 className="text-white/60 text-xs font-bold tracking-wider mb-4">
                  BUSINESS ENQUIRIES
                </h3>
                <ul className="flex flex-wrap gap-4 justify-center">
                  {socialLinks.map((link, index) => (
                    <li
                      key={link.name}
                      className={`
                        transition-all duration-500 ease-spring
                        ${isOpen
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-6'
                        }
                      `}
                      style={{
                        transitionDelay: isOpen
                          ? `${(navLinks.length + 1) * 80 + 350 + (index * 50)}ms`
                          : '0ms',
                      }}
                    >
                      <a
                        href={link.href}
                        className="text-white/80 text-xs font-bold hover:text-[#96bb29] transition-all duration-300 hover:scale-110 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;