import { Target, Eye, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MissionVisionValues() {
  const sections = [
    {
      title: "Our Mission",
      icon: Target,
      points: [
        "To deliver innovative technology solutions that empower businesses",
        "To provide exceptional service and support to our clients",
        "To stay at the forefront of technological advancement"
      ]
    },
    {
      title: "Our Vision",
      icon: Eye,
      points: [
        "We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.",
        "Before you can market a business, you need to know its story support staff that's always there when you need us.",
        "To be the leading technology partner for businesses worldwide"
      ]
    },
    {
      title: "Core Values",
      icon: Heart,
      points: [
        "Integrity in all our dealings",
        "Innovation in our solutions",
        "Excellence in our service",
        "Commitment to our clients"
      ]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} className="border border-gray-200">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {section.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Find Out More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

