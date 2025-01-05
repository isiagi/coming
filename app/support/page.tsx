/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, BarChart3, Cloud, Code } from "lucide-react";
import { ValueCard } from "@/components/value-card";
import { Lightbulb, Heart, Zap, Target, Smile } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container mx-auto py-12 px-4 mt-16">
      <div className="text-center mb-12">
        <img
          src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
          alt="DST Logo"
          className="mx-auto mb-4"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to DST Support</h1>
        <p className="text-lg">
          We&apos;re here to help you with all your technology needs. Explore
          our company information and services below.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Datahub Systems Technologies (DST) is an IT company that specializes
            in providing comprehensive technology solutions for businesses of
            all sizes. Our mission is to help our clients stay ahead of the
            curve in today&apos;s fast-paced digital landscape by delivering
            cutting-edge solutions that drive growth and improve efficiency.
          </p>
          <p className="mb-4">
            We are dedicated to providing responsive and professional services
            to our clients while being committed to meeting the unique needs of
            each business we work with. We understand the importance of staying
            current with the latest technologies and industry trends to ensure
            that our clients have access to the most advanced solutions on the
            market.
          </p>
          <p className="mb-4">
            In addition to our solutions, we also offer a range of training and
            consulting services to help our customers realize their mission. We
            believe that continuous learning and improvement is key to staying
            competitive in today&apos;s fast-paced business environment.
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
            specific requirements. Our exceptional customer service and support
            ensure that our clients can fully utilize the solutions we provide,
            making technology less complex and more accessible.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Mission Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            &quot;It is our aim at DST to bridge the gap between technology and
            humanity through solutions that improve on how people connect, live
            and work.&quot;
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vision Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p>To be a provider of reliable solutions that empower consumers</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Core Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ValueCard
              icon={<Lightbulb className="w-6 h-6 text-primary" />}
              title="Simplicity"
              description="We focus on what truly adds value, building trust and strengthening relationships through simplicity."
            />
            <ValueCard
              icon={<Heart className="w-6 h-6 text-primary" />}
              title="Integrity"
              description="We do what's right, even when it's not required, upholding the highest ethical standards."
            />
            <ValueCard
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Efficiency"
              description="We continuously improve our processes, reducing costs and increasing productivity."
            />
            <ValueCard
              icon={<Target className="w-6 h-6 text-primary" />}
              title="Value Addition"
              description="We go beyond expectations, creating tangible benefits for all stakeholders."
            />
            <ValueCard
              icon={<Smile className="w-6 h-6 text-primary" />}
              title="Enthusiasm"
              description="We embrace challenges with energy and passion, inspiring exceptional results."
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              icon={<Server className="w-12 h-12 mb-4 text-primary" />}
              title="Managed Services"
              description="Network, security, and software support to keep your business running smoothly."
            />
            <ServiceCard
              icon={<Shield className="w-12 h-12 mb-4 text-primary" />}
              title="Cybersecurity"
              description="Protect your sensitive data and systems from digital threats and attacks."
            />
            <ServiceCard
              icon={<BarChart3 className="w-12 h-12 mb-4 text-primary" />}
              title="Data Analytics"
              description="Make data-driven decisions with our advanced analytics tools and expertise."
            />
            <ServiceCard
              icon={<Cloud className="w-12 h-12 mb-4 text-primary" />}
              title="Cloud Computing"
              description="Transition to the cloud for improved scalability, cost-effectiveness, and security."
            />
            <ServiceCard
              icon={<Code className="w-12 h-12 mb-4 text-primary" />}
              title="Software Solutions"
              description="Custom software development to automate processes and solve unique business challenges."
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            If you need further assistance, please don&apos;t hesitate to reach
            out:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Email: support@dst.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Hours: Monday - Friday, 9am - 5pm EST</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function ServiceCard({ icon, title, description }: any) {
  return (
    <Card className="flex flex-col items-center text-center p-6">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </Card>
  );
}
