'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'

export default function IntelligentWorldCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      skipSnaps: false,
    }, 
    [AutoPlay({ delay: 5000 })]
  )
  const [currentSlide, setCurrentSlide] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect((): any => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const slides = [
    {
      title: "Exploring the Intelligent World",
      description: "The intelligent world is fast approaching. Transformative technologies like AI, 5G, and green energy are bringing the Fourth Industrial Revolution to the next level. This is significantly improving people's lives, boosting productivity, and driving rapid development around the world.",
      images: [
        "https://plus.unsplash.com/premium_photo-1713967593142-53e8285a2a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlzc2lvbiUyMGFuZCUyMGdvYWx8ZW58MHx8MHx8fDA%3D"
      ]
    },
    {
      title: "The Future of Technology",
      description: "As we move towards an increasingly connected world, the convergence of cutting-edge technologies is reshaping industries and redefining human experiences. From smart cities to autonomous vehicles, the possibilities are endless.",
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300"
      ]
    },
    {
      title: "Sustainable Innovation",
      description: "The next wave of technological advancements is not just about progress, but also about sustainability. Green tech innovations are paving the way for a more eco-friendly future, balancing development with environmental consciousness.",
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300"
      ]
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="flex flex-col lg:flex-row items-center gap-20 p-8 lg:p-16">
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                      {slide.title.split(' ').slice(0, -1).join(' ')}
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-bold text-red-600">
                      {slide.title.split(' ').slice(-1)}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white px-8"
                  >
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
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-red-600' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

