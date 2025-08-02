import Spline from "@splinetool/react-spline"
export function Hero() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Spline 3D Component */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="w-full h-full max-w-4xl pointer-events-none">
          <Spline scene="https://prod.spline.design/kD4uSU-wRdaA39bF/scene.splinecode" />
        </div>

        {/* Transparent Scrollable Overlay */}
        <div className="absolute inset-0 bg-transparent z-10"></div>

        {/* Overlay Text - Responsive positioning */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center space-y-10">
              {/* Premium Text */}
              <div className="absolute top-2 left-4 pointer-events-none">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black/95 tracking-[0.1em] md:tracking-[0.1em] uppercase drop-shadow-sm">
                  Premium
                </h1>
              </div>
              
              {/* Footwear Text */}
              <div className="absolute bottom-[120px] sm:bottom-[120px] md:bottom-[120px] md:right-1 lg:bottom-[120px] lg:right-1 xl:bottom-[120px] xl:right-5 pointer-events-none z-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black/90 tracking-[0.1em] md:tracking-[0.1em] uppercase drop-shadow-sm">
                  Footwear
                </h2>
                <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-px bg-black/40 mx-auto mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8"></div>
                <p className="flex text-md justify-center sm:text-base md:text-lg lg:text-lg xl:text-xl text-black/70 tracking-[0.05em] md:tracking-[0.1em] font-medium max-w-sm sm:max-w-sm md:max-w-md lg:max-w-md mx-auto px-2 sm:px-3 md:px-4 z-10">
                  Excellence in every step—no compromises.
                </p>
              </div>
            </div>
        </div>
      </div>
      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 tracking-wider uppercase font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <div className="bg-[#fdfdff] w-full h-20 z-0"></div>
      </div>
      
    </section>
  )
}
