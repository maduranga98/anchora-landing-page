const mainCards = [
  {
    icon: "🛡️",
    title: "Anonymous Reports",
    body: "A fully encrypted channel where employees report harassment, fraud, and safety violations with complete anonymity. Every submission is end-to-end encrypted. No trace. No fear.",
    tag: "Core Feature",
    tagClass: "bg-indigo-50 text-indigo-700",
  },
  {
    icon: "📊",
    title: "Team Pulse",
    body: "Monitor workplace sentiment in real time. Surface morale issues and communication breakdowns before they become formal complaints or resignation letters.",
    tag: "Engagement",
    tagClass: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: "⭐",
    title: "Recognition Feed",
    body: "Celebrate team wins, milestones, and achievements publicly. Balance your reporting culture with a culture of genuine appreciation.",
    tag: "Culture",
    tagClass: "bg-amber-50 text-amber-700",
  },
];

const featureTiles = [
  {
    icon: "🔒",
    title: "Military Encryption",
    desc: "AES-256 end-to-end. No one can trace a report, not even your IT team.",
  },
  {
    icon: "📋",
    title: "7-Stage Workflow",
    desc: "Every report moves through a documented process. Your audit trail builds itself.",
  },
  {
    icon: "📱",
    title: "QR Code Onboarding",
    desc: "Print. Post. Done. Employees scan and report in 60 seconds, no account needed.",
  },
  {
    icon: "📈",
    title: "Real-Time Analytics",
    desc: "See what's happening across departments before it surfaces in an exit interview.",
  },
  {
    icon: "⚡",
    title: "Priority Escalation",
    desc: "Critical reports surface immediately. Never miss an urgent issue.",
  },
  {
    icon: "👥",
    title: "Role-Based Access",
    desc: "Control exactly who sees what. Compliance, HR, and legal have separate views.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            THE PLATFORM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl">
            Everything your HR and compliance team needs in one platform
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed">
            Anonymous employee reporting software built for organizations that
            need real anonymity, real compliance, and real results.
          </p>
        </div>

        {/* 3 Main Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {mainCards.map((card, i) => (
            <div
              key={card.title}
              className={`fade-in-up delay-${(i + 1) * 100} bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                {card.body}
              </p>
              <span
                className={`self-start inline-block px-3 py-1 rounded-full text-xs font-semibold ${card.tagClass}`}
              >
                {card.tag}
              </span>
            </div>
          ))}
        </div>

        {/* 6 Feature Tiles — 2×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featureTiles.map((tile, i) => (
            <div
              key={tile.title}
              className={`fade-in-up delay-${(i + 1) * 100} flex items-start gap-4 p-6 rounded-xl border border-slate-100`}
            >
              <span className="text-2xl shrink-0 mt-0.5">{tile.icon}</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{tile.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tile.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
