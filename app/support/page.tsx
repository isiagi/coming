import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, BarChart3, Cloud, Code } from "lucide-react";
import { ValueCard } from "@/components/value-card";
import { ServiceCard } from "@/components/service-card";
import { Lightbulb, Heart, Zap, Target, Smile } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4 mt-16">
        <div className="text-center mb-12 animate-fade-in">
          <img
            src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="DST Logo"
            className="mx-auto mb-4 rounded-full shadow-lg"
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Welcome to DST Support
          </h1>
          <p className="text-lg text-gray-700">
            We&apos;re here to help you with all your technology needs. Explore
            our company information and services below.
          </p>
        </div>

        <Card className="mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Company Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-800">
            <p className="mb-4">
              Datahub Systems Technologies (DST) is an IT company that
              specializes in providing comprehensive technology solutions for
              businesses of all sizes. Our mission is to help our clients stay
              ahead of the curve in today&apos;s fast-paced digital landscape by
              delivering cutting-edge solutions that drive growth and improve
              efficiency.
            </p>
            <p className="mb-4">
              We are dedicated to providing responsive and professional services
              to our clients while being committed to meeting the unique needs
              of each business we work with. We understand the importance of
              staying current with the latest technologies and industry trends
              to ensure that our clients have access to the most advanced
              solutions on the market.
            </p>
            <p className="mb-4">
              In addition to our solutions, we also offer a range of training
              and consulting services to help our customers realize their
              mission. We believe that continuous learning and improvement is
              key to staying competitive in today&apos;s fast-paced business
              environment.
            </p>
            <p className="mb-4">
              Our team is dedicated to providing responsive and professional
              service to our clients. We believe in building long-term
              relationships with our clients and we strive to become a trusted
              technology partner for them.
            </p>
            <p>
              At DST, we take pride in our ability to understand our
              customers&apos; unique needs and tailor our solutions to fit those
              specific requirements. Our exceptional customer service and
              support ensure that our clients can fully utilize the solutions we
              provide, making technology less complex and more accessible.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Mission Statement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" italic text-gray-800">
              &quot;It is our aim at DST to bridge the gap between technology
              and humanity through solutions that improve on how people connect,
              live and work.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Vision Statement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text text-gray-800">
              To be a provider of reliable solutions that empower consumers
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
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

        <Card className="mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Server className="w-12 h-12 text-purple-500" />}
                title="Managed Services"
                description="Network, security, and software support to keep your business running smoothly."
                href="/services/managed-services"
              />
              <ServiceCard
                icon={<Shield className="w-12 h-12 text-green-500" />}
                title="Cybersecurity"
                description="Protect your sensitive data and systems from digital threats and attacks."
                href="/services/cybersecurity"
              />
              <ServiceCard
                icon={<BarChart3 className="w-12 h-12 text-blue-500" />}
                title="Data Analytics"
                description="Make data-driven decisions with our advanced analytics tools and expertise."
                href="/services/data-analytics"
              />
              <ServiceCard
                icon={<Cloud className="w-12 h-12 text-cyan-500" />}
                title="Cloud Computing"
                description="Transition to the cloud for improved scalability, cost-effectiveness, and security."
                href="/services/cloud-computing"
              />
              <ServiceCard
                icon={<Code className="w-12 h-12 text-pink-500" />}
                title="Software Solutions"
                description="Custom software development to automate processes and solve unique business challenges."
                href="/services/software-solutions"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 mb-4">
              If you need further assistance, please don&apos;t hesitate to
              reach out:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@dst.com"
                  className="text-primary hover:underline"
                >
                  support@dst.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+15551234567"
                  className="text-primary hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>Hours: Monday - Friday, 9am - 5pm EST</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
