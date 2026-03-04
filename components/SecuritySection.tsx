import Link from "next/link";

const securityItems = [
  {
    icon: "🔐",
    title: "AES-256 Encryption",
    desc: "Military-grade end-to-end encryption on every report. Unreadable in transit and at rest.",
  },
  {
    icon: "🇪🇺",
    title: "GDPR Compliant",
    desc: "Full compliance with EU General Data Protection Regulation. Data processing agreements available.",
  },
  {
    icon: "📋",
    title: "EU Whistleblowing Directive",
    desc: "Meets the requirements of EU Directive 2019/1937 for organizations with 50+ employees.",
  },
  {
    icon: "🛡️",
    title: "Zero-Knowledge Architecture",
    desc: "Anonymous submissions are architecturally untraceable. Even admins cannot identify reporters.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
            SECURITY &amp; COMPLIANCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The security and compliance your legal team will actually approve
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            VoxWel is built from the ground up for organizations that handle
            sensitive employee reports. Every technical decision prioritizes
            anonymity, data protection, and regulatory compliance.
          </p>
        </div>

        {/* 2×2 Security Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {securityItems.map((item) => (
            <div key={item.title} className="bg-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-slate-400 text-sm">
          Questions about security?{" "}
          <Link
            href="/gdpr"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            Read our full security documentation →
          </Link>
        </p>
      </div>
    </section>
  );
}
