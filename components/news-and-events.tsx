import { CalendarDays, ChevronRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
};

const newsItems: NewsItem[] = [
  {
    slug: "dst-launches-new-cloud-security-solution",
    title: "DST Launches New Cloud Security Solution",
    date: "2023-06-15",
    excerpt:
      "Datahub Systems Technologies introduces a state-of-the-art cloud security platform, enhancing data protection for businesses.",
    image:
      "https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    slug: "dst-partners-with-leading-ai-research-institute",
    title: "DST Partners with Leading AI Research Institute",
    date: "2023-05-28",
    excerpt:
      "A new partnership aims to bring cutting-edge AI technologies to DST's software solutions.",
    image:
      "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QUl8ZW58MHx8MHx8fDA%3D",
  },
  {
    slug: "dst-recognized-as-top-it-service-provider",
    title: "DST Recognized as Top IT Service Provider",
    date: "2023-05-10",
    excerpt:
      "Industry analysts rank Datahub Systems Technologies among the top IT service providers for small and medium businesses.",
    image:
      "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fElUfGVufDB8fDB8fHww",
  },
];

const events: Event[] = [
  {
    slug: "dst-annual-tech-conference",
    title: "DST Annual Tech Conference",
    date: "2023-09-20",
    location: "Virtual Event",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    slug: "cybersecurity-workshop",
    title: "Cybersecurity Workshop",
    date: "2023-08-05",
    location: "New York, NY",
    image:
      "https://plus.unsplash.com/premium_photo-1674506653774-6f51d6ebe799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    slug: "cloud-computing-seminar",
    title: "Cloud Computing Seminar",
    date: "2023-07-15",
    location: "San Francisco, CA",
    image:
      "https://media.istockphoto.com/id/1710421116/photo/businessman-with-cloud-computing-diagram-show-on-virtual-screen-cloud-technology-data-storage.webp?a=1&b=1&s=612x612&w=0&k=20&c=zzZgxmDPL_wao3XSXbodsADBqgPqP23MG_SgRn6zeQ8=",
  },
];

export function NewsAndEvents() {
  return (
    <section className="py-16 bg-[#fff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-[#212529] font-bold text-center mb-12">
          News & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-[#212529] font-semibold mb-6 flex items-center">
              <Newspaper className="mr-2 text-[#00C853]" />
              Latest News
            </h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl text-[#212529] font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                    <p className="text-[#6C757D] mb-4">{item.excerpt}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="self-start bg-transparent border border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <Link href={`/news/${item.slug}`}>
                        Read More
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 ease-in-out h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-[#212529] font-semibold mb-6 flex items-center">
              <CalendarDays className="mr-2 text-[#FFD700]" />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl text-[#212529] font-semibold mb-2">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">
                      Date: {event.date}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Location: {event.location}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="self-start bg-transparent border border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition-all duration-300 ease-in-out"
                    >
                      <Link href={`/events/${event.slug}`}>
                        Learn More
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 ease-in-out h-4 w-4" />
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
  );
}
