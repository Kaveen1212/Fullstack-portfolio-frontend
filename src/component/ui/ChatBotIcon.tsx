import React, { useEffect, useRef  } from 'react'
import { useNavigate } from 'react-router-dom'

function ChatBotIcon() {
  const glitchRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate ();

   const handleChange = (value: string) => {
    console.log("User typed:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === 'Enter') {
      handleChange(e.currentTarget.value);
      navigate('/chatbot');
    }
  }



  useEffect(() => {
    // GSAP-style animation using CSS animations and timeouts
    const createGlitchAnimation = () => {
      const glitchElement = glitchRef.current
      if (!glitchElement) return

      const timeline = () => {
        // Skew animation
        glitchElement.style.transform = 'skewX(70deg)'
        setTimeout(() => {
          glitchElement.style.transform = 'skewX(0deg)'
        }, 100)

        // Opacity flicker
        setTimeout(() => {
          glitchElement.style.opacity = '0'
          setTimeout(() => {
            glitchElement.style.opacity = '1'
          }, 40)
        }, 140)

        // X movement
        setTimeout(() => {
          glitchElement.style.transform = 'translateX(-20px)'
          setTimeout(() => {
            glitchElement.style.transform = 'translateX(0px)'
          }, 40)
        }, 180)

        // Split and shadow effects
        setTimeout(() => {
          const topElement = glitchElement.querySelector('.top') as HTMLElement
          const bottomElement = glitchElement.querySelector('.bottom') as HTMLElement
          const mainText = glitchElement.querySelector('.main-text') as HTMLElement

          if (topElement && bottomElement && mainText) {
            topElement.style.transform = 'translateX(-60px)'
            bottomElement.style.transform = 'translateX(60px)'
            mainText.style.transform = 'scale(1.1)'
            mainText.classList.add('red-shadow')

            setTimeout(() => {
              mainText.style.transform = 'scale(1)'
            }, 20)

            setTimeout(() => {
              mainText.classList.remove('red-shadow')
              mainText.classList.add('green-shadow')
            }, 80)

            setTimeout(() => {
              mainText.classList.remove('green-shadow')
            }, 90)

            setTimeout(() => {
              topElement.style.transform = 'translateX(0px)'
              bottomElement.style.transform = 'translateX(0px)'
            }, 200)
          }
        }, 220)

        // Scale effect
        setTimeout(() => {
          glitchElement.style.transform = 'scaleY(1.1)'
          setTimeout(() => {
            glitchElement.style.transform = 'scaleY(1)'
          }, 40)
        }, 420)

        // Reset all transforms
        setTimeout(() => {
          glitchElement.style.transform = ''
          const topElement = glitchElement.querySelector('.top') as HTMLElement
          const bottomElement = glitchElement.querySelector('.bottom') as HTMLElement
          const mainText = glitchElement.querySelector('.main-text') as HTMLElement
          
          if (topElement && bottomElement && mainText) {
            topElement.style.transform = ''
            bottomElement.style.transform = ''
            mainText.style.transform = ''
          }
        }, 500)
      }

      // Run animation every 4 seconds (2s animation + 2s delay)
      const interval = setInterval(timeline, 4000)
      timeline() // Run immediately

      return () => clearInterval(interval)
    }

    const cleanup = createGlitchAnimation()
    return cleanup
  }, [])

  return (
    <div className='flex items-center justify-center'>
      
        <div className='relative glitch-container bottom-8 -mx-5' ref={glitchRef}>
          {/* Main text */}
        
          <label htmlFor="" className='main-text relative z-10 text-[#00A67D] text-sm lg:text-xl font-normal tracking-wider transition-all duration-75 ease-out sf-mono-font cursor-text whitespace-nowrap flex items-center'>kaveen@agent v-0.1 ~ %
          <input
            type="text"
            placeholder="_"
            onKeyDown={handleKeyPress}
            className='border-none ml-2 lg:mx-5 bg-transparent outline-none w-auto text-[#00A67D] sf-mono-font text-sm lg:text-xl'
            aria-label="terminal-input"
          />
          </label>
        
          {/* Top clipped layer */}
          <div className='top absolute inset-0 text-[#00A67D] text-sm lg:text-xl font-normal tracking-wider transition-all duration-500 ease-out overflow-hidden sf-mono-font'>
            <div style={{ clipPath: 'inset(0 0 41% 0)' }}>
              kaveen@agent v-0.1 ~ % 
            </div>
          </div>

          {/* Bottom clipped layer */}
          <div className='bottom absolute inset-0 text-[#00A67D] text-sm lg:text-xl font-normal tracking-wider transition-all duration-500 ease-out overflow-hidden sf-mono-font'>
            <div style={{ clipPath: 'inset(58% 0 0 0)' }}>
              kaveen@agent v-0.1 ~ % 
            </div>
          </div>
        </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Mono:wght@400;700&display=swap');
        
        .sf-mono-font {
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
        }
        
        .red-shadow {
          text-shadow: -3px 0 #ff0000 !important;
        }
        
        .green-shadow {
          text-shadow: -3px 0 #39ff14 !important;
        }
        
        .glitch-container {
          transition: all 0.1s ease-out;
        }
        
        .cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        button:hover .glitch-container {
          transform: scale(1.02);
        }
        
        button:active .glitch-container {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  )
}

export default ChatBotIcon