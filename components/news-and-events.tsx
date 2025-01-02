import { CalendarDays, ChevronRight, Newspaper } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    slug: "dst-launches-new-cloud-security-solution",
    title: "DST Launches New Cloud Security Solution",
    date: "2023-06-15",
    excerpt: "Datahub Systems Technologies introduces a state-of-the-art cloud security platform, enhancing data protection for businesses.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    slug: "dst-partners-with-leading-ai-research-institute",
    title: "DST Partners with Leading AI Research Institute",
    date: "2023-05-28",
    excerpt: "A new partnership aims to bring cutting-edge AI technologies to DST's software solutions.",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    slug: "dst-recognized-as-top-it-service-provider",
    title: "DST Recognized as Top IT Service Provider",
    date: "2023-05-10",
    excerpt: "Industry analysts rank Datahub Systems Technologies among the top IT service providers for small and medium businesses.",
    image: "/placeholder.svg?height=200&width=400"
  },
]

const events: Event[] = [
  {
    slug: "dst-annual-tech-conference",
    title: "DST Annual Tech Conference",
    date: "2023-09-20",
    location: "Virtual Event",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    slug: "cybersecurity-workshop",
    title: "Cybersecurity Workshop",
    date: "2023-08-05",
    location: "New York, NY",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    slug: "cloud-computing-seminar",
    title: "Cloud Computing Seminar",
    date: "2023-07-15",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=200&width=400"
  },
]

export function NewsAndEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Newspaper className="mr-2" />
              Latest News
            </h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/news/${item.slug}`}>
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <CalendarDays className="mr-2" />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-500 mb-1">Date: {event.date}</p>
                    <p className="text-sm text-gray-500 mb-4">Location: {event.location}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/events/${event.slug}`}>
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

