export default function SEOIntro() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VoxWel is a comprehensive{" "}
          <strong>anonymous employee complaint management software</strong>{" "}
          designed to prevent workplace harassment, fraud, safety violations,
          and compliance issues. Our{" "}
          <strong>confidential reporting platform</strong> provides
          military-grade encryption, ensuring complete anonymity for employees
          reporting harassment, discrimination, or ethics violations.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Unlike traditional <strong>employee feedback tools</strong> and{" "}
          <strong>ethics hotlines</strong>, VoxWel combines anonymous reporting
          with real-time analytics and workflow management,all at just $1 per
          employee per month. EEOC compliant, SOX compliant, and aligned with
          the EU Whistleblower Directive 2019/1937.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong className="text-gray-900">
                Anonymous harassment reporting
              </strong>
              <span className="text-gray-600"> with zero retaliation risk</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong className="text-gray-900">
                Whistleblower protection
              </strong>
              <span className="text-gray-600">
                {" "}
                through military-grade encryption
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong className="text-gray-900">EEOC & SOX compliance</strong>
              <span className="text-gray-600"> with complete audit trails</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong className="text-gray-900">
                Crisis prevention system
              </strong>
              <span className="text-gray-600">
                {" "}
                catches issues before lawsuits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
