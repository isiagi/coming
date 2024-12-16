import { ServiceHeader } from '@/components/service-header'
import React from 'react'


function page() {
  return (
    <div>
        <ServiceHeader
                title="Cloud Computing"
                subtitle="Enterprise-grade IT infrastructure management"
                image="/placeholder.svg?height=384&width=384"
                breadcrumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Managed Services', href: '/products-services/managed-services' },
                ]}
              />
    </div>
  )
}

export default page