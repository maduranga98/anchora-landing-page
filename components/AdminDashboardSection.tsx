import Image from "next/image";

const adminModules = [
  { label: "Moderation", desc: "Review & manage reported content" },
  { label: "HR Dashboard", desc: "Harassment & compliance reports" },
  { label: "Analytics", desc: "Insights, trends, engagement" },
  { label: "Audit Log", desc: "Full compliance history" },
  { label: "Member Management", desc: "Team roles & permissions" },
  { label: "Legal Requests", desc: "Court-ordered disclosures" },
];

export default function AdminDashboardSection() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Admin Dashboard
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              One dashboard. Complete oversight.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              HR admins see everything. Employees stay anonymous. Every report
              tracked, assigned, and documented automatically. Your entire
              workplace compliance operation in one place.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {adminModules.map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-4"
                >
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — screenshot */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <span className="text-slate-400 text-xs font-mono ml-2">
                app.voxwel.com/dashboard
              </span>
            </div>
            <Image
              src="/screenshots/admin-dashboard.avif"
              alt="VoxWel Admin Dashboard showing moderation, analytics, HR dashboard, and audit log modules"
              width={800}
              height={500}
              className="w-full"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                maxHeight: "500px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
