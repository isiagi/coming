import SubHeroHeader from "@/components/SubHeroHeader";
import React from "react";

function page() {
  return (
    <div>
      <SubHeroHeader
        title="Software Solutions"
        subtitle="Enterprise-grade IT infrastructure management"
        image="/placeholder.svg?height=384&width=384"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Software Solutions",
            href: "/products-services/software-solutions",
          },
        ]}
        navItems={[
          { label: "All", href: "#overviewz" },
          { label: "Overview", href: "#overview" },
          { label: "Benefits", href: "#benefits" },
          { label: "Products", href: "#products" },
          { label: "Resources", href: "#resources" },
        ]}
      />
    </div>
  );
}

export default page;
