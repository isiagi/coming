import { NewsAndEvents } from "@/components/news-and-events";
import { ServiceHeader } from "@/components/service-header";
import SubNav from "@/components/subNav";
import React from "react";

function page() {
  return (
    <>
      <SubNav
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "News & Events",
            href: "/about/news-events",
          },
        ]}
      />
      <ServiceHeader
        title="News & Events"
        subtitle="Explore our latest news and events"
        image="https://media.istockphoto.com/id/157399872/photo/news.webp?a=1&b=1&s=612x612&w=0&k=20&c=NM1fibM2dPFNktPDp1NRdD38FJYQCuvk86M1zXaHk_8="
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Partners & Developers",
            href: "/products-services/partners-developers",
          },
        ]}
      />
      <NewsAndEvents />
    </>
  );
}

export default page;
