import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskText from "../ui/MaskText";

gsap.registerPlugin(ScrollTrigger);

function VrReal() {
  useEffect(() => {
    // Scroll-based animation for the images and text
    gsap.fromTo(
      ".left-image",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: ".left-image",
          start: "top 80%", // Trigger when image is 80% of the way into the viewport
          end: "top 30%", // Animation ends when image is 30% of the way into the viewport
          scrub: 1, // Smooth scroll with scrub
          markers: false, // Turn off markers
        },
        x: 0,
        opacity: 1,
        duration: 1
      }
    );

    gsap.fromTo(
      ".right-image",
      {
        x: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: ".right-image",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          markers: false,
        },
        x: 0,
        opacity: 1,
        duration: 1
      }
    );

    gsap.fromTo(
      ".left-text",
      {
        x: -100,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: ".left-text",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          markers: false,
        },
        x: 0,
        opacity: 1,
        duration: 1
      }
    );

    gsap.fromTo(
      ".right-text",
      {
        x: 100,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: ".right-text",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          markers: false,
        },
        x: 0,
        opacity: 1,
        duration: 1
      }
    );
  }, []);

  return (
    <div className="relative flex w-full h-screen overflow-hidden font-brier">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-15"
      >
        <source src="/minimalist topographic.mp4" type="video/mp4" />
      </video>

      {/* Left Hand */}
      <div className="flex-1 relative">
        {/* Image */}
        <div className="flex flex-col justify-end items-start h-full">
          <img
            src="/code.png"
            alt=""
            className="max-w-70 md:max-w-110 -ml-20 md:ml-0 left-image"
          />
        </div>

        {/* Text */}
        <div className="absolute bottom-130 md:bottom-1/4 left-0 lg:left-130 xl:left-130 text-right left-text">
          <h1 className="flex flex-col text-black text-4xl md:text-9xl font-bold leading-none md:leading-normal">
            <MaskText
              method="whole"
              className="text-4xl lg:text-5xl xl:text-9xl font-bolt font-brier text-left leading-none"
              delay={0.1}
            >
              IN
            </MaskText>

            <span style={{ fontFamily: "'Mona Sans Variable', sans-serif", }}>
              <MaskText
                method="whole"
                className="text-4xl lg:text-5xl xl:text-9xl text-center font-bold leading-none"
                delay={0.2}
              >
                CODE
              </MaskText>
            </span>
          </h1>

          {/* Paragraph */}
          <div className="max-w-[180px] md:max-w-md mt-0 md:mt-6 text-xl text-black font-medium leading-tight md:leading-normal"
               style={{ fontFamily: "'Mona Sans Variable', sans-serif" }}
          >
            <MaskText
              method="whole"
              className="text-[11px] lg:text-xl xl:text-xl text-right font-baskerville leading-tight"
              delay={0.4}
            >
              Models, code, performance stats,
            </MaskText>

            <MaskText
              method="whole"
              className="text-[11px] lg:text-xl xl:text-xl text-right font-baskerville leading-tight"
              delay={0.5}
            >
              and what I'm building right now.
            </MaskText>
          </div>

          {/* Button */}
          <button className="mt-6 md:mt-10 mr-0">
            <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="49.1791" height="49.1791" rx="10.9287" fill="#D2FF00" />
              <path
                d="M35.5156 21.8565L36.4816 22.8224L37.4476 21.8565L36.4816 20.8905L35.5156 21.8565ZM12.2922 32.7852C12.2922 33.5396 12.9038 34.1512 13.6583 34.1512C14.4127 34.1512 15.0243 33.5396 15.0243 32.7852L13.6583 32.7852L12.2922 32.7852ZM28.6852 28.6869L29.6512 29.6529L36.4816 22.8224L35.5156 21.8565L34.5497 20.8905L27.7192 27.7209L28.6852 28.6869ZM35.5156 21.8565L36.4816 20.8905L29.6512 14.0601L28.6852 15.026L27.7192 15.992L34.5497 22.8224L35.5156 21.8565ZM35.5156 21.8565L35.5156 20.4904L21.8548 20.4904L21.8548 21.8565L21.8548 23.2226L35.5156 23.2226L35.5156 21.8565ZM13.6583 30.053L12.2922 30.053L12.2922 32.7852L13.6583 32.7852L15.0243 32.7852L15.0243 30.053L13.6583 30.053ZM21.8548 21.8565L21.8548 20.4904C16.5735 20.4904 12.2922 24.7717 12.2922 30.053L13.6583 30.053L15.0243 30.053C15.0243 26.2806 18.0824 23.2226 21.8548 23.2226L21.8548 21.8565Z"
                fill="#33363F"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Hand */}
      <div className="flex-1 relative">
        <div className="flex flex-col justify-end items-end pr-0 h-full">
          <img
            src="/duty.png"
            alt=""
            className="max-w-65 mb-0 md:max-w-100 -mr-25 md:mr-0 right-image"
          />
        </div>

        {/* Text */}
        <div className="absolute right-0 lg:right-1/4 xl:right-1/4 bottom-130 lg:bottom-1/4 xl:bottom-1/4 transform translate-x-0 md:-translate-x-1/2 text-left right-text">
          <h1 className="flex flex-col text-black text-4xl md:text-9xl font-bold leading-none md:leading-normal">
            <MaskText
            direction="rtl"
              method="whole"
              className="text-4xl lg:text-5xl xl:text-9xl font-bolt text-center font-brier font-bold leading-none"
              delay={0.1}
            >
              OFF
            </MaskText>

            <span style={{ fontFamily: "'Mona Sans Variable', sans-serif" }}>
              <MaskText
                direction="rtl"
                method="whole"
                className="text-4xl lg:text-5xl xl:text-9xl font-bolt text-center font-bold leading-none"
                delay={0.2}
              >
                DUTY
              </MaskText>
            </span>

          </h1>

          {/* Paragraph */}
          <div className="max-w-[180px] md:max-w-md mt-0 md:mt-6 text-xl text-black font-medium leading-tight md:leading-normal"
               style={{ fontFamily: "'Mona Sans Variable', sans-serif" }}
          >
             <MaskText
              direction="rtl"
              method="whole"
              className="text-[11px] lg:text-xl xl:text-xl text-left font-mona leading-tight"
              delay={0.4}
            >
              Visual stories, design ideas, and
            </MaskText>

             <MaskText
              direction="rtl"
              method="whole"
              className="text-[11px] lg:text-xl xl:text-xl text-left  font-mona leading-tight"
              delay={0.5}
            >
              moments from the places I explore.
            </MaskText>

          </div>

          {/* Button */}
          <button className="mt-6 md:mt-10 ml-0">
            <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="49.1791" height="49.1791" rx="10.9287" fill="#D2FF00" />
              <path
                d="M13.6562 27.3193L12.6903 26.3533L11.7243 27.3193L12.6903 28.2853L13.6562 27.3193ZM36.8797 16.3906C36.8797 15.6362 36.2681 15.0245 35.5136 15.0245C34.7592 15.0245 34.1475 15.6362 34.1475 16.3906L35.5136 16.3906L36.8797 16.3906ZM20.4867 20.4889L19.5207 19.5229L12.6903 26.3533L13.6562 27.3193L14.6222 28.2853L21.4526 21.4549L20.4867 20.4889ZM13.6562 27.3193L12.6903 28.2853L19.5207 35.1157L20.4867 34.1497L21.4526 33.1838L14.6222 26.3533L13.6562 27.3193ZM13.6562 27.3193L13.6562 28.6854L27.3171 28.6854L27.3171 27.3193L27.3171 25.9532L13.6562 25.9532L13.6562 27.3193ZM35.5136 19.1228L36.8797 19.1228L36.8797 16.3906L35.5136 16.3906L34.1475 16.3906L34.1475 19.1228L35.5136 19.1228ZM27.3171 27.3193L27.3171 28.6854C32.5984 28.6854 36.8797 24.4041 36.8797 19.1228L35.5136 19.1228L34.1475 19.1228C34.1475 22.8951 31.0894 25.9532 27.3171 25.9532L27.3171 27.3193Z"
                fill="#33363F"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VrReal;
