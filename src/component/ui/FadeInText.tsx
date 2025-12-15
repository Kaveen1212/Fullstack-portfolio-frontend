import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInTextProps {
  text: string;
  className?: string;
}

const FadeInText = ({ text, className = '' }: FadeInTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Create the scroll-triggered animation
    const animation = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 60, // Slide up slightly
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 100%', // Animation starts when element reaches 80% of viewport
          end: 'top 10%',   // Animation completes at 50% of viewport
          scrub: 1,         // Smooth scrubbing effect
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cleanup function
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === textRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default FadeInText;
