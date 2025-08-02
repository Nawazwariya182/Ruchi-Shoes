"use client"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight leading-tight">
            Elevate Your
            <span className="block font-normal">Journey</span>
          </h2>

          <p className="text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Join an exclusive community of individuals who understand that exceptional footwear is not just about
            style—it's about making a statement.
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-xl font-light tracking-wider"
            >
              Explore Collection
            </Button>
          </div>

          <div className="pt-12 flex justify-center items-center space-x-12 text-sm text-gray-400 tracking-wider">
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-1">50K+</div>
              <div>Satisfied Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-1">25+</div>
              <div>Countries Worldwide</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-1">15</div>
              <div>Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
