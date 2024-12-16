import { ServiceHeader } from "@/components/service-header";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <ServiceHeader
        title="Software Solutions"
        subtitle="Enterprise-grade IT infrastructure management"
        image="https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJzfGVufDB8fDB8fHww"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Managed Services",
            href: "/products-services/managed-services",
          },
        ]}
      />
    </div>
  );
}

export default page;
