import Link from "next/link";
import {
  Shield,
  FileCheck,
  Scale,
  Users,
  AlertCircle,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComplianceIntegrity() {
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
              className="text-sm font-medium text-primary hover:underline"
            >
              Compliance
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
                  Compliance & Integrity
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our commitment to ethical business practices and regulatory
                  compliance
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
                  Our Commitment
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  At DST, integrity is the foundation of everything we do. We
                  are committed to conducting business ethically, transparently,
                  and in compliance with all applicable laws and regulations.
                  Our compliance program is designed to protect our clients, our
                  employees, and our company while upholding the highest
                  standards of professional conduct.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Data Protection</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We implement robust safeguards to protect sensitive
                      information and comply with data protection regulations
                      including GDPR, CCPA, and industry-specific requirements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <FileCheck className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Industry Standards</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We maintain certifications and adhere to industry
                      standards including ISO 27001, SOC 2, and NIST frameworks
                      to ensure best practices in security and service delivery.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Scale className="h-8 w-8 text-primary" />
                    <div className="grid gap-1">
                      <CardTitle>Ethical Business</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our Code of Conduct guides all business activities,
                      ensuring fair dealings with clients, partners, and
                      competitors while preventing conflicts of interest.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Compliance Framework
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Our comprehensive compliance framework is built on three
                  pillars:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>
                    <strong>Prevention:</strong> Policies, procedures, and
                    training designed to prevent compliance issues before they
                    occur
                  </li>
                  <li>
                    <strong>Detection:</strong> Monitoring and auditing systems
                    to identify potential compliance risks
                  </li>
                  <li>
                    <strong>Response:</strong> Clear protocols for addressing
                    compliance concerns and implementing corrective actions
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Key Compliance Areas
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <h3 className="font-semibold">
                        Cybersecurity Compliance
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Implementation of security controls and protocols that
                      meet or exceed industry standards and regulatory
                      requirements.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <h3 className="font-semibold">Privacy Compliance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Strict adherence to privacy laws and regulations governing
                      the collection, use, and storage of personal information.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <h3 className="font-semibold">Contractual Compliance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fulfillment of all contractual obligations to clients,
                      vendors, and partners with transparency and integrity.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <h3 className="font-semibold">Regulatory Compliance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ongoing monitoring of regulatory changes to ensure our
                      services and operations remain compliant with evolving
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Report a Concern</h3>
                    <p className="text-sm text-muted-foreground">
                      We encourage the reporting of any suspected violations of
                      our policies or applicable laws.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Compliance
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Governance
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Our Compliance Committee, led by our Chief Compliance Officer,
                  oversees the implementation and enforcement of our compliance
                  program. The committee meets regularly to review compliance
                  matters, assess risks, and ensure that our policies and
                  procedures remain effective and up-to-date.
                </p>
                <div className="flex items-center gap-4">
                  <Users className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Compliance Leadership
                    </h3>
                    <p className="text-muted-foreground">
                      Our dedicated compliance team works across all departments
                      to foster a culture of integrity and ensure adherence to
                      our compliance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                Contact Our Compliance Team
              </h2>
              <p className="text-muted-foreground md:text-lg">
                For questions about our compliance program or to report a
                concern, please contact our compliance team.
              </p>
              <div className="mx-auto flex max-w-sm flex-col gap-2">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  compliance@dst-tech.com
                </Button>
                <p className="text-xs text-muted-foreground">
                  All inquiries and reports are treated confidentially and in
                  accordance with our non-retaliation policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
