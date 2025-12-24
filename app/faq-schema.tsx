// FAQ Schema Component for Homepage
// This provides structured FAQ data for search engines and AI chatbots

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is anonymous employee reporting software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anonymous employee reporting software allows employees to report workplace harassment, fraud, safety violations, and compliance issues without revealing their identity. VoxWel uses military-grade AES-256 encryption to ensure complete anonymity, protecting reporters from retaliation while giving companies early warning of serious workplace problems before they escalate into lawsuits or regulatory violations.",
        },
      },
      {
        "@type": "Question",
        name: "Is VoxWel EEOC compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, VoxWel is fully EEOC compliant and meets Title VII requirements for workplace harassment reporting. The platform maintains complete audit trails, encrypted evidence packages, and immutable documentation that demonstrates your organization took employee complaints seriously—essential protection during EEOC investigations and legal proceedings.",
        },
      },
      {
        "@type": "Question",
        name: "How much does anonymous workplace reporting software cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel costs $1 per employee per month with no setup fees or hidden costs. For a 100-employee company, that's just $100/month or $1,200/year—significantly less than the $75,000-$300,000 average cost of a single harassment lawsuit. One prevented incident pays for 60+ years of VoxWel.",
        },
      },
      {
        "@type": "Question",
        name: "Can administrators identify anonymous reporters in VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. VoxWel uses military-grade AES-256 encryption and zero-knowledge architecture. Even system administrators cannot identify anonymous reporters. This complete anonymity protection encourages employees to report serious issues without fear of retaliation, creating a true speak-up culture in your organization.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between a whistleblower hotline and employee feedback software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional whistleblower hotlines are single-purpose phone systems for reporting serious violations. VoxWel combines anonymous reporting with employee feedback, team communication, and recognition—all in one platform. This continuous voice approach catches issues earlier than periodic surveys or one-way hotlines, while costing 80% less than traditional ethics hotlines like NAVEX or EthicsPoint.",
        },
      },
      {
        "@type": "Question",
        name: "Does VoxWel comply with the EU Whistleblower Directive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. VoxWel fully complies with EU Whistleblower Directive 2019/1937, which requires all companies with 50+ employees operating in the EU to maintain internal reporting channels. VoxWel provides the mandatory secure reporting channels, case management, and protection against retaliation that the directive requires.",
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
