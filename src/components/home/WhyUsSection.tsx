import { FaCheckCircle, FaShieldAlt, FaRocket, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Complete A-Z Store Management",
    description:
      "From product research and listing optimization to order processing, fulfillment, shipping, returns, and customer support — we handle every aspect so you don't lift a finger.",
    bullets: [
      "Product research & listing optimization",
      "Order processing & fulfillment",
      "Customer support & return handling",
      "Account health monitoring & reporting",
    ],
  },
  {
    icon: FaRocket,
    title: "Risk-Free Growth Model",
    description:
      "Our performance-based model means you only pay when you see profit. We've helped 250+ clients scale with systems that consistently deliver 35-80% ROI.",
    bullets: [
      "Pay only from profit — zero upfront risk",
      "Proven 80% ROI track record across 55+ stores",
      "Dedicated team managing your store 24/7",
      "Scale without hiring or learning curves",
    ],
  },
  {
    icon: FaHeadset,
    title: "24/7 Dedicated Support Team",
    description:
      "Every client gets a personal account manager backed by a full operations team available around the clock — including weekends and holidays.",
    bullets: [
      "Personal account manager assigned to you",
      "Round-the-clock operations team",
      "Weekly performance reports & strategy calls",
      "Direct WhatsApp line for urgent matters",
    ],
  },
];

export default function WhyUsSection() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Why Choose Us</span>
          <h2 className="typo-h2">Why 250+ Clients Trust Gosellify With Their Stores</h2>
          <p className="typo-subtext">
            We&apos;re not just another VA agency — we&apos;re a full-service ecommerce management company
            with our own warehouses, proven systems, and a track record of generating $12M+ in revenue for our clients.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover"
              style={{
                borderRadius: "10px",
                padding: "24px",
                border: "1px solid rgba(0,0,0,0.06)",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(22,163,74,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <feature.icon style={{ fontSize: "22px", color: "var(--color-primary)" }} />
              </div>

              <h3 className="typo-h3" style={{ marginBottom: "8px" }}>
                {feature.title}
              </h3>
              <p className="typo-body" style={{ marginBottom: "12px" }}>
                {feature.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {feature.bullets.map((bullet) => (
                  <div key={bullet} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <FaCheckCircle style={{ fontSize: "12px", color: "var(--color-primary)", flexShrink: 0 }} />
                    <span className="typo-small" style={{ fontWeight: 500 }}>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
