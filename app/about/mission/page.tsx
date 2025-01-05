"use client";

import AboutSection from "@/components/about-section";
import MissionVisionValues from "@/components/mission-vision-values-alternating";
// import { ScrollNav } from "@/components/scroll-nav";
import { ServiceHeader } from "@/components/service-header";
import React, { useEffect, useState } from "react";

const navItems = [
  { label: "All", href: "#overviewz" },
  { label: "Mission", href: "#mission" },
  { label: "Vision", href: "#vision" },
  { label: "Core Values", href: "#core-values" },
  { label: "Patners", href: "#patners" },
];

function About() {
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
    console.log(clickedSection, sectionId);

    return clickedSection === sectionId ? "pt-28" : ""; // Reduced from pt-28
  };

  return (
    <div>
      {/* <ScrollNav
        items={navItems}
        height={0}
        onSectionClick={setClickedSection}
      /> */}
      <ServiceHeader
        title="About Us"
        subtitle="Enterprise-grade IT infrastructure management"
        image="/placeholder.svg?height=384&width=384"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Partners & Developers",
            href: "/products-services/partners-developers",
          },
        ]}
      />
      <AboutSection />
      <MissionVisionValues getSectionPadding={getSectionPadding} />
      <section
        id="mission"
        className={`min-h-screen ${getSectionPadding("mission")}`}
      ></section>

      <section
        id="vision"
        className={`min-h-screen ${getSectionPadding("vision")}`}
      ></section>

      <section
        id="core-values"
        className={`min-h-screen ${getSectionPadding("core-values")}`}
      ></section>
    </div>
  );
}

export default About;
