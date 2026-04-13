"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Cassini search engine optimization", us: true, diy: false, others: "Basic" },
  { feature: "Automated 24/7 repricing", us: true, diy: "Manual", others: "Limited" },
  { feature: "Top Rated Seller achievement strategy", us: true, diy: "Self-managed", others: "Partial" },
  { feature: "Daily account health monitoring", us: true, diy: false, others: "Weekly" },
  { feature: "VeRO strike prevention system", us: true, diy: "High risk", others: false },
  { feature: "Feedback & defect rate management", us: true, diy: "Your time", others: "Extra fee" },
  { feature: "Multi-marketplace (US, UK, AU, DE)", us: true, diy: false, others: "Extra cost" },
  { feature: "Returns & refund processing", us: true, diy: "You handle", others: "Extra fee" },
  { feature: "Dedicated eBay account manager", us: true, diy: false, others: false },
  { feature: "WhatsApp direct support", us: true, diy: false, others: false },
];

const whatYouGet = [
  { icon: "/images/services/icons/product-research.png", title: "Product Sourcing", desc: "Data-driven research to find high-demand items with strong margins. We analyze sell-through rates, competition, and pricing gaps daily." },
  { icon: "/images/services/icons/marketing.png", title: "Cassini SEO", desc: "Keyword-rich titles, complete item specifics, proper categorization, and competitive pricing that puts your listings where buyers actually look." },
  { icon: "/images/services/icons/calculation.png", title: "Automated Repricing", desc: "24/7 repricing tools that adjust prices in real-time. Stay competitive, protect margins, and win more sales without touching a spreadsheet." },
  { icon: "/images/services/icons/account-health.png", title: "Account Health", desc: "Daily monitoring of defect rates, late shipments, cases, and policy compliance. We catch issues before they become restrictions." },
  { icon: "/images/services/icons/safety.png", title: "Top Rated Strategy", desc: "We manage every metric required for Top Rated Seller status — 20% fee discount, priority placement, and the trust badge that converts." },
  { icon: "/images/services/icons/customer-support.png", title: "Customer Support", desc: "Every buyer message answered promptly. A-to-Z claims handled. Feedback requests sent. Your reputation stays bulletproof." },
  { icon: "/images/services/icons/return-handling.png", title: "Returns Management", desc: "Full return cycle — buyer communication, refund processing, supplier coordination, and restocking. Nothing falls through the cracks." },
  { icon: "/images/services/icons/scalability.png", title: "Scaling & Expansion", desc: "From 50 SKUs to 500+. New categories, international marketplaces (UK, AU, DE), and promoted listings to multiply your revenue." },
];

const faqs = [
  {
    question: "Is dropshipping allowed on eBay?",
    answer: "Yes. eBay permits dropshipping from legitimate wholesale suppliers who ship directly to customers. You must be the seller of record, handle customer service, and ensure products arrive on time. We manage all of this for you within eBay's policies.",
  },
  {
    question: "What is Cassini and why should I care?",
    answer: "Cassini is eBay's search algorithm. It determines which listings appear when buyers search. Cassini rewards fast handling times, competitive pricing, complete item specifics, seller performance metrics, and free shipping. We optimize every listing specifically for Cassini ranking factors.",
  },
  {
    question: "How do you prevent account restrictions?",
    answer: "Daily monitoring of every account health metric — defect rate, late shipment rate, cases closed without resolution, and policy compliance. We also screen every product against VeRO-restricted brands before listing. Our proactive approach means issues get fixed before eBay even flags them.",
  },
  {
    question: "What ROI can I expect from eBay dropshipping?",
    answer: "Average profit margins range from 15-30% depending on category and sourcing strategy. With Top Rated Seller discounts (20% off final value fees), margins improve further. Most clients reach profitability within the first month of active management.",
  },
  {
    question: "How does automated repricing work?",
    answer: "Our repricing tools monitor competitor prices 24/7 and adjust your listings automatically within rules you approve. Minimum margin floors protect your profits. Maximum price ceilings keep you competitive. You never race to the bottom — we race to the sweet spot.",
  },
  {
    question: "Can you manage multiple eBay marketplaces?",
    answer: "Yes. We manage eBay US, UK, Australia, Canada, and Germany. Each marketplace has its own buyer behavior, fee structure, and compliance requirements. We handle all of it — one team, all your markets, consistent results.",
  },
  {
    question: "What happens if my account gets restricted?",
    answer: "Our proactive monitoring prevents 99% of restrictions. If one occurs, we immediately identify the cause, prepare and submit the appeal with supporting documentation, implement corrective measures, and monitor the account through reinstatement. Most restrictions are resolved within 48-72 hours.",
  },
  {
    question: "How long does it take to achieve Top Rated Seller?",
    answer: "eBay evaluates Top Rated status quarterly. With proper management from day one, most accounts qualify within 90 days. The requirements: 100+ transactions, $1,000+ in sales, late shipment rate under 3%, and defect rate under 0.5%. We manage every metric.",
  },
];


export default function EbayDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered, no right column) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "10px", display: "block" }}>EBAY DROPSHIPPING & STORE MANAGEMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "16px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Dominate eBay With <span style={{ color: "var(--color-primary)" }}>Top Rated Seller</span> Status and Cassini SEO
          </h1>
          <p className="typo-body" style={{ marginBottom: "14px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            190+ million active buyers across 20+ global marketplaces. We handle Cassini optimization, automated repricing, account health, and daily operations — you scale without the grind.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Policy-compliant. Top Rated focused. Full account management across all eBay markets.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://wa.me/message/Q6XJRMT4HKTBF1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-pulse"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Get Free Consultation
            </a>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Cassini SEO Experts", "Top Rated Seller Strategy", "24/7 Automated Repricing", "Multi-Market Management"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE EBAY ADVANTAGE ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>THE OPPORTUNITY</span>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>The eBay Advantage Most Sellers Miss</h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                eBay has <strong>190M+ active buyers</strong> worldwide — the second-largest marketplace after Amazon. Buyers come to eBay for deals, variety, and auction-style pricing that Amazon doesn&apos;t offer.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                With <strong>20+ global marketplaces</strong> (US, UK, Australia, Germany, Canada), one product can sell across multiple markets. We manage all of them from a single dashboard.
              </p>
              <p className="typo-body">
                eBay&apos;s final value fees are <strong>10-13% vs Amazon&apos;s 15-20%</strong>. Top Rated Sellers get an additional 20% fee discount. More margin stays in your pocket.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/services/hero/ebay-hq.jpg" alt="eBay Headquarters" style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM -> SOLUTION (3x2 grid) ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">YOUR PROBLEMS. OUR SOLUTIONS.</span>
            <h2 className="typo-h2">Stop Struggling With eBay. Start Scaling.</h2>
            <p className="typo-subtext">Every eBay seller hits these walls. We break through them for you — daily, systematically, profitably.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "eBay algorithm is confusing?",
                solution: "We reverse-engineer Cassini daily. Your listings rank because we know exactly what eBay rewards — item specifics, handling time, price competitiveness, and seller metrics.",
              },
              {
                problem: "Account health issues?",
                solution: "Daily monitoring of defect rates, late shipments, and case metrics. We catch problems before eBay does. Our clients maintain under 0.3% defect rates consistently.",
              },
              {
                problem: "Repricing takes hours every day?",
                solution: "Our automated tools reprice 24/7 within rules you approve. Minimum margins protected, competitive positioning maintained. You never touch a pricing spreadsheet again.",
              },
              {
                problem: "Feedback management is a nightmare?",
                solution: "Automated feedback requests after every successful delivery. Negative feedback? We respond professionally, request revisions, and resolve the root cause immediately.",
              },
              {
                problem: "Returns eating your profits?",
                solution: "Proactive return prevention through accurate listings and fast shipping. When returns happen, we process them same-day, coordinate supplier credits, and protect your metrics.",
              },
              {
                problem: "Can't achieve Top Rated status?",
                solution: "We manage every metric eBay evaluates — transaction volume, on-time shipping, defect rate, tracking upload. Most accounts qualify within 90 days under our management.",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="card-hover"
                style={{
                  borderRadius: "10px",
                  padding: "22px",
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-dark)", marginBottom: "10px", lineHeight: 1.4 }}>
                  <span style={{ color: "#dc2626" }}>&#x2717;</span>{" "}{item.problem}
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

      {/* ── WHAT YOU GET (4x2 icon grid) ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FULL SERVICE</span>
            <h2 className="typo-h2">Everything We Handle. Everything You Don&apos;t.</h2>
            <p className="typo-subtext">From product sourcing to returns processing — your entire eBay operation, managed by specialists who do this every day.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {whatYouGet.map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <img src={item.icon} alt={item.title} style={{ width: "56px", height: "56px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE HONEST COMPARISON</span>
            <h2 className="typo-h2">Gosellify vs Self-Managing vs Other Agencies</h2>
            <p className="typo-subtext">eBay rewards consistency. Most sellers burn out in 3 months. We&apos;ve been doing it for 3+ years across 20+ marketplaces.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 700, fontSize: "13px", backgroundColor: "#fff", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary)", minWidth: "120px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#fff", borderBottom: "2px solid #e8e8e8", minWidth: "110px" }}>Self-Managing</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#fff", borderBottom: "2px solid #e8e8e8", minWidth: "110px" }}>Other Agencies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
                    <td style={{ padding: "12px 20px", fontSize: "13px", fontWeight: 500, borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>{row.feature}</td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle", backgroundColor: i % 2 === 0 ? "rgba(22,163,74,0.04)" : "rgba(22,163,74,0.07)" }}>
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
            <h2 className="typo-h2">Everything You Need to Know About eBay</h2>
          </div>

          <div style={{ maxWidth: "750px", margin: "24px auto 0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f6f7f9",
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

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
