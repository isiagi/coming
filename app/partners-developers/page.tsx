import { ServiceHeader } from "@/components/service-header";
import SubNav from "@/components/subNav";
import React from "react";

function page() {
  return (
    <div className="mt-[64px]">
      <SubNav
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Partners & Developers",
            href: "/products-services/partners-developers",
          },
        ]}
      />
      <ServiceHeader
        title="Partners & Developers"
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
    </div>
  );
}

export default page;
