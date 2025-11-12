import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LumoraVentures() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-primary-teal hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Lumora Ventures
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-secondary">
                Lumora Ventures is a startup company dedicated to building
                innovative workplace solutions that empower employees and
                protect organizations. We believe in creating tools that foster
                transparency, trust, and meaningful communication in the
                workplace.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Our Products
              </h2>
              <div className="bg-background-softGray p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Anchora - Your Anchor in Every Storm
                </h3>
                <p className="text-text-secondary mb-4">
                  Anchora is our flagship employee feedback and engagement
                  platform designed to help companies prevent workplace crises
                  before they happen. With features like anonymous reporting,
                  comprehensive analytics, and compliance tracking, Anchora
                  gives organizations the tools they need to create safer, more
                  transparent workplaces.
                </p>
                <Link
                  href="/"
                  className="text-primary-teal font-semibold hover:underline"
                >
                  Learn more about Anchora →
                </Link>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Contact Us
              </h2>
              <div className="bg-background-softGray p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">
                  Lumora Ventures
                </p>
                <p className="text-text-secondary">
                  Email:{" "}
                  <a
                    href="mailto:hello@lumoraventures.com"
                    className="text-primary-teal hover:underline"
                  >
                    hello@lumoraventures.com
                  </a>
                </p>
                <p className="text-text-secondary">
                  Address: 123 Innovation Street, San Francisco, CA 94102
                </p>
                <p className="text-text-secondary">Phone: +1 (234) 567-890</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
