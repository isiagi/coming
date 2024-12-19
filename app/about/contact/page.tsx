import ContactForm from "@/components/contact-form";
import { ServiceHeader } from "@/components/service-header";
import React from "react";

function Page() {
  return (
    <div>
      <ServiceHeader
        title="Contact Us"
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
      <ContactForm />
    </div>
  );
}

export default Page;
