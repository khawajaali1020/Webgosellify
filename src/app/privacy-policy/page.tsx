import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Gosellify",
  description: "Gosellify Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Legal</span>
            <h1 className="typo-h1">Privacy Policy</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            At Gosellify, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Information We Collect</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            We collect information you provide directly to us, such as your name, email address, phone number, and business details when you contact us or sign up for our services.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>How We Use Your Information</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            We use the information we collect to provide, maintain, and improve our services, communicate with you, and process transactions.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Data Security</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Contact Us</h2>
          <p className="typo-body">
            If you have questions about this Privacy Policy, please contact us at support@Gosellify.com or call +1 307 205 5481.
          </p>
        </div>
      </section>
    </>
  );
}
