const badges = [
  { icon: "🔒", text: "256-bit AES Encryption" },
  { icon: "✅", text: "GDPR Compliant" },
  { icon: "📋", text: "EU Whistleblowing Directive" },
  { icon: "🛡️", text: "100% Anonymous Reporting" },
  { icon: "⚡", text: "24-Hour Setup" },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-50 py-10 px-6">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider text-center mb-6">
        Built for organizations that take compliance seriously
      </p>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {badges.map((badge) => (
          <span
            key={badge.text}
            className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            {badge.icon} {badge.text}
          </span>
        ))}
      </div>
    </section>
  );
}
