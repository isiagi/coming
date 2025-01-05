import {
  Shield,
  BarChart,
  Code,
  Cloud,
  Server,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Managed Services",
    description:
      "Comprehensive IT management and support for your business infrastructure.",
    icon: Server,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our advanced cybersecurity solutions.",
    icon: Shield,
  },
  {
    title: "Data Analytics",
    description:
      "Unlock the power of your data with our cutting-edge analytics services.",
    icon: BarChart,
  },
  {
    title: "Software Solutions",
    description: "Custom software development tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Cloud Computing",
    description: "Scalable and flexible cloud solutions for modern businesses.",
    icon: Cloud,
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                index === 0
                  ? "md:col-span-2"
                  : index < 3
                  ? "md:col-span-1"
                  : "col-span-1 md:col-span-2"
              }`}
            >
              <div>
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              <Button className="self-start">
                View Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
