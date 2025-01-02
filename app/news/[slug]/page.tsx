import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// This would typically come from a database or API
const newsItems = [
  {
    slug: "dst-launches-new-cloud-security-solution",
    title: "DST Launches New Cloud Security Solution",
    date: "2023-06-15",
    content: "Datahub Systems Technologies (DST) is proud to announce the launch of our state-of-the-art cloud security platform, designed to enhance data protection for businesses of all sizes. This innovative solution combines advanced threat detection, real-time monitoring, and automated incident response to provide unparalleled security for cloud-based infrastructures.\n\nIn today's digital landscape, where cyber threats are constantly evolving, businesses need robust security measures to protect their valuable data and maintain customer trust. Our new cloud security solution addresses these challenges head-on, offering a comprehensive suite of features that include:\n\n1. AI-powered threat detection\n2. Continuous vulnerability assessment\n3. Automated patch management\n4. Compliance monitoring and reporting\n5. Multi-factor authentication integration\n\nBy leveraging cutting-edge technologies and industry best practices, DST's cloud security platform empowers organizations to confidently embrace cloud technologies while maintaining the highest levels of security and compliance.\n\n\"We're excited to bring this game-changing solution to market,\" said John Doe, Chief Technology Officer at DST. \"Our team has worked tirelessly to develop a platform that not only meets the current security needs of businesses but also anticipates future challenges in the ever-evolving cybersecurity landscape.\"\n\nThe launch of this new cloud security solution reaffirms DST's commitment to innovation and excellence in IT services. As businesses continue to migrate their operations to the cloud, DST stands ready to provide the robust security infrastructure necessary for success in the digital age.",
    image: "/placeholder.svg?height=400&width=800"
  },
  // ... other news items
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const news = newsItems.find(item => item.slug === params.slug)
  if (!news) {
    return {
      title: 'News Not Found'
    }
  }
  return {
    title: news.title,
    description: news.content.substring(0, 160)
  }
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const news = newsItems.find(item => item.slug === params.slug)

  if (!news) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <CalendarDays className="mr-2 h-5 w-5" />
        <time dateTime={news.date}>{new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </div>
      <Image
        src={news.image}
        alt={news.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <div className="prose prose-lg max-w-none">
        {news.content.split('\n\n').map((paragraph, index) => (
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

