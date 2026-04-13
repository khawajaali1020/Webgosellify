"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Etsy search algorithm expertise", us: true, diy: false, others: "Basic" },
  { feature: "Print-on-demand integration & management", us: true, diy: "Self-setup", others: "Limited" },
  { feature: "Original design creation (in-house)", us: true, diy: false, others: "Extra cost" },
  { feature: "All 13 tags optimized per listing", us: true, diy: "Trial & error", others: "Partial" },
  { feature: "Star Seller badge strategy", us: true, diy: "Self-managed", others: false },
  { feature: "Etsy Ads campaign management", us: true, diy: "Your budget at risk", others: "Extra fee" },
  { feature: "Seasonal trend forecasting", us: true, diy: false, others: false },
  { feature: "Customer service & review management", us: true, diy: "Your time", others: "Extra fee" },
  { feature: "Dedicated Etsy account manager", us: true, diy: false, others: false },
  { feature: "WhatsApp direct support", us: true, diy: false, others: false },
];

const whatYouGet = [
  { icon: "/images/services/icons/personal-manager.png", title: "Shop Setup & Branding", desc: "Professional Etsy shop creation with optimized policies, branding, banner design, and about section that builds buyer trust from day one." },
  { icon: "/images/services/icons/product-research.png", title: "Product Listing Creation", desc: "High-converting listings with professional mockups, detailed descriptions, and strategic pricing that turns browsers into buyers." },
  { icon: "/images/services/icons/marketing.png", title: "Etsy SEO Mastery", desc: "Keyword research, long-tail title optimization, all 13 tags utilized, accurate attributes. We reverse-engineer what Etsy ranks." },
  { icon: "/images/services/icons/order-fulfillment.png", title: "Print-on-Demand Setup", desc: "Full Printful, Printify, or Gooten integration. We pick the provider with the best quality-to-margin ratio for your niche." },
  { icon: "/images/services/icons/inventory.png", title: "Order Fulfillment", desc: "Automated order routing to POD suppliers. Tracking uploaded, customers notified, quality monitored on every single order." },
  { icon: "/images/services/icons/customer-support.png", title: "Customer Service", desc: "Every buyer message answered within hours. Returns handled. Refunds processed. Your review rating stays pristine." },
  { icon: "/images/services/icons/calculation.png", title: "Etsy Ads & Marketing", desc: "Strategic ad spend, social media promotion, seasonal sale planning, and coupon campaigns that drive traffic during peak buying windows." },
  { icon: "/images/services/icons/scalability.png", title: "Growth Strategy", desc: "New product lines, trending niche expansion, Star Seller roadmap, and scaling plan to take you from 10 sales to 100+ per month." },
];

const faqs = [
  {
    question: "Is dropshipping actually allowed on Etsy?",
    answer: "Yes. Etsy allows print-on-demand products with your original designs, which is the model we use. You are listed as the seller and your designs are the creative work. This is fully compliant with Etsy's handmade policy. We do not do generic retail dropshipping on Etsy.",
  },
  {
    question: "Do I need any design skills?",
    answer: "Zero. Our in-house design team creates all product designs for you. We research trending styles, seasonal themes, and buyer search patterns to create designs that actually sell. You approve, we upload.",
  },
  {
    question: "How is Etsy SEO different from Amazon or Google?",
    answer: "Etsy uses its own algorithm that weighs recency, relevancy, listing quality score, shop trust, and customer experience. Tags matter more than keywords in descriptions. Titles need long-tail phrases, not keyword stuffing. We know exactly how Etsy ranks listings because we test it daily across 50+ shops.",
  },
  {
    question: "How long until I see my first sale?",
    answer: "Most shops see their first sale within 2-3 weeks of launch. Consistent daily sales typically begin within 60-90 days as your listings gain traction in Etsy search. We accelerate this with Etsy Ads and social media promotion from day one.",
  },
  {
    question: "What products sell best on Etsy right now?",
    answer: "Custom t-shirts, personalized gifts (mugs, tumblers, jewelry), wall art prints, digital downloads, tote bags, and home decor consistently perform. We track trending niches weekly and add new products based on actual search demand data.",
  },
  {
    question: "How much does it cost to start?",
    answer: "Etsy has the lowest barrier of any marketplace. Listing fees are $0.20 per item. With print-on-demand, there is zero inventory cost. Your main investment is our management service and a small Etsy Ads budget ($5-10/day to start). Total startup: under $500.",
  },
  {
    question: "What is Star Seller and why does it matter?",
    answer: "Star Seller is Etsy's badge for top-performing shops. It requires 95%+ on-time shipping, 95%+ message response rate, and $300+ in sales over 3 months. Shops with the badge get higher search placement and more buyer trust. We manage every metric to earn and keep it.",
  },
  {
    question: "Can you manage my existing Etsy shop?",
    answer: "Absolutely. We audit your current listings, fix SEO issues, optimize tags and titles, improve product photos, and implement a growth strategy. Most existing shops see a 40-60% increase in traffic within the first 30 days of our management.",
  },
];


export default function EtsyDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered, no right column) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "10px", display: "block" }}>ETSY DROPSHIPPING & SHOP MANAGEMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "16px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Turn Original Designs Into a Profitable Etsy Business — <span style={{ color: "var(--color-primary)" }}>Without Touching Inventory</span>
          </h1>
          <p className="typo-body" style={{ marginBottom: "14px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            90+ million buyers are searching Etsy for unique products right now. We create the designs, optimize for Etsy&apos;s algorithm, manage print-on-demand fulfillment, and scale your shop — you collect the profits.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Original designs. Zero inventory. Full shop management. Star Seller strategy.
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
            {["In-House Design Team", "Star Seller Experts", "Etsy SEO Specialists", "Print-on-Demand Pros"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ETSY IS DIFFERENT (2-column: numbered items + dark card) ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">MARKETPLACE INSIGHT</span>
            <h2 className="typo-h2">Why Etsy Is Different From Every Other Marketplace</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" style={{ marginTop: "32px" }}>
            {/* Left: 4 numbered differentiators */}
            <div>
              {[
                {
                  num: "1",
                  title: "Handmade & Vintage Focus",
                  desc: "Etsy buyers expect authenticity. Generic products get buried. Original designs and unique products dominate because the algorithm rewards creativity over volume.",
                },
                {
                  num: "2",
                  title: "Etsy SEO Is Completely Unique",
                  desc: "Forget Amazon keywords. Etsy ranks by recency, tag relevancy, listing quality score, and shop trust. 13 tags per listing, long-tail titles, and attribute accuracy decide your visibility.",
                },
                {
                  num: "3",
                  title: "Print-on-Demand Friendly",
                  desc: "Etsy is the only major marketplace where print-on-demand is fully supported and encouraged. Custom t-shirts, mugs, wall art — manufactured only when ordered, shipped directly to buyers.",
                },
                {
                  num: "4",
                  title: "Lower Competition Than Amazon",
                  desc: "Amazon has 9.7 million sellers. Etsy has 7.5 million — but far fewer per niche. A well-optimized shop can dominate its category within months, not years.",
                },
              ].map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    backgroundColor: "var(--color-primary)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px", fontWeight: 700, flexShrink: 0, marginTop: "2px",
                  }}>
                    {item.num}
                  </div>
                  <div>
                    <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                    <p className="typo-small">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/services/hero/etsy-platform.jpg" alt="Etsy Marketplace" style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET (4x2 grid) ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">FULL SERVICE</span>
            <h2 className="typo-h2">Everything We Handle for Your Etsy Shop</h2>
            <p className="typo-subtext">From design to delivery — your entire Etsy business, managed by specialists who live and breathe this marketplace.</p>
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

      {/* ── HOW IT WORKS (4 steps with process icons) ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">THE PROCESS</span>
            <h2 className="typo-h2">From Zero to Sales in 4 Steps</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "36px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Strategy & Setup", desc: "We research your niche, set up your Etsy shop with professional branding, and build your product roadmap." },
              { img: "/images/process/planning.png", title: "Design & List", desc: "Our team creates original designs, professional mockups, and SEO-optimized listings across your product line." },
              { img: "/images/process/get-access.png", title: "Launch & Promote", desc: "Products go live with Etsy Ads and social promotion. Orders route automatically to print-on-demand partners." },
              { img: "/images/process/growth.png", title: "Scale & Profit", desc: "We add trending products weekly, optimize ad spend, and push for Star Seller status as your revenue grows." },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                  <img src={item.img} alt={item.title} style={{ width: "72px", height: "72px", objectFit: "contain" }} />
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
            <h2 className="typo-h2">Gosellify vs DIY vs Other Agencies</h2>
            <p className="typo-subtext">Etsy is not a set-it-and-forget-it marketplace. Here&apos;s why sellers who take it seriously choose us.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 700, fontSize: "13px", backgroundColor: "#fff", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary)", minWidth: "120px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#fff", borderBottom: "2px solid #e8e8e8", minWidth: "110px" }}>DIY</th>
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
            <h2 className="typo-h2">Everything You Need to Know About Etsy</h2>
          </div>

          <div style={{ maxWidth: "750px", margin: "24px auto 0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? "#f6f7f9" : "#fff",
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
