"use client";

import { ServiceHeader } from "@/components/service-header";
import { ScrollNav } from "@/components/scroll-nav";
import SubNav from "@/components/subNav";
import { useEffect, useState, Suspense } from "react";
import ITServicesShowcase from "@/components/it-services-showcase-updated";
import { managed, software } from "@/lib/servicesData";

const navItems = [
  { label: "", href: "#all" },

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

function ManagedServicesContent() {
  const [activeSection, setActiveSection] = useState("");
  const [clickedSection, setClickedSection] = useState("");

  useEffect(() => {
    // Function to handle hash changes and initial load
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setClickedSection(sectionId);

        // Add a small delay to ensure the padding is applied before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const navHeight = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    // Check for hash on initial load
    handleHashChange();

    // Add event listeners for hash changes
    window.addEventListener("hashchange", handleHashChange);

    const handleScroll = () => {
      const navHeight = 80;

      navItems.forEach(({ href }) => {
        const sectionId = href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 20 && rect.bottom >= navHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setClickedSection(sectionId);

    // Add a small delay to ensure the padding is applied before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const getSectionPadding = (sectionId: string) => {
    return clickedSection === sectionId ? "pt-28" : "";
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
        onSectionClick={handleSectionClick}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* <section id="overviewz" className={getSectionPadding("overviewz")} /> */}

        <section id="all" className={`min-h-[10vh] bg-red-400`}>
          <h2 className="text-3xl font-bold mb-6">Managed Services</h2>
          {/* <p className="text-gray-600">
            We offer a range of managed services, including network, security,
            and software support to help businesses stay up and running.
          </p> */}

          <p>
            Our comprehensive managed services provide a cost-effective way for
            organizations to outsource the management and maintenance of their
            IT systems. We offer tailored solutions to meet your specific needs,
            whether you&apos;re a small business or a large enterprise.
          </p>
        </section>

        <ITServicesShowcase
          getSectionPadding={getSectionPadding}
          serviceData={software}
        />
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
