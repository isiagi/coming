'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ScrollNavProps {
  items: Array<{
    label: string
    href: string
  }>
}

export function ScrollNav({ items }: ScrollNavProps) {
  const [isSticky, setIsSticky] = useState(false)
  // const [showMainNav, setShowMainNav] = useState(true)
  const [activeItem, setActiveItem] = useState(items[0]?.href)

  useEffect(() => {
    // let lastScrollY = window.pageYOffset
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      const headerHeight = 500 // Same as ServiceHeader min-height
      // const documentHeight = document.documentElement.scrollHeight
      // const viewportHeight = window.innerHeight
      // const bottomThreshold = documentHeight - viewportHeight - 100

      setIsSticky(currentScrollY > headerHeight)
      // setShowMainNav(
      //   currentScrollY < headerHeight ||
      //   currentScrollY < lastScrollY ||
      //   currentScrollY > bottomThreshold
      // )

      // Update active item based on scroll position
      items.forEach(({ href }) => {
        const element = document.querySelector(href)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(href)
          }
        }
      })

      // lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <div
    className={cn(
      'transition-all duration-300 ease-in-out w-full bg-white',
      isSticky ? 'fixed left-0 right-0 shadow-md' : '',
      isSticky ? 'top-16' : '' // Position 64px (4rem) from the top, which is the height of the main navbar
    )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="flex space-x-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors',
                  activeItem === item.href
                    ? 'border-red-600 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button variant="destructive">GET PRICING/INFO</Button>
        </div>
      </div>
    </div>
  )
}

