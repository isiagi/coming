"use client";

import { cloud } from "@/lib/servicesData";
import ServicePage from "@/components/service-page";

const navItems = [
  { label: "Overview", href: "#overview" },

  {
    label: "Smooth migration",
    href: "#Smooth Cloud Migration",
  },
  {
    label: "Seamless integration",
    href: "#seamless-cloud-integration",
  },
  {
    label: "Efficient management",
    href: "#efficient-cloud-management",
  },
  {
    label: "Robust security",
    href: "#robust-cloud-security-measures",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  {
    label: "Cloud Computing",
    href: "/products-services/cloud-computing",
  },
];

const overviewContent = (
  <>
    <p className="text-[#6C757D] mb-4">
      Our cloud computing services offer a wide range of solutions to meet the
      needs of businesses of all sizes. From simple web hosting to complex
      enterprise-level solutions, we have the expertise and resources to deliver
      the cloud computing services you need.
    </p>
    <p className="text-[#6C757D] mb-4">Our cloud computing services include:</p>
    <ul className="list-disc pl-6 text-[#6C757D]">
      <li>Cloud hosting services</li>
      <li>Cloud-based databases</li>
      <li>Cloud-based storage solutions</li>
      <li>Cloud-based networking solutions</li>
      <li>Cloud-based security solutions</li>
    </ul>
  </>
);

export default function ManagedServicesPage() {
  return (
    <ServicePage
      title="Cloud Computing"
      subtitle="Cloud computing solutions for businesses of all sizes"
      image="https://media.istockphoto.com/id/2162026367/photo/cloud-computing-sign-digital-technology-data-concept-on-cpu.webp?a=1&b=1&s=612x612&w=0&k=20&c=AwdW-zyV3AAUfZL26f8pkU0yo7tgj-kwly0anzTEKwE="
      breadcrumbs={breadcrumbs}
      navItems={navItems}
      serviceData={cloud}
      overviewContent={overviewContent}
    />
  );
}
