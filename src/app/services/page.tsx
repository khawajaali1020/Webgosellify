import Link from "next/link";

import CTASection from "@/components/home/CTASection";

const services = [
  {
    img: "/images/services/arbitrage-icon.webp",
    title: "Amazon Arbitrage",
    subtitle: "as known 2-Step Dropshipping",
    description:
      "Most popular business model. In this model, no upfront inventory is required. We source products from retail stores and resell them on Amazon for profit. Our team handles everything from product research, sourcing, listing optimization, and order fulfillment. This is a low-risk, high-reward model perfect for beginners.",
    href: "/services/amazon-arbitrage",
  },
  {
    img: "/images/services/wholesale-icon.webp",
    title: "Amazon Wholesale",
    subtitle: "",
    description:
      "Upfront inventory is required. With wholesale business model, all products will be official authentic branded products purchased directly from authorized distributors. We handle product research, supplier negotiations, inventory management, and FBA prep. This model offers consistent profit margins and scalable growth.",
    href: "/services/amazon-wholesale",
  },
  {
    img: "/images/services/walmart-icon.png",
    title: "Walmart Management",
    subtitle: "",
    description:
      "Our Walmart Virtual Assistant can help you with product research, listings, optimizations, order fulfillment, and complete store management. We handle everything from store setup to daily operations, ensuring your Walmart store performs at its best with optimal pricing and inventory strategies.",
    href: "/services/walmart-management",
  },
  {
    img: "/images/services/hero/shopify-hero.svg",
    title: "Shopify Development",
    subtitle: "Store Development & Management",
    description:
      "Custom Shopify store development and management services. We build, design, and optimize your Shopify store for maximum conversions and sales. From custom theme development to app integration, we handle every aspect of your Shopify store.",
    href: "/services/shopify-development",
  },
  {
    img: "/images/warehouse/warehouse-map.webp",
    title: "3PL Warehouse",
    subtitle: "Operating in NY, FL, CT",
    description:
      "Operating dedicated warehouses in New York, Florida, and Connecticut. Web-based software, flat-rate pricing, fast processing, and shipping-ready boxes for all your fulfillment needs. FBA prep, WFS prep, storage, 2-step dropshipping support.",
    href: "/services/3pl-warehouse",
  },
  {
    img: "/images/services/hero/shipping-hero.jpg",
    title: "Flat Rate Shipping",
    subtitle: "Cheap USPS & UPS Labels",
    description:
      "Discounted flat-rate shipping services for eCommerce businesses. USPS Priority Mail for $4 and UPS Next Day Air for $5. No box size limit. Save on shipping costs with our partnerships with major carriers across the United States.",
    href: "/services/flat-rate-shipping",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main">
          <div className="flex flex-col items-center text-center">
            <span className="typo-label" style={{ marginBottom: "14px" }}>
              What We Offer
            </span>

            <h1 className="typo-h1" style={{ marginBottom: "10px" }}>
              All Services
            </h1>

            <p
              className="typo-subtext"
              style={{ maxWidth: "520px" }}
            >
              Comprehensive eCommerce management services to help you start, grow
              and scale your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ backgroundColor: "#fff", padding: "55px 0" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Service icon */}
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-contain"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                {/* Title */}
                <h3 className="typo-h3" style={{ marginBottom: "4px" }}>
                  {service.title}
                </h3>

                {/* Subtitle */}
                {service.subtitle && (
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-primary)",
                      marginBottom: "10px",
                      fontWeight: 500,
                    }}
                  >
                    {service.subtitle}
                  </p>
                )}

                {/* Description */}
                <p
                  className="typo-body"
                  style={{
                    marginBottom: "16px",
                    marginTop: service.subtitle ? "0" : "10px",
                  }}
                >
                  {service.description}
                </p>

                {/* Read More link */}
                <Link
                  href={service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    textDecoration: "none",
                  }}
                >
                  Read More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
