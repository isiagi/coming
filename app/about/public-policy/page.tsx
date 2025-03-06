import Link from "next/link";
import {
  Globe,
  Shield,
  Users,
  Lightbulb,
  BookOpen,
  MessageSquare,
  FileText,
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

export default function PublicPolicy() {
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
              className="text-sm font-medium text-primary hover:underline"
            >
              Public Policy
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
                  Public Policy
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Advocating for responsible technology policies that benefit
                  society
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
                  Our Approach
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  At DST, we believe technology should serve humanity and
                  enhance people&apos;s lives. Our public policy work focuses on
                  advocating for responsible technology policies that promote
                  innovation while protecting privacy, security, and digital
                  rights. We engage with policymakers, industry partners, and
                  civil society to shape a digital future that benefits
                  everyone.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter">
                    Policy Priorities
                  </h2>
                  <p className="text-muted-foreground">
                    Our policy work focuses on key areas where technology
                    intersects with public interest. We advocate for balanced
                    approaches that foster innovation while protecting
                    fundamental rights and values.
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src="/placeholder.svg?height=250&width=400"
                    alt="Policy team in discussion"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>

              <Tabs defaultValue="privacy" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="privacy">Data Privacy</TabsTrigger>
                  <TabsTrigger value="security">Cybersecurity</TabsTrigger>
                  <TabsTrigger value="inclusion">Digital Inclusion</TabsTrigger>
                  <TabsTrigger value="innovation">
                    Responsible Innovation
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="privacy" className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">
                        Data Privacy & Protection
                      </h3>
                      <p className="text-muted-foreground">
                        We advocate for comprehensive privacy frameworks that
                        give individuals control over their data while enabling
                        innovation. Our policy positions support:
                      </p>
                      <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>Transparent data collection and use practices</li>
                        <li>Meaningful user consent and control mechanisms</li>
                        <li>
                          Appropriate data minimization and purpose limitation
                        </li>
                        <li>
                          Harmonized privacy standards across jurisdictions
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="security" className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">Cybersecurity</h3>
                      <p className="text-muted-foreground">
                        We support policies that strengthen digital security
                        while preserving innovation and openness. Our
                        cybersecurity policy priorities include:
                      </p>
                      <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>
                          Risk-based security frameworks that adapt to evolving
                          threats
                        </li>
                        <li>
                          Public-private partnerships for threat intelligence
                          sharing
                        </li>
                        <li>
                          Security by design principles in technology
                          development
                        </li>
                        <li>
                          Workforce development to address the cybersecurity
                          skills gap
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="inclusion" className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">
                        Digital Inclusion
                      </h3>
                      <p className="text-muted-foreground">
                        We believe technology should be accessible to everyone.
                        Our digital inclusion advocacy focuses on:
                      </p>
                      <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>
                          Expanding broadband access to underserved communities
                        </li>
                        <li>
                          Promoting digital literacy and skills development
                        </li>
                        <li>
                          Ensuring technology accessibility for people with
                          disabilities
                        </li>
                        <li>
                          Addressing algorithmic bias and promoting fairness in
                          AI systems
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="innovation" className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">
                        Responsible Innovation
                      </h3>
                      <p className="text-muted-foreground">
                        We support policy frameworks that enable innovation
                        while ensuring appropriate safeguards. Our approach
                        includes:
                      </p>
                      <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                        <li>
                          Balanced regulatory approaches that protect consumers
                          without stifling innovation
                        </li>
                        <li>
                          Ethical guidelines for emerging technologies like AI
                          and IoT
                        </li>
                        <li>
                          Standards and interoperability to promote competition
                        </li>
                        <li>
                          Research and development incentives for socially
                          beneficial technologies
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Policy Engagement
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        Policymaker Engagement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        We engage constructively with legislators and regulators
                        at all levels of government to provide industry
                        expertise and advocate for balanced technology policies.
                        Our team participates in public consultations, provides
                        testimony at hearings, and offers technical assistance
                        to policymakers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Industry Collaboration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        We work with industry associations, standards bodies,
                        and peer companies to develop best practices, technical
                        standards, and self-regulatory frameworks that promote
                        responsible innovation. We believe collective action is
                        essential to address complex technology policy
                        challenges.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Policy Resources
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Policy Papers
                      </CardTitle>
                      <CardDescription>
                        In-depth analysis on key technology policy issues
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-primary" />
                          <Link href="#" className="text-sm hover:underline">
                            Responsible AI Governance Framework
                          </Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-primary" />
                          <Link href="#" className="text-sm hover:underline">
                            Data Privacy in the Digital Age
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Policy Briefs
                      </CardTitle>
                      <CardDescription>
                        Concise summaries of our positions on current issues
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-primary" />
                          <Link href="#" className="text-sm hover:underline">
                            Cybersecurity Information Sharing
                          </Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-primary" />
                          <Link href="#" className="text-sm hover:underline">
                            Bridging the Digital Divide
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Global Policy Tracker
                      </CardTitle>
                      <CardDescription>
                        Monitor technology policy developments worldwide
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center">
                        <Button variant="outline" className="w-full">
                          <Globe className="mr-2 h-4 w-4" />
                          Access Policy Tracker
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Get Involved</h3>
                    <p className="text-sm text-muted-foreground">
                      Interested in our policy work? Contact our public policy
                      team to learn more or collaborate.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button>Contact Policy Team</Button>
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
