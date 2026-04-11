import { FaCheckCircle } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const faqs = [
  {
    question: "How does the $4 flat rate Priority Mail work?",
    answer:
      "Every USPS Priority Mail label we generate costs just $4 regardless of package weight or destination within the United States. Whether you are shipping a 1 lb item from New York to California or a 50 lb package across town, the cost remains the same flat $4. We achieve this through negotiated bulk commercial rates with USPS.",
  },
  {
    question: "Is there a weight or size limit on the $4 Priority Mail labels?",
    answer:
      "No. Our $4 flat rate covers any weight and any box dimension within standard USPS Priority Mail guidelines. You are not restricted to USPS flat rate boxes either. Use your own packaging of any size and still pay just $4 per label.",
  },
  {
    question: "Do you also offer UPS shipping labels?",
    answer:
      "Yes. In addition to USPS Priority Mail, we offer UPS shipping labels at significantly discounted rates. UPS rates vary by weight and destination but are still well below retail pricing. Contact us for a UPS rate quote based on your typical shipment profile.",
  },
  {
    question: "Which ecommerce platforms and marketplaces are supported?",
    answer:
      "Our shipping labels work for any ecommerce seller. Whether you fulfill orders from Amazon FBM, eBay, Shopify, Walmart Marketplace, Etsy, or your own website, you can use our labels. Simply print the label and attach it to your package.",
  },
  {
    question: "Is tracking included with every label?",
    answer:
      "Yes, every USPS Priority Mail and UPS label includes full tracking at no additional cost. You receive the tracking number immediately after label generation so you can share it with your customer or upload it to your marketplace.",
  },
  {
    question: "Is there a minimum order volume or monthly commitment?",
    answer:
      "No. There is no minimum volume requirement and no monthly commitment. You can purchase a single label or thousands per month. There are no contracts, no monthly fees, and no hidden charges. You only pay per label as you need them.",
  },
  {
    question: "How quickly are labels generated?",
    answer:
      "Labels are generated same-day. Once you share your shipment details (recipient address, package weight), we generate the label and deliver it to you ready to print. Most labels are ready within minutes during business hours.",
  },
  {
    question: "How much can I actually save compared to retail shipping rates?",
    answer:
      "Most sellers save between 50% and 70% compared to retail USPS and UPS rates. For example, a package that would cost $12 to $15 at the post office ships for just $4 with our Priority Mail label. High-volume shippers who spend thousands per month on shipping often save $2,000 or more monthly by switching to our labels.",
  },
  {
    question: "Can I get bulk discounts for high volume?",
    answer:
      "Yes. While $4 per label is already an exceptional rate, we offer additional custom pricing for high-volume shippers who consistently generate a large number of labels per month. Contact our sales team to discuss volume-based pricing.",
  },
  {
    question: "Is shipping insurance available?",
    answer:
      "Yes. Shipping insurance is available as an add-on for any label. USPS Priority Mail includes up to $100 of built-in insurance coverage. Additional insurance can be arranged for higher-value shipments upon request.",
  },
];


export default function FlatRateShippingPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>FLAT RATE SHIPPING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            USPS Priority Mail Labels &mdash; Just $4 Per Label
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Ship any weight to any US address for a flat <strong>$4 with USPS Priority
            Mail</strong>. Also available: discounted UPS labels. No contracts, no
            minimums &mdash; save 50-70% on every shipment.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            No contracts. No minimums. No monthly fees.
          </p>
          <div style={{ display: "flex", gap: "24px", marginTop: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {["USPS Priority Mail", "Full Tracking Included", "Same-Day Generation"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <p className="typo-body" style={{ marginBottom: "16px" }}>
                Shipping costs are one of the biggest margin killers for
                ecommerce sellers. Whether you sell on Amazon FBM, eBay,
                Shopify, or Walmart, every dollar spent on shipping is a dollar
                taken from your profit. At EcomGarden, we have negotiated bulk
                commercial rates with USPS and UPS that allow us to offer USPS
                Priority Mail labels at a flat rate of just{" "}
                <strong>$4 per label</strong> &mdash; regardless of weight or
                destination anywhere inside the United States.
              </p>
              <p className="typo-body">
                There are no contracts to sign, no minimum volumes to meet, and
                no monthly platform fees. You simply share your order details,
                we generate the label with full tracking, and you print and
                ship. Most sellers save between 50% and 70% compared to what
                they pay at retail USPS or UPS counters. For high-volume
                shippers, that translates to thousands of dollars in savings
                every single month.
              </p>
            </div>

            {/* Right - Pricing Highlight */}
            <div className="flex justify-center">
              <div
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "16px",
                  padding: "40px 32px",
                  textAlign: "center",
                  maxWidth: "400px",
                  width: "100%",
                  border: "2px solid var(--color-primary)",
                }}
              >
                <p className="typo-label" style={{ marginBottom: "8px" }}>
                  USPS Priority Mail
                </p>
                <p
                  className="typo-h1"
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "56px",
                    marginBottom: "8px",
                  }}
                >
                  $4
                </p>
                <p className="typo-body" style={{ marginBottom: "20px" }}>
                  Per Label &mdash; Any Weight, Any US Destination
                </p>
                <div
                  style={{
                    borderTop: "1px solid #e0e0e0",
                    paddingTop: "16px",
                    marginTop: "8px",
                  }}
                >
                  <p className="typo-small" style={{ marginBottom: "6px" }}>
                    Full tracking included
                  </p>
                  <p className="typo-small" style={{ marginBottom: "6px" }}>
                    No contracts or minimums
                  </p>
                  <p className="typo-small" style={{ marginBottom: "6px" }}>
                    Same-day label generation
                  </p>
                  <p className="typo-small">
                    Insurance available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SIMPLE PROCESS</span>
            <h2 className="typo-h2">How Flat Rate Shipping Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Share Order Details", desc: "Provide your shipment details including recipient address and package weight. No account setup required." },
              { step: "02", title: "Pay $4 Per Label", desc: "Each USPS Priority Mail label is a flat $4. No surprises, no surcharges, no weight-based calculations." },
              { step: "03", title: "Print Your Label", desc: "Receive your shipping label with full tracking. Print it on any standard printer and attach to your package." },
              { step: "04", title: "Ship & Save", desc: "Drop off your package at any USPS location. Save 50-70% on every shipment compared to retail rates." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "48px", fontWeight: 800, color: "var(--color-primary)", opacity: 0.12, lineHeight: 1, marginBottom: "10px" }}>
                  {item.step}
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAVINGS COMPARISON SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Comparison Cards */}
            <div className="flex justify-center">
              <div style={{ width: "100%", maxWidth: "440px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff0f0",
                      borderRadius: "12px",
                      padding: "24px 16px",
                      textAlign: "center",
                    }}
                  >
                    <p className="typo-small" style={{ marginBottom: "8px", color: "#999" }}>
                      Retail USPS Rate
                    </p>
                    <p className="typo-h2" style={{ color: "#e53e3e", textDecoration: "line-through" }}>
                      $12-$25
                    </p>
                    <p className="typo-small" style={{ color: "#999" }}>per package</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f0fff4",
                      borderRadius: "12px",
                      padding: "24px 16px",
                      textAlign: "center",
                    }}
                  >
                    <p className="typo-small" style={{ marginBottom: "8px", color: "#999" }}>
                      EcomGarden Rate
                    </p>
                    <p className="typo-h2" style={{ color: "var(--color-primary)" }}>
                      $4
                    </p>
                    <p className="typo-small" style={{ color: "#999" }}>flat per label</p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#f6f7f9",
                    borderRadius: "12px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <p className="typo-body">
                    <strong>Save $8-$21 per shipment</strong> &mdash; that is
                    50-70% off retail rates on every single package you ship.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Stop Losing Profit to Overpriced Shipping
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Consider this real scenario: you are selling a product for $25
                on Amazon FBM. The retail USPS Priority Mail rate for your 5 lb
                package is $14.50. That leaves you barely $10 before product
                cost, fees, and other expenses. With our $4 flat rate label, you
                keep an extra $10.50 in pure profit on that single order.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Multiply that across 100 orders a month and you save over $1,000.
                At 500 orders, you are saving $5,000+ monthly. For large
                operations shipping thousands of packages, the savings are
                transformative.
              </p>
              <p className="typo-body">
                Our bulk commercial rates with USPS and UPS are the result of
                high-volume negotiated agreements. We pass those savings directly
                to you with zero markup games &mdash; just a simple, transparent
                flat rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
