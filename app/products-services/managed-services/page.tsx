"use client";

import ServicePage from "@/components/service-page";
import { managed } from "@/lib/servicesData";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "IT Consulting", href: "#it-consulting" },
  { label: "Network management", href: "#network-management" },
  {
    label: "Backup and disaster recovery",
    href: "#backup-and-disaster-recovery",
  },
  { label: "Helpdesk support", href: "#helpdesk-support" },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  {
    label: "Managed Services",
    href: "/products-services/managed-services",
  },
];

const overviewContent = (
  <>
    <p className="text-gray-600 mb-4">
      Our comprehensive managed services provide a cost-effective way for
      organizations to outsource the management and maintenance of their IT
      systems. We offer tailored solutions to meet your specific needs, whether
      you&apos;re a small business or a large enterprise.
    </p>
    <p className="text-gray-600">
      With our managed services, you can focus on your core business while we
      ensure that your IT infrastructure is running smoothly, securely, and
      efficiently.
    </p>
  </>
);

export default function ManagedServicesPage() {
  return (
    <ServicePage
      title="Managed Services"
      subtitle="Enterprise-grade IT infrastructure management"
      image="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuYWdlZCUyMHNlcnZpY2VzfGVufDB8fDB8fHww"
      breadcrumbs={breadcrumbs}
      navItems={navItems}
      serviceData={managed}
      overviewContent={overviewContent}
    />
  );
}
