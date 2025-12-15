import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from '../navigation/Navigation';
import { motion } from 'framer-motion';

const ContactInput: React.FC = () => {

  const [sriLankaTime, setSriLankaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Colombo',
      };
      setSriLankaTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Animation logic
  const [isHovered, setIsHovered] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);

  const rollingRef = useRef<HTMLDivElement>(null);
  const mobileRollingRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Animation runs if hovered or form is active
  useEffect(() => {
    let start: number | null = null;
    const duration = 3000;
    const lineLength = window.innerWidth < 768 ? 100 : 200;
    const circleCircumference = Math.PI * (window.innerWidth < 768 ? 2.875 : 11.5);

    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = (ts - start) % duration;
      const progress = elapsed / duration;
      const x = progress * lineLength;
      const rotate = (x / circleCircumference) * 360;

      // Desktop animation
      if (rollingRef.current) {
        rollingRef.current.style.transform = `translateX(${x}px) rotate(${rotate}deg)`;
      }
      
      // Mobile animation
      if (mobileRollingRef.current) {
        mobileRollingRef.current.style.transform = `translateX(${x}px) rotate(${rotate}deg)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    }

    if (isHovered || isFormActive) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (rollingRef.current) {
        rollingRef.current.style.transform = `translateX(0px) rotate(0deg)`;
      }
      if (mobileRollingRef.current) {
        mobileRollingRef.current.style.transform = `translateX(0px) rotate(0deg)`;
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isFormActive]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation/>
      {/* Top Section: Responsive height */}
      <div className="flex flex-col md:flex-row relative" style={{ minHeight: '66.666vh' }}>
        {/* Rolling Circle on the line - Desktop */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            left: '47%',
            top: '35%',
            width: '300px',
            height: '2px',
            transform: 'rotate(34deg) translateY(-50%)',
            transformOrigin: 'left center',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          {/* The animated circle */}
          <div
            ref={rollingRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'absolute',
              top: '-11.35rem',
              left: 0,
              width: '11.5rem',
              height: '11.5rem',
              border: '1px solid black',
              borderRadius: '50%',
              background: 'white',
              opacity: 0.9,
              pointerEvents: 'auto',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
              boxShadow: isHovered ? '0 0 0 4px #e5e7eb' : 'none',
            }}
          />
          {/* The line itself */}
          <div
            style={{
              width: '300px',
              height: '2px',
              background: 'black',
              position: 'absolute',
              left: 0,
              top: '80%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>

        {/* Mobile Rolling Circle - Right side */}
        <div
          className="block md:hidden"
          style={{
            position: 'absolute',
            right: '10px',
            top: '20%',
            width: '120px',
            height: '1px',
            transform: 'rotate(25deg)',
            transformOrigin: 'left center',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          {/* Mobile animated circle */}
          <div
            ref={mobileRollingRef}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            style={{
              position: 'absolute',
              top: '-5.775rem',
              left: 0,
              width: '5.75rem',
              height: '5.75rem',
              border: '1px solid black',
              borderRadius: '50%',
              background: 'white',
              opacity: 0.9,
              pointerEvents: 'auto',
              transition: 'box-shadow 0.2s',
              boxShadow: isHovered ? '0 0 0 2px #e5e7eb' : 'none',
            }}
          />
          {/* Mobile line */}
          <div
            style={{
              width: '150px',
              height: '1px',
              background: 'black',
              position: 'absolute',
              left: '-15px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
    
        {/* Left Section - Hero Text */}
        <div className="flex-1 flex items-start justify-start relative overflow-visible">
          <div className="top-4 md:top-8 left-4 md:left-32 md:absolute text-left max-w-full">
            <h1 className="text-[60px] sm:text-[100px] md:text-[180px] font-bold leading-none tracking-tight">
              LET'S
              <br />
              <span className="text-[60px] sm:text-[100px] md:text-[180px] ml-4 md:ml-20">GET IN</span>
              <br />
              <span className="text-[60px] sm:text-[100px] md:text-[180px]">TOUCH</span>
            </h1>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 flex items-center justify-center md:justify-end px-4 md:pr-32 mt-8 md:mt-0">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit}
            onFocus={() => setIsFormActive(true)}
            onBlur={e => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsFormActive(false);
              }
            }}
            tabIndex={-1}
          >
            <div className="space-y-8 md:space-y-18">
              {/* Full Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-base md:text-lg"
                  placeholder="Full Name"
                />
              </div>

              {/* Email and Phone Row - Stack on mobile */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 pb-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-base md:text-lg"
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 pb-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-base md:text-lg"
                    placeholder="Phone"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={1}
                  className="w-full bg-transparent border-b border-gray-600 pb-1 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 text-base md:text-lg resize-none"
                  placeholder="Message"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="hidden md:flex md:flex-row gap-4 md:gap-20">
                <div>
                  <h3 className="text-xs font-medium text-gray-400 mb-2 tracking-widest uppercase">
                    LEEDU
                  </h3>
                  <div className="text-xs md:text-sm text-gray-300 space-y-1">
                    <p>100 KING STREET WEST</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-gray-400 mb-2 tracking-widest uppercase">
                    SPRUCE GROVE
                  </h3>
                  <div className="text-xs md:text-sm text-gray-300 space-y-1">
                    <p>203 CHURCH HILL SUITE 5095</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full border-t border-gray-300"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-0 py-8 md:py-0" style={{ minHeight: '33.333vh' }}>
        {/* Left: Content */}
        <div className="flex-1 flex flex-col md:flex-row justify-start items-start md:pl-32 mb-8 md:mb-0">
          {/* Text */}
          <div className="flex flex-col justify-center text-left md:mr-6 space-y-3 mb-6 md:mb-0">
            <div className="text-lg md:text-2xl font-small text-gray-700">
              Freshly baked with love in Kandy, Sri Lanka.
            </div>
            <div className="text-2xl md:text-4xl font-bold text-gray-500">
              Local Time - <span className='text-black'>{sriLankaTime}</span>
            </div>
            
          </div>

          {/* Skills and Social Links Row - Mobile */}
          <div className='md:ml-12 flex flex-col md:flex-col'>
            <div className='flex flex-col md:flex-col'>
              <span className='font-bold text-sm md:text-base'>Common Skills</span>
              <div className='flex flex-col gap-2 mt-2 text-zinc-500 text-xs md:text-sm'>
                <span>Communication Skills</span>
                <span>Design Principles</span>
                <span>Critical Thinking</span>
                <span>Readability & Maintainability</span>
                <span>Efficient Code</span>
              </div>
            </div>
            
            {/* Mobile Social Links - Single Row */}
            <div className="flex md:hidden flex-row gap-2 mt-4 w-full">
              <a
                href="https://www.linkedin.com/in/kaveen-deshapriya-b68355253/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-black rounded-md px-2 py-1 text-xs hover:bg-gray-50 transition flex-1 min-w-0"
              >
                LinkedIn
                <span className="ml-1 text-xs">↗</span>
              </a>
              <a
                href="https://github.com/Kaveen1212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-black rounded-md px-2 py-1 text-xs hover:bg-gray-50 transition flex-1 min-w-0"
              >
                GitHub
                <span className="ml-1 text-xs">↗</span>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61577058165811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-black rounded-md px-2 py-1 text-xs hover:bg-gray-50 transition flex-1 min-w-0"
              >
                Facebook
                <span className="ml-1 text-xs">↗</span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-black rounded-md px-3 py-3 text-xs hover:bg-gray-50 transition flex-1 min-w-0"
              >
                Twitter
                <span className="ml-1 text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Social Links - Desktop Only */}
        <div className="hidden md:flex flex-1 flex-col items-center md:items-end md:pr-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 w-full max-w-lg">
            <motion.a
              href="https://www.linkedin.com/in/kaveen-deshapriya-b68355253/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between border border-black rounded-lg px-4 md:px-10 py-3 md:py-4 w-full text-sm md:text-lg transition overflow-hidden"
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-black origin-bottom-right"
                variants={{
                  initial: { scale: 0 },
                  hover: { scale: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.3 }}
              >
                Linkedin
              </motion.span>
              <motion.span
                className="ml-2 text-sm md:text-base relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.3 }}
              >
                ↗
              </motion.span>
            </motion.a>

            <motion.a
              href="https://github.com/Kaveen1212"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between border border-black rounded-lg px-4 md:px-10 py-3 md:py-4 w-full text-sm md:text-lg transition overflow-hidden"
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-black origin-bottom-right"
                variants={{
                  initial: { scale: 0 },
                  hover: { scale: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.3 }}
              >
                Git Hub
              </motion.span>
              <motion.span
                className="ml-2 text-sm md:text-base relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.3 }}
              >
                ↗
              </motion.span>
            </motion.a>

            <motion.a
              href="https://web.facebook.com/profile.php?id=61577058165811"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between border border-black rounded-lg px-4 md:px-10 py-3 md:py-4 w-full text-sm md:text-lg transition overflow-hidden"
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-black origin-bottom-right"
                variants={{
                  initial: { scale: 0 },
                  hover: { scale: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.000001 }}
              >
                Facebook
              </motion.span>
              <motion.span
                className="ml-2 text-sm md:text-base relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.000001 }}
              >
                ↗
              </motion.span>
            </motion.a>

            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between border border-black rounded-lg px-4 md:px-10 py-3 md:py-4 w-full text-sm md:text-lg transition overflow-hidden"
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 bg-black origin-bottom-right"
                variants={{
                  initial: { scale: 0 },
                  hover: { scale: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.000001 }}
              >
                Twitter
              </motion.span>
              <motion.span
                className="ml-2 text-sm md:text-base relative z-10"
                variants={{
                  initial: { color: "#000000" },
                  hover: { color: "#ffffff" }
                }}
                transition={{ duration: 0.000001 }}
              >
                ↗
              </motion.span>
            </motion.a>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ContactInput;