
import { CareersPage } from "@/components/careers-page";

import { ServiceHeader } from "@/components/service-header";
import SubNav from "@/components/subNav";
import React from "react";

function page() {
  return (
    <div>
      <SubNav
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Careers",
            href: "/about/careers",
          },
        ]}
      />
      <ServiceHeader
        title="Careers"
        subtitle="Browse our open positions"
        image="https://media.istockphoto.com/id/1828385345/photo/happy-employee-working-at-a-solar-panel-factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=yWcBwfrslO1Mxl3kkiDl6ysOr7FqEAptW5ZkNoHKOBg="
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Partners & Developers",
            href: "/products-services/partners-developers",
          },
        ]}
      />

      <CareersPage />

    </div>
  );
}

export default page;
