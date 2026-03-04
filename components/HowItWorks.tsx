const steps = [
  {
    number: "1",
    title: "Deploy Instantly",
    body: "Send your team a QR code or link. No app download required. No IT project. No lengthy onboarding. Your anonymous reporting channel is live today.",
  },
  {
    number: "2",
    title: "Employees Report Safely",
    body: "Harassment, fraud, safety violations, discrimination — employees submit reports with complete anonymity. Military-grade AES-256 encryption means no one can trace the source, not even your IT department.",
  },
  {
    number: "3",
    title: "You Act Before It Escalates",
    body: "Receive instant alerts. Manage every report through a 7-stage documented workflow. Respond confidentially. Build a compliance audit trail automatically. Prevent the crisis before it reaches a courtroom.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            From zero to protected — in 24 hours
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-8 h-0.5 bg-indigo-100"
            style={{ left: "calc(16.67% + 2rem)", right: "calc(16.67% + 2rem)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-start md:items-center"
              >
                {/* Numbered circle */}
                <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 mb-6 shadow-lg">
                  {step.number}
                </div>
                <div className="md:text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
