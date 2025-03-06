/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  imageSrc,
  benefits,
  potentialOutcomes,
  id,
  getSectionPadding,
}: any) => (
  <div id={id} className={`${getSectionPadding?.(id) || ""}`}>
    <Card className="mb-6 w-full min-h-screen flex flex-col">
      <CardHeader className="flex flex-row items-center space-x-2">
        <Icon className="w-8 h-8 text-gold-300 text-primary " />
        <CardTitle className="text-2xl text-[#212529]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="mb-5 text-[#6C757D]">{description}</p>
          <div className="relative w-full h-96 mb-6">
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              alt={title}
              className="rounded-md "
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#00C853]">
            Key Benefits:
          </h3>
          <ul className="list-disc pl-5 mb-4">
            {benefits.map((benefit: any, index: any) => (
              <li key={index} className="mb-2 text-slate-600">
                {benefit}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-[#212529]">
            Potential Outcomes:
          </h3>
          <p className="mb-4 text-slate-700">{potentialOutcomes.description}</p>
          <ul className="list-disc pl-5">
            {potentialOutcomes.results.map((result: any, index: any) => (
              <li key={index} className="mb-2 text-slate-600">
                {result}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 p-4 bg-muted rounded-md">
          <h3 className="text-lg font-semibold mb-2 text-slate-700">
            Why Choose Us for {title}?
          </h3>
          <p className="text-[#00C853]">
            Our team of experts brings years of experience and cutting-edge
            knowledge to every project. We&apos;re committed to delivering
            tailored solutions that drive your business forward.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ServiceSection = ({ features, getSectionPadding }: any) => (
  <div className="mb-12">
    {/* <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="mb-6 text-xl">{description}</p> */}
    <div className="space-y-12">
      {features.map((feature: any, index: any) => (
        <FeatureCard
          key={index}
          {...feature}
          getSectionPadding={getSectionPadding}
        />
      ))}
    </div>
  </div>
);

const SoftwareDevelopmentProcess = () => (
  <div className="w-full p-6 bg-muted rounded-lg mb-6">
    <h3 className="text-2xl font-semibold mb-4">
      Our Software Development Process
    </h3>
    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
      {[
        "Requirements",
        "Design",
        "Implementation",
        "Testing",
        "Maintenance",
      ].map((stage, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            {index + 1}
          </div>
          <p className="mt-2 text-lg font-medium">{stage}</p>
          {index < 4 && (
            <div className="hidden md:block text-3xl text-muted-foreground">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default function ITServicesShowcase({
  getSectionPadding,
  serviceData,
}: any) {
  return (
    <div className="container mx-auto py-8">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">Our IT Services</h1> */}
      {
        <div>
          <ServiceSection
            {...serviceData}
            getSectionPadding={getSectionPadding}
          />
          {serviceData.title === "Software Solutions" && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">
                Our Development Process
              </h3>
              <SoftwareDevelopmentProcess />
              <p className="mt-6 text-lg">
                We specialize in software integration across various
                platforms...
              </p>
            </div>
          )}
        </div>
      }
    </div>
  );
}
