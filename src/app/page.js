
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cloud text-navy">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto flex max-w-6xl items-center justify-between p-4">
          <div className="flex items-center">
            <Image src="/logo-anchora.svg" alt="Anchora Logo" width={160} height={48} />
          </div>
          <nav className="hidden space-x-8 text-sm font-semibold md:flex">
            <a href="#features" className="hover:text-teal">Features</a>
            <a href="#pricing" className="hover:text-teal">Pricing</a>
            <a href="#contact" className="hover:text-teal">Contact</a>
          </nav>
          <div>
            <a href="/signup" className="rounded-lg bg-coral px-4 py-2 text-sm font-bold text-white transition hover:bg-opacity-80">
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
        <section className="hero w-full bg-gradient-to-b from-cloud to-white py-20 px-4">
            <div className="container mx-auto max-w-6xl text-center">
                <h1 className="font-montserrat text-5xl font-bold text-navy md:text-6xl">
                Your Anchor in Every Storm
                </h1>
                <p className="mx-auto mt-6 max-w-4xl text-xl text-gray-600 md:text-2xl">
                Give Every Employee a Voice That Creates Real Change
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                When work stress and personal challenges collide, Anchora keeps your team 
                grounded, heard, and thriving. Anonymous feedback. Problem tracking. 
                Real solutions. Starting at just <span className="font-semibold text-teal">$1 per employee per month</span>.
                </p>
                <div className="mt-10 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a 
                    href="/signup" 
                    className="inline-block rounded-lg bg-coral px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                    Start Free Trial
                </a>
                <a 
                    href="/demo" 
                    className="inline-block rounded-lg border-2 border-navy bg-white px-8 py-4 text-lg font-semibold text-navy transition hover:bg-gray-50"
                >
                    Watch 2-Min Demo
                </a>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>

      {/* The Problem Section */}
      <section className="w-full py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold text-navy">The Silent Crisis in Your Workplace</h2>
          <p className="font-inter mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            67% of employees experience workplace stress but suffer in silence. Problems go unreported. Ideas never surface. Your best people quietly quit.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="font-montserrat text-xl font-bold text-navy">The Cost</h3>
              <p className="font-inter mt-4 text-3xl font-bold text-coral">$359 Billion Lost Annually</p>
              <ul className="font-inter mt-4 list-disc list-inside text-left text-gray-600">
                <li>Unreported safety issues</li>
                <li>Harassment goes unnoticed</li>
                <li>Innovation dies in silence</li>
                <li>Top talent leaves</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="font-montserrat text-xl font-bold text-navy">The Barrier</h3>
              <p className="font-inter mt-4 text-3xl font-bold text-coral">Employees Fear Speaking Up</p>
              <ul className="font-inter mt-4 list-disc list-inside text-left text-gray-600">
                <li>71% worry about retaliation</li>
                <li>No clear feedback channels</li>
                <li>Belief that nothing will change</li>
                <li>Anonymous options not trusted</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="font-montserrat text-xl font-bold text-navy">The Impact</h3>
              <p className="font-inter mt-4 text-3xl font-bold text-coral">Your Team Drifts Apart</p>
              <ul className="font-inter mt-4 list-disc list-inside text-left text-gray-600">
                <li>Engagement scores drop</li>
                <li>Turnover rates spike</li>
                <li>Productivity suffers</li>
                <li>Culture deteriorates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section id="features" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold text-navy">Anchora Gives Every Employee a Safe Voice—And Every Problem a Path to Resolution</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.78-2.679 9.317m0 0a9.01 9.01 0 01-6.65-3.32M14.679 20.317c-1.67 2.537-4.63 4.183-7.999 4.183a9 9 0 01-8.32-5.99M12 11V3m0 8h.01"></path></svg>
              </div>
              <h3 className="font-montserrat mt-6 text-xl font-bold text-navy">Step 1: Share Safely</h3>
              <p className="font-inter mt-2 text-gray-600">Employees post ideas, report problems, or start discussions. They control their privacy. No fear. No barriers. Just honest communication.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="font-montserrat mt-6 text-xl font-bold text-navy">Step 2: Track Everything</h3>
              <p className="font-inter mt-2 text-gray-600">Every post gets tracked through a clear workflow. Admins assign owners, set priorities, and update status. Total transparency. Zero lost voices.</p>
            </div>
            <div className="text-center">
             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="font-montserrat mt-6 text-xl font-bold text-navy">Step 3: See Real Action</h3>
              <p className="font-inter mt-2 text-gray-600">When problems get solved, everyone sees it. When ideas get implemented, creators get recognized. Culture transforms. Trust builds. Teams thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing w-full bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-4xl font-bold text-navy">
            Simple, Transparent Pricing
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
            No hidden fees. No surprises. Just honest pricing.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 p-8 transition hover:border-teal">
                <h3 className="mb-2 text-2xl font-bold text-navy">Starter</h3>
                <p className="mb-6 text-gray-600">Perfect for Small Teams</p>
                
                <div className="mb-6">
                <span className="text-5xl font-bold text-navy">$0</span>
                <span className="text-gray-600">/month</span>
                </div>
                
                <p className="mb-6 text-sm text-gray-600">Up to 10 employees</p>
                
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>All core features</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Anonymous posting</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mobile app access</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Email support</span>
                </li>
                </ul>
                
                <a href="/signup?plan=starter" className="block rounded-lg bg-gray-100 py-3 text-center font-semibold text-navy transition hover:bg-gray-200">
                Start Free Forever
                </a>
            </div>
            
            {/* Professional Plan - MOST POPULAR */}
            <div className="relative transform rounded-xl border-2 border-teal p-8 shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-coral px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                </span>
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-navy">Professional</h3>
                <p className="mb-6 text-gray-600">Best for Growing Companies</p>
                
                <div className="mb-6">
                <span className="text-5xl font-bold text-teal">$1</span>
                <span className="text-gray-600">/employee/month</span>
                </div>
                
                <p className="mb-6 text-sm text-gray-600">Billed annually • Minimum 11 employees</p>
                
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Everything in Starter, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced problem tracking</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Department assignment</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Priority support</span>
                </li>
                </ul>
                
                <a href="/signup?plan=professional" className="block rounded-lg bg-teal py-3 text-center font-semibold text-white shadow-lg transition hover:bg-teal-dark">
                Start 14-Day Free Trial
                </a>
            </div>
            
            {/* Enterprise Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 p-8 transition hover:border-navy">
                <h3 className="mb-2 text-2xl font-bold text-navy">Enterprise</h3>
                <p className="mb-6 text-gray-600">Custom Solutions</p>
                
                <div className="mb-6">
                <span className="text-5xl font-bold text-navy">Custom</span>
                </div>
                
                <p className="mb-6 text-sm text-gray-600">500+ employees</p>
                
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>SSO integration</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>API access</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>SLA guarantees</span>
                </li>
                </ul>
                
                <a href="/contact-sales" className="block rounded-lg bg-navy py-3 text-center font-semibold text-white transition hover:bg-navy-dark">
                Contact Sales
                </a>
            </div>
            </div>
        </div>
    </section>

      {/* Final CTA Section */}
      <section id="demo" className="w-full bg-navy py-20 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold">Ready to Give Your Team a Voice?</h2>
          <p className="font-inter mt-4 text-lg text-gray-300">
            Join the companies building cultures where every voice matters. Start your free trial today—no credit card required.
          </p>
          <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="#pricing" className="rounded-md bg-coral px-8 py-4 text-lg font-bold text-white hover:bg-opacity-80">
              Start 14-Day Free Trial
            </a>
            <a href="#contact" className="rounded-md border-2 border-teal px-8 py-4 text-lg font-bold text-teal hover:bg-teal hover:text-white">
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full bg-gray-800 py-12 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="font-montserrat text-lg font-bold">Product</h4>
              <ul className="font-inter mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal">Features</a></li>
                <li><a href="#" className="hover:text-teal">Pricing</a></li>
                <li><a href="#" className="hover:text-teal">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat text-lg font-bold">Use Cases</h4>
              <ul className="font-inter mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal">Manufacturing</a></li>
                <li><a href="#" className="hover:text-teal">Tech Startups</a></li>
                <li><a href="#" className-="hover:text-teal">Healthcare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat text-lg font-bold">Company</h4>
              <ul className="font-inter mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal">About Us</a></li>
                <li><a href="#" className="hover:text-teal">Careers</a></li>
                <li><a href="#" className="hover:text-teal">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat text-lg font-bold">Contact</h4>
              <ul className="font-inter mt-4 space-y-2 text-sm">
                <li>hello@anchora.com</li>
                <li>sales@anchora.com</li>
                <li>support@anchora.com</li>
              </ul>
            </div>
          </div>
          <div className="font-inter mt-12 border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2024 Anchora. All rights reserved.</p>
            <p className="mt-2">Your Anchor in Every Storm ⚓</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
