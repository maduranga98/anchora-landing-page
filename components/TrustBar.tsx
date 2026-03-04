const badges = [
  { icon: "🔒", text: "256-bit AES Encryption" },
  { icon: "✅", text: "GDPR Compliant" },
  { icon: "📋", text: "EU Whistleblowing Directive" },
  { icon: "🛡️", text: "100% Anonymous Reporting" },
  { icon: "⚡", text: "24-Hour Setup" },
  { icon: "🏛️", text: "Audit Trail Included" },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-900 py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Built for organizations that take compliance seriously
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm font-medium text-slate-300"
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
