"use client";

import { ServiceHeader } from "@/components/service-header";
import { ScrollNav } from "@/components/scroll-nav";
import SubNav from "@/components/subNav";
import { useEffect, useState, Suspense } from "react";

const navItems = [
  { label: "All", href: "#overviewz" },
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
  { label: "Resources", href: "#resources" },
];

function ManagedServicesContent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("");
  const [clickedSection, setClickedSection] = useState("");

  useEffect(() => {
    // Check for hash on initial load
    const hash = window.location.hash;
    if (hash) {
      setClickedSection(hash.substring(1));
    }

    const handleScroll = () => {
      const navHeight = 80; // Reduced from 112 for less spacing
      
      navItems.forEach(({ href }) => {
        const element = document.querySelector(href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 20 && rect.bottom >= navHeight) {
            setActiveSection(href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionPadding = (sectionId: string) => {
    return clickedSection === sectionId ? "pt-28" : ""; // Reduced from pt-28
  };

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
      <ScrollNav 
        items={navItems} 
        height={350} 
        onSectionClick={setClickedSection}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <section 
          id="overviewz" 
          className={getSectionPadding("overviewz")}
        />
        
        <section 
          id="overview" 
          className={`min-h-screen ${getSectionPadding("overview")}`}
        >
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-gray-600">
            Our managed services provide comprehensive IT infrastructure
            management, ensuring your systems run smoothly and efficiently.
          </p>
        </section>

        <section 
          id="benefits" 
          className={`min-h-screen ${getSectionPadding("benefits")}`}
        >
          <h2 className="text-3xl font-bold mb-6">Benefits</h2>
          <p className="text-gray-600">
            Discover the advantages of our managed services, including reduced
            operational costs and improved system reliability.
          </p>
        </section>

        <section 
          id="products" 
          className={`min-h-screen ${getSectionPadding("products")}`}
        >
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          <p className="text-gray-600">
            Explore our range of managed service solutions, including network
            management and cloud services.
          </p>
        </section>

        <section 
          id="resources" 
          className={`min-h-screen ${getSectionPadding("resources")}`}
        >
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <p className="text-gray-600">
            Access documentation, guides, and support materials to help you make
            the most of our managed services.
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