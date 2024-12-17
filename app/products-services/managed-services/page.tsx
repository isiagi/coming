"use client";

import { ServiceHeader } from "@/components/service-header";
import { ScrollNav } from "@/components/scroll-nav";
import SubNav from "@/components/subNav";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const navItems = [
  { label: "All", href: "#overviewz" },
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
  { label: "Resources", href: "#resources" },
];

function ManagedServicesContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [paddingTop, setPaddingTop] = useState("pt-[0px]");

  useEffect(() => {
    function checkPadding() {
      const hash = window.location.hash;
      console.log("Checking padding:", {
        pathname,
        hash,
        searchParams: searchParams.toString(),
      });

      const isMatchingUrl =
        pathname === "/products-services/managed-services" &&
        hash === "#overview";

      setPaddingTop(isMatchingUrl ? "pt-[150px]" : "pt-[0px]");
    }

    // Check initial state
    checkPadding();

    // Add event listener for hash changes
    window.addEventListener("hashchange", checkPadding);

    // Cleanup listener
    return () => {
      window.removeEventListener("hashchange", checkPadding);
    };
  }, [pathname, searchParams]);

  return (
    <>
      <SubNav
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Managed Services",
            href: "/products-services/managed-services",
          },
        ]}
      />
      <ServiceHeader
        title="Managed Services"
        subtitle="Enterprise-grade IT infrastructure management"
        image="/placeholder.svg?height=384&width=384"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Managed Services",
            href: "/products-services/managed-services",
          },
        ]}
      />
      <ScrollNav items={navItems} height={350} />

      {/* Page content with sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <section id="overviewz" className="py-6"></section>
        <section id="overview" className={`min-h-screen ${paddingTop}`}>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-gray-600">
            Our managed services provide comprehensive IT infrastructure
            management, ensuring your systems run smoothly and efficiently. We
            offer 24/7 monitoring, proactive maintenance, and rapid issue
            resolution to minimize downtime and optimize performance.
          </p>
        </section>

        <section id="benefits" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Benefits</h2>
          <p className="text-gray-600">
            Discover the advantages of our managed services, including reduced
            operational costs, improved system reliability, enhanced security,
            and access to expert IT support. Our solutions allow you to focus on
            your core business while we handle the complexities of IT
            management.
          </p>
        </section>

        <section id="products" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          <p className="text-gray-600">
            Explore our range of managed service solutions, including network
            management, cloud services, cybersecurity, data backup and recovery,
            and IT consulting. Each product is designed to address specific
            business needs and can be customized to fit your unique
            requirements.
          </p>
        </section>

        <section id="resources" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <p className="text-gray-600">
            Access documentation, guides, and support materials to help you make
            the most of our managed services. Find detailed product information,
            best practices, case studies, and FAQs to support your IT management
            journey.
          </p>
        </section>
      </div>
    </>
  );
}

export default function ManagedServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ManagedServicesContent />
    </Suspense>
  );
}
