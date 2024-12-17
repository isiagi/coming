import { ScrollNav } from '@/components/scroll-nav'
import React from 'react'

const navItems = [
    { label: "All", href: "#overviewz" },
    { label: "Overview", href: "#overview" },
    { label: "Benefits", href: "#benefits" },
    { label: "Products", href: "#products" },
    { label: "Resources", href: "#resources" },
  ];


function About() {
  return (
    <div className='mt-[64px]'>
        <ScrollNav items={navItems} height={0}  />
        <div className='px-10 py-4 min-h-screen'>
            <p>Hello</p>
        </div>
    </div>
  )
}

export default About