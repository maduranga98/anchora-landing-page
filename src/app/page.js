
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
          <h1 className="font-montserrat text-5xl font-bold leading-tight text-navy md:text-6xl">
            Your Anchor in Every Storm
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold text-navy md:text-3xl">
            Give Every Employee a Voice That Creates Real Change
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            When work stress and personal challenges collide, Anchora keeps your team
            grounded, heard, and thriving. Anonymous feedback. Problem tracking.
            Real solutions. Starting at just <span className="font-semibold text-teal">$1 per employee per month</span>.
          </p>
          <div className="mt-10 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/signup"
              className="inline-block rounded-lg bg-coral px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-opacity-90 hover:shadow-xl"
            >
              Start Free Trial - No Credit Card Required
            </a>
            <a
              href="/demo"
              className="inline-block rounded-lg border-2 border-navy bg-white px-8 py-4 text-lg font-semibold text-navy transition hover:bg-gray-50"
            >
              Watch 2-Min Demo
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-navy">
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
      <section className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold text-navy md:text-5xl">
            The Silent Crisis in Your Workplace
          </h2>
          <p className="font-inter mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            67% of employees experience workplace stress but suffer in silence.
            <br />
            Problems go unreported. Ideas never surface. Your best people quietly quit.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition hover:shadow-2xl">
              <h3 className="font-montserrat text-2xl font-bold text-navy">The Cost</h3>
              <p className="font-inter mt-6 text-4xl font-bold text-coral">$359 Billion</p>
              <p className="font-inter mb-6 text-lg font-semibold text-navy">Lost Annually</p>
              <ul className="font-inter space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Unreported safety issues lead to accidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Harassment goes unnoticed until lawsuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Innovation dies in silence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Top talent leaves without warning</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition hover:shadow-2xl">
              <h3 className="font-montserrat text-2xl font-bold text-navy">The Barrier</h3>
              <p className="font-inter mt-6 text-4xl font-bold text-coral">Employees Fear</p>
              <p className="font-inter mb-6 text-lg font-semibold text-navy">Speaking Up</p>
              <ul className="font-inter space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>71% worry about retaliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>No clear feedback channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Belief that nothing will change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Anonymous options not trusted</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition hover:shadow-2xl">
              <h3 className="font-montserrat text-2xl font-bold text-navy">The Impact</h3>
              <p className="font-inter mt-6 text-4xl font-bold text-coral">Your Team</p>
              <p className="font-inter mb-6 text-lg font-semibold text-navy">Drifts Apart</p>
              <ul className="font-inter space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Engagement scores drop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Turnover rates spike</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Productivity suffers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Culture deteriorates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section id="features" className="w-full bg-gradient-to-b from-cloud to-white py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold leading-tight text-navy md:text-5xl">
            Anchora Gives Every Employee a Safe Voice—
            <br />
            And Every Problem a Path to Resolution
          </h2>
          <div className="mt-16 grid gap-16 md:grid-cols-3">
            {/* Step 1: Share Safely */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-600 shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">Step 1: Share Safely</h3>
              <p className="font-inter mt-2 text-lg font-semibold text-teal">Anonymous or Named—Employee's Choice</p>
              <p className="font-inter mt-4 leading-relaxed text-gray-600">
                Employees post ideas, report problems, or start discussions. They control their privacy. No fear. No barriers. Just honest communication.
              </p>
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="font-inter mb-4 text-sm font-semibold text-navy">Features:</p>
                <ul className="space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>True anonymity with encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mobile-first design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Post in 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Attach photos/documents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Track Everything */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-600 shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">Step 2: Track Everything</h3>
              <p className="font-inter mt-2 text-lg font-semibold text-teal">From Open to Resolved—Nothing Falls Through Cracks</p>
              <p className="font-inter mt-4 leading-relaxed text-gray-600">
                Every post gets tracked through a clear workflow. Admins assign owners, set priorities, and update status. Total transparency. Zero lost voices.
              </p>
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="font-inter mb-4 text-sm font-semibold text-navy">Workflow:</p>
                <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-gray-600">
                  <span className="rounded bg-coral px-2 py-1 text-white">Open</span>
                  <span>→</span>
                  <span className="rounded bg-gray-400 px-2 py-1 text-white">Acknowledged</span>
                  <span>→</span>
                  <span className="rounded bg-teal px-2 py-1 text-white">In Progress</span>
                  <span>→</span>
                  <span className="rounded bg-navy px-2 py-1 text-white">Resolved</span>
                </div>
                <p className="font-inter mb-3 text-sm font-semibold text-navy">Admin Powers:</p>
                <ul className="space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Set priority (Critical to Low)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Assign to teams/individuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add due dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Comment publicly or privately</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: See Real Action */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-600 shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">Step 3: See Real Action</h3>
              <p className="font-inter mt-2 text-lg font-semibold text-teal">Voices Create Change—Employees See Results</p>
              <p className="font-inter mt-4 leading-relaxed text-gray-600">
                When problems get solved, everyone sees it. When ideas get implemented, creators get recognized. Culture transforms. Trust builds. Teams thrive.
              </p>
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="font-inter mb-4 text-sm font-semibold text-navy">Impact Tracking:</p>
                <ul className="space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Resolution time metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Employee satisfaction scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Department analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trend identification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-5xl">
            Everything You Need to Build a Culture That Listens
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Feature 1: Anonymous & Named Posting */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Anonymous & Named Posting
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">True Psychological Safety</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Employees choose: anonymous for sensitive issues, named for visibility. AES encryption protects identities. Only admins with permission can decrypt.
              </p>
            </div>

            {/* Feature 2: Smart Problem Tracking */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Smart Problem Tracking
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Open → Acknowledged → Resolved</p>
              <p className="font-inter leading-relaxed text-gray-600">
                7-state workflow ensures nothing gets forgotten. Every problem has an owner, priority, and due date. Real-time status updates keep everyone informed.
              </p>
            </div>

            {/* Feature 3: Three Dedicated Feeds */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Three Dedicated Feeds
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Problems • Creative Ideas • Discussions</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Organized channels keep conversations focused. Problem reports get urgent attention. Creative ideas spark innovation. Discussions build community.
              </p>
            </div>

            {/* Feature 4: Department Assignment */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Department Assignment
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Right Problem, Right Team</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Route issues to the teams that can solve them. HR handles harassment. IT fixes tech problems. Facilities addresses safety concerns.
              </p>
            </div>

            {/* Feature 5: Real-Time Analytics */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Real-Time Analytics
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Data-Driven Culture Insights</p>
              <p className="font-inter leading-relaxed text-gray-600">
                See which departments need support. Track resolution times. Measure employee satisfaction. Identify trends before they become crises.
              </p>
            </div>

            {/* Feature 6: Mobile-First Design */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Mobile-First Design
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Post from Anywhere, Anytime</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Frontline workers don't sit at desks. Anchora works beautifully on phones. Quick posts. Easy reading. Zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full bg-gradient-to-b from-cloud to-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-5xl">
            Why Companies Choose Anchora
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* For HR & Leadership */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h3 className="font-montserrat mb-6 text-3xl font-bold text-teal">
                For HR & Leadership
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Reduce Turnover by 40%
                  </h4>
                  <p className="font-inter text-gray-600">
                    Catch dissatisfaction before it becomes resignation. Exit interviews become unnecessary when you listen continuously.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Prevent Legal Issues
                  </h4>
                  <p className="font-inter text-gray-600">
                    Documented trail of reported issues protects your company. Harassment, safety violations, and discrimination surface early.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Data-Driven Decisions
                  </h4>
                  <p className="font-inter text-gray-600">
                    Stop guessing what employees need. Real insights from real people guide your people strategy.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Faster Problem Resolution
                  </h4>
                  <p className="font-inter text-gray-600">
                    Average time from problem to solution drops 60%. Issues get assigned, tracked, and solved systematically.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Culture That Attracts Talent
                  </h4>
                  <p className="font-inter text-gray-600">
                    Modern candidates research company culture. Show them you listen. Show them voices matter.
                  </p>
                </div>
              </div>
            </div>

            {/* For Employees */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h3 className="font-montserrat mb-6 text-3xl font-bold text-coral">
                For Employees
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Safe Space to Speak
                  </h4>
                  <p className="font-inter text-gray-600">
                    No fear of retaliation. Anonymous when needed. Your voice protected. Your concerns heard.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    See Your Impact
                  </h4>
                  <p className="font-inter text-gray-600">
                    Watch your feedback turn into real change. Problems you report get solved. Ideas you share get implemented.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Stay Connected
                  </h4>
                  <p className="font-inter text-gray-600">
                    Know what's happening across the company. See how leadership responds. Feel part of something bigger.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Recognition for Ideas
                  </h4>
                  <p className="font-inter text-gray-600">
                    When your suggestion saves money or improves processes, you get credit. Visibility when you want it.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Track Your Contributions
                  </h4>
                  <p className="font-inter text-gray-600">
                    Personal dashboard shows your posts, their status, and their impact. Quantify your value to the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-5xl">
            How Teams Use Anchora
          </h2>
          <div className="mt-16 space-y-6">
            {/* Manufacturing & Warehouses */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Manufacturing & Warehouses</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Safety First, Voices Always
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Frontline workers report hazards immediately. Mobile app means quick photos and posts from the factory floor. Safety issues get resolved before accidents happen.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Photo attachments, urgent priority flagging</span>
                </p>
              </div>
            </details>

            {/* Tech Startups */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Tech Startups</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Move Fast Without Breaking Culture
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Rapid growth shouldn't mean lost voices. Anchora scales with you. From 10 to 1,000 employees, every person matters.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Department scaling, trend analytics</span>
                </p>
              </div>
            </details>

            {/* Healthcare */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Healthcare</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Staff Wellbeing = Patient Care
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Burned-out nurses can't give their best. Anonymous feedback about scheduling, workload, and support needs helps hospitals adjust before staff breaks.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Anonymous posting, mental health support</span>
                </p>
              </div>
            </details>

            {/* Retail & Hospitality */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Retail & Hospitality</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Frontline Feedback, Instant Action
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Cashiers see customer complaints first. Servers notice operational issues. Floor staff knows what works and what doesn't. Capture that knowledge.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Mobile-first, quick posting</span>
                </p>
              </div>
            </details>

            {/* Remote Teams */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Remote Teams</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Stay Connected Across Time Zones
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Async communication. Global voices. Cultural differences respected. Anchora keeps distributed teams aligned and heard.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Async updates, time-zone friendly</span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing w-full bg-gradient-to-b from-cloud to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <h2 className="font-montserrat mb-4 text-center text-4xl font-bold text-navy md:text-5xl">
            Simple, Transparent Pricing
            </h2>
            <p className="font-inter mb-12 text-center text-lg text-gray-600">
            No hidden fees. No surprises. Just honest pricing.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-teal">
                <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">Starter</h3>
                <p className="font-inter mb-6 text-gray-600">Perfect for Small Teams</p>

                <div className="mb-6">
                <span className="text-5xl font-bold text-navy">$0</span>
                <span className="text-gray-600">/month</span>
                </div>

                <p className="font-inter mb-6 text-sm text-gray-600">Up to 10 employees</p>

                <p className="font-inter mb-4 text-sm font-semibold text-navy">Features:</p>
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">All core features</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">3 dedicated feeds</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Anonymous posting</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Mobile app access</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Email support</span>
                </li>
                </ul>

                <a href="/signup?plan=starter" className="font-montserrat block rounded-lg bg-gray-100 py-3 text-center font-semibold text-navy transition hover:bg-gray-200">
                Start Free Forever
                </a>
            </div>

            {/* Professional Plan - MOST POPULAR */}
            <div className="relative transform rounded-xl border-2 border-teal bg-white p-8 shadow-xl md:scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="font-montserrat rounded-full bg-coral px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                </span>
                </div>

                <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">Professional</h3>
                <p className="font-inter mb-6 text-gray-600">Best for Growing Companies</p>

                <div className="mb-6">
                <span className="text-5xl font-bold text-teal">$1</span>
                <span className="text-gray-600">/employee/month</span>
                </div>

                <p className="font-inter mb-6 text-sm text-gray-600">Billed annually ($12/employee/year)<br/>Minimum 11 employees</p>

                <p className="font-inter mb-4 text-sm font-semibold text-navy">Everything in Starter, plus:</p>
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Advanced problem tracking</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Department assignment</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Priority management</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Due date tracking</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Admin comments</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Activity timeline</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Custom branding</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Priority support</span>
                </li>
                </ul>

                <a href="/signup?plan=professional" className="font-montserrat block rounded-lg bg-teal py-3 text-center font-semibold text-white shadow-lg transition hover:opacity-90">
                Start 14-Day Free Trial
                </a>
            </div>

            {/* Enterprise Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-navy">
                <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">Enterprise</h3>
                <p className="font-inter mb-6 text-gray-600">Custom Solutions for Large Teams</p>

                <div className="mb-6">
                <span className="text-5xl font-bold text-navy">Custom</span>
                <span className="text-gray-600"> Pricing</span>
                </div>

                <p className="font-inter mb-6 text-sm text-gray-600">500+ employees</p>

                <p className="font-inter mb-4 text-sm font-semibold text-navy">Everything in Professional, plus:</p>
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">SSO integration</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Custom workflows</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">API access</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">White-labeling</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">SLA guarantees</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">On-premise options</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Advanced security</span>
                </li>
                </ul>

                <a href="/contact-sales" className="font-montserrat block rounded-lg bg-navy py-3 text-center font-semibold text-white transition hover:opacity-90">
                Contact Sales
                </a>
            </div>
            </div>

            {/* Pricing FAQs */}
            <div className="mt-20">
              <h3 className="font-montserrat mb-8 text-center text-3xl font-bold text-navy">
                Frequently Asked Questions
              </h3>
              <div className="mx-auto max-w-3xl space-y-6">
                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>What happens after the free trial?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    No credit card required for trial. After 14 days, choose a plan or stay on our free Starter plan (up to 10 employees).
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>Can I cancel anytime?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Yes. Cancel with one click. No questions asked. Get a prorated refund if annual.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>What counts as an "employee"?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Any active user who can post or comment. Admins count. View-only accounts don't.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>Do you offer discounts for nonprofits?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Yes! 50% off for registered nonprofits and educational institutions. Contact us.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>Is my data secure?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Bank-level encryption. Anonymous posts use AES-256. SOC 2 Type II certified. GDPR compliant.
                  </p>
                </details>
              </div>
            </div>
        </div>
    </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-5xl">
            See Anchora in Action
          </h2>
          <p className="font-inter mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600">
            From posting feedback to tracking resolutions—see how easy it is to give every employee a voice
          </p>

          <div className="mt-16 space-y-12">
            {/* Screenshot 1: Employee View - Create Post */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Employee View - Create Post
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Post in 30 seconds. Choose anonymous or named. Select category. Add details. Done.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Choose from 3 dedicated feeds</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Toggle anonymous mode with one click</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Attach photos and documents</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Create Post Interface</p>
                </div>
              </div>
            </div>

            {/* Screenshot 2: Admin Dashboard */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Admin Dashboard</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Admin Dashboard
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    See all posts. Filter by status, priority, or department. Never miss an issue.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time feed of all submissions</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Filter and search capabilities</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Quick action buttons for assignments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Screenshot 3: Problem Tracking */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Problem Tracking
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Update status. Assign owner. Set due date. Add comments. Track to resolution.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>7-state workflow management</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Assign to departments and individuals</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Priority and due date tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Problem Tracking Interface</p>
                </div>
              </div>
            </div>

            {/* Screenshot 4: Analytics Dashboard */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Analytics Dashboard</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Analytics Dashboard
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Data-driven insights. Resolution times. Employee satisfaction. Department trends.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Visual charts and graphs</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Track trends over time</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Department and team breakdowns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Screenshot 5: Mobile View */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">5</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Mobile View
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Works beautifully on any device. Post from anywhere. Stay connected.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Optimized for iOS and Android</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Quick photo attachments from camera</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Push notifications for updates</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Mobile App Interface</p>
                </div>
              </div>
            </div>

            {/* Screenshot 6: Activity Timeline */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Activity Timeline</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">6</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Activity Timeline
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Complete audit trail. Every action logged. Full transparency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Chronological history of all actions</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>See who did what and when</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Documentation for compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/signup" className="font-montserrat inline-block rounded-lg bg-teal px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:opacity-90">
              See It For Yourself - Start Free Trial
            </a>
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
