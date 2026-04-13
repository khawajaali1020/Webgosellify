"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Own warehouses (not third-party)", us: true, fba: false, others: false },
  { feature: "No monthly storage fees", us: true, fba: false, others: false },
  { feature: "Flat rate pricing — no surprises", us: true, fba: false, others: "Varies" },
  { feature: "Amazon FBA & Walmart WFS prep", us: true, fba: "N/A", others: "Extra cost" },
  { feature: "2-step dropshipping reboxing", us: true, fba: false, others: "Limited" },
  { feature: "Multi-marketplace fulfillment", us: true, fba: "Amazon only", others: "Limited" },
  { feature: "Direct-to-customer shipping", us: true, fba: false, others: true },
  { feature: "Return handling", us: "$2/return", fba: "Complex fees", others: "$5-10/return" },
  { feature: "Real-time inventory tracking", us: true, fba: "Seller Central", others: "Varies" },
  { feature: "24/7 WhatsApp support", us: true, fba: false, others: false },
];

const whatYouGet = [
  { icon: "/images/services/icons/order-fulfillment.png", title: "Receiving & Inspection", desc: "We receive your items from any source — wholesale suppliers, manufacturers, retail stores, or returns. Every item is inspected and logged into our inventory system upon arrival." },
  { icon: "/images/services/icons/inventory.png", title: "Storage & Inventory", desc: "Secure, climate-controlled storage with real-time inventory tracking through our web-based management software. Know exactly what you have, where it is, and when to reorder." },
  { icon: "/images/services/icons/order-fulfillment.png", title: "Pick, Pack & Ship", desc: "Fast order processing with same-day fulfillment for orders received before cutoff. Professional packaging with your branding, shipping labels, and tracking numbers uploaded automatically." },
  { icon: "/images/services/icons/inventory.png", title: "FBA & WFS Prep", desc: "Complete Amazon FBA and Walmart WFS preparation — labeling, bundling, poly bagging, bubble wrapping, and carton packing per marketplace requirements. $0.50 per item." },
  { icon: "/images/services/icons/order-fulfillment.png", title: "2-Step Dropshipping", desc: "Receive supplier shipments at our warehouse, repackage with your branding, and ship to your customers. Remove supplier invoices and add your marketing materials." },
  { icon: "/images/services/icons/return-handling.png", title: "Return Processing", desc: "Receive customer returns, inspect condition, repackage for resale or FBA re-shipment, and update your inventory. Simple $2 per return flat rate." },
];

const warehouseLocations = [
  { state: "New York", details: "Strategic Northeast location for fast shipping to NY, NJ, CT, PA, and the entire East Coast metro areas.", coverage: "Northeast & Mid-Atlantic" },
  { state: "Florida", details: "Southern hub covering FL, GA, SC, NC, and the entire Southeast region with competitive carrier rates.", coverage: "Southeast & Gulf Coast" },
  { state: "Connecticut", details: "New England location providing quick delivery to CT, MA, RI, and the densely populated tri-state area.", coverage: "New England & Tri-State" },
];

const generalServices = [
  { service: "Receive Items", price: "Free", description: "We will receive your items from any source" },
  { service: "Process Your Items", price: "$2 Per Parcel", description: "We will process your items for shipment" },
  { service: "Oversize Item Process", price: "$3 Per Parcel", description: "Process oversize items 10lbs to 25lbs max" },
  { service: "Return Handling", price: "$2 Per Return", description: "Receive your returned parcel and prepare for shipping" },
  { service: "FBA & WFS Prep", price: "$0.50 Per Item", description: "Labeling & bundle your items for FBA & WFS" },
  { service: "Photography", price: "$15 Per Item", description: "Capture 10 photos of your items from different position" },
];

const boxPrices = [
  { boxType: "Poly Bag", price: "$1.00", dimensions: "Upto 11x13 in" },
  { boxType: "Small Box", price: "$1.30", dimensions: "Upto 12x9x6 in" },
  { boxType: "Medium Box", price: "$2.00", dimensions: "Upto 18x12x12 in" },
  { boxType: "Large Box", price: "$5.00", dimensions: "Upto 28x18x18 in" },
];

const faqs = [
  {
    question: "Where are your warehouses located?",
    answer: "We operate our own dedicated warehouses in New York, Florida, and Connecticut. These are not shared third-party facilities — they are owned and operated by Gosellify, giving us full control over quality, speed, and security.",
  },
  {
    question: "Do you charge monthly storage fees?",
    answer: "No. Unlike Amazon FBA and most 3PLs, we do not charge monthly storage fees. You only pay for services you use — receiving, processing, shipping, and packaging. Our flat-rate pricing means no surprise charges on your invoice.",
  },
  {
    question: "What is FBA prep and do you offer it?",
    answer: "FBA prep means preparing your products to meet Amazon's Fulfillment by Amazon requirements — labeling, poly bagging, bundling, and carton packing. Yes, we offer complete FBA prep at $0.50 per item. We also handle Walmart WFS prep.",
  },
  {
    question: "How does 2-step dropshipping work with your warehouse?",
    answer: "Your supplier ships products to our warehouse. We receive, inspect, remove supplier packaging and invoices, repackage with your branding and marketing materials, then ship directly to your customer. The customer only sees your brand.",
  },
  {
    question: "How fast do you process orders?",
    answer: "Orders received before our daily cutoff time are processed and shipped the same business day. Our average processing time is under 4 hours from order receipt to carrier pickup.",
  },
  {
    question: "Can I track my inventory in real time?",
    answer: "Yes. We provide web-based inventory management software where you can track stock levels, view receiving history, monitor outbound shipments, and get low-stock alerts — all in real time from any device.",
  },
  {
    question: "Do you handle returns?",
    answer: "Yes. We receive customer returns at our warehouse, inspect the item condition, repackage for resale or FBA re-shipment, and update your inventory. Flat rate of $2 per return — no complicated fee structures.",
  },
  {
    question: "What shipping carriers do you use?",
    answer: "We work with USPS, UPS, FedEx, and DHL. Our volume discounts mean you get competitive shipping rates. We choose the best carrier for each shipment based on speed, cost, and destination.",
  },
];

export default function ThreePLWarehousePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>3PL WAREHOUSE</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Our Own Warehouses in 3 US Locations. Not Third-Party. Ours.
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            FBA prep, WFS prep, 2-step dropshipping, storage, and direct-to-customer shipping from <strong>our own facilities</strong> in New York, Florida, and Connecticut. Flat rate pricing. No monthly fees.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Same-day processing. Web-based inventory tracking. No hidden charges.
          </p>
          <div style={{ display: "flex", gap: "24px", marginTop: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {["3 Own US Warehouses", "Same-Day Processing", "No Monthly Fees"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAREHOUSE LOCATIONS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>OUR LOCATIONS</span>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                Strategic Warehouse Locations Across the East Coast
              </h2>
              <p className="typo-body" style={{ marginBottom: "20px" }}>
                Unlike most 3PLs that rent shared space in someone else&apos;s warehouse, we own and operate our own dedicated facilities. This gives us full control over quality, speed, and your inventory security.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {warehouseLocations.map((loc) => (
                  <div key={loc.state} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <FaMapMarkerAlt style={{ color: "var(--color-primary)", fontSize: "18px", marginTop: "3px", flexShrink: 0 }} />
                    <div>
                      <h4 className="typo-h4" style={{ marginBottom: "2px" }}>{loc.state}</h4>
                      <p className="typo-small" style={{ marginBottom: "2px" }}>{loc.details}</p>
                      <span style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: 600 }}>Coverage: {loc.coverage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/warehouse/warehouse-map.webp"
                alt="3PL Warehouse Locations Map"
                style={{ borderRadius: "12px", width: "100%", maxWidth: "550px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Complete Warehouse & Fulfillment Services</h2>
            <p className="typo-subtext">From receiving to shipping — every step handled in our own US facilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ marginBottom: "12px" }}><img src={item.icon} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain" }} /></div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SIMPLE PROCESS</span>
            <h2 className="typo-h2">From Receiving to Delivered in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Ship to Us", desc: "Send your products from any supplier, manufacturer, or store to our warehouse. We receive and inspect every item." },
              { step: "02", title: "We Store & Prep", desc: "Items are logged into inventory, stored securely, and prepped per your instructions — FBA labels, poly bags, bundles." },
              { step: "03", title: "Order Comes In", desc: "When you get an order, we pick, pack, and ship same-day. Or we ship bulk to Amazon FBA / Walmart WFS." },
              { step: "04", title: "Customer Delivered", desc: "Product arrives with your branding. Tracking updates automatically. Returns come back to us — not you." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 24px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  opacity: 0.15,
                  marginBottom: "8px",
                  lineHeight: 1,
                }}>
                  {item.step}
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gosellify VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">Gosellify Warehouse vs FBA vs Other 3PLs</h2>
            <p className="typo-subtext">Whether you sell on Amazon, Walmart, Shopify, eBay, or Etsy — our own warehouses give you more control, lower costs, and better service.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Amazon FBA</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Other 3PLs</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                    <td style={{ padding: "12px 20px", fontSize: "13px", fontWeight: 500, textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>{row.feature}</td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", backgroundColor: i % 2 === 0 ? "rgba(22,163,74,0.04)" : "rgba(22,163,74,0.07)", verticalAlign: "middle" }}>
                      {row.us === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>{row.us}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.fba === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : row.fba === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.fba}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.others === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : row.others === true ? <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.others}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">TRANSPARENT PRICING</span>
            <h2 className="typo-h2">Flat Rate Pricing — No Hidden Charges</h2>
            <p className="typo-subtext">No monthly fees. No storage fees. You only pay for services you use.</p>
          </div>

          {/* General Services Table */}
          <div style={{ maxWidth: "768px", margin: "0 auto 32px" }}>
            <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
              General Services
            </h3>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-dark)" }}>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>Service</th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>Price</th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {generalServices.map((item, index) => (
                    <tr key={item.service} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f6f7f9" }}>
                      <td className="typo-body" style={{ padding: "12px 20px" }}>{item.service}</td>
                      <td className="typo-body" style={{ padding: "12px 20px", color: "var(--color-primary)", fontWeight: 700 }}>{item.price}</td>
                      <td className="typo-small" style={{ padding: "12px 20px" }}>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Box Price Table */}
          <div style={{ maxWidth: "768px", margin: "0 auto 32px" }}>
            <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
              Box Price
            </h3>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-dark)" }}>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>Box Type</th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>Price</th>
                    <th className="typo-small" style={{ textAlign: "left", color: "#fff", padding: "12px 20px" }}>Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  {boxPrices.map((item, index) => (
                    <tr key={item.boxType} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f6f7f9" }}>
                      <td className="typo-body" style={{ padding: "12px 20px" }}>{item.boxType}</td>
                      <td className="typo-body" style={{ padding: "12px 20px", color: "var(--color-primary)", fontWeight: 700 }}>{item.price}</td>
                      <td className="typo-small" style={{ padding: "12px 20px" }}>{item.dimensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="typo-body" style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            Need custom services? Contact us on WhatsApp with your requirements. Our support team is happy to provide a personalized quote.
          </p>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* Benefits Section */}
      <ServiceBenefits />

      {/* ── FAQ ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FAQ</span>
            <h2 className="typo-h2">Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: "750px", margin: "24px auto 0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "14px 18px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
