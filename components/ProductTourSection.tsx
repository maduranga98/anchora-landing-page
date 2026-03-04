import Image from "next/image";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);

const BrowserChrome = ({ url }: { url: string }) => (
  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
    </div>
    <span className="text-slate-400 text-xs font-mono ml-2">{url}</span>
  </div>
);

export default function ProductTourSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
          The Platform
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          See exactly what your HR team gets
        </h2>
        <p className="text-slate-600 text-lg mb-20 max-w-2xl">
          Real product. Real screenshots. No wireframes, no demos that don&apos;t exist yet.
        </p>

        {/* Row 1 — Problems Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-red-100">
              🛡️ Core Feature
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Anonymous reports your team will actually use
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Employees submit reports via QR code or web link. No account needed.
              Fully encrypted. Completely untraceable — even by your IT department.
              Each report is auto-tagged with category, priority, and status.
            </p>
            <ul className="space-y-3">
              {[
                "Zero-knowledge encryption — source is architecturally untraceable",
                "Auto-priority tagging: Critical, High, Medium, Low",
                "7-stage workflow from submission to resolution",
                "File attachments: images, documents, videos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <BrowserChrome url="app.voxwel.com/problems" />
              <Image
                src="/screenshots/problems-wall.png"
                alt="VoxWel Problems Feed showing anonymous employee reports with priority badges and status tracking"
                width={800}
                height={420}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top", maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>

        {/* Row 2 — Workflow Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <BrowserChrome url="app.voxwel.com/admin/report" />
              <Image
                src="/screenshots/workflow-management.png"
                alt="VoxWel admin workflow showing status controls, priority settings, and audit documentation"
                width={800}
                height={420}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top", maxHeight: "420px" }}
              />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-indigo-100">
              📋 Compliance Ready
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Full admin control without breaking anonymity
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Assign reports to departments, set priority levels, add due dates,
              and respond confidentially. Every action is timestamped and logged
              automatically — building your compliance audit trail without extra work.
            </p>
            <ul className="space-y-3">
              {[
                "Assign to departments (anonymous posts only show department, not name)",
                "Status workflow: Open → Acknowledged → In Progress → Resolved",
                "Priority levels: Critical, High, Medium, Low with visual indicators",
                "Admin comments visible to reporter while maintaining anonymity",
                "Automatic audit log for every action taken",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 3 — Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-emerald-100">
              📊 Analytics
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Analytics that prove compliance is working
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Resolution rates, response times, engagement scores, post activity
              trends by department. Everything your board, your auditor, or your
              legal team might ask for — built in and always up to date.
            </p>
            <ul className="space-y-3">
              {[
                "Employee Happiness Indicator — composite wellbeing score",
                "Resolution rate and average response time tracking",
                "Post activity trends — 7-day and 30-day views",
                "Posts by type, status, and priority breakdown",
                "Top contributors and engagement metrics",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <BrowserChrome url="app.voxwel.com/analytics" />
              <Image
                src="/screenshots/dashboard-analytics.png"
                alt="VoxWel analytics dashboard showing post trends, resolution rates, and engagement metrics"
                width={800}
                height={420}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top", maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
