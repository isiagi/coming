import { notFound } from 'next/navigation'
import Image from 'next/image'
import { CalendarDays, MapPin, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// This would typically come from a database or API
const events = [
  {
    slug: "dst-annual-tech-conference",
    title: "DST Annual Tech Conference",
    date: "2023-09-20",
    location: "Virtual Event",
    content: "Join us for the DST Annual Tech Conference, a virtual event bringing together industry leaders, innovators, and tech enthusiasts from around the globe. This year's conference focuses on emerging technologies and their impact on business transformation.\n\nKey Highlights:\n\n1. Keynote Speeches: Hear from renowned experts on AI, blockchain, and quantum computing.\n2. Interactive Workshops: Participate in hands-on sessions on cloud architecture, cybersecurity, and data analytics.\n3. Networking Opportunities: Connect with peers and potential partners through our virtual networking platform.\n4. Product Showcases: Explore the latest tech solutions from DST and our partners.\n5. Panel Discussions: Engage in thought-provoking discussions on the future of technology and its societal implications.\n\nWho Should Attend:\n- IT Professionals\n- Business Leaders\n- Entrepreneurs\n- Students and Academics\n- Tech Enthusiasts\n\nDon't miss this opportunity to stay ahead of the curve and gain insights that will drive your personal and professional growth in the tech industry. Register now to secure your spot at this exciting virtual event!",
    image: "/placeholder.svg?height=400&width=800"
  },
  // ... other events
]

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = events.find(item => item.slug === params.slug)
  if (!event) {
    return {
      title: 'Event Not Found'
    }
  }
  return {
    title: event.title,
    description: event.content.substring(0, 160)
  }
}

export default function EventDetail({ params }: { params: { slug: string } }) {
  const event = events.find(item => item.slug === params.slug)

  if (!event) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-6">
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
          <CalendarDays className="mr-2 h-5 w-5" />
          <time dateTime={event.date}>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-5 w-5" />
          <span>{event.location}</span>
        </div>
      </div>
      <Image
        src={event.image}
        alt={event.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <div className="prose prose-lg max-w-none">
        {event.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <div className="mt-12">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </article>
  )
}

