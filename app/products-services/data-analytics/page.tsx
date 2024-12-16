import { ServiceHeader } from '@/components/service-header'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
         <ServiceHeader
                        title="Data Analytics"
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