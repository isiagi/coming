'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceHeaderProps {
  title: string
  subtitle: string
  image: string
  breadcrumbs: Array<{
    label: string
    href: string
  }>
}

export function ServiceHeader({ title, subtitle, image, breadcrumbs }: ServiceHeaderProps) {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-b from-sky-100 to-white overflow-hidden">
      {/* Meteor effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/meteor-effect.svg')] bg-cover bg-center opacity-50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                <Link
                  href={crumb.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center justify-between pb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>
          <div className="hidden lg:block">
            <img
              src={image}
              alt=""
              className="h-96 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

