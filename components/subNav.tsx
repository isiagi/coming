import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface SubNavProps {
  
    breadcrumbs: Array<{
      label: string
      href: string
    }>
  }

function SubNav({breadcrumbs}: SubNavProps) {
  return (
    <nav className="flex bg-[#F6F6F6] py-4 px-10 mt-[64px] items-center " aria-label="Breadcrumb">
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
  )
}

export default SubNav