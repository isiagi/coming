import IntelligentWorldCarousel from "@/components/carousel";
import ServicesSection from "@/components/services-section";
// import ComingSoon from "@/components/coming-soon";


export default function Home() {
  return (
    <div className="mt-[64px]">
      <IntelligentWorldCarousel />
      {/* <ComingSoon /> */}
      <ServicesSection />
    </div>
  );
}
