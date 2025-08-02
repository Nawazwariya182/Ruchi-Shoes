"use client"

import { useState, useEffect } from "react"
import { CustomCursor } from "@/components/custom-cursor"
import { SplashScreen } from "@/components/splash-screen"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import CurvedLoop from "@/components/CurvedLoop"

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <Hero />
      <CurvedLoop
        marqueeText="Be ✦ Unique ✦ With ✦ Ruchi ✦ Shoes ✦"
        speed={0.9}
        curveAmount={150}
        direction="left"
        interactive={false} />
      {/* <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        /> */}
      <Features />
      <LocationSection />
      <Products />
      {/* <CTA /> */}
      <Footer />
    </div>
  )
}
