"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Brand approval & authorization", us: true, diy: "You apply blindly", others: "Limited brands" },
  { feature: "Verified distributor network", us: true, diy: false, others: "Basic list" },
  { feature: "Inventory management & forecasting", us: true, diy: "Spreadsheets", others: "Software only" },
  { feature: "Competitive pricing strategy", us: true, diy: "Race to bottom", others: "Basic repricing" },
  { feature: "WFS prep & shipping", us: true, diy: "You arrange", others: "Extra fee" },
  { feature: "Account health monitoring", us: true, diy: false, others: "Weekly check" },
  { feature: "Multi-supplier coordination", us: true, diy: "Overwhelming", others: false },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/safety.png", title: "Brand Approval", desc: "We secure brand authorizations and ungating approvals on Walmart. Our distributor relationships give you access to brands others cannot sell." },
  { img: "/images/services/icons/product-research.png", title: "Supplier Sourcing", desc: "Verified distributors, competitive pricing, reliable supply chains. We vet every supplier for authenticity, pricing, and fulfillment reliability." },
  { img: "/images/services/icons/inventory.png", title: "Inventory Management", desc: "Demand forecasting, reorder automation, multi-SKU tracking. Your inventory levels are optimized for maximum sales with minimum capital tied up." },
  { img: "/images/services/icons/marketing.png", title: "Pricing Strategy", desc: "Competitive analysis, margin-based repricing, MAP compliance. We price to win the Buy Box while protecting your profit margins." },
  { img: "/images/services/icons/order-fulfillment.png", title: "WFS Prep", desc: "Products prepped, labeled, and shipped to Walmart WFS warehouses. Professional prep that meets every requirement, every time." },
  { img: "/images/services/icons/account-health.png", title: "Account Health", desc: "Performance metrics monitored daily. IP complaints handled immediately. Your seller account stays clean and your wholesale business stays protected." },
  { img: "/images/services/icons/customer-support.png", title: "Customer Support", desc: "Buyer messages, returns, refunds — all handled within 4 hours. Your customer satisfaction metrics stay best-in-class." },
  { img: "/images/services/icons/scalability.png", title: "Growth & Scaling", desc: "New brands, new categories, higher volume. We scale your wholesale operation systematically — more SKUs, more revenue, same hands-off experience." },
];

const faqs = [
  {
    question: "What is Walmart wholesale selling?",
    answer: "Wholesale on Walmart means buying branded products in bulk from authorized distributors at wholesale prices and reselling them on Walmart Marketplace at retail prices. Unlike private label, you sell established brands with existing demand. Unlike arbitrage, you have reliable supply chains and consistent margins.",
  },
  {
    question: "How do you get brand approvals on Walmart?",
    answer: "We have established relationships with distributors who provide authorized invoices and brand authorization letters. For gated brands, we submit proper documentation including invoices, Letters of Authorization, and compliance certificates. Our approval rate is over 85% for brands we target.",
  },
  {
    question: "How much capital do I need for wholesale?",
    answer: "Minimum $5,000-$10,000 for initial inventory purchases. Wholesale requires upfront inventory investment, but margins are consistent (20-35%) and supply is reliable. The more capital you invest, the better bulk pricing you get from distributors.",
  },
  {
    question: "What ROI can I expect?",
    answer: "Typical wholesale margins on Walmart are 20-35% after all fees. With lower competition than Amazon, Walmart wholesale sellers often achieve higher margins on the same products. Our inventory management ensures your capital turns over every 30-45 days.",
  },
  {
    question: "How do you find reliable distributors?",
    answer: "We maintain a vetted network of 200+ authorized distributors across major categories. Every supplier is verified for authenticity, pricing competitiveness, fulfillment reliability, and return policies. We never work with grey market or unauthorized sources.",
  },
  {
    question: "Is Walmart worth it with lower traffic than Amazon?",
    answer: "Absolutely. Less traffic also means far less competition. Walmart Marketplace is growing 30%+ year over year, and early sellers are establishing dominance in categories that are saturated on Amazon. Lower competition = higher margins and easier Buy Box wins.",
  },
  {
    question: "What about MAP pricing policies?",
    answer: "We strictly comply with Minimum Advertised Price policies. Violating MAP risks losing your brand authorization — permanently. Our pricing tools automatically enforce MAP compliance while still optimizing for Buy Box competitiveness within allowed ranges.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in. Your supplier relationships and inventory are yours. We earn your business by delivering results every month. Our retention rate is 90%+ because the ROI speaks for itself.",
  },
];


export default function WalmartWholesalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART WHOLESALE</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Sell Branded Products on Walmart. <span style={{ color: "#0071dc" }}>Wholesale Margins, Growing Platform.</span>
          </h1>
          <p className="typo-body" style={{ marginBottom: "24px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Source from authorized distributors, sell established brands on Walmart Marketplace. Reliable supply chains, consistent 20-35% margins, and a platform with less competition than Amazon.
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
              Start Earning — Free Consultation
            </a>
            <Link href="/pricing" className="btn-outline">
              See Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Authorized distributors", "Brand approval experts", "20-35% profit margins", "Reliable supply chains", "Pay from profits only", "A-Z wholesale management"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "12px" }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY THIS WORKS</span>
            <h2 className="typo-h2">Your Problems. Our Solutions.</h2>
            <p className="typo-subtext">Wholesale on Walmart is the most reliable e-commerce model — if you have the right suppliers and the right team. Here&apos;s why sellers choose us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "Finding Walmart-approved distributors?",
                solution: "We maintain a vetted network of 200+ authorized distributors. Every supplier verified for authenticity, pricing, and reliability. You get access to our entire network.",
              },
              {
                problem: "Brand approvals on Walmart are different?",
                solution: "85%+ approval rate on targeted brands. We know exactly what documentation Walmart requires and have distributor relationships that provide proper authorization letters.",
              },
              {
                problem: "Lower traffic than Amazon — worth it?",
                solution: "Less traffic = far less competition. Walmart Marketplace grows 30%+ YoY. Early sellers dominate categories saturated on Amazon. Higher margins, easier Buy Box wins.",
              },
              {
                problem: "Pricing competition from other sellers?",
                solution: "MAP compliance, strategic repricing, and Buy Box analytics. We price to win without racing to the bottom. Our average client maintains 25%+ margins consistently.",
              },
              {
                problem: "Managing inventory across platforms?",
                solution: "Multi-supplier tracking, demand forecasting, reorder automation. We manage your entire supply chain so you never overstock and never run out.",
              },
              {
                problem: "Walmart's strict compliance rules?",
                solution: "We monitor every performance metric daily — listing quality, shipping speed, defect rates. Your account stays clean and your wholesale business stays protected.",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="card-hover"
                style={{
                  borderRadius: "10px",
                  padding: "22px",
                  backgroundColor: "#f6f7f9",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px", lineHeight: 1.4 }}>
                  <span style={{ color: "#dc2626" }}>&#10007;</span>{" "}{item.problem}
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-text-light)", margin: 0, lineHeight: 1.6, paddingLeft: "2px", borderLeft: "3px solid var(--color-primary)", marginLeft: "0" }}>
                  <span style={{ display: "block", paddingLeft: "12px" }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>&rarr;</span>{" "}{item.solution}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">How We Build Your Wholesale Business</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              Buy from distributors at $15. Sell on Walmart at $25. After fees and fulfillment: <strong>$5+ profit per unit</strong>. Sell 100 units a day = <strong>$15,000/month</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Research & Approve", desc: "We find profitable brands, secure authorization, and establish distributor accounts. Your catalog starts with proven winners." },
              { img: "/images/process/get-access.png", title: "Source & Order", desc: "Bulk orders placed with verified distributors at wholesale pricing. Quality checked, invoices documented, shipments tracked." },
              { img: "/images/process/planning.png", title: "List & Optimize", desc: "Products listed with optimized content, competitive pricing, and Buy Box strategies designed to win from day one." },
              { img: "/images/process/growth.png", title: "Scale & Profit", desc: "Orders flow, inventory replenishes, new brands added. Your wholesale operation grows systematically while you collect profit." },
            ].map((item, index) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <div style={{ position: "relative" }}>
                    <img src={item.img} alt={item.title} style={{ width: "72px", height: "72px", objectFit: "contain" }} />
                    <div style={{
                      position: "absolute", top: "-4px", right: "-4px",
                      width: "22px", height: "22px", borderRadius: "50%",
                      backgroundColor: "var(--color-primary)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700,
                    }}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FULL SERVICE</span>
            <h2 className="typo-h2">Everything We Handle. Everything You Don&apos;t.</h2>
            <p className="typo-subtext">From supplier sourcing to order fulfillment — your entire Walmart wholesale operation, managed by our team.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <img src={item.img} alt={item.title} style={{ width: "64px", height: "64px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "45px 0", backgroundColor: "var(--color-dark)" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
            We Don&apos;t Get Paid Until <span style={{ color: "#0071dc" }}>You Get Paid</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "550px", margin: "0 auto 20px" }}>
            Profit sharing model — zero management fees until your wholesale store is profitable. We invest our expertise, you invest capital. We both win.
          </p>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-pulse"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <FaWhatsapp style={{ fontSize: "18px" }} />
            Start Risk-Free Today
          </a>
        </div>
      </section>

      {/* Confidence Stats */}
      <ServiceConfidence />

      {/* ── ECOMGARDEN VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE HONEST COMPARISON</span>
            <h2 className="typo-h2">Why Wholesale Sellers Choose Us Over Going Solo</h2>
            <p className="typo-subtext">Finding suppliers is hard. Getting brand approvals is harder. Managing everything daily is the hardest. We do all three.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>DIY Walmart Wholesale</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Other Agencies</th>
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
                      {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.diy}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.others === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.others}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">GOT QUESTIONS?</span>
            <h2 className="typo-h2">Everything You Want to Know Before Starting</h2>
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
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "14px 18px", background: "none", border: "none",
                    cursor: "pointer", fontSize: "15px", fontWeight: 600,
                    color: "var(--color-dark)", textAlign: "left",
                  }}
                >
                  {faq.question}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{
                  maxHeight: openFaq === i ? "300px" : "0",
                  overflow: "hidden", transition: "max-height 0.3s ease",
                }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
