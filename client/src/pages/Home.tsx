import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  ChevronRight,
  Zap,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  QrCode,
  Lock,
  BarChart3,
  Users,
  Webhook,
  HeadsetIcon,
} from "lucide-react";

/**
 * FeedSolve Landing Page
 * Design: Modern SaaS with operational clarity
 * Color Palette: Deep Blue (#0F5FFF), Emerald Green (#10B981), Slate Gray (#475569)
 * Typography: Geist Sans - bold display, regular body
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============ NAVBAR ============ */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">FS</span>
            </div>
            <span className="font-bold text-lg">FeedSolve</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium hover:text-primary transition">
              Product
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition">
              Pricing
            </a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition">
              Demo
            </a>
            <a href="#login" className="text-sm font-medium hover:text-primary transition">
              Login
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Try Now
          </Button>
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-hero-bg-7PhhtRTPj3uxJZRy83vUqe.webp')",
          }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stop losing complaints. Start closing them.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Collect feedback from customers, suppliers, and partners — and track every issue to
                resolution with a simple link and QR code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Try Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary"
                >
                  See How It Works
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                ✓ No credit card required • Setup in under 2 minutes
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-hero-bg-7PhhtRTPj3uxJZRy83vUqe.webp"
                  alt="Hero visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUICK START SECTION ============ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Go from zero to live in minutes</h2>
            <p className="text-muted-foreground">
              Three simple steps to start collecting and resolving feedback
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Create your account",
                desc: "Sign up with email or Google",
              },
              {
                step: 2,
                title: "Create your first board",
                desc: 'Name it "Customer Feedback" or anything you like',
              },
              {
                step: 3,
                title: "Share your link or QR code",
                desc: "Start collecting feedback instantly",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-medium text-foreground">
              You'll be collecting real feedback in under 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM SECTION ============ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-problem-illustration-Lr542GW6c254XyrdV8Ecpd.webp"
                alt="Feedback chaos"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Feedback is everywhere. Resolution is nowhere.
              </h2>
              <div className="space-y-4">
                {[
                  "Complaints lost in WhatsApp chats",
                  "Feedback buried in emails",
                  "No tracking, no ownership",
                  "Customers never get updates",
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground pt-4">
                You're collecting feedback. You're just not resolving it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION SECTION (THE LOOP) ============ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A complete feedback loop. No gaps.
            </h2>
          </div>
          <div className="mb-12 flex justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-workflow-visual-Fyi7FQfMLUPEWYU3BBXUgY.webp"
              alt="Feedback loop"
              className="w-full max-w-2xl rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Collect",
                desc: "Share a link or QR code. Anyone can submit — no login required.",
                icon: Zap,
              },
              {
                title: "Track",
                desc: "Every submission gets a unique tracking code.",
                icon: TrendingUp,
              },
              {
                title: "Resolve",
                desc: "Assign issues, update status, and manage everything in one place.",
                icon: Check,
              },
              {
                title: "Communicate",
                desc: "Submitters can check progress anytime using their tracking code.",
                icon: MessageSquare,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 border-border">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ LIVE DEMO SECTION ============ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">See how it works in seconds</h2>
            <p className="text-muted-foreground">
              Track a real example and see how updates look from the submitter's side.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Track Demo Issue (#FSV-1024)
            </Button>
          </div>
        </div>
      </section>

      {/* ============ USE CASES SECTION ============ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Built for real-world operations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Manufacturing",
                desc: "Track supplier quality issues, defects, and production problems in one place.",
              },
              {
                title: "Restaurants & Hotels",
                desc: "Collect table feedback with QR codes and respond to customers quickly.",
              },
              {
                title: "Logistics",
                desc: "Manage delivery complaints, delays, and driver issues with full visibility.",
              },
              {
                title: "Real Estate",
                desc: "Handle tenant maintenance requests and track resolution progress.",
              },
            ].map((useCase, idx) => (
              <Card key={idx} className="p-6 border-border">
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIFFERENTIATION SECTION ============ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not another form builder</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Google Forms and Typeform help you <strong>collect</strong> feedback. FeedSolve makes
              sure it gets <strong>resolved</strong>.
            </p>
            <div className="space-y-4">
              {[
                "Track every issue from start to finish",
                "Assign responsibility to your team",
                "Update status and communicate back",
                "Let submitters follow progress",
              ].map((point, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUTCOME SECTION ============ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From chaos to clarity</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-destructive mb-4">Before FeedSolve</h3>
              {["Feedback scattered everywhere", "No accountability", "Issues forgotten", "No visibility"].map(
                (item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                )
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent mb-4">After FeedSolve</h3>
              {["Every issue tracked", "Clear ownership", "Structured resolution", "Full transparency"].map(
                (item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING SECTION ============ */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. No surprises.</h2>
            <p className="text-muted-foreground">Start free. Upgrade as you grow.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                name: "FREE",
                price: "$0",
                features: [
                  "1 Feedback Board",
                  "50 Submissions / month",
                  "1 Team Member",
                  "QR Code Access",
                  "Tracking Codes",
                ],
                highlighted: false,
              },
              {
                name: "STARTER",
                price: "$19",
                features: [
                  "3 Feedback Boards",
                  "500 Submissions / month",
                  "3 Team Members",
                  "Full Resolution Workflow",
                  "Email Notifications",
                ],
                highlighted: false,
              },
              {
                name: "GROWTH",
                price: "$49",
                features: [
                  "10 Feedback Boards",
                  "5,000 Submissions / month",
                  "10 Team Members",
                  "Public Replies to Submitters",
                  "Advanced Analytics",
                  "Custom Branding",
                ],
                highlighted: true,
              },
              {
                name: "BUSINESS",
                price: "$129",
                features: [
                  "Unlimited Boards",
                  "Unlimited Submissions",
                  "Unlimited Team Members",
                  "API Access",
                  "Integrations / Webhooks",
                  "Priority Support",
                ],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 border-2 transition ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 relative"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-border hover:bg-secondary"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Try Now
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Pricing is based on feedback boards, not per user. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                {
                  q: "Do submitters need an account?",
                  a: "No. Anyone can submit feedback without logging in.",
                },
                {
                  q: "Can feedback be anonymous?",
                  a: "Yes. You can enable anonymous submissions per board.",
                },
                {
                  q: "How long does setup take?",
                  a: "Less than 2 minutes.",
                },
                {
                  q: "Do I need a demo or sales call?",
                  a: "No. Just click \"Try Now\" and start immediately.",
                },
                {
                  q: "Can I upgrade later?",
                  a: "Yes. You can upgrade anytime as your usage grows.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                  <AccordionTrigger className="hover:text-primary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your first resolved issue is 2 minutes away.
            </h2>
            <p className="text-lg text-muted-foreground">
              Start collecting and resolving feedback today.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Try Now
            </Button>
            <p className="text-sm text-muted-foreground">No credit card required</p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">FS</span>
                </div>
                <span className="font-bold">FeedSolve</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 FeedSolve. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
