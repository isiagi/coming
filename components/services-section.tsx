import { Shield, Cloud, Layout, Server } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      title: "Hacking & Security Solutions",
      description: "Comprehensive cybersecurity services to protect your digital assets and infrastructure from evolving threats.",
      icon: Shield,
    },
    {
      title: "IT Deployment and Migration",
      description: "Seamless transition and deployment services ensuring minimal disruption to your business operations.",
      icon: Server,
    },
    {
      title: "Managed Web Application",
      description: "End-to-end web application management services for optimal performance and security.",
      icon: Layout,
    },
    {
      title: "IT & Cloud Management",
      description: "Expert cloud solutions and IT management to drive your business forward efficiently.",
      icon: Cloud,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Our Company Services
          </h2>
          <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Delivering innovative solutions to transform your business with cutting-edge technology and expert services.
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:gap-12">
          {services.map((service) => (
            <Card key={service.title} className="border-0 bg-slate-900/50 backdrop-blur-sm">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-white">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

