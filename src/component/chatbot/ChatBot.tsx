import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Local useAutoScroll hook to avoid external dependency
function useAutoScroll(deps: React.DependencyList) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isAtBottom, setIsAtBottom] = useState(true)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    if (isAtBottom) {
      el.scrollTop = el.scrollHeight
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const atBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 20
    setIsAtBottom(atBottom)
  }

  return { scrollRef, handleScroll }
}

function ChatBot() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([
    {
      type: 'bot',
      text: "👋 Hello! I'm Kaveen Agent, your AI assistant.\n\nI can help you with:\n• Answering questions\n• Planning and organizing information\n• Creating content\n• Researching topics\n• Guiding you step-by-step with your projects\n\nFeel free to ask me anything or type 'help' to learn more!"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [asciiColor, setAsciiColor] = useState('text-white')
  const [themeColor, setThemeColor] = useState('#1F9D18')
  const [sessionId, setSessionId] = useState<string>('') // Add session ID state
  const inputRef = useRef<HTMLInputElement>(null)

  // Use the custom auto-scroll hook
  const { scrollRef, handleScroll } = useAutoScroll([
    messages,
    isLoading
  ])

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId || undefined
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      // Update session ID if provided
      if (data.session_id && !sessionId) {
        setSessionId(data.session_id)
      }

      return data.content
    } catch (error) {
      console.error('Error calling chat API:', error)
      return "I'm sorry, I encountered an error processing your request. Please try again."
    }
  }

   const handleSend = async () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim()

      // Add user message
      setMessages(prev => [...prev, { type: 'user', text: userMessage }])
      setInputValue('')
      setIsLoading(true)

      try {
        const botResponse = await generateBotResponse(userMessage)
        setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: "I'm sorry, I encountered an error. Please try again." 
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  // Function to handle yellow dot click (Claude color - orange)
  const handleYellowDotClick = () => {
    setAsciiColor('text-[#D87756]') // Claude orange color for ASCII
    setThemeColor('#D87756') // Claude orange color for theme elements
  }

  // Function to handle green dot click
  const handleGreenDotClick = () => {
    setAsciiColor('text-[#00A064]') // Green color for ASCII
    setThemeColor('#00A064') // Green color for theme elements
  }

  // Function to handle new chat button click
  const handleNewChat = () => {
    setMessages([]) // Clear all messages completely
    setInputValue('')
    setIsLoading(false)
  }

  return (
    <div className="w-full h-screen bg-[#3A3D44] flex flex-col overflow-hidden" style={{ fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", "Droid Sans Mono", "Source Code Pro", monospace' }}>
      <style>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkle-pulse {
          0%, 100% {
            transform: scale(0.7);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes slide-up-fade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes message-fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .message-animate {
          animation: message-fade-in 0.4s ease-out;
        }

        .new-messages-btn {
          animation: slide-up-fade 0.3s ease-out;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Fixed Top Section - Always Visible */}
      <div className="flex-shrink-0">
        {/* Top Bar with MacOS Buttons */}
        <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 px-3 sm:px-6">
          <div
            onClick={() => navigate('/')}
            className="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full bg-[#E46E5D] cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <svg
              className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9M9 1L1 9"
                stroke="#8B0000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            onClick={handleYellowDotClick}
            className="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full bg-[#EEC04A] cursor-pointer hover:opacity-80 transition-opacity"
          ></div>
          <div
            onClick={handleGreenDotClick}
            className="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full bg-[#6BC44F] cursor-pointer hover:opacity-80 transition-opacity"
          ></div>
        </div>

        {/* Welcome Banner */}
        <div className="mt-4 sm:mt-8 mx-3 sm:mx-6 py-3 sm:py-4 px-3 sm:px-5 rounded-xl flex items-center gap-2 sm:gap-4 max-w-3xl transition-colors duration-300 relative" style={{ borderColor: themeColor, border: '1px solid'  }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-6 h-6 sm:w-10 sm:h-10 fill-current transition-colors duration-300 flex-shrink-0"
            style={{ color: themeColor, animation: 'fade-slide-in 0.8s ease-out 0.2s backwards, sparkle-pulse 1.5s ease-in-out 1s infinite' }}
          >
            <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
          </svg>
          <span className="text-white text-sm sm:text-xl font-light flex-1">
            Welcome to the <span className="font-bold">Kaveen Agent</span> preview!
          </span>
          {/* New Chat Button Icon */}
          <svg
            onClick={handleNewChat}
            width="32"
            height="32"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-7 sm:h-7 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
            style={{ color: themeColor }}
            aria-label="Start new chat"
          >
            <path d="M2.6687 11.333V8.66699C2.6687 7.74455 2.66841 7.01205 2.71655 6.42285C2.76533 5.82612 2.86699 5.31731 3.10425 4.85156L3.25854 4.57617C3.64272 3.94975 4.19392 3.43995 4.85229 3.10449L5.02905 3.02149C5.44666 2.84233 5.90133 2.75849 6.42358 2.71582C7.01272 2.66769 7.74445 2.66797 8.66675 2.66797H9.16675C9.53393 2.66797 9.83165 2.96586 9.83179 3.33301C9.83179 3.70028 9.53402 3.99805 9.16675 3.99805H8.66675C7.7226 3.99805 7.05438 3.99834 6.53198 4.04102C6.14611 4.07254 5.87277 4.12568 5.65601 4.20313L5.45581 4.28906C5.01645 4.51293 4.64872 4.85345 4.39233 5.27149L4.28979 5.45508C4.16388 5.7022 4.08381 6.01663 4.04175 6.53125C3.99906 7.05373 3.99878 7.7226 3.99878 8.66699V11.333C3.99878 12.2774 3.99906 12.9463 4.04175 13.4688C4.08381 13.9833 4.16389 14.2978 4.28979 14.5449L4.39233 14.7285C4.64871 15.1465 5.01648 15.4871 5.45581 15.7109L5.65601 15.7969C5.87276 15.8743 6.14614 15.9265 6.53198 15.958C7.05439 16.0007 7.72256 16.002 8.66675 16.002H11.3337C12.2779 16.002 12.9461 16.0007 13.4685 15.958C13.9829 15.916 14.2976 15.8367 14.5447 15.7109L14.7292 15.6074C15.147 15.3511 15.4879 14.9841 15.7117 14.5449L15.7976 14.3447C15.8751 14.128 15.9272 13.8546 15.9587 13.4688C16.0014 12.9463 16.0017 12.2774 16.0017 11.333V10.833C16.0018 10.466 16.2997 10.1681 16.6667 10.168C17.0339 10.168 17.3316 10.4659 17.3318 10.833V11.333C17.3318 12.2555 17.3331 12.9879 17.2849 13.5771C17.2422 14.0993 17.1584 14.5541 16.9792 14.9717L16.8962 15.1484C16.5609 15.8066 16.0507 16.3571 15.4246 16.7412L15.1492 16.8955C14.6833 17.1329 14.1739 17.2354 13.5769 17.2842C12.9878 17.3323 12.256 17.332 11.3337 17.332H8.66675C7.74446 17.332 7.01271 17.3323 6.42358 17.2842C5.90135 17.2415 5.44665 17.1577 5.02905 16.9785L4.85229 16.8955C4.19396 16.5601 3.64271 16.0502 3.25854 15.4238L3.10425 15.1484C2.86697 14.6827 2.76534 14.1739 2.71655 13.5771C2.66841 12.9879 2.6687 12.2555 2.6687 11.333ZM13.4646 3.11328C14.4201 2.334 15.8288 2.38969 16.7195 3.28027L16.8865 3.46485C17.6141 4.35685 17.6143 5.64423 16.8865 6.53613L16.7195 6.7207L11.6726 11.7686C11.1373 12.3039 10.4624 12.6746 9.72827 12.8408L9.41089 12.8994L7.59351 13.1582C7.38637 13.1877 7.17701 13.1187 7.02905 12.9707C6.88112 12.8227 6.81199 12.6134 6.84155 12.4063L7.10132 10.5898L7.15991 10.2715C7.3262 9.53749 7.69692 8.86241 8.23218 8.32715L13.2791 3.28027L13.4646 3.11328ZM15.7791 4.2207C15.3753 3.81702 14.7366 3.79124 14.3035 4.14453L14.2195 4.2207L9.17261 9.26856C8.81541 9.62578 8.56774 10.0756 8.45679 10.5654L8.41772 10.7773L8.28296 11.7158L9.22241 11.582L9.43433 11.543C9.92426 11.432 10.3749 11.1844 10.7322 10.8271L15.7791 5.78027L15.8552 5.69629C16.185 5.29194 16.1852 4.708 15.8552 4.30371L15.7791 4.2207Z"/>
          </svg>
        </div>

        {/* ASCII Art */}
        <div className="mt-3 sm:mt-6 mx-3 sm:mx-6 overflow-x-auto">
          <pre className={`${asciiColor} text-[10px] sm:text-base md:text-xl lg:text-2xl leading-tight sm:leading-7 font-bold whitespace-pre tracking-tight transition-colors duration-300`}>
{`██╗  ██╗  █████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗
██║ ██╔╝ ██╔══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║
█████╔╝  ███████║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║
██╔═██╗  ██╔══██║ ╚██╗ ██╔╝ ██╔══╝   ██╔══╝   ██║╚██╗██║
██║  ██╗ ██║  ██║  ╚████╔╝  ███████╗ ███████╗ ██║ ╚████║
╚═╝  ╚═╝ ╚═╝  ╚═╝   ╚═══╝   ╚══════╝ ╚══════╝ ╚═╝  ╚═══╝

 █████╗  ██████╗ ███████╗███╗   ██╗████████╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝`}
          </pre>
        </div>
      </div>

      {/* Scrollable Chat Container - Only this section scrolls */}
      <div className="flex-1 relative mx-3 sm:mx-6 mt-3 sm:mt-6 overflow-hidden">
        {/* Scrollable Chat History */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="space-y-3 sm:space-y-5 overflow-y-auto h-full scroll-smooth pb-4 hide-scrollbar"
        >
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-4 message-animate">
              {message.type === 'user' ? (
                <>
                  <span className="text-xs sm:text-xl font-light transition-colors duration-300 flex-shrink-0" style={{ color: themeColor }}>kaveen@macbook ~ %</span>
                  <p className="text-[#9CA3AF] text-xs sm:text-xl font-light whitespace-pre-line leading-relaxed">
                    {message.text}
                  </p>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full mt-1 sm:mt-2 flex-shrink-0 transition-colors duration-300" style={{ backgroundColor: themeColor }}></div>
                  <div className="border rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-5 flex-1 transition-colors duration-300" style={{ borderColor: '#00A064' }}>
                    <p className="text-xs sm:text-xl font-light whitespace-pre-line leading-relaxed transition-colors duration-300" style={{ color: themeColor }}>
                      {message.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2 sm:gap-4 message-animate">
              <div className="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full mt-1 sm:mt-2 flex-shrink-0 transition-colors duration-300" style={{ backgroundColor: themeColor }}></div>
              <div className="border border-[#6B7280] rounded-lg px-3 sm:px-6 py-3 sm:py-5 bg-[#2D3038]">
                <p className="text-xs sm:text-xl font-light transition-colors duration-300" style={{ color: themeColor }}>
                  <span className="animate-pulse">Thinking...</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* "New Messages" Button - Appears when user scrolls up */}
      </div>

      {/* Fixed Input Area - Always stays at the bottom */}
      <div className="flex-shrink-0 mx-3 sm:mx-6 mb-3 sm:mb-6 border-t border-[#4B5563] pt-3 sm:pt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-xl font-light transition-colors duration-300 flex-shrink-0" style={{ color: themeColor }}>kaveen@macbook ~ %</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent text-white text-xs sm:text-xl font-light outline-none placeholder-[#6B7280] min-w-0"
            placeholder="Type your message..."
            autoFocus
          />
          {/* Send Button Icon */}
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4B5563] active:scale-95"
            style={{
              backgroundColor: inputValue.trim() && !isLoading ? `${themeColor}20` : 'transparent',
            }}
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300"
              style={{ color: inputValue.trim() && !isLoading ? themeColor : '#6B7280' }}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot