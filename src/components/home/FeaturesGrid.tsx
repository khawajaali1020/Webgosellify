"use client";

const features = [
  { img: "/images/features/zero-work.webp", title: "Zero Work From You", description: "We handle everything — you just watch your business grow." },
  { img: "/images/features/personal-manager.webp", title: "Personal Manager", description: "Dedicated account manager as your single point of contact." },
  { img: "/images/features/safety.webp", title: "100% Safety", description: "All marketplace guidelines followed to keep accounts healthy." },
  { img: "/images/features/calculation.webp", title: "Accurate Calculation", description: "Transparent profit calculations with detailed reporting." },
  { img: "/images/features/research.webp", title: "Product Research", description: "High-demand, low-competition products for maximum ROI." },
  { img: "/images/features/inventory.webp", title: "Inventory Management", description: "Optimal stock levels to minimize storage costs." },
  { img: "/images/features/marketing.webp", title: "Marketing & Promote", description: "Strategic promotion to boost visibility and sales volume." },
  { img: "/images/features/fulfillment.webp", title: "Order Fulfillment", description: "Fast, reliable processing from our US-based warehouses." },
  { img: "/images/features/scalability.webp", title: "Scalability", description: "Systems designed to grow as your business scales." },
  { img: "/images/features/return.webp", title: "Return Handling", description: "Professional return management for high satisfaction scores." },
  { img: "/images/features/support.webp", title: "Customer Support", description: "24/7 customer service to maintain excellent buyer experience." },
  { img: "/images/features/account-health.webp", title: "Account Health", description: "Continuous monitoring of health metrics and performance." },
];

export default function FeaturesGrid() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">What You Get</span>
          <h2 className="typo-h2">Everything Included In Our Management Service</h2>
          <p className="typo-subtext">
            No matter where you are on your e-commerce journey — whether you&apos;re just starting out
            or looking to scale — our team provides end-to-end support covering every aspect of your online store.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="features-grid"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "22px 16px",
                textAlign: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "default",
              }}
              className="feature-card"
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  style={{ width: "56px", height: "56px", objectFit: "contain" }}
                />
              </div>
              <h3 className="typo-h3" style={{ marginBottom: "4px" }}>
                {feature.title}
              </h3>
              <p className="typo-body" style={{ fontSize: "14px" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
          .feature-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          @media (max-width: 1023px) {
            .features-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 639px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 10px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
