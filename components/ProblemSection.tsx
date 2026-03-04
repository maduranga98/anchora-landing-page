const stats = [
  {
    number: "83%",
    label: "of workplace stress goes unreported due to fear of retaliation",
    source: "American Institute of Stress",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    number: "$75K+",
    label: "minimum cost of a single workplace harassment lawsuit",
    source: "EEOC / SHRM",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    number: "5×",
    label: "more issues reported when employees have an anonymous channel",
    source: "Ethics & Compliance Initiative",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    number: "67",
    label: "average days before a workplace issue surfaces without a reporting system",
    source: "ECI Global Business Ethics Survey",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
          The Hidden Cost of Silence
        </p>

        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-3xl">
          Your employees see the problems.
          But <span className="text-red-500">83%</span> are too afraid to say anything.
        </h2>

        <p className="text-slate-600 text-lg mb-16 max-w-2xl">
          Fear of retaliation. Fear of being ignored. Fear of losing their job.
          By the time issues surface through official channels, the damage is
          already done — legally, financially, and culturally.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.number}
              className={`fade-up fade-up-delay-${i + 1} ${stat.bg} border ${stat.border} rounded-2xl p-8 text-center`}
            >
              <div className={`text-5xl font-extrabold ${stat.color} mb-3`}>
                {stat.number}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                {stat.label}
              </p>
              <p className="text-slate-400 text-xs">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed text-slate-100">
            &ldquo;Smart companies don&apos;t wait for problems to escalate.
            They create safe channels for employees to speak up early —
            protecting people, culture, and the bottom line.&rdquo;
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              See How VoxWel Works →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
