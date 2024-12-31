import Image from "next/image";
import { Button } from "@/components/ui/button";
import CoreValues from "./core-values";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MissionVisionValues({ getSectionPadding }: any) {
  const sections = [
    {
      title: "Our Mission",
      content: [
        "It is our aim at DST to bridge the gap between technology and humanity through solutions that improve on how people connect, live and work",
      ],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Team collaborating on a project",
      id: "mission",
    },
    {
      title: "Our Vision",
      content: [
        "To be a provider of reliable solutions that empower consumers",
      ],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Futuristic vision of technology",
      id: "vision",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {sections.map((section, index) => (
          <div
            key={section.title}
            id={section.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 mb-16 items-center ${getSectionPadding(section.id)}`}
          >
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
              <h2 className="text-3xl font-bold text-gray-900">
                {section.title}
              </h2>
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
            </div>
          </div>
        ))}
        <CoreValues />
      </div>
    </section>
  );
}
