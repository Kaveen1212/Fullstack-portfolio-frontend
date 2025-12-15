import { motion, useInView, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface MaskTextProps {
  children: string;
  method?: 'whole' | 'line';
  className?: string;
  delay?: number;
  duration?: number;
  maskColor?: string | string[];
  direction?: 'ltr' | 'rtl';
}

const MaskText = ({
  children,
  method = 'whole',
  className = '',
  delay = 0,
  duration = 0.9,
  maskColor = '#282c20',
  direction = 'ltr'
}: MaskTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Helper function to get color for a specific index
  const getColorForIndex = (index: number): string => {
    if (Array.isArray(maskColor)) {
      return maskColor[index % maskColor.length];
    }
    return maskColor;
  };

  // Mask overlay variants - slides based on direction and hides after animation
  const maskOverlayVariants: Variants = {
    hidden: {
      x: direction === 'ltr' ? '0%' : '0%',
      opacity: 1,
    },
    visible: {
      x: direction === 'ltr' ? '101%' : '-101%',
      opacity: 0,
      transition: {
        x: {
          duration: duration,
          delay: delay,
          ease: [0.645, 0.045, 0.355, 1.0] as [number, number, number, number],
        },
        opacity: {
          duration: 0,
          delay: delay + duration,
        }
      }
    }
  };

  // Text reveal variants - reveals based on direction with clip-path
  const textRevealVariants: Variants = {
    hidden: {
      clipPath: direction === 'ltr' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.645, 0.045, 0.355, 1.0] as [number, number, number, number],
      }
    }
  };

  // Container for line-by-line stagger
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      }
    }
  };

  // Line mask variants - hides after animation
  const lineMaskVariants: Variants = {
    hidden: {
      x: direction === 'ltr' ? '0%' : '0%',
      opacity: 1,
    },
    visible: {
      x: direction === 'ltr' ? '101%' : '-101%',
      opacity: 0,
      transition: {
        x: {
          duration: duration,
          ease: [0.645, 0.045, 0.355, 1.0] as [number, number, number, number],
        },
        opacity: {
          duration: 0,
          delay: duration,
        }
      }
    }
  };

  // Line text variants
  const lineTextVariants: Variants = {
    hidden: {
      clipPath: direction === 'ltr' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: duration,
        ease: [0.645, 0.045, 0.355, 1.0] as [number, number, number, number],
      }
    }
  };

  // Render line-by-line with individual masks
  if (method === 'line') {
    const lines = children.split('\n').filter(line => line.trim() !== '');

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {lines.map((line, index) => (
          <div key={index} className="relative inline-block overflow-hidden w-full">
            {/* Line text */}
            <motion.div
              variants={lineTextVariants}
              style={{
                display: 'block',
                willChange: 'clip-path',
              }}
            >
              {line}
            </motion.div>

            {/* Colored mask overlay for each line */}
            <motion.div
              variants={lineMaskVariants}
              className="absolute inset-0 z-10"
              style={{
                backgroundColor: getColorForIndex(index),
                willChange: 'transform, opacity',
              }}
            />
          </div>
        ))}
      </motion.div>
    );
  }

  // Render whole text (single block) with mask
  return (
    <div ref={ref} className="relative inline-block overflow-hidden">
      {/* Text being revealed */}
      <motion.div
        variants={textRevealVariants}
        initial="hidden"
        animate={controls}
        className={className}
        style={{
          display: 'inline-block',
          willChange: 'clip-path',
        }}
      >
        {children}
      </motion.div>

      {/* Colored mask overlay */}
      <motion.div
        variants={maskOverlayVariants}
        initial="hidden"
        animate={controls}
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: Array.isArray(maskColor) ? maskColor[0] : maskColor,
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
};

export default MaskText;