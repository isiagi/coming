import { ScrollNav } from '@/components/scroll-nav'
import { ServiceHeader } from '@/components/service-header';
import React from 'react'

const navItems = [
    { label: "All", href: "#overviewz" },
    { label: "Mission", href: "#mission" },
    { label: "Vision", href: "#vision" },
    { label: "Core Values", href: "#core-values" },
    { label: "Patners", href: "#patners" },
  ];


function About() {
  return (
    <div className='mt-[64px]'>
        <ScrollNav items={navItems} height={0}  />
        <ServiceHeader
                title="About Us"
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
        <div className='px-10 py-4 min-h-screen'>
            <p>Hello</p>
        </div>
    </div>
  )
}

export default About