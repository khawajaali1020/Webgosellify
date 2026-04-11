"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaCalculator, FaChartLine, FaShieldAlt, FaHandshake } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Ecommerce tax specialization", us: true, them: false },
  { feature: "Multi-state sales tax filing", us: true, them: "Extra fees" },
  { feature: "1099-K reconciliation", us: true, them: false },
  { feature: "Non-resident LLC filing (Form 5472)", us: true, them: false },
  { feature: "Year-round bookkeeping included", us: true, them: "Extra fees" },
  { feature: "Quarterly estimated tax prep", us: true, them: "Extra fees" },
  { feature: "IRS correspondence handling", us: true, them: "Extra $200+/hr" },
  { feature: "Marketplace fee deduction optimization", us: true, them: false },
  { feature: "Flat-rate pricing", us: true, them: "Hourly billing" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "Do I need to file taxes if my business lost money?",
    a: "Yes, filing is mandatory even with losses. Reporting losses can actually benefit you — business losses offset other income on your personal return. Not filing can result in IRS penalties starting at $205/month for certain forms.",
  },
  {
    q: "What are the deadlines for ecommerce tax filing?",
    a: "Single-member LLCs: April 15th (Schedule C with personal return). Multi-member LLCs/Partnerships: March 15th (Form 1065). S-Corps: March 15th (Form 1120-S). We can file extensions if needed, but estimated taxes are still due on original dates.",
  },
  {
    q: "How do you handle multi-state sales tax?",
    a: "We analyze your sales data across all marketplaces, determine your nexus in each state (typically $100K+ in sales or 200+ transactions), register your business, configure automated collection, and file every return on schedule.",
  },
  {
    q: "I'm a non-US resident with a US LLC. What forms do I file?",
    a: "You must file Form 5472 with pro-forma Form 1120 — even with zero US income. Penalty for not filing: $25,000 per form. If you have US-source income, Form 1040-NR may also be required. We handle all of this.",
  },
  {
    q: "What deductions can ecommerce sellers claim?",
    a: "COGS, marketplace fees (Amazon referral, FBA fees), shipping costs, PPC spend, software subscriptions, home office, vehicle/mileage, professional services, insurance, warehouse fees, and equipment depreciation. We maximize every deduction.",
  },
  {
    q: "Do I need quarterly estimated tax payments?",
    a: "If you expect to owe $1,000+ in taxes, the IRS requires quarterly payments (April 15, June 15, Sept 15, Jan 15). We calculate your payments, send reminders, and prepare vouchers so you avoid underpayment penalties.",
  },
  {
    q: "What is a 1099-K and how does it affect me?",
    a: "Marketplaces issue 1099-Ks reporting gross sales — including shipping, sales tax, returns, and refunds. We reconcile your 1099-Ks against actual net income so you're not taxed on money you never earned.",
  },
  {
    q: "How are you different from TurboTax or a general accountant?",
    a: "General accountants and DIY software don't understand marketplace fee structures, FBA cost accounting, multi-state nexus, or 1099-K reconciliation. Our CPAs work exclusively with ecommerce sellers and know every deduction specific to your business.",
  },
];

export default function TaxFilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>TAX FILING SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Business Tax Filing Starting at <span style={{ color: "var(--color-primary)" }}>$100</span>
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Federal &amp; state returns, multi-state sales tax, bookkeeping, and year-round support for <strong>all types of businesses</strong> — ecommerce, LLC, sole proprietors, freelancers, and more. Specialized expertise for Amazon, Walmart &amp; Shopify sellers.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            250+ businesses served. Starting at $100. No hidden fees.
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
              Get Free Tax Quote
            </a>
            <Link href="/contact" className="btn-outline">
              Order Now
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: <FaCalculator />, text: "250+ Businesses Filed" },
              { icon: <FaShieldAlt />, text: "100% IRS Compliant" },
              { icon: <FaHandshake />, text: "Flat-Rate Pricing" },
            ].map((badge) => (
              <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <span style={{ color: "var(--color-primary)" }}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE HANDLE ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">COMPLETE TAX SERVICE</span>
            <h2 className="typo-h2">Everything Your Business Needs — Starting at $100</h2>
            <p className="typo-subtext">From LLC tax returns to multi-state sales tax compliance — we handle it all for ecommerce sellers, freelancers, and small businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/services/icons/safety.png", title: "Federal & State Tax Returns", desc: "Annual income tax filing for your LLC, S-Corp, or sole proprietorship. Schedule C, Form 1065, Form 1120-S — we handle all entity types." },
              { img: "/images/services/icons/calculation.png", title: "Multi-State Sales Tax", desc: "Nexus analysis across all 50 states, registration, automated collection setup, and monthly/quarterly/annual return filing." },
              { img: "/images/services/icons/inventory.png", title: "Bookkeeping & P&L", desc: "Year-round bookkeeping for Amazon, Walmart, Shopify, eBay, and Etsy. Every transaction categorized and tax-ready." },
              { img: "/images/services/icons/marketing.png", title: "Quarterly Estimated Taxes", desc: "We calculate your quarterly payments, send reminders before each deadline, and prepare payment vouchers." },
              { img: "/images/services/icons/return-handling.png", title: "1099 & 1099-K Reconciliation", desc: "We reconcile marketplace 1099-Ks against your actual net income — so you're not taxed on returns, refunds, or shipping." },
              { img: "/images/services/icons/account-health.png", title: "IRS Correspondence & Audit Support", desc: "CP2000 notices, penalty assessments, audits — we review, respond, and communicate with the IRS on your behalf." },
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
            <h2 className="typo-h2">Tax Filing in 4 Easy Steps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", marginTop: "36px" }}>
            {[
              { step: "01", title: "Free Consultation", desc: "We review your business structure, income sources, marketplace accounts, and tax obligations." },
              { step: "02", title: "Submit Documents", desc: "Upload marketplace reports, expense records, and prior returns through our secure portal." },
              { step: "03", title: "We Prepare & Review", desc: "Our CPAs analyze your financials, find every deduction, and prepare your returns." },
              { step: "04", title: "Filed & Supported", desc: "We e-file everything and provide year-round support for any IRS questions or notices." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "28px 24px",
                  textAlign: "center",
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

      {/* ── NON-RESIDENT SECTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>NON-RESIDENT SELLERS</span>
              <h2 className="typo-h2" style={{ marginBottom: "14px" }}>
                International Seller With a US LLC? We&apos;ve Got You Covered.
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Non-resident LLC owners have <strong>unique filing requirements</strong> that most accountants don&apos;t understand. Missing Form 5472 carries a <strong>$25,000 penalty per form</strong>. Our team specializes in international seller compliance.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Form 5472 + pro-forma 1120 filing",
                  "Form 1040-NR for US-source income",
                  "FBAR reporting (foreign bank accounts)",
                  "Tax treaty optimization",
                  "ITIN application support",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                    <span className="typo-body" style={{ color: "var(--color-text)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: "var(--color-dark)",
              borderRadius: "12px",
              padding: "32px",
              color: "#fff",
            }}>
              <h3 className="typo-h3" style={{ color: "#fff", marginBottom: "20px", textAlign: "center" }}>
                Don&apos;t Risk a $25,000 Penalty
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", marginBottom: "20px", textAlign: "center" }}>
                Form 5472 is required for ALL non-resident LLC owners — even with zero US income. Most DIY software doesn&apos;t support this form.
              </p>
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-pulse"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%" }}
              >
                <FaWhatsapp style={{ fontSize: "18px" }} />
                Get Non-Resident Tax Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── US VS OTHERS COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs General Accountants</h2>
            <p className="typo-subtext">Your Amazon CPA, not a generic tax preparer.</p>
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

      {/* ── DEDUCTION HIGHLIGHTS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">MAXIMIZE SAVINGS</span>
            <h2 className="typo-h2">Deductions Most Sellers Miss</h2>
            <p className="typo-subtext">Our CPAs know exactly where to find tax savings in your ecommerce business.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ marginTop: "28px" }}>
            {[
              "Cost of Goods Sold",
              "Amazon Referral Fees",
              "FBA Storage & Fees",
              "Shopify Subscription",
              "PPC & Ad Spend",
              "Shipping & Packaging",
              "Software & Tools",
              "Home Office",
              "Vehicle & Mileage",
              "Insurance Premiums",
              "Warehouse & Storage",
              "Professional Services",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "12px", flexShrink: 0 }} />
                {item}
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
