import { ServicesSection } from "../components/services-section";
import { Banner } from "../components/banner";

// import { AboutCompany } from "../components/about-company";

import { NewsAndEvents } from "../components/news-and-events";
import IntelligentWorldCarousel from "@/components/carousel";

export default function Home() {
  return (
    <main className="mt-[64px]">
      <IntelligentWorldCarousel />
      <ServicesSection />
      <Banner />

      {/* <AboutCompany /> */}

      <NewsAndEvents />
    </main>
  );
}
