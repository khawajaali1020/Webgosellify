"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceConfidence from "@/components/services/ServiceConfidence";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Data-driven product validation before launch", us: true, diy: "Guesswork", others: "Basic tools" },
  { feature: "Daily PPC bid optimization (not weekly)", us: true, diy: "Weekly if lucky", others: "Automated only" },
  { feature: "A+ Content & listing split-testing", us: true, diy: "You write it", others: "Template-based" },
  { feature: "Inventory forecasting & reorder alerts", us: true, diy: false, others: false },
  { feature: "Brand Registry setup & IP protection", us: true, diy: "You figure out", others: "Not included" },
  { feature: "Supplier sourcing & price negotiation", us: true, diy: "You do it", others: "Referrals only" },
  { feature: "Account health monitoring 24/7", us: true, diy: "You check daily", others: "Monthly report" },
  { feature: "Profit sharing — pay from profits only", us: true, diy: "N/A", others: false },
  { feature: "24/7 WhatsApp support", us: true, diy: false, others: "Email only" },
];

const whatYouGet = [
  { img: "/images/services/icons/product-research.png", title: "Product Research", desc: "Helium 10, Jungle Scout, and proprietary data. Demand gaps, competition depth, margin math — every product validated before you spend a dollar." },
  { img: "/images/services/icons/marketing.png", title: "PPC Management", desc: "Sponsored Products, Brands, and Display — optimized daily. Keyword discovery, negative pruning, ACoS tracking at SKU level. Average 20-25% ACoS." },
  { img: "/images/services/icons/order-fulfillment.png", title: "Listing Optimization", desc: "Keyword-rich titles, benefit-driven bullets, backend search terms, and conversion copy. Tested and iterated until rankings climb." },
  { img: "/images/services/icons/return-handling.png", title: "A+ Content", desc: "Enhanced Brand Content with professional layouts, comparison charts, and brand storytelling. Proven to boost conversion rates 5-10%." },
  { img: "/images/services/icons/inventory.png", title: "Inventory Planning", desc: "Sales velocity tracking, lead time calculations, seasonal forecasting. Reorder alerts fire weeks early. Stockouts do not happen on our watch." },
  { img: "/images/services/icons/safety.png", title: "Brand Registry", desc: "Full setup — trademark guidance, application, verification. Unlocks A+ Content, Sponsored Brands, and Brand Analytics. Your brand, protected." },
  { img: "/images/services/icons/account-health.png", title: "Account Health", desc: "Performance metrics, policy compliance, IP complaint prevention — monitored proactively. Problems caught before they become suspensions." },
  { img: "/images/services/icons/scalability.png", title: "Growth Strategy", desc: "Product line expansion, new category launches, international marketplaces. We build you a brand asset worth selling for 3-5x annual profit." },
];

const faqs = [
  {
    question: "How is this different from dropshipping or wholesale?",
    answer: "FBA private label means you own the brand. You are not reselling someone else's product — you are building a branded asset that appreciates in value. Dropshipping has thin margins and zero brand equity. Wholesale means competing with 20 other sellers on the same listing. Private label means you own the listing, control the price, and build long-term value.",
  },
  {
    question: "How much capital do I need to get started?",
    answer: "A strong starting budget is $10,000-$15,000 covering initial inventory, product photography, listing optimization, and PPC launch. You can start with $5,000 but growth will be slower. The key is having enough runway to iterate — your first product teaches you the market, your second product pays you back.",
  },
  {
    question: "When will I start seeing actual profit?",
    answer: "Most FBA brands see consistent profit within 3-6 months. The first 1-2 months cover product research, sourcing, and launch. Once listings are optimized and PPC campaigns are dialed in, revenue compounds. Our clients typically break even by month 2-3 and profit from month 4 onward.",
  },
  {
    question: "What if my first product flops?",
    answer: "We validate thoroughly before launch, but markets shift. If a product underperforms, we analyze the data, optimize listing copy, adjust PPC strategy, and pivot pricing. If needed, we liquidate strategically and redirect capital to stronger opportunities. The goal is never to let one product sink the business.",
  },
  {
    question: "How do you manage PPC without burning my budget?",
    answer: "Daily — not weekly. We create Sponsored Products, Brands, and Display campaigns, then monitor ACoS at the SKU level every single day. Bids get adjusted, high-converting keywords get scaled, waste gets pruned. Most agencies check PPC once a week. We check it every day because that is where the money is.",
  },
  {
    question: "What happens if I run out of stock?",
    answer: "Stockouts destroy your ranking and waste all the PPC spend you invested to get there. Our inventory system tracks sales velocity, supplier lead times, and seasonal patterns to calculate exact reorder dates. We send alerts weeks before you run low — stockouts do not happen on our watch.",
  },
  {
    question: "Do you help with Brand Registry and trademarks?",
    answer: "End-to-end. We guide you through trademark filing, handle the Brand Registry application, and set up all the tools it unlocks — A+ Content, Sponsored Brands, Brand Analytics, and brand protection against hijackers. Most clients get approved within 2-4 weeks.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no contracts and no lock-in periods. Our retention rate is over 90% because the results speak for themselves — but you are free to leave whenever you choose. Zero exit fees, zero hassle. We keep clients by performing, not by trapping them.",
  },
];


export default function AmazonFBAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON FBA MANAGEMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Launch Your Amazon Brand. We Handle Everything From <span style={{ color: "var(--color-primary)" }}>Research to Revenue</span>.
          </h1>
          <p className="typo-body" style={{ marginBottom: "16px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Product research, supplier sourcing, listing creation, PPC campaigns, inventory planning, Brand Registry — all handled by our team daily. You own the brand. We grow it into a sellable asset.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "24px" }}>
            $10M+ revenue managed across 50+ brands. Your brand could be next.
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
              Launch Your Brand — Free Consultation
            </a>
            <Link href="/pricing" className="btn-outline">
              See Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Data-driven research", "Daily PPC optimization", "A+ Content included", "Brand Registry setup", "Pay from profits only", "A-Z brand management"].map((item) => (
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
            <p className="typo-subtext">Whether you&apos;re launching your first product or scaling an existing brand — here&apos;s why 50+ brand owners chose Gosellify to run their FBA operation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {[
              {
                problem: "Don't know which product to sell?",
                solution: "Every product goes through our validation framework — demand gaps, competition depth, margin math, supplier reliability. We don't launch losers. 80%+ of our product picks turn profitable within 90 days.",
              },
              {
                problem: "PPC ads burning money with no sales?",
                solution: "Our PPC team optimizes bids daily — not weekly. Keyword discovery, negative pruning, ACoS tracking at SKU level. Average 20-25% ACoS across our entire portfolio. Your ad spend works harder.",
              },
              {
                problem: "Listing buried on page 5?",
                solution: "Keyword-rich titles, benefit-driven bullets, A+ Content, and backend search terms — all optimized for Amazon algorithm and human buyers. Rankings climb within weeks, not months.",
              },
              {
                problem: "Inventory keeps running out?",
                solution: "Our inventory system tracks velocity, lead times, and seasonality. Reorder alerts fire weeks before you run low. Stockouts destroy ranking — we prevent them before they happen.",
              },
              {
                problem: "Brand Registry feels complicated?",
                solution: "We handle the entire process — trademark guidance, application, verification, and setup of A+ Content, Sponsored Brands, and Brand Analytics. Most clients approved within 2-4 weeks.",
              },
              {
                problem: "Competitors copying your listing?",
                solution: "Brand Registry + IP protection + listing monitoring. Hijackers get removed. Copycats get reported. Your listing, your Buy Box, your revenue — protected around the clock.",
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

      {/* ── CLIENT RESULTS / SOCIAL PROOF ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
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
                  title="Client Result - Amazon FBA"
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
                  title="Client Result - Amazon FBA Revenue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">How You Build a Profitable FBA Brand With Us</h2>
            <p className="typo-subtext" style={{ maxWidth: "700px" }}>
              Source product at $8. Sell on Amazon for $25. Amazon fees + FBA = $9. <strong>Your profit: $8 per unit</strong>. Sell 80 units/day = <strong>$19,200/month</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Research & Validate", desc: "Deep market analysis finds products with strong demand, low competition, and healthy margins. Every product validated before you invest a dollar." },
              { img: "/images/process/get-access.png", title: "Source & Launch", desc: "Verified suppliers, negotiated pricing, optimized listings, professional photography. Your product goes live ready to convert from day one." },
              { img: "/images/process/planning.png", title: "Optimize & Rank", desc: "PPC campaigns drive traffic. A+ Content converts visitors. SEO pushes organic rankings. Your listing climbs page by page until it dominates." },
              { img: "/images/process/growth.png", title: "Scale & Dominate", desc: "Expand product line, enter new categories, launch international. Build a brand asset worth 3-5x annual profit at exit." },
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
            <p className="typo-subtext">From product research to brand scaling — your entire FBA business, managed daily by our team.</p>
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
            Stop Guessing. Start <span style={{ color: "var(--color-primary)" }}>Building a Real Brand</span>.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "550px", margin: "0 auto 20px" }}>
            Profit sharing model — zero management fees until your FBA brand is profitable. We invest our time and expertise upfront. You pay from results.
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
            <h2 className="typo-h2">Why Smart Sellers Choose Expert Management Over DIY</h2>
            <p className="typo-subtext">FBA looks simple until you realize product research, PPC, inventory, listings, and account health is 5 full-time jobs. We do all 5.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Self-Managing</th>
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
            <h2 className="typo-h2">Everything You Want to Know Before Launching</h2>
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
