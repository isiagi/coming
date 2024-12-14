'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ListItem = ({ className, title, href, children }: { className?: string, title: string, href: string, children?: React.ReactNode }) => {
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const navItems = [
  {
    title: 'About DST',
    href: '/about',
    sublinks: [
      { title: 'Mission', href: '/about/mission' },
      { title: 'Vision', href: '/about/vision' },
      { title: 'Core Values', href: '/about/core-values' },
      { title: 'Partners', href: '/about/partners' },
      { title: 'Contact Us', href: '/about/contact' },
      { title: 'Trust Center', href: '/about/trust-center' },
      { title: 'Careers', href: '/about/careers' },
      { title: 'Compliance & Integrity', href: '/about/compliance-integrity' },
      { title: 'Public Policy', href: '/about/public-policy' },
      { title: 'News & Events', href: '/about/news-events' },
    ],
  },
  {
    title: 'Products & Services',
    href: '/products-services',
    sublinks: [
      { title: 'Managed Services', href: '/products-services/managed-services' },
      { title: 'Cybersecurity', href: '/products-services/cybersecurity' },
      { title: 'Data Analytics', href: '/products-services/data-analytics' },
      { title: 'Software Solutions', href: '/products-services/software-solutions' },
      { title: 'Cloud Computing', href: '/products-services/cloud-computing' },
    ],
  },
  { title: 'Partners & Developers', href: '/partners-developers' },
  { title: 'Support', href: '/support' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Search submitted')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">DST</Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            {!isSearchOpen ? (
              <>
                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.sublinks ? (
                          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        ) : (
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        )}
                        {item.title === 'About DST' && (
                          <NavigationMenuContent>
                            <div className="w-[400px] p-4">
                              <ul className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                  {item.sublinks.slice(0, 5).map((sublink) => (
                                    <ListItem
                                      key={sublink.title}
                                      title={sublink.title}
                                      href={sublink.href}
                                    />
                                  ))}
                                </div>
                                <div className="space-y-2">
                                  {item.sublinks.slice(5, 10).map((sublink) => (
                                    <ListItem
                                      key={sublink.title}
                                      title={sublink.title}
                                      href={sublink.href}
                                    />
                                  ))}
                                </div>
                              </ul>
                            </div>
                          </NavigationMenuContent>
                        )}
                        {item.title === 'Products & Services' && (
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                              {item.sublinks.map((sublink) => (
                                <ListItem
                                  key={sublink.title}
                                  title={sublink.title}
                                  href={sublink.href}
                                />
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                  className="ml-4"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64"
                  autoFocus
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="ml-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            {!isSearchOpen ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                  className="mr-2"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full"
                  autoFocus
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="ml-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {!isSearchOpen && (
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.sublinks ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.title}>
                      <AccordionTrigger className="px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4">
                          {item.sublinks.map((sublink) => (
                            <Link
                              key={sublink.title}
                              href={sublink.href}
                              className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

