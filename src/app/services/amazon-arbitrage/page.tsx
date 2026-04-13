"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Daily product sourcing by experts", us: true, diy: false, others: "Limited catalog" },
  { feature: "Buy Box winning strategies", us: true, diy: "Trial & error", others: "Basic" },
  { feature: "Same-day order purchasing", us: true, diy: "You do it daily", others: "Delayed" },
  { feature: "Own warehouse reboxing included", us: true, diy: "You arrange", others: "$3-5 per order" },
  { feature: "IP complaint prevention system", us: true, diy: "High risk", others: "Reactive" },
  { feature: "Returns & refund management", us: true, diy: "You handle", others: "Extra fee" },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "Profit within first 7 days", us: true, diy: "Uncertain", others: "2-4 weeks" },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Product Sourcing", desc: "50+ products researched daily from Walmart, Target, Costco, Home Depot. Only winners make it to your store." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Listing & Buy Box", desc: "SEO-optimized listings, competitive repricing, and Buy Box strategies that keep you ahead." },
  { img: "/images/services/icons/inventory.png", title: "Order Fulfillment", desc: "Customer orders → we buy → warehouse reboxes → delivered. Same-day processing, every order." },
  { img: "/images/services/icons/return-handling.png", title: "Returns & Refunds", desc: "Full return cycle handled. Restocking, refunds, and P&L tracking — nothing falls through." },
  { img: "/images/services/icons/safety.png", title: "Account Protection", desc: "Amazon-branded packaging, zero retailer traces, IP monitoring. Your account stays safe." },
  { img: "/images/services/icons/customer-support.png", title: "Buyer Communication", desc: "Every message answered within 4 hours. A-to-Z claims handled. Feedback managed." },
  { img: "/images/services/icons/marketing.png", title: "PPC Campaigns", desc: "Sponsored Products ads, keyword targeting, bid optimization. We drive traffic, you collect profit." },
  { img: "/images/services/icons/scalability.png", title: "Scale on Autopilot", desc: "Started with 10 SKUs? We'll scale to 100+. New categories, higher volume, bigger margins." },
];

const faqs = [
  {
    question: "Is Amazon 2-step dropshipping legal?",
    answer: "Yes, 100% legal. Amazon allows selling products you source from retail stores as long as you ship with proper packaging (no third-party branding). Our warehouse handles all reboxing with Amazon-compliant packaging.",
  },
  {
    question: "How is this different from regular dropshipping?",
    answer: "Regular dropshipping ships directly from the retailer to the customer — which violates Amazon's policies. With 2-step, we route everything through our warehouse where we remove retailer branding and repackage in Amazon-branded boxes. This keeps your account 100% safe.",
  },
  {
    question: "How much capital do I need to start?",
    answer: "Minimum $3,000-$5,000 working capital. Amazon pays you 14 days after delivery, so you need funds to purchase products when customers order. The more capital you have, the more orders we can process daily. Most clients start seeing returns within the first week.",
  },
  {
    question: "What ROI can I realistically expect?",
    answer: "Our average ROI is 30-40% after ALL expenses — Amazon fees, product cost, shipping, warehouse reboxing, everything. On a $5,000 investment, that's $1,500-$2,000 profit per cycle. We only list products that meet our minimum margin threshold.",
  },
  {
    question: "What if a product gets an IP complaint?",
    answer: "Our research team screens every product against known IP-restricted brands before listing. If a complaint does occur, we immediately remove the listing, file an appeal, and replace it with a safe alternative. In 3+ years, our IP complaint rate is under 0.5%.",
  },
  {
    question: "Where do you source products from?",
    answer: "Walmart, Target, Costco, Sam's Club, Home Depot, Lowe's, and other major US retailers. We use multiple sourcing channels to find the best prices and cross-reference against Amazon to ensure strong margins.",
  },
  {
    question: "Do you really offer profit sharing?",
    answer: "Yes. You pay nothing upfront for our management service. We take a percentage of the profit we generate for you. If there's no profit, you owe us nothing. This is how confident we are in our process — we have skin in the game.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in periods. Use our service as long as you want. Our retention rate is 90%+ because the results speak for themselves — but you're free to leave whenever you choose.",
  },
];


export default function AmazonArbitragePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON 2-STEP DROPSHIPPING</span>
              <h1 className="typo-h1" style={{ marginBottom: "14px" }}>
                Your Amazon Store, Managed by Us. <span style={{ color: "var(--color-primary)" }}>Profit by You.</span>
              </h1>
              <p className="typo-body" style={{ marginBottom: "16px", fontSize: "17px" }}>
                We source products, list them on your store, buy when customers order, rebox at our warehouse, and ship with Amazon packaging. You do nothing. You keep the profit.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: "20px" }}>
                {[
                  "$0 inventory needed",
                  "Profit in 7 days",
                  "30-40% profit margins",
                  "Own US warehouse",
                  "Pay from profits only",
                  "A-Z store management",
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
                src="/svg/dropshipping_hero_v4.svg"
                alt="Amazon Dropshipping Services"
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
            <p className="typo-subtext">Whether you&apos;re starting your first online business or looking for a hands-off income stream — here&apos;s why 250+ clients chose Amazon dropshipping with Gosellify.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "Don't know where to start?",
                solution: "We set up your store and start selling within 7 days. 250+ clients started from zero with us.",
              },
              {
                problem: "Traditional business needs $50K+?",
                solution: "Start with $3K-$5K. Zero inventory risk. 30-40% ROI per cycle. See profit in week one.",
              },
              {
                problem: "Product research takes 6 hrs/day?",
                solution: "Our team sources 50+ validated products daily. You never touch a spreadsheet.",
              },
              {
                problem: "Wrong product = account suspended?",
                solution: "Every product IP-screened. Own US warehouse reboxes with Amazon packaging. Under 0.5% complaint rate.",
              },
              {
                problem: "It's a full-time job but you have one?",
                solution: "We run your store 24/7 — orders, returns, buyers, PPC. You check profits once a week.",
              },
              {
                problem: "Other agencies charge upfront?",
                solution: "We offer profit sharing — you pay nothing until your store is profitable. Zero risk on your side.",
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
                  <span style={{ color: "#dc2626" }}>✗</span>{" "}{item.problem}
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-text-light)", margin: 0, lineHeight: 1.6, paddingLeft: "2px", borderLeft: "3px solid var(--color-primary)", marginLeft: "0" }}>
                  <span style={{ display: "block", paddingLeft: "12px" }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>→</span>{" "}{item.solution}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS 2-STEP DROPSHIPPING ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Video */}
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://player.vimeo.com/video/912074268?badge=0&autopause=0&title=0&byline=0&portrait=0"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="How Amazon 2-Step Dropshipping Works"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WHAT IS 2-STEP DROPSHIPPING?</span>
              <h2 className="typo-h2" style={{ marginBottom: "14px" }}>
                Sell on Amazon Without Holding Any Inventory
              </h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Customer orders from your Amazon store → we buy from <strong>Walmart, Sam&apos;s Club, or Costco</strong> → ship to our warehouse → we <strong>remove retailer packaging</strong>, rebox in Amazon-compliant packaging → deliver to your customer.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                The customer receives a clean, professionally packaged order with zero trace of the original retailer. You keep <strong>30-40% profit margin</strong> on every sale. No inventory, no risk.
              </p>
              <p className="typo-body">
                This 2-step process (retailer → warehouse → customer) keeps your account <strong>100% Amazon-compliant</strong> while you run a profitable business from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT RESULTS / SOCIAL PROOF ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">REAL RESULTS</span>
            <h2 className="typo-h2">See What Our Clients Are Achieving</h2>
            <p className="typo-subtext">Real stores. Real revenue. Real clients sharing their results publicly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginTop: "28px", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
            {/* Video 1 */}
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/2TxAECYAyM0"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Client Result - Amazon Dropshipping"
                />
              </div>
            </div>

            {/* Video 2 */}
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/9DqDFAGLPrc"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Client Result - Amazon Store Revenue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">How You Make Money With 2-Step Dropshipping</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              Sell on Amazon for $40. Buy from Walmart for $20. Warehouse reboxes and ships for $10. <strong>Your profit: $10 per unit</strong>. Sell 50 units a day = <strong>$15,000/month</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "We List, You Sell", desc: "We find winning products and list them on your Amazon store. Sales start within days." },
              { img: "/images/process/get-access.png", title: "Customer Orders", desc: "A customer buys from your store. We immediately purchase the item from the retailer." },
              { img: "/images/process/planning.png", title: "Rebox & Ship", desc: "Our US warehouse removes all retailer branding, repackages in Amazon packaging, and ships." },
              { img: "/images/process/growth.png", title: "You Profit", desc: "Customer gets an Amazon-branded package. Amazon pays you. We scale and repeat daily." },
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
            <p className="typo-subtext">From finding products to shipping orders — your entire Amazon business, managed daily by our team.</p>
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
            Profit sharing model — zero management fees until your store is profitable. No other agency puts their money where their mouth is like this.
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
            <h2 className="typo-h2">Why 250+ Sellers Chose Us Over Doing It Themselves</h2>
            <p className="typo-subtext">Arbitrage is a daily grind. Most sellers burn out in 3 months. We&apos;ve been doing it for 3+ years.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>Gosellify</th>
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
