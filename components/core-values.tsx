import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MinimizeIcon as Simplify, Shield, Zap, Target, Smile } from 'lucide-react'

const coreValues = [
  {
    icon: Simplify,
    title: "Simplicity",
    description: "We focus on what truly adds value for our customers, building trust and strengthening relationships through accessible solutions.",
    details: "We believe that by making things simpler and more accessible, we can help to create a more inclusive, equitable, and sustainable future."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what is right, even when it's not required. Integrity is essential to building a sustainable and successful business.",
    details: "We are committed to upholding the highest standards of ethical behavior, building trust with our stakeholders, and making a positive impact on the world."
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We continuously improve our processes, eliminating unnecessary steps and finding new ways to do things better.",
    details: "We are committed to working smarter, not harder, streamlining our processes to maximize resources and minimize waste."
  },
  {
    icon: Target,
    title: "Value Addition",
    description: "We listen to our customers, understand their pain points, and work tirelessly to solve challenges and create tangible benefits.",
    details: "We are committed to pushing the boundaries of innovation, creating exceptional products and services that add value to our customers' lives."
  },
  {
    icon: Smile,
    title: "Enthusiasm",
    description: "We embrace challenges with energy and passion, inspiring and motivating one another to achieve common goals.",
    details: "Enthusiasm fuels our passion for excellence, inspiring creativity, innovation, and a willingness to take risks."
  }
]

export default function CoreValues() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="p-2 rounded-full bg-blue-100">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="mt-4 text-xl font-semibold text-gray-900">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  {value.description}
                </CardDescription>
                <p className="text-sm text-gray-500 text-center">{value.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

