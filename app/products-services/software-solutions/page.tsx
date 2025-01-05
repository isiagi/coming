"use client";

import { software } from "@/lib/servicesData";
import ServicePage from "@/components/service-page";

const navItems = [
  { label: "Overview", href: "#overview" },

  {
    label: "Custom software development",
    href: "#custom-software-development",
  },
  {
    label: "Web and mobile app development",
    href: "#web-and-mobile-app-development",
  },
  {
    label: "Cloud-native applications",
    href: "#cloud-native-applications",
  },
  {
    label: "Secure and compliant solutions",
    href: "#secure-and-compliant-solutions",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  {
    label: "Software Solutions",
    href: "/products-services/software-solutions",
  },
];

const overviewContent = (
  <>
    <p className="text-gray-600 mb-4">
      Our comprehensive managed services provide a cost-effective way for
      organizations to outsource the management and maintenance of their IT
      systems. We offer tailored solutions to meet your specific needs, whether
      you are looking for IT consulting services, network management, backup and
      disaster recovery, or helpdesk support.
    </p>
  </>
);

export default function ManagedServicesPage() {
  return (
    <ServicePage
      title="Software Solutions"
      subtitle="Custom software development, web and mobile app development, cloud-native applications, and secure and compliant solutions"
      image="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZnR3YXJlfGVufDB8fDB8fHww"
      breadcrumbs={breadcrumbs}
      navItems={navItems}
      serviceData={software}
      overviewContent={overviewContent}
    />
  );
}
