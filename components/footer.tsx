"use client"

import { Instagram, MessageCircleMore } from "lucide-react"
import Image from "next/image"

const footerSections = [
  {
    title: "Experience",
    links: ["Store Locator", "Size Consultation", "Care Instructions"],
    link: ["https://www.google.com/maps/dir/19.1739767,72.8502591/Ruchi+Shoes,+Shop+No+22-23-24-25,+Harihar+Shopping+Centre,+Parekh+Road,+opposite+The+Mall,+Malad,+Mumbai,+Maharashtra+400064/@19.1805447,72.8435638,16z/data=!3m1!4b1!4m18!1m7!3m6!1s0x3be7b6e31584d1d9:0x1c3b65bce713771b!2sRuchi+Shoes!8m2!3d19.1872439!4d72.8474538!16s%2Fg%2F1tdmnj9m!4m9!1m1!4e1!1m5!1m1!1s0x3be7b6e31584d1d9:0x1c3b65bce713771b!2m2!1d72.8474556!2d19.1872407!3e2?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D","https://www.nike.com/in/size-fit/mens-footwear","https://www.nike.com/in/a/how-to-clean-shoes"]
  },
  {
    title: "Company",
    links: ["About Ruchi", "Sustainability"],
    link: ["https://www.instagram.com/ruchi_shoes?igsh=dm0wYWRxdXJsZGZn", "https://www.shoesustainability.com/"]
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  className="object-contain rounded-full"
                  width={192}
                  height={192}
                />
              </div>
            <span className="font-bold text-3xl tracking-normal">Ruchi Shoes</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Trusted destination for quality shoes at honest prices since 1965.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ruchi_shoes?igsh=dm0wYWRxdXJsZGZn"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://wa.me/7977318179"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <MessageCircleMore className="w-5 h-5" />
              </a>
            </div>
          </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-medium mb-6 text-lg tracking-tight">{section.title}</h4>
              <ul className="space-y-4">
              {section.links.map((linkText, linkIndex) => (
                <li key={linkIndex}>
                <a href={section.link[linkIndex]} target="_blank" className="text-gray-400 hover:text-white transition-colors leading-relaxed">
                  {linkText}
                </a>
                </li>
              ))}
              </ul>
            </div>
            ))}
        </div>
      </div>
    </footer>
  )
}
