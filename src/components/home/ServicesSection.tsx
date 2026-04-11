import Link from "next/link";


const services = [
  {
    img: "/images/services/arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "2-Step Dropshipping",
    description:
      "No upfront inventory required. We source products from retail stores and resell on Amazon for profit. Low-risk, high-reward — perfect for beginners.",
    href: "/services/amazon-arbitrage",
    tag: "Most Popular",
  },
  {
    img: "/images/services/wholesale-icon.webp",
    title: "Amazon Wholesale",
    subtitle: "",
    description:
      "Official branded products from authorized distributors. We handle research, supplier negotiations, inventory management, and FBA prep. Consistent margins.",
    href: "/services/amazon-wholesale",
    tag: "",
  },
  {
    img: "/images/services/walmart-icon.png",
    title: "Walmart Management",
    subtitle: "",
    description:
      "Complete Walmart store management — product research, listings, order fulfillment, pricing optimization, and daily operations for peak performance.",
    href: "/services/walmart-management",
    tag: "",
  },
];

export default function ServicesSection() {
  return (
    <section style={{ paddingTop: "80px", paddingBottom: "55px", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">What We Offer</span>
          <h2 className="typo-h2">Our Most Demanded Services</h2>
          <p className="typo-subtext">
            Whether you&apos;re a first-time seller or scaling an existing business, we offer
            fully managed ecommerce solutions tailored to your marketplace and business model.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "24px",
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {service.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    backgroundColor: "var(--color-accent)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "3px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {service.tag}
                </span>
              )}

              <div
                style={{
                  marginBottom: "14px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(40,167,69,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>

              <h3 className="typo-h3" style={{ marginBottom: "2px" }}>
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="typo-small" style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: "8px" }}>
                  {service.subtitle}
                </p>
              )}

              <p className="typo-body" style={{ marginBottom: "16px", flex: 1 }}>
                {service.description}
              </p>

              <Link
                href={service.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  padding: "8px 18px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(40,167,69,0.08)",
                  border: "1px solid rgba(40,167,69,0.15)",
                  transition: "all 0.2s",
                }}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link href="/services" className="btn-accent" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
            Browse All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
