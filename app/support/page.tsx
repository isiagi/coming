import { ServiceHeader } from '@/components/service-header'
import SubNav from '@/components/subNav'
import React from 'react'

function Support() {
  return (
    <div className="mt-[64px]">
    <SubNav
      breadcrumbs={[
        { label: "Home", href: "/" },
        {
          label: "Support",
          href: "/products-services/support",
        },
      ]}
    />
    <ServiceHeader
      title="Support"
      subtitle="Enterprise-grade IT infrastructure management"
      image="/placeholder.svg?height=384&width=384"
      breadcrumbs={[
        { label: "Home", href: "/" },
        {
          label: "Support",
          href: "/products-services/support",
        },
      ]}
    />
  </div>
  )
}

export default Support