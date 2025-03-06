import Link from "next/link";
import {
  LifeBuoy,
  BookOpen,
  MessageSquare,
  Phone,
  Mail,
  FileQuestion,
  Zap,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Support() {
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
              className="text-sm font-medium hover:underline"
            >
              Partners & Developers
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium text-primary hover:underline"
            >
              Support
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
                  How can we help you?
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our support resources or get in touch with our team!
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Knowledge Base
                </Button>
                <Button variant="outline">
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Support Options
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Choose from our range of support options to get the help you
                  need, when you need it.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Self-Service Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access our comprehensive knowledge base, FAQs, and
                      troubleshooting guides.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explore Knowledge Base
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Live Chat Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Chat with our support team in real-time for quick
                      assistance.
                    </p>
                    <Button variant="outline" className="w-full">
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Speak directly with our support team for complex issues.
                    </p>
                    <Button variant="outline" className="w-full">
                      Call Support
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Send us an email for non-urgent inquiries or detailed
                      explanations.
                    </p>
                    <Button variant="outline" className="w-full">
                      Email Support
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">
                        How do I reset my password?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        You can reset your password by clicking on the
                        &quot;Forgot Password&quot; link on the login page.
                        Follow the instructions sent to your email to create a
                        new password.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">
                        How can I update my account information?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Log in to your account and navigate to the &quot;Account
                        Settings&quot; page. Here you can update your personal
                        information, contact details, and preferences.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="billing" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">When will I be billed?</h3>
                      <p className="text-sm text-muted-foreground">
                        Billing occurs on the first day of each month for the
                        upcoming month&apos;s service. You can find your next
                        billing date in your account settings.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">
                        How can I update my payment method?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        To update your payment method, go to the
                        &quot;Billing&quot; section in your account settings.
                        Click on &quot;Payment Methods&quot; and follow the
                        prompts to add or update your information.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="technical" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">
                        How do I integrate DST&apos;s API with my application?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Check our Developer Documentation for detailed API
                        integration guides. You&apos;ll find step-by-step
                        instructions, code samples, and best practices for
                        seamless integration.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">
                        What should I do if I encounter an error?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        First, check our troubleshooting guide in the knowledge
                        base. If the issue persists, please contact our
                        technical support team with the error message and steps
                        to reproduce the problem.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
                <Button variant="link" className="p-0">
                  View All FAQs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Support Resources
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileQuestion className="h-5 w-5 text-primary" />
                        Troubleshooting Guides
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Step-by-step guides to resolve common issues.
                      </p>
                      <Link
                        href="#"
                        className="text-sm font-medium hover:underline flex items-center"
                      >
                        View Guides
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Video Tutorials
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Watch our video tutorials for visual guidance.
                      </p>
                      <Link
                        href="#"
                        className="text-sm font-medium hover:underline flex items-center"
                      >
                        Watch Tutorials
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Community Support
                </h2>
                <p className="text-muted-foreground">
                  Connect with other DST users, share experiences, and get
                  community-driven support.
                </p>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Our Community Forum
                </Button>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Support Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Our support team is available Monday to Friday, 9AM to 6PM
                      EST.
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Button variant="outline">View SLAs</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Still Need Help?
                </h2>
                <p className="text-muted-foreground">
                  If you couldn&apos;t find the answer you were looking for, our
                  support team is here to assist you.
                </p>
                <Button>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
