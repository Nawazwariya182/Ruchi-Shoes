"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CardCarousel } from "@/components/card"
import { useState } from "react"
import { Cross } from "lucide-react"

const products = [
  {
    name: "Cool Shoes",
    price: "₹700",
    image: "1.jpg",
    badge: "Limited Edition",
    description: "Professional-grade",
  },
  {
    name: "Neki Sports Shoes",
    price: "₹1,000",
    image: "2.jpg",
    badge: "Bestseller",
    description: "Sophisticated everyday elegance",
  },
  {
    name: "Nike Air Max",
    price: "₹1,100",
    image: "3.jpg",
    badge: "Pro Series",
    description: "Championship-level performance",
  },
]

const images = [
  { src: "./6.jpg", alt: "Image 1" },
  { src: "./7.jpg", alt: "Image 2" },
  { src: "./8.jpg", alt: "Image 3" },
  { src: "./9.jpg", alt: "Image 4" },
  { src: "./10.jpg", alt: "Image 5" },
  { src: "./11.jpg", alt: "Image 6" },
  { src: "./12.jpg", alt: "Image 7" },
  { src: "./13.jpg", alt: "Image 8" },
  { src: "./14.jpg", alt: "Image 9" },
  { src: "./15.jpg", alt: "Image 10" },
  { src: "./16.jpg", alt: "Image 11" },
  { src: "./17.jpg", alt: "Image 12" },
  { src: "./18.jpg", alt: "Image 13" },
  { src: "./19.jpg", alt: "Image 14" },
  { src: "./20.jpg", alt: "Image 15" },
]

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const openModal = (productIndex: number) => {
    setSelectedProduct(productIndex)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6 tracking-tight">
            Signature <span className="font-normal">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Step into style with our carefully selected shoes—where fashion, comfort, and affordability walk together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100"
            >
              <div className="relative mb-6">
                <Badge variant="secondary" className="absolute top-4 left-4 z-10 bg-black text-white hover:bg-black">
                  ✦ {product.badge} ✦
                </Badge>
                <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={`./${product.image}`}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-medium mb-2 tracking-tight">✦ {product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-light">{product.price}</span>
                </div>

                <Button 
                  onClick={() => openModal(index)}
                  className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg font-light tracking-wide"
                >
                  See Carousel
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto relative">
              <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              >
              <Cross className="rotate-45" />
              </button>
              
              <h3 className="text-3xl font-medium mb-6 text-center">
              {products[selectedProduct].name}
              </h3>
              
              <CardCarousel
              images={images.slice(selectedProduct * 5, (selectedProduct * 5) + 5)}
              autoplayDelay={2000}
              showPagination={true}
              showNavigation={true}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
