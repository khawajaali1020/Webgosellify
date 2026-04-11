"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaBuilding, FaGlobeAmericas, FaClock } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const packages = [
  {
    name: "LLC Formation",
    price: "$100",
    priceNote: "+ State Fee",
    popular: false,
    features: [
      "Articles of Organization Filing",
      "Operating Agreement",
      "Registered Agent (1 Year)",
      "Digital Document Delivery",
    ],
  },
  {
    name: "EIN Application",
    price: "$50",
    priceNote: "3 Business Days",
    popular: false,
    features: [
      "IRS EIN Application",
      "SS-4 Form Preparation",
      "Confirmation Letter",
      "Ready for Bank & Marketplace",
    ],
  },
  {
    name: "Complete Business Setup",
    price: "Custom",
    priceNote: "Best Value",
    popular: true,
    features: [
      "LLC Formation + EIN",
      "Business Bank Account Setup",
      "Reseller Certificate / Sales Tax Permit",
      "Virtual Business Address",
      "Marketplace Seller Registration",
      "ITIN Application Support",
    ],
  },
  {
    name: "ITIN Application",
    price: "$250",
    priceNote: "~60 Days Processing",
    popular: false,
    features: [
      "IRS ITIN Application (W-7)",
      "Document Preparation",
      "Certified Acceptance Agent",
      "Required for Non-US Tax Filing",
    ],
  },
];

const comparisonData = [
  { feature: "Ecommerce-specific expertise", us: true, them: false },
  { feature: "EIN + ITIN handling included", us: true, them: false },
  { feature: "Bank account setup assistance", us: true, them: false },
  { feature: "Marketplace registration guidance", us: true, them: false },
  { feature: "Non-resident friendly process", us: true, them: false },
  { feature: "Registered agent included", us: true, them: "Extra $150+/yr" },
  { feature: "Turnaround time", us: "7-10 days", them: "2-6 weeks" },
  { feature: "Ongoing compliance support", us: true, them: "Extra fees" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "Can a non-US resident form a US LLC?",
    a: "Yes. You do not need US citizenship, green card, or visa. Thousands of international sellers operate US LLCs formed in Wyoming, Delaware, or New Mexico. We handle the entire process remotely — you never need to visit the US.",
  },
  {
    q: "Which state is best for my ecommerce LLC?",
    a: "Wyoming: zero state income tax, strong privacy, $60/year annual fee. Delaware: best business laws, privacy protection, $300/year franchise tax. New Mexico: no annual report, no formation fee — most budget-friendly. We recommend based on your specific situation.",
  },
  {
    q: "What is an EIN and do I need one?",
    a: "An EIN (Employer Identification Number) is like a Social Security Number for your business. You need it to open a bank account, file taxes, and register on Amazon, Walmart, and other marketplaces. We handle the full IRS application.",
  },
  {
    q: "How long does the entire process take?",
    a: "7-10 business days from start to finish. State filing (1-3 days), EIN application (1-5 days), registered agent (same day), operating agreement (1-2 days). Bank account setup runs in parallel and may take 3-7 additional days.",
  },
  {
    q: "Can you help open a US bank account remotely?",
    a: "Yes. We work with ecommerce-friendly banks and fintech platforms like Mercury, Relay, and traditional banks that accept non-resident applications. We prepare all documents and guide you through until your account is active.",
  },
  {
    q: "What is a Reseller Certificate?",
    a: "A Reseller Certificate lets you buy inventory from wholesalers without paying sales tax upfront, since you collect it from end customers. Required for Amazon FBA, Walmart, and most ecommerce models. We handle the application.",
  },
  {
    q: "What ongoing compliance is required?",
    a: "Most states require annual report filing and a small fee. Wyoming: $60/year, Delaware: $300/year franchise tax, New Mexico: no annual report. We send reminders and handle all filings to keep your LLC in good standing.",
  },
  {
    q: "Do you offer ongoing support after formation?",
    a: "Yes. Annual report filing, registered agent renewal, compliance reminders, and any state filings needed. We are your long-term business formation partner, not a one-time filing service.",
  },
];

export default function CompanyFilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>COMPANY FILING &amp; EIN / ITIN</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            US LLC Formation, EIN, ITIN &amp; UK LTD — Everything You Need to Start
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            We&apos;ve helped <strong>250+ international sellers</strong> form their companies and start selling on Amazon, Walmart, Shopify, eBay &amp; Etsy.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Complete A-Z setup in 7-10 business days. No paperwork headaches.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://wa.link/m2ac6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-pulse"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Get Free Consultation
            </a>
            <a href="#packages" className="btn-outline">
              View Pricing
            </a>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: <FaBuilding />, text: "250+ Companies Formed" },
              { icon: <FaGlobeAmericas />, text: "30+ Countries Served" },
              { icon: <FaClock />, text: "7-10 Day Turnaround" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT&apos;S INCLUDED</span>
            <h2 className="typo-h2">Everything You Need to Start Selling</h2>
            <p className="typo-subtext">One service, complete business setup — from LLC filing to marketplace-ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/services/icons/safety.png", title: "LLC / LTD Formation", desc: "Articles of Organization filed with your chosen state. Wyoming, Delaware, or New Mexico for US. Companies House for UK." },
              { img: "/images/services/icons/account-health.png", title: "EIN & ITIN Application", desc: "We apply for your EIN directly with the IRS. For non-residents, we handle ITIN applications with all required documentation." },
              { img: "/images/services/icons/personal-manager.png", title: "Registered Agent", desc: "Required by law — we provide a registered agent with a physical address in your state of formation for all legal correspondence." },
              { img: "/images/services/icons/calculation.png", title: "Business Bank Account", desc: "We connect you with ecommerce-friendly banks (Mercury, Relay) and guide you through opening your US business bank account remotely." },
              { img: "/images/services/icons/order-fulfillment.png", title: "Reseller Certificate", desc: "Sales Tax Permit so you can buy inventory without paying upfront sales tax. Required for Amazon FBA, wholesale, and most models." },
              { img: "/images/services/icons/return-handling.png", title: "Operating Agreement", desc: "Professionally drafted Operating Agreement that establishes your LLC structure, ownership, and operational rules." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <img src={item.img} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "12px" }} />
                <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SIMPLE PROCESS</span>
            <h2 className="typo-h2">From Zero to Marketplace-Ready in 4 Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Free Consultation", desc: "We discuss your goals, recommend the best state and entity type, and outline the full roadmap." },
              { step: "02", title: "Submit Documents", desc: "You provide basic ID documents. We prepare all formation paperwork — you just sign." },
              { step: "03", title: "We File Everything", desc: "State filing, EIN application, registered agent, operating agreement — all handled by us." },
              { step: "04", title: "Start Selling", desc: "Company formed, bank account open, reseller certificate ready. You're marketplace-ready." },
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

      {/* ── STATE COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">STATE COMPARISON</span>
            <h2 className="typo-h2">Which State is Right for Your LLC?</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#f6f7f9" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600, color: "var(--color-primary)" }}>Wyoming</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600 }}>Delaware</th>
                  <th style={{ padding: "12px 16px", textAlign: "center", fontWeight: 600 }}>New Mexico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "State Income Tax", wy: "None", de: "None (for non-residents)", nm: "Yes (4.9%)" },
                  { feature: "Annual Fee", wy: "$60/year", de: "$300/year", nm: "None" },
                  { feature: "Formation Fee", wy: "$100", de: "$90", nm: "$0" },
                  { feature: "Privacy Protection", wy: "Excellent", de: "Excellent", nm: "Excellent" },
                  { feature: "Annual Report", wy: "Required", de: "Required", nm: "Not Required" },
                  { feature: "Asset Protection", wy: "Best in US", de: "Very Strong", nm: "Standard" },
                  { feature: "Best For", wy: "Most sellers", de: "Large businesses", nm: "Budget-friendly" },
                ].map((row) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>{row.wy}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>{row.de}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center" }}>{row.nm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── US VS OTHERS COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Generic Filing Services</h2>
            <p className="typo-subtext">We&apos;re not a generic LegalZoom. We&apos;re ecommerce specialists.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "130px" }}>Others</th>
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
                      {row.them === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.them}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR PACKAGES</span>
            <h2 className="typo-h2">Transparent Pricing — No Hidden Fees</h2>
            <p className="typo-subtext">Choose the service you need. Bundle for the best value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="card-hover"
                style={{
                  backgroundColor: pkg.popular ? "var(--color-dark)" : "#f6f7f9",
                  borderRadius: "12px",
                  padding: "24px 20px",
                  position: "relative",
                  border: pkg.popular ? "none" : "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {pkg.popular && (
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "var(--color-accent)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    textTransform: "uppercase",
                  }}>
                    Best Value
                  </span>
                )}
                <h3 className="typo-h4" style={{ color: pkg.popular ? "#fff" : "var(--color-dark)", marginBottom: "4px" }}>
                  {pkg.name}
                </h3>
                <div style={{ marginBottom: "14px" }}>
                  <span style={{ fontSize: "28px", fontWeight: 800, color: pkg.popular ? "var(--color-primary)" : "var(--color-dark)" }}>{pkg.price}</span>
                  <span style={{ fontSize: "12px", color: pkg.popular ? "rgba(255,255,255,0.6)" : "#999", marginLeft: "6px" }}>{pkg.priceNote}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {pkg.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", color: pkg.popular ? "rgba(255,255,255,0.85)" : "#666" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.link/m2ac6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pkg.popular ? "btn-primary" : "btn-outline"}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%" }}
                >
                  <FaWhatsapp /> Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  {faq.q}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.a}</p>
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
