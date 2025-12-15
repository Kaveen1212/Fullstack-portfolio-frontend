import { useEffect, useRef, useState, useCallback } from 'react'

interface UseAutoScrollReturn {
  scrollRef: React.RefObject<HTMLDivElement | null>
  shouldShowNewMessages: boolean
  scrollToBottom: () => void
  handleScroll: () => void
}

export function useAutoScroll(dependencies: unknown[] = []): UseAutoScrollReturn {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isUserNearBottom, setIsUserNearBottom] = useState(true)
  const [shouldShowNewMessages, setShouldShowNewMessages] = useState(false)
  const previousScrollHeight = useRef(0)

  // Check if user is near the bottom of the scroll container
  const checkIfNearBottom = useCallback((): boolean => {
    if (!scrollRef.current) return true

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight)
    const threshold = 100 
    return distanceFromBottom < threshold
  }, [])

  // Scroll to bottom with smooth behavior
  const scrollToBottom = useCallback((smooth = true) => {
    if (!scrollRef.current) return

    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      if (!scrollRef.current) return

      // Scroll to absolute maximum to ensure latest message is fully visible
      // and previous messages are scrolled out of view
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight * 2, // Overshoot to ensure we hit absolute bottom
        behavior: smooth ? 'smooth' : 'auto'
      })
    })

    // Reset flags
    setIsUserNearBottom(true)
    setShouldShowNewMessages(false)
  }, [])

  // Handle scroll event
  const handleScroll = useCallback(() => {
    const nearBottom = checkIfNearBottom()
    setIsUserNearBottom(nearBottom)

    // If user scrolls back to bottom, hide the indicator
    if (nearBottom) {
      setShouldShowNewMessages(false)
    }
  }, [checkIfNearBottom])

  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (!scrollRef.current) return

    // Use requestAnimationFrame to ensure DOM is fully updated
    requestAnimationFrame(() => {
      if (!scrollRef.current) return

      const currentScrollHeight = scrollRef.current.scrollHeight

      // Check if content has grown (new message added)
      const hasNewContent = currentScrollHeight > previousScrollHeight.current

      if (hasNewContent) {
        if (isUserNearBottom) {
          // Auto-scroll if user is near bottom - use another RAF for smooth scrolling
          requestAnimationFrame(() => {
            scrollToBottom(true)
          })
        } else {
          // Show "New Messages" indicator if user is scrolled up
          setShouldShowNewMessages(true)
        }

        previousScrollHeight.current = currentScrollHeight
      }
    })
  }, dependencies) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    scrollRef,
    shouldShowNewMessages,
    scrollToBottom,
    handleScroll
  }
}
