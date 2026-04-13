import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Gosellify",
  description: "Gosellify Terms and Conditions",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Legal</span>
            <h1 className="typo-h1">Terms &amp; Conditions</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            Welcome to Gosellify. By using our website and services, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Services</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            Gosellify provides eCommerce management services including Amazon, Walmart, and Shopify store management, warehouse services, and shipping solutions.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Payment Terms</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            Payment terms are agreed upon during the initial consultation. All fees are due as specified in your service agreement.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Limitation of Liability</h2>
          <p className="typo-body" style={{ marginBottom: "24px" }}>
            Gosellify shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services.
          </p>

          <h2 className="typo-h3" style={{ marginBottom: "12px" }}>Contact</h2>
          <p className="typo-body">
            For questions about these terms, contact us at support@Gosellify.com or call +1 307 205 5481.
          </p>
        </div>
      </section>
    </>
  );
}
