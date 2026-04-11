"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Full Walmart listing optimization", us: true, diy: "Trial & error", others: "Basic" },
  { feature: "Buy Box winning strategies", us: true, diy: false, others: "Limited" },
  { feature: "Daily order & fulfillment management", us: true, diy: "You do it", others: "Extra fee" },
  { feature: "Walmart PPC campaign management", us: true, diy: "You guess", others: "Basic setup" },
  { feature: "Account health monitoring 24/7", us: true, diy: false, others: "Weekly check" },
  { feature: "Pricing & repricing strategy", us: true, diy: "Manual", others: "Software only" },
  { feature: "Customer service & returns handling", us: true, diy: "You handle", others: "Extra fee" },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Listing Optimization", desc: "SEO-rich titles, bullet points, descriptions, and backend keywords tuned for Walmart's search algorithm. Every listing built to rank and convert." },
  { img: "/images/services/icons/inventory.png", title: "Buy Box Strategy", desc: "Dynamic repricing, fulfillment speed optimization, and seller metrics management to win and hold the Walmart Buy Box consistently." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Order Fulfillment", desc: "Every order tracked, processed, and shipped on time. Whether WFS, 3PL, or self-fulfilled — we handle the entire flow daily." },
  { img: "/images/services/icons/marketing.png", title: "Pricing & Repricing", desc: "Competitive price monitoring, margin-based repricing rules, and market analysis that keeps you profitable without racing to the bottom." },
  { img: "/images/services/icons/customer-support.png", title: "Customer Support", desc: "Every buyer message answered within 4 hours. Returns processed. Negative reviews addressed. Your seller rating stays protected." },
  { img: "/images/services/icons/account-health.png", title: "Account Health", desc: "Order defect rate, on-time shipping, valid tracking — every metric monitored daily. Issues flagged and fixed before they become problems." },
  { img: "/images/services/icons/safety.png", title: "PPC & Advertising", desc: "Walmart Sponsored Products, keyword targeting, bid optimization, and campaign scaling. We drive traffic and you collect the profit." },
  { img: "/images/services/icons/scalability.png", title: "Growth Strategy", desc: "New category expansion, product line scaling, seasonal planning, and competitive analysis. We grow your store quarter over quarter." },
];

const faqs = [
  {
    question: "How is selling on Walmart different from Amazon?",
    answer: "Walmart has different listing requirements, a unique search algorithm, stricter seller standards, and lower competition. The opportunity is massive — but the playbook is completely different from Amazon. Our team specializes in Walmart-specific strategies that most Amazon sellers miss.",
  },
  {
    question: "Do I need an existing Walmart Seller account?",
    answer: "Yes, you need an approved Walmart Seller Center account. If you do not have one yet, we can guide you through the application process. Walmart is selective about who they approve, so having expert help with your application significantly increases your approval chances.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "Minimum $3,000-$5,000 working capital depending on your business model. Walmart pays on a bi-weekly cycle, so you need funds to cover inventory and fulfillment costs. The more capital you have, the faster we can scale your store.",
  },
  {
    question: "What ROI can I expect on Walmart?",
    answer: "Walmart typically offers 25-40% profit margins depending on your product category and fulfillment method. Competition is lower than Amazon, which means healthier margins. Most clients see meaningful traction within the first 30 days of professional management.",
  },
  {
    question: "Can you manage my Walmart store alongside my Amazon store?",
    answer: "Absolutely. Many of our clients sell on both platforms. We manage both stores independently with platform-specific strategies. Cross-platform selling increases your revenue while diversifying your risk — if one account has issues, the other keeps generating income.",
  },
  {
    question: "What if my account health metrics drop?",
    answer: "We monitor your account health metrics daily. If any metric trends downward, we take immediate corrective action — whether it is shipping speed, order defect rate, or customer response time. Prevention is always easier than reinstatement.",
  },
  {
    question: "Do you handle Walmart advertising?",
    answer: "Yes, we manage Walmart Sponsored Products campaigns including keyword research, bid management, budget optimization, and performance reporting. Walmart ads are currently cheaper than Amazon PPC, which means better ROAS for your budget.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in periods. We earn your business every month through results. Our retention rate is 90%+ because our clients see consistent growth — but you are free to leave whenever you choose.",
  },
];

export default function WalmartManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART STORE MANAGEMENT</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Your Walmart Store, Run by Experts. <span style={{ color: "var(--color-primary)" }}>Profit by You.</span>
              </h1>
              <p className="typo-body" style={{ marginBottom: "16px", fontSize: "17px" }}>
                We optimize your listings, win the Buy Box, manage orders, run ads, and handle every detail of your Walmart store. You focus on growth. We handle the grind.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: "20px" }}>
                {[
                  "Full store management",
                  "Buy Box domination",
                  "25-40% profit margins",
                  "Walmart PPC experts",
                  "Pay from profits only",
                  "A-Z daily operations",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "12px", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#555" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/svg/dropshipping_hero_v4.svg"
                alt="Walmart Store Management Services"
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY THIS WORKS</span>
            <h2 className="typo-h2">Your Problems. Our Solutions.</h2>
            <p className="typo-subtext">Walmart is the fastest-growing marketplace — but it plays by different rules than Amazon. Here&apos;s why sellers trust EcomGarden to manage their stores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "New to Walmart and don't know the rules?",
                solution: "We've managed 100+ Walmart stores. Different algorithm, different policies, different game — and we know every move. You're selling within days.",
              },
              {
                problem: "Walmart works differently from Amazon?",
                solution: "Completely different listing structure, search ranking, and seller metrics. We build Walmart-native strategies — not recycled Amazon playbooks.",
              },
              {
                problem: "Listing optimization is a different beast?",
                solution: "Walmart's SEO algorithm weights attributes, content quality, and price competitiveness differently. Our listings are engineered for Walmart's specific ranking factors.",
              },
              {
                problem: "Lower traffic needs a smarter strategy?",
                solution: "Walmart has fewer sellers but also fewer buyers per category. We combine organic ranking, PPC, and pricing strategy to capture maximum market share.",
              },
              {
                problem: "Fulfillment complexity is overwhelming?",
                solution: "WFS, 3PL, self-fulfilled — each has trade-offs. We select and manage the right fulfillment method for each product to maximize speed and minimize cost.",
              },
              {
                problem: "Account health standards are strict?",
                solution: "Walmart suspends faster than Amazon for metric violations. We monitor every KPI daily and take corrective action before thresholds are breached.",
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
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">How We Grow Your Walmart Store</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              From audit to scale — a proven 4-step system that turns underperforming Walmart stores into <strong>consistent revenue machines</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Store Audit", desc: "We analyze your listings, metrics, pricing, and competition to identify every growth opportunity and fix every weakness." },
              { img: "/images/process/get-access.png", title: "Optimize & Fix", desc: "Listings rewritten, pricing adjusted, fulfillment optimized, account health issues resolved. Your store is built to compete." },
              { img: "/images/process/planning.png", title: "Launch & Scale", desc: "PPC campaigns launched, Buy Box strategies deployed, new products added. Traffic and sales start climbing within weeks." },
              { img: "/images/process/growth.png", title: "Grow & Profit", desc: "Daily management, weekly reporting, monthly strategy reviews. We scale what works and cut what does not. You collect profit." },
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
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FULL SERVICE</span>
            <h2 className="typo-h2">Everything We Handle. Everything You Don&apos;t.</h2>
            <p className="typo-subtext">From listing creation to customer service — your entire Walmart business, managed daily by our team.</p>
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

      {/* ── PROFIT SHARING BANNER ── */}
      <section style={{ padding: "45px 0", backgroundColor: "var(--color-dark)" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
            We Don&apos;t Get Paid Until <span style={{ color: "var(--color-primary)" }}>You Get Paid</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "550px", margin: "0 auto 20px" }}>
            Profit sharing model — zero management fees until your store is profitable. We have skin in the game because we believe in our results.
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
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE HONEST COMPARISON</span>
            <h2 className="typo-h2">Why Walmart Sellers Choose Us Over Going Solo</h2>
            <p className="typo-subtext">Walmart rewards consistency and expertise. Most solo sellers burn out in 90 days. We&apos;ve been scaling stores for 3+ years.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Do It Yourself</th>
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
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
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
