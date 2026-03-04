const stats = [
  {
    number: "83%",
    colorClass: "text-indigo-600",
    label: "of workplace stress goes unreported due to fear of retaliation",
    source: "— American Institute of Stress",
  },
  {
    number: "$75K+",
    colorClass: "text-amber-600",
    label: "average minimum cost of a single workplace harassment lawsuit",
    source: "— EEOC / SHRM",
  },
  {
    number: "5×",
    colorClass: "text-emerald-600",
    label: "more issues reported when employees have an anonymous reporting channel",
    source: "— Ethics & Compliance Initiative",
  },
  {
    number: "67",
    colorClass: "text-rose-600",
    label: "average days before a workplace issue surfaces without a reporting system",
    source: "— ECI Global Business Ethics Survey",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            THE HIDDEN COST OF SILENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-3xl">
            Your employees see the problems. But 83% of them are too afraid to
            say anything.
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl">
            Fear of retaliation. Fear of being ignored. Fear of losing their
            job. By the time workplace issues surface through official channels,
            the damage is already done — legally, financially, and culturally.
          </p>
        </div>

        {/* Stats grid — 2×2 on small, 4 cols on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.number}
              className={`fade-in-up delay-${(i + 1) * 100} bg-slate-50 rounded-2xl p-8 text-center`}
            >
              <div
                className={`text-5xl font-extrabold ${stat.colorClass}`}
              >
                {stat.number}
              </div>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                {stat.label}
              </p>
              <p className="mt-2 text-slate-400 text-xs">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="bg-indigo-600 text-white rounded-2xl p-8 max-w-3xl mx-auto mt-12 text-center">
          <p className="text-lg font-medium leading-relaxed">
            &ldquo;Smart companies don&apos;t wait for problems to escalate.
            They create safe channels for employees to speak up early —
            protecting people, culture, and the bottom line.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
