// FAQ Schema Component for Homepage
// This provides structured FAQ data for search engines and AI chatbots

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel is an anonymous employee reporting platform that helps companies prevent workplace disasters through secure, encrypted reporting of harassment, fraud, safety violations, and compliance issues. It provides military-grade encryption to protect reporter anonymity while giving organizations the tools to address problems before they escalate.",
        },
      },
      {
        "@type": "Question",
        name: "How much does VoxWel cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel costs just $1 per employee per month. We also offer a 14-day free trial with no credit card required, so you can try the platform risk-free before committing.",
        },
      },
      {
        "@type": "Question",
        name: "Is VoxWel really anonymous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, VoxWel provides complete anonymity through military-grade encryption and technical measures that prevent identification. Even system administrators cannot identify anonymous reporters. We strip all identifying metadata, process anonymous posts through separate systems, and maintain an immutable audit trail without user identification.",
        },
      },
      {
        "@type": "Question",
        name: "Is VoxWel GDPR compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, VoxWel is fully GDPR compliant with comprehensive data protection measures for EU and UK users. We implement appropriate technical and organizational measures to protect your information, including end-to-end encryption, access controls, and regular security audits.",
        },
      },
      {
        "@type": "Question",
        name: "What types of issues can be reported on VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employees can report a wide range of workplace concerns including harassment and discrimination, fraud and financial misconduct, safety violations, compliance issues, ethical concerns, and general workplace culture problems. The platform supports both anonymous and named reporting depending on the reporter's preference.",
        },
      },
      {
        "@type": "Question",
        name: "How does VoxWel protect whistleblowers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel protects whistleblowers through multiple layers of security: end-to-end encryption of all communications, automatic stripping of identifying metadata from anonymous posts, separate processing systems that prevent correlation with user accounts, and an immutable audit trail that maintains evidence without compromising anonymity. We also comply with international whistleblower protection laws.",
        },
      },
      {
        "@type": "Question",
        name: "Can administrators see who made an anonymous report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. When you use VoxWel's anonymous posting feature, we use technical measures to ensure that even system administrators and your organization's managers cannot identify you as the reporter. The anonymity is cryptographically guaranteed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel can be set up in minutes. After signing up, you'll receive an invitation link to share with your employees. The platform is cloud-based and requires no installation or complex configuration. Most organizations are fully operational within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Does VoxWel integrate with existing HR systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel is designed to work alongside your existing HR systems. While we offer standalone functionality, our platform can complement your current processes for handling workplace issues and compliance tracking. Contact our team to discuss specific integration needs.",
        },
      },
      {
        "@type": "Question",
        name: "What makes VoxWel different from traditional HR hotlines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike traditional HR hotlines that often require third-party intermediaries and phone calls, VoxWel provides instant, 24/7 digital access with guaranteed anonymity. Our platform offers real-time tracking, analytics, department-based organization, and file attachment capabilities that traditional hotlines can't match. Plus, at $1 per employee per month, it's significantly more affordable than traditional solutions.",
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
