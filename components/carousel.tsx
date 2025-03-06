"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

export default function IntelligentWorldCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [AutoPlay({ delay: 5000 })]
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect((): any => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      title: "Empowering Businesses with Cutting-Edge IT Solutions",
      description:
        "🔹 Managed IT Services | 🔹 Cloud Computing | 🔹 Data Analytics Stay ahead with DST’s innovative technology solutions. From seamless cloud integrations to data-driven insights, we help businesses thrive in a digital world.",
      images: [
        "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      title: "Cybersecurity & Data Protection",
      description:
        "🛡️ Protect your business with advanced cybersecurity solutions from DST. We safeguard your data, prevent cyber threats, and ensure compliance, so you can focus on growth with confidence.",
      images: [
        "https://plus.unsplash.com/premium_photo-1700476854144-25da28c4ee9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGN5YmVyJTIwc2VjdXJpdHklMjBhbmQlMjBkYXRhJTIwY29udHJvbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXIlMjBzZWN1cml0eSUyMGFuZCUyMGRhdGElMjBjb250cm9sfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1676618540046-3a68a4e20408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxjeWJlciUyMHNlY3VyaXR5JTIwYW5kJTIwZGF0YSUyMGNvbnRyb2x8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      title: "Custom Software & IT Innovations",
      description:
        "🚀 Custom Software Tailored to Your Needs Transform your ideas into reality with DST’s cutting-edge software solutions. We build scalable, efficient, and user-friendly applications to drive your business forward.",
      images: [
        "https://images.unsplash.com/photo-1542745979-770f28b4aba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGN1c3RvbSUyMGl0JTIwYW5kJTIwaW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VzdG9tJTIwaXQlMjBhbmQlMjBpbm5vdmF0aW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBjb2xsYWJvcmF0aW5nfGVufDB8fDB8fHww",
      ],
    },
  ];

  return (
    <div className="relative bg-[#F8F9FA]">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="flex flex-col lg:flex-row items-center gap-20 p-8 lg:p-16">
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#212529]">
                      {slide.title.split(" ").slice(0, -1).join(" ")}
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1E90FF]">
                      {slide.title.split(" ").slice(-1)}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button className="bg-[#1E90FF] hover:bg-[#1565C0] text-white px-8">
                    Learn More
                  </Button>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 relative">
                  <div className="relative w-full aspect-[4/3]">
                    <div className="absolute top-0 right-0 w-4/5 h-full">
                      <img
                        src={slide.images[0]}
                        alt={`${slide.title} - Image 1`}
                        className="object-contain transform rotate-12 shadow-lg"
                      />
                      <img
                        src={slide.images[1]}
                        alt={`${slide.title} - Image 2`}
                        className="absolute top-10 right-20 object-contain transform rotate-6 shadow-lg"
                      />
                      <img
                        src={slide.images[2]}
                        alt={`${slide.title} - Image 3`}
                        className="absolute top-20 right-40 object-contain shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <Button
        onClick={scrollPrev}
        size="icon"
        variant="outline"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/50 hover:bg-white/75 border-2 border-gray-300 z-10"
      >
        <ChevronLeft className="h-12 w-12 text-gray-700" />
      </Button>
      <Button
        onClick={scrollNext}
        size="icon"
        variant="outline"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/50 hover:bg-white/75 border-2 border-gray-300 z-10"
      >
        <ChevronRight className="h-12 w-12 text-gray-700" />
      </Button>

      {/* Custom Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-[#1E90FF]" : "bg-[#D3D3D3]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
