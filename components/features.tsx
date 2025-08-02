"use client"

import { Store, Tag, RefreshCcw, Users } from "lucide-react"

const features = [
{
  icon: Store,
  title: "Wide Variety in One Place",
  description: "Choose from a curated selection of trending footwear for all styles and budgets.",
  color: "blue",
},
{
  icon: Tag,
  title: "Wholesale Prices for Everyone",
  description: "Direct from wholesalers—get quality shoes at unbeatable retail prices.",
  color: "green",
},
{
  icon: RefreshCcw,
  title: "Easy In-Store Exchange",
  description: "7-day exchange on unused products. Hassle-free and customer-friendly.",
  color: "purple",
},
{
  icon: Users,
  title: "Trusted by Locals",
  description: "Serving the community with honest pricing and personalized service for years.",
  color: "amber",
}

]

const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
  amber: "bg-amber-50 text-amber-600",
}

export function Features() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6 tracking-tight">
            The RUCHI <span className="font-normal">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
Quality, variety, and honest pricing—crafted through years of retail expertise and commitment to our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div
                className={`w-20 h-20 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
