
import Link from "next/link";
import {
  Handshake,
  Code,
  Rocket,
  Users,
  Book,
  MessageSquare,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function PartnersDevelopers() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">DST</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:underline"
            >
              Services
            </Link>
            <Link
              href="/partners-developers"
              className="text-sm font-medium text-primary hover:underline"
            >
              Partners & Developers
            </Link>
            <Link
              href="/trust-center"
              className="text-sm font-medium hover:underline"
            >
              Trust Center
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Partners & Developers
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join our ecosystem to build innovative solutions and grow your
                  business
                </p>
              </div>
              <div className="space-x-4">
                <Button>Become a Partner</Button>
                <Button variant="outline">Explore Developer Resources</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Why Partner with DST?
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Joining the DST ecosystem opens up a world of opportunities
                  for your business. Our partnership program is designed to
                  foster innovation, drive growth, and create mutual success.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      Accelerate Growth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Leverage DST&apos;s market presence and customer base to
                      expand your reach and grow your business faster.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Cutting-edge Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get early access to our latest technologies and integrate
                      them into your solutions to stay ahead of the curve.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Collaborative Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Benefit from our dedicated partner support, technical
                      expertise, and collaborative go-to-market strategies.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Handshake className="h-5 w-5 text-primary" />
                      Ecosystem Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Connect with other partners in our ecosystem to create
                      comprehensive solutions and explore new markets.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="technology" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                  <TabsTrigger value="technology">
                    Technology Partners
                  </TabsTrigger>
                  <TabsTrigger value="solution">Solution Providers</TabsTrigger>
                  <TabsTrigger value="integrator">
                    System Integrators
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="technology" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">Technology Partners</h3>
                  <p className="text-muted-foreground">
                    Collaborate with DST to integrate our technologies into your
                    products or services, creating powerful joint solutions.
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Access to DST&apos;s APIs and SDKs</li>
                    <li>Co-development opportunities</li>
                    <li>Joint marketing and promotion</li>
                    <li>Technical integration support</li>
                  </ul>
                  <Button variant="outline">
                    Learn More About Technology Partnerships
                  </Button>
                </TabsContent>
                <TabsContent value="solution" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">Solution Providers</h3>
                  <p className="text-muted-foreground">
                    Build and deliver comprehensive solutions based on
                    DST&apos;s platform to meet specific customer needs.
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Extensive product training</li>
                    <li>Sales and marketing support</li>
                    <li>Access to DST&apos;s customer base</li>
                    <li>Revenue sharing opportunities</li>
                  </ul>
                  <Button variant="outline">
                    Explore Solution Provider Program
                  </Button>
                </TabsContent>
                <TabsContent value="integrator" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">System Integrators</h3>
                  <p className="text-muted-foreground">
                    Leverage DST&apos;s technologies to deliver comprehensive IT
                    solutions and services to your clients.
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Dedicated integration support</li>
                    <li>Customization capabilities</li>
                    <li>Project-based collaboration</li>
                    <li>Certification programs</li>
                  </ul>
                  <Button variant="outline">Join as a System Integrator</Button>
                </TabsContent>
              </Tabs>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Developer Resources
                </h2>
                <p className="text-muted-foreground">
                  Access a wealth of resources to help you build innovative
                  solutions with DST&apos;s technologies.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        APIs & SDKs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            REST API Documentation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Mobile SDKs (iOS & Android)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Web SDK
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Book className="h-5 w-5 text-primary" />
                        Documentation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Getting Started Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            API Reference
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Best Practices
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        Sample Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            GitHub Repository
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Code Samples
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo Applications
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Success Stories
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>TechInnovate Solutions</CardTitle>
                      <CardDescription>
                        AI-Powered Customer Service Platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        TechInnovate integrated DST&apos;s natural language
                        processing API to create an intelligent customer service
                        platform, reducing response times by 50% and improving
                        satisfaction scores.
                      </p>
                      <Link
                        href="#"
                        className="text-sm font-medium hover:underline flex items-center"
                      >
                        Read Case Study
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>SecureFlow Systems</CardTitle>
                      <CardDescription>
                        Enhanced Cybersecurity Solution
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        By leveraging DST&apos;s threat intelligence API,
                        SecureFlow developed a comprehensive cybersecurity
                        solution that proactively identifies and mitigates
                        emerging threats.
                      </p>
                      <Link
                        href="#"
                        className="text-sm font-medium hover:underline flex items-center"
                      >
                        Read Case Study
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Getting Started
                </h2>
                <p className="text-muted-foreground">
                  Ready to join our ecosystem? Follow these steps to get
                  started:
                </p>
                <ol className="ml-6 list-decimal space-y-2 text-muted-foreground">
                  <li>
                    Review our partnership options and choose the best fit for
                    your organization
                  </li>
                  <li>
                    Register for a DST Developer Account to access our resources
                  </li>
                  <li>Explore our documentation and sample projects</li>
                  <li>Connect with our partner support team for guidance</li>
                  <li>Start building and innovating with DST technologies</li>
                </ol>
                <Button>Create Developer Account</Button>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">
                      Need support or have questions?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our partner and developer support team is here to help you
                      succeed.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button variant="outline">Contact Support</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
