import ContactForm from "@/components/contact-form";
import { ServiceHeader } from "@/components/service-header";
import SubNav from "@/components/subNav";
import React from "react";

function Page() {
  return (
    <div>
      <SubNav
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Contact Us",
            href: "/Contact",
          },
        ]}
      />
      <ServiceHeader
        title="Contact Us"
        subtitle="Enterprise-grade IT infrastructure management"
        image="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
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
