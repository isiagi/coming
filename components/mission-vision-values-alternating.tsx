import Image from "next/image";

// import CoreValues from "./core-values";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ValueCard } from "./value-card";
import { Lightbulb, Heart, Zap, Target, Smile } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MissionVisionValues({ getSectionPadding }: any) {
  const sections = [
    {
      title: "Our Mission",
      content: [
        "It is our aim at DST to bridge the gap between technology and humanity through solutions that improve on how people connect, live and work",
      ],
      imageUrl:
        "https://media.istockphoto.com/id/1138312771/photo/purpose-word-in-wooden-cube.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tzm--ZAAxTUHcg6v_0K9HYBYo45qWUIPfCI6My221ts=",
      imageAlt: "Team collaborating on a project",
      id: "mission",
    },
    {
      title: "Our Vision",
      content: [
        "To be a provider of reliable solutions that empower consumers",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1545935950-b7a28791ad7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXBhbnklMjB2aXNpb258ZW58MHx8MHx8fDA%3D",
      imageAlt: "Futuristic vision of technology",
      id: "vision",
    },
  ];

  return (
    <section className={"w-full py-12 md:py-24 bg-white"}>
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
                className="rounded-lg object-cover w-full h-[300px]"
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
        {/* <CoreValues /> */}
        <Card
          id="core-values"
          className={`mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out mt-2 ${getSectionPadding(
            "core-values"
          )}`}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard
                icon={<Lightbulb className="w-6 h-6 text-yellow-500" />}
                title="Simplicity"
                description="We focus on what truly adds value, building trust and strengthening relationships through simplicity."
              />
              <ValueCard
                icon={<Heart className="w-6 h-6 text-red-500" />}
                title="Integrity"
                description="We do what's right, even when it's not required, upholding the highest ethical standards."
              />
              <ValueCard
                icon={<Zap className="w-6 h-6 text-blue-500" />}
                title="Efficiency"
                description="We continuously improve our processes, reducing costs and increasing productivity."
              />
              <ValueCard
                icon={<Target className="w-6 h-6 text-green-500" />}
                title="Value Addition"
                description="We go beyond expectations, creating tangible benefits for all stakeholders."
              />
              <ValueCard
                icon={<Smile className="w-6 h-6 text-orange-500" />}
                title="Enthusiasm"
                description="We embrace challenges with energy and passion, inspiring exceptional results."
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
