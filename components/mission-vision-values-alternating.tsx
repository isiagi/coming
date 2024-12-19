import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function MissionVisionValues() {
  const sections = [
    {
      title: "Our Mission",
      content: [
        "To deliver innovative technology solutions that empower businesses",
        "To provide exceptional service and support to our clients",
        "To stay at the forefront of technological advancement"
      ],
      imageUrl: "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Team collaborating on a project"
    },
    {
      title: "Our Vision",
      content: [
        "We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.",
        "Before you can market a business, you need to know its story support staff that's always there when you need us.",
        "To be the leading technology partner for businesses worldwide"
      ],
      imageUrl: "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Futuristic vision of technology"
    },
    {
      title: "Core Values",
      content: [
        "Integrity in all our dealings",
        "Innovation in our solutions",
        "Excellence in our service",
        "Commitment to our clients"
      ],
      imageUrl: "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Team demonstrating core values"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {sections.map((section, index) => (
          <div key={section.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center`}>
            <div className="w-full md:w-1/2">
              <Image
                src={section.imageUrl}
                alt={section.imageAlt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              <ul className="space-y-2">
                {section.content.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2">
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
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Find Out More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

