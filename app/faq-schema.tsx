// FAQ Schema Component for Homepage
// This provides structured FAQ data for search engines and AI chatbots

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can VoxWel guarantee 100% anonymity for employees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel guarantees 100% anonymity through military-grade, end-to-end encryption and a strict, zero-knowledge protocol. Even system administrators cannot decrypt the identity of the user.",
        },
      },
      {
        "@type": "Question",
        name: "Can our company's IT department track who submitted a report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. VoxWel's platform is architected so that even your own company's administrators cannot access the underlying data to identify a user.",
        },
      },
      {
        "@type": "Question",
        name: "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. VoxWel is fully compliant with GDPR standards and the EU Whistleblowing Directive. Our complete audit trail provides documented proof.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between VoxWel and a traditional hotline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional hotlines lack anonymity and structure. VoxWel offers military-grade encryption, a 7-state workflow system, and an Early Warning System that prevents issues from escalating.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel can be set up and operational in under 24 hours. Our QR Onboarding system allows employees to access the platform instantly.",
        },
      },
      {
        "@type": "Question",
        name: "Why is VoxWel priced at only $1/employee/month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel is priced affordably to ensure every company can afford crisis prevention. Preventing a single lawsuit ($75K-$300K) justifies decades of VoxWel service.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
