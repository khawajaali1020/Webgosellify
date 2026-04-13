"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "End-to-end WFS product prep", us: true, diy: "You learn", others: "Basic" },
  { feature: "Inbound shipping plan optimization", us: true, diy: "Trial & error", others: "Limited" },
  { feature: "Inventory forecasting & planning", us: true, diy: false, others: "Software only" },
  { feature: "Storage fee minimization", us: true, diy: "You monitor", others: false },
  { feature: "Pro Seller badge qualification", us: true, diy: "Uncertain", others: "Not guaranteed" },
  { feature: "Listing optimization for WFS", us: true, diy: "Generic", others: "Basic" },
  { feature: "Returns & customer service handling", us: true, diy: "You handle", others: "Extra fee" },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/order-fulfillment.png", title: "Product Prep", desc: "Every item prepped to Walmart's exact WFS standards — labeling, packaging, poly bagging, bundling. Zero rejections at the warehouse." },
  { img: "/images/services/icons/inventory.png", title: "Inbound Shipping", desc: "Shipping plans created, carrier selected, pallets built to spec. We get your inventory into Walmart warehouses fast and at the lowest cost." },
  { img: "/images/services/icons/product-research.png", title: "Inventory Planning", desc: "Demand forecasting, reorder points, seasonal stocking — we ensure you never run out of stock and never overstock." },
  { img: "/images/services/icons/marketing.png", title: "Storage Optimization", desc: "Walmart charges storage fees just like Amazon. We rotate inventory, manage aged stock, and keep your storage costs minimal." },
  { img: "/images/services/icons/safety.png", title: "Listing Optimization", desc: "WFS listings get priority placement. We optimize every listing to maximize the WFS advantage — faster delivery badge, higher rankings." },
  { img: "/images/services/icons/customer-support.png", title: "Customer Support", desc: "Walmart handles WFS shipping, but we handle everything else — buyer messages, feedback, returns coordination, and escalations." },
  { img: "/images/services/icons/account-health.png", title: "Account Health", desc: "WFS requires strict compliance. We monitor every metric, resolve issues proactively, and maintain your Pro Seller eligibility." },
  { img: "/images/services/icons/scalability.png", title: "Scaling Strategy", desc: "Start with 20 SKUs in WFS, scale to 200+. We identify which products benefit most from WFS and expand your catalog strategically." },
];

const faqs = [
  {
    question: "What is Walmart Fulfillment Services (WFS)?",
    answer: "WFS is Walmart's version of Amazon FBA. You send your inventory to Walmart's warehouses, and they handle storage, picking, packing, shipping, and customer returns. Your listings get faster delivery badges and higher search placement — similar to Prime on Amazon.",
  },
  {
    question: "How is WFS different from Amazon FBA?",
    answer: "WFS has lower storage fees, no long-term storage surcharges (yet), fewer sellers competing, and Walmart's growing marketplace gives you first-mover advantage. The prep requirements are different though — Walmart has its own labeling and packaging standards that must be followed exactly.",
  },
  {
    question: "What are WFS prep requirements?",
    answer: "Products must have scannable barcodes, proper packaging (no loose items), correct labeling format, and meet Walmart's dimension and weight limits. Hazmat, fragile, and oversized items have additional requirements. We handle all of this — your products arrive at Walmart warehouse-ready.",
  },
  {
    question: "How much does WFS cost?",
    answer: "WFS fulfillment fees are competitive with FBA and often lower. Storage fees are also lower than Amazon. The exact cost depends on product size, weight, and storage duration. We optimize your product selection and inventory turnover to keep your total WFS costs minimal.",
  },
  {
    question: "What is the Pro Seller badge and why does it matter?",
    answer: "The Pro Seller badge is Walmart's trust signal — like a 'Top Rated' status. It requires 90-day track record, fast shipping, low cancellation rate, and quality listings. WFS automatically qualifies you for faster shipping. We manage the other metrics to earn and keep your badge.",
  },
  {
    question: "Can you help me transition from FBA to WFS?",
    answer: "Yes, we help Amazon sellers expand to WFS regularly. We handle the entire transition — account setup, listing migration, inventory prep, shipping plans, and ongoing management. Most sellers see WFS as a new revenue channel, not a replacement for FBA.",
  },
  {
    question: "What happens with returns on WFS?",
    answer: "Walmart handles the physical return process for WFS orders. We manage the customer communication, refund decisions, and restocking coordination. We also track return rates by product to identify and address any quality or listing accuracy issues.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in periods. Your inventory remains in Walmart's warehouses regardless of whether you use our management service. We earn your business through results, not contracts.",
  },
];


export default function WalmartWFSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART FULFILLMENT SERVICES (WFS)</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Walmart Fulfillment Services — <span style={{ color: "#0071dc" }}>Let Walmart Ship For You</span>
              </h1>
              <p className="typo-body" style={{ marginBottom: "16px", fontSize: "17px" }}>
                WFS is Walmart&apos;s version of FBA. Your products stored in Walmart warehouses, shipped with 2-day delivery, Pro Seller badge eligible. We handle every step — prep, ship, optimize, scale.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: "20px" }}>
                {[
                  "Zero prep rejections",
                  "Pro Seller badge ready",
                  "Lower fees than FBA",
                  "2-day delivery badge",
                  "Pay from profits only",
                  "Full WFS management",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "12px", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#555" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/message/Q6XJRMT4HKTBF1"
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
                src="/svg/wholesale.svg"
                alt="Walmart WFS Services"
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
            <p className="typo-subtext">WFS is a massive advantage — if you do it right. Most sellers waste time and money on prep rejections and storage fees. We eliminate both.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "WFS prep requirements are confusing?",
                solution: "We've prepped thousands of WFS shipments. Labeling, packaging, poly bags, bundles — every item meets Walmart's exact spec. Zero rejections, guaranteed.",
              },
              {
                problem: "Shipping to Walmart warehouses is expensive?",
                solution: "Optimized shipping plans, negotiated carrier rates, pallets built to spec. We cut your inbound costs by 30%+ compared to self-shipping.",
              },
              {
                problem: "Storage fees eating your margins?",
                solution: "We forecast demand, rotate inventory, and liquidate aged stock before fees spike. Our clients average 40% lower storage costs than self-managed sellers.",
              },
              {
                problem: "Can't get the Pro Seller badge?",
                solution: "WFS handles shipping speed. We handle everything else — listing quality, response time, order defect rate. Pro Seller badge typically earned within 90 days.",
              },
              {
                problem: "Inventory keeps going out of stock?",
                solution: "Demand forecasting, seasonal trends, reorder point alerts — we ensure you never stock out during peaks and never overstock during lows.",
              },
              {
                problem: "WFS returns are complicated?",
                solution: "Walmart handles WFS returns physically, but we track every return, manage customer communication, and identify return-rate patterns to fix root causes.",
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
            <h2 className="typo-h2">How We Manage Your WFS Operation</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              From product prep to warehouse delivery — a streamlined system that turns WFS into your <strong>competitive advantage</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Prep & Label", desc: "Every product prepped to Walmart's exact WFS standards. Barcodes, packaging, labeling — done right the first time." },
              { img: "/images/process/get-access.png", title: "Ship to WFS", desc: "Optimized shipping plans, carrier negotiation, pallet building. Your inventory lands in Walmart warehouses fast and cheap." },
              { img: "/images/process/planning.png", title: "Walmart Fulfills", desc: "Walmart stores, picks, packs, and ships your orders with 2-day delivery. You earn the fast shipping badge automatically." },
              { img: "/images/process/growth.png", title: "Scale & Earn", desc: "Inventory replenished, new SKUs added, storage optimized. Your WFS operation grows while costs stay controlled." },
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
            <p className="typo-subtext">From prep table to Walmart warehouse — your entire WFS operation, managed by experts who do this every day.</p>
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
            Profit sharing model — zero management fees until your WFS store is profitable. Our success is tied directly to yours.
          </p>
          <a
            href="https://wa.me/message/Q6XJRMT4HKTBF1"
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

      {/* ── Gosellify VS OTHERS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE HONEST COMPARISON</span>
            <h2 className="typo-h2">Why WFS Sellers Choose Us Over Going Solo</h2>
            <p className="typo-subtext">WFS prep errors waste time and money. Storage mismanagement kills margins. We eliminate both problems from day one.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Self-Managing WFS</th>
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
            <h2 className="typo-h2">Everything You Want to Know About WFS</h2>
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
