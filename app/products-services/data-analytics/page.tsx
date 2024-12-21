import SubHeroHeader from '@/components/SubHeroHeader'
import React from 'react'


function page() {
  return (
    <div>
         <SubHeroHeader 
        title="Data Analytics"
        subtitle="Enterprise-grade IT infrastructure management"
        image="/placeholder.svg?height=384&width=384"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Data Analytics', href: '/products-services/data-analytics' },
        ]}
        navItems={[
          { label: 'All', href: '#overviewz' },
          { label: 'Overview', href: '#overview' },
          { label: 'Benefits', href: '#benefits' },
          { label: 'Products', href: '#products' },
          { label: 'Resources', href: '#resources' },
        ]}
      />
    </div>
  )
}

export default page