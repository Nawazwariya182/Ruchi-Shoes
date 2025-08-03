"use client"

import { useState, useEffect } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 300)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("click", handleClick)
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <div
      className={`custom-cursor ${clicked ? "cursor-click" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
