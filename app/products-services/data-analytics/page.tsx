"use client";

import { dataAnalytic } from "@/lib/servicesData";
import ServicePage from "@/components/service-page";

const navItems = [
  { label: "Overview", href: "#overview" },

  {
    label: "Scalable data warehousing",
    href: "#scalable-data-warehousing-solutions",
  },
  {
    label: "Advanced data mining",
    href: "#advanced-data-mining-techniques",
  },
  {
    label: "Intuitive data visualization",
    href: "#intuitive-data-visualization",
  },
  {
    label: "Cutting-edge machine learning",
    href: "#cutting-edge-machine-learning-services",
  },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  {
    label: "Data Analytics",
    href: "/products-services/data-analytics",
  },
];

const overviewContent = (
  <>
    <p className="text-gray-600 mb-4">
      Our data analytics services offer a comprehensive suite of tools and
      techniques to extract meaningful insights from your data, enabling you to
      make informed decisions and drive business success.
    </p>
    <p className="text-gray-600">
      Whether you&apos;re a small business or a large corporation, our data
      analytics services are designed to help you unlock the full potential of
      your data and make data-driven decisions that drive growth and success.
    </p>
  </>
);

export default function ManagedServicesPage() {
  return (
    <ServicePage
      title="Data Analytics"
      subtitle="Data-driven insights for informed decision-making"
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D"
      breadcrumbs={breadcrumbs}
      navItems={navItems}
      serviceData={dataAnalytic}
      overviewContent={overviewContent}
    />
  );
}
