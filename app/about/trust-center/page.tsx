import Link from "next/link";
import {
  Shield,
  Lock,
  FileCheck,
  Eye,
  Server,
  Book,
  Download,
  ExternalLink,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TrustCenter() {
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
              href="/compliance"
              className="text-sm font-medium hover:underline"
            >
              Compliance
            </Link>
            <Link
              href="/public-policy"
              className="text-sm font-medium hover:underline"
            >
              Public Policy
            </Link>
            <Link
              href="/trust-center"
              className="text-sm font-medium text-primary hover:underline"
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
                  DST Trust Center
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your central resource for security, privacy, and compliance
                  information
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Commitment to Trust
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  At DST, trust is the foundation of our relationships with
                  customers and partners. We are committed to maintaining the
                  highest standards of security, privacy, and compliance in all
                  our operations. Our Trust Center provides transparency into
                  our practices and empowers you with the information and
                  controls you need to confidently use our services.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We employ industry-leading security measures to protect
                      your data and systems from threats.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-primary" />
                      Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your privacy is paramount. We provide robust controls and
                      transparent policies for data handling.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                      Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We adhere to global standards and regulations to ensure
                      our services meet compliance requirements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      Transparency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We believe in open communication about our practices,
                      policies, and performance.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="security" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                  <TabsTrigger value="transparency">Transparency</TabsTrigger>
                </TabsList>
                <TabsContent value="security" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">Security Measures</h3>
                  <p className="text-muted-foreground">
                    Our multi-layered approach to security protects your data at
                    every level.
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Infrastructure Security
                      </AccordionTrigger>
                      <AccordionContent>
                        We use state-of-the-art data centers with 24/7 physical
                        security, biometric access controls, and redundant power
                        systems. Our network is protected by advanced firewalls,
                        intrusion detection, and DDoS mitigation systems.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Data Encryption</AccordionTrigger>
                      <AccordionContent>
                        All data is encrypted in transit and at rest using
                        industry-standard encryption protocols. We use TLS 1.3
                        for data in transit and AES-256 for data at rest.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Access Controls</AccordionTrigger>
                      <AccordionContent>
                        We implement strict access controls based on the
                        principle of least privilege. Multi-factor
                        authentication is required for all administrative
                        access, and we regularly audit access logs.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="privacy" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">Privacy Controls</h3>
                  <p className="text-muted-foreground">
                    We provide robust privacy controls and transparent policies
                    for data handling.
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Granular data access controls for customers</li>
                    <li>Data minimization and purpose limitation principles</li>
                    <li>Regular privacy impact assessments</li>
                    <li>Clear processes for data subject rights requests</li>
                  </ul>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Privacy Policy
                  </Button>
                </TabsContent>
                <TabsContent value="compliance" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">
                    Compliance Certifications
                  </h3>
                  <p className="text-muted-foreground">
                    We maintain compliance with key industry standards and
                    regulations.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>ISO 27001</CardTitle>
                        <CardDescription>
                          Information Security Management
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>SOC 2 Type II</CardTitle>
                        <CardDescription>
                          Service Organization Control
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>GDPR</CardTitle>
                        <CardDescription>
                          General Data Protection Regulation
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>CCPA</CardTitle>
                        <CardDescription>
                          California Consumer Privacy Act
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="transparency" className="space-y-4 pt-4">
                  <h3 className="text-xl font-semibold">
                    Transparency Reports
                  </h3>
                  <p className="text-muted-foreground">
                    We regularly publish reports on our operations, security
                    incidents, and government requests for data.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      2023 Annual Transparency Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      H2 2023 Security Incident Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      2023 Government Data Request Report
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Customer Controls
                </h2>
                <p className="text-muted-foreground">
                  We empower our customers with robust controls to manage their
                  security and privacy settings.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary" />
                        Data Residency
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Choose where your data is stored and processed with our
                        flexible data residency options.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        Access Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Granular access controls and role-based permissions to
                        secure your account.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Trust Resources
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                            Security Whitepaper
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Privacy Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm hover:underline flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Compliance Framework
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-primary" />
                        Audit Reports
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Access our latest audit reports and certifications.
                      </p>
                      <Button variant="outline" className="w-full">
                        Request Access
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Trust Portal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Real-time updates on system status and security.
                      </p>
                      <Button variant="outline" className="w-full">
                        Visit Trust Portal
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">
                      Have questions about our trust and security practices?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our team is here to help you understand our commitment to
                      protecting your data.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button>Contact Trust & Security Team</Button>
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
