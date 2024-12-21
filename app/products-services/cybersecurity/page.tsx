/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import useScroll from "@/hooks/useScroll";
import SubHeroHeader from "@/components/SubHeroHeader";

const navItems = [
  { label: "All", href: "#overviewz" },
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
  { label: "Resources", href: "#resources" },
];

function Page() {
  const [clickedSection, setClickedSection] = useScroll();
  const getSectionPadding = (sectionId: string) => {
    return clickedSection === sectionId ? "pt-28" : ""; // Reduced from pt-28
  };
  return (
    <div>
      <SubHeroHeader
        title="Cybersecurity"
        subtitle="Enterprise-grade IT infrastructure management"
        image="/placeholder.svg?height=384&width=384"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Cybersecurity",
            href: "/products-services/cybersecurity",
          },
        ]}
        navItems={navItems}
      />
    </div>
  );
}

export default Page;
