// import { Navbar } from '@/components/navbar'
import { ServiceHeader } from '@/components/service-header'
import { ScrollNav } from '@/components/scroll-nav'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Products', href: '#products' },
  { label: 'Resources', href: '#resources' },
]

export default function ManagedServicesPage() {
  return (
    <>
      {/* <Navbar /> */}
      <ServiceHeader
        title="Managed Services"
        subtitle="Enterprise-grade IT infrastructure management"
        image="/placeholder.svg?height=384&width=384"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Managed Services', href: '/products-services/managed-services' },
        ]}
      />
      <ScrollNav items={navItems} />
      
      {/* Page content with sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="overview" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-gray-600">
            Our managed services provide comprehensive IT infrastructure management, ensuring your systems run smoothly and efficiently. We offer 24/7 monitoring, proactive maintenance, and rapid issue resolution to minimize downtime and optimize performance.
          </p>
        </section>

        <section id="benefits" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Benefits</h2>
          <p className="text-gray-600">
            Discover the advantages of our managed services, including reduced operational costs, improved system reliability, enhanced security, and access to expert IT support. Our solutions allow you to focus on your core business while we handle the complexities of IT management.
          </p>
        </section>

        <section id="products" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          <p className="text-gray-600">
            Explore our range of managed service solutions, including network management, cloud services, cybersecurity, data backup and recovery, and IT consulting. Each product is designed to address specific business needs and can be customized to fit your unique requirements.
          </p>
        </section>

        <section id="resources" className="min-h-screen pt-[150px]">
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <p className="text-gray-600">
            Access documentation, guides, and support materials to help you make the most of our managed services. Find detailed product information, best practices, case studies, and FAQs to support your IT management journey.
          </p>
        </section>
      </div>
    </>
  )
}

