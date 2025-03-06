"use client";

import { cybersecurity } from "@/lib/servicesData";
import ServicePage from "@/components/service-page";

const navItems = [
  { label: "Overview", href: "#overview" },

  {
    label: "Proactive security",
    href: "#proactive-security-management",
  },
  {
    label: "Identity and access",
    href: "#identity-and-access-control",
  },
  {
    label: "Rapid incident",
    href: "#rapid-incident-response",
  },
  {
    label: "Thorough penetration",
    href: "#thorough-penetration-testing",
  },
  {
    label: "Compliance with HIPAA, PCI DSS, SOC 2",
    href: "#compliance-with-hipaa-pci-dss-soc-2",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  {
    label: "Cybersecurity",
    href: "/products-services/cybersecurity",
  },
];

const overviewContent = (
  <>

    <p className="text-[#6C757D] mb-4">

      Our cybersecurity services provide a cost-effective way for organizations
      to protect their sensitive data and systems from cyber threats. We offer
      tailored solutions to meet your specific needs, whether you need proactive
      security management, identity and access control, rapid incident response,
      thorough penetration testing, or compliance with HIPAA, PCI DSS, or SOC 2.
    </p>
  </>
);

export default function ManagedServicesPage() {
  return (
    <ServicePage
      title="Cybersecurity"
      subtitle="Protecting your digital assets from cyber threats"
      image="https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
      breadcrumbs={breadcrumbs}
      navItems={navItems}
      serviceData={cybersecurity}
      overviewContent={overviewContent}
    />
  );
}
