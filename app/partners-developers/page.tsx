import PartnersAndDevelopers from "@/components/partners-and-developers";
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
        image="https://media.istockphoto.com/id/1200075866/photo/first-bump-between-colleagues-at-work-everyday-work-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=GF52bIXIEqcilIDkvdZVCqW3ebhKAyKOamLSbT3FCyI="
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Partners & Developers",
            href: "/products-services/partners-developers",
          },
        ]}
      />

      <PartnersAndDevelopers />
    </div>
  );
}

export default page;
