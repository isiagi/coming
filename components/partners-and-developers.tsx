/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code,
  Users,
  Zap,
  Shield,
  Cloud,
  Headphones,
  Target,
  Smile,
  MinimizeIcon,
  ShieldCheck,
  BarChart2,
  Cpu,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <Card className="h-full">
    <CardHeader>
      <Icon className="h-8 w-8 text-blue-600 mb-2" />
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export default function PartnersAndDevelopers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="DST Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partners and Developers
          </h1>
          <p className="text-xl text-gray-700">
            Join Datahub Systems Technologies (DST) in bridging the gap between
            technology and humanity
          </p>
        </div>

        <Tabs defaultValue="partners" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="developers">Developers</TabsTrigger>
          </TabsList>

          <TabsContent value="partners">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Partner with DST</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Partnership Illustration"
                      width={300}
                      height={200}
                      className="rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div>
                      <p className="text-gray-700 mb-4">
                        At DST, we believe in the power of collaboration to
                        achieve our mission of bridging the gap between
                        technology and humanity. Our partnership program is
                        designed to create mutually beneficial relationships
                        that drive innovation and deliver exceptional value to
                        our clients.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We are committed to providing our partners with the
                        tools, resources, and support they need to succeed in
                        today&apos;s fast-paced digital landscape while adhering
                        to our core values of simplicity, integrity, efficiency,
                        value addition, and enthusiasm.
                      </p>
                      <Button>Become a Partner</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Why Partner with DST?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Zap}
                  title="Cutting-edge Solutions"
                  description="Access our comprehensive suite of technology solutions to enhance your service offerings and empower consumers."
                />
                <FeatureCard
                  icon={Users}
                  title="Collaborative Approach"
                  description="Work closely with our team of experts to deliver tailored solutions that improve how people connect, live, and work."
                />
                <FeatureCard
                  icon={Headphones}
                  title="Dedicated Support"
                  description="Benefit from our responsive and professional customer service, reflecting our commitment to simplicity and value addition."
                />
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger>Our Services for Partners</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FeatureCard
                        icon={Cpu}
                        title="Managed Services"
                        description="Offer comprehensive IT support, including network management and helpdesk services."
                      />
                      <FeatureCard
                        icon={Shield}
                        title="Cybersecurity"
                        description="Provide cutting-edge security solutions to protect sensitive data and systems."
                      />
                      <FeatureCard
                        icon={BarChart2}
                        title="Data Analytics"
                        description="Deliver insights through data warehousing, mining, visualization, and machine learning."
                      />
                      <FeatureCard
                        icon={Cloud}
                        title="Cloud Computing"
                        description="Facilitate cloud migration, integration, and management for scalable solutions."
                      />
                      <FeatureCard
                        icon={Code}
                        title="Software Solutions"
                        description="Develop custom software to automate processes and address specific client needs."
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="developers">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Develop with DST</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center mb-4">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
                      alt="Developer Collaboration"
                      width={300}
                      height={200}
                      className="rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div>
                      <p className="text-gray-700 mb-4">
                        DST offers a rich ecosystem for developers to create
                        innovative solutions that align with our vision of
                        providing reliable solutions that empower consumers.
                        Whether you&apos;re building integrations, custom
                        applications, or exploring new technologies, we provide
                        the tools and support you need.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Join our developer community and be part of shaping the
                        future of technology solutions while embracing our core
                        values of simplicity, integrity, efficiency, value
                        addition, and enthusiasm.
                      </p>
                      <Button>Access Developer Resources</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Developer Offerings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Code}
                  title="Robust APIs"
                  description="Access our comprehensive set of APIs to integrate DST solutions into your applications, focusing on simplicity and efficiency."
                />
                <FeatureCard
                  icon={Cloud}
                  title="Cloud Solutions"
                  description="Leverage our cloud computing expertise for scalable and efficient application development, adding value to your projects."
                />
                <FeatureCard
                  icon={Shield}
                  title="Security First"
                  description="Benefit from our advanced cybersecurity measures to build secure and compliant applications with integrity."
                />
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="core-values">
                  <AccordionTrigger>
                    Our Core Values for Developers
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <FeatureCard
                        icon={MinimizeIcon}
                        title="Simplicity"
                        description="Focus on creating solutions that truly add value and are accessible to users."
                      />
                      <FeatureCard
                        icon={ShieldCheck}
                        title="Integrity"
                        description="Uphold the highest standards of ethical behavior in your development practices."
                      />
                      <FeatureCard
                        icon={Zap}
                        title="Efficiency"
                        description="Continuously improve processes and eliminate unnecessary complexity in your code."
                      />
                      <FeatureCard
                        icon={Target}
                        title="Value Addition"
                        description="Create solutions that address real pain points and deliver tangible benefits."
                      />
                      <FeatureCard
                        icon={Smile}
                        title="Enthusiasm"
                        description="Approach challenges with energy and passion, inspiring innovation in your work."
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>About Datahub Systems Technologies (DST)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
                alt="DST Team"
                width={300}
                height={200}
                className="rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <p className="text-gray-700 mb-4">
                  DST is an IT company specializing in comprehensive technology
                  solutions for businesses of all sizes. Our mission is to
                  bridge the gap between technology and humanity through
                  solutions that improve how people connect, live, and work.
                </p>
                <p className="text-gray-700 mb-4">
                  We offer a wide range of services, including managed IT
                  services, cybersecurity, data analytics, cloud computing, and
                  custom software solutions. Our team of experienced
                  professionals is dedicated to providing the highest quality
                  service, understanding each client&apos;s unique needs, and
                  tailoring our solutions to fit those specific requirements.
                </p>
                <p className="text-gray-700">
                  At DST, we&apos;re committed to our vision of being a provider
                  of reliable solutions that empower consumers. We invite
                  partners and developers to join us in this mission, embracing
                  our core values and innovative approach to technology.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
