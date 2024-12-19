'use client'

import { Check, Star } from 'lucide-react'
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="relative bg-slate-950 px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-cyan-400">About Our IT Technology Agency.</p>
            <h2 className="font-display text-4xl font-medium tracking-wide text-white md:text-5xl lg:text-6xl">
              Creative IT Technology & Cloud Computing Solutions.
            </h2>
            <div className="space-y-4 text-slate-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum
                risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet
                convallis nunc scelerisque in voluptatibus aliquid alias beatae.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum
                risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet
                convallis nunc scelerisque in.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white">Velit ducimus voluptatibus neque illo</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white">nisi Ut ut felis congue nisi hendrerit</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <span className="text-white">Affordable Packages & Detailed Results</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt="IT Professional working"
                fill
                className="object-cover"
                priority
              />
              {/* Floating UI Elements */}
              <div className="absolute right-4 top-4 h-24 w-24 rounded-2xl bg-white p-1 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt="Bar chart"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute bottom-4 left-4 h-32 w-32 rounded-2xl bg-white p-1 shadow-lg">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Gauge chart"
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute bottom-32 right-8 h-28 w-28 rounded-2xl bg-white p-1 shadow-lg">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Pie chart"
                  width={120}
                  height={120}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Top */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform">
        <p className="vertical-text text-xs font-medium tracking-widest text-white">
          SCROLL TOP
        </p>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}

