"use client";

import ServicePage from "@/components/about-service";

import { managed } from "@/lib/servicesData";

const navItems = [
  { label: "About Us", href: "#overview" },
  { label: "Mission", href: "#mission" },
  { label: "Vision", href: "#vision" },
  {
    label: "Core Values",
    href: "#core-values",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about/mission",
  },
];

const overviewContent = (
  <>
    <p className="text-[#6C757D] mb-4">
      Our comprehensive managed services provide a cost-effective way for
      organizations to outsource the management and maintenance of their IT
      systems. We offer tailored solutions to meet your specific needs, whether
      you&apos;re a small business or a large enterprise.
    </p>
    <p className="text-[#6C757D]">
      With our managed services, you can focus on your core business while we
      ensure that your IT infrastructure is running smoothly, securely, and
      efficiently.
    </p>
  </>
);

function About() {
  return (
    <div>
      <ServicePage
        title="About Us"
        subtitle="Learn more about our mission, vision, and core values."
        image="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZxHwjIBsTx_is1_JLT02ohMUn0okczh8xPGWA3ptwJI="
        breadcrumbs={breadcrumbs}
        navItems={navItems}
        serviceData={managed}
        overviewContent={overviewContent}
      />
    </div>
  );
}

export default About;
