/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback, Suspense } from "react";
import { ServiceHeader } from "@/components/service-header";
import { ScrollNav } from "@/components/scroll-nav";
import SubNav from "@/components/subNav";
import ITServicesShowcase from "@/components/it-services-showcase-updated";
import MissionVisionValues from "./mission-vision-values-alternating";
import { AboutCompany } from "./about-company";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  navItems: Array<{ label: string; href: string }>;
  serviceData: ServiceData[];
  overviewContent: React.ReactNode;
}

function ServicePageContent({
  title,
  subtitle,
  image,
  breadcrumbs,
  navItems,
  serviceData,
  overviewContent,
}: ServicePageProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clickedSection, setClickedSection] = useState("");

  const handleSectionClick = useCallback((sectionId: string) => {
    setClickedSection(sectionId);
  }, []);

  const getSectionPadding = useCallback(() => {
    // Reduced padding for better spacing
    return "pt-5"; // Reduced from pt-32 mb-16
  }, []);

  return (
    <>
      <SubNav breadcrumbs={breadcrumbs} />
      <ServiceHeader
        title={title}
        subtitle={subtitle}
        image={image}
        breadcrumbs={breadcrumbs}
      />
      <ScrollNav
        items={navItems}
        height={350}
        onSectionClick={handleSectionClick}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <section id="overview" className={getSectionPadding()}>
          {/* <h2 className="text-3xl text-[#212529] font-bold mb-6">
            {title} Overview
          </h2> */}
          <AboutCompany />
        </section>

        <MissionVisionValues getSectionPadding={getSectionPadding} />
      </div>
    </>
  );
}

export default function ServicePage(props: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicePageContent {...props} />
    </Suspense>
  );
}
