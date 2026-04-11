"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Niche & product research included", us: true, them: false },
  { feature: "Vetted supplier sourcing", us: true, them: "You find yourself" },
  { feature: "Branded store design", us: true, them: "Generic template" },
  { feature: "Automated fulfillment setup", us: true, them: false },
  { feature: "Conversion-optimized layout", us: true, them: false },
  { feature: "App configuration included", us: true, them: "Extra cost" },
  { feature: "Turnaround time", us: "5-10 days", them: "Weeks of trial & error" },
  { feature: "Post-launch support", us: "30 days free", them: "None" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const problemSolutions = [
  { problem: "Don't know which niche?", solution: "We do data-driven niche research using trend analysis, competition mapping, and margin calculations to find your perfect market." },
  { problem: "Supplier reliability issues?", solution: "We vet every supplier for quality, shipping speed, and reliability. We order samples and verify before connecting them to your store." },
  { problem: "Store looks unprofessional?", solution: "We design branded, conversion-focused stores with custom logos, trust badges, and premium layouts that build customer confidence." },
  { problem: "No traffic after launch?", solution: "We configure SEO, social channels, and optional ad campaigns so your store starts attracting visitors from day one." },
  { problem: "Order fulfillment headaches?", solution: "We set up fully automated fulfillment — orders go to suppliers instantly, tracking syncs automatically. Zero manual work." },
  { problem: "Can't scale past first sales?", solution: "We build scalable infrastructure with analytics, upsell funnels, and retargeting ready so you can grow without rebuilding." },
];

const faqs = [
  {
    q: "What is Shopify dropshipping and how does it work?",
    a: "Shopify dropshipping is a business model where you sell products online without holding inventory. When a customer places an order, the supplier ships the product directly to the customer. You only pay for products after you make a sale, making it a low-risk business model.",
  },
  {
    q: "How long does it take to set up a dropshipping store?",
    a: "A complete dropshipping store setup typically takes 5-10 business days depending on the number of products and customization required. This includes store design, product import, supplier setup, app configuration, and testing.",
  },
  {
    q: "Do you help with finding winning products?",
    a: "Yes. Our product research team uses advanced tools and data analysis to identify trending, high-demand products with good profit margins. We analyze competition, search volume, and market trends to find products with at least 25%+ margins after all costs.",
  },
  {
    q: "Which suppliers do you work with?",
    a: "We work with AliExpress, CJ Dropshipping, Spocket, Zendrop, and US/EU-based suppliers. We vet each supplier for product quality, shipping speed, and reliability before adding them to your store. Fast-shipping suppliers are prioritized.",
  },
  {
    q: "Can I automate the entire order fulfillment process?",
    a: "Yes. We set up fully automated fulfillment using apps like DSers or Zendrop. When a customer orders from your store, the order is automatically sent to the supplier with shipping details. Tracking information is also automatically updated for the customer.",
  },
  {
    q: "What profit margins can I expect with dropshipping?",
    a: "Typical dropshipping profit margins range from 15-40% depending on your niche and product selection. We focus on finding products with at least 25%+ margins after all costs including product cost, shipping, and transaction fees.",
  },
  {
    q: "Do you provide marketing support for the store?",
    a: "While our dropshipping service focuses on store setup and product sourcing, we also offer Facebook Ads, Google Ads, and social media marketing as add-on services to drive traffic to your store from day one.",
  },
  {
    q: "What happens after my store is launched?",
    a: "After launch, we provide 30 days of free support for any issues. We also offer ongoing management packages for order processing, customer support, product updates, and store optimization on a monthly basis.",
  },
];

export default function ShopifyDropshippingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY DROPSHIPPING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Launch a Profitable Shopify Dropshipping Store
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Ready-to-sell dropshipping store with <strong>winning products, vetted suppliers, and automated fulfillment</strong>. Start selling from day one with zero inventory risk.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "24px" }}>
            Complete store setup in 5-10 days. No inventory, no warehouse, no hassle.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "24px", flexWrap: "wrap" }}>
            {[
              { value: "$0", label: "Inventory Needed", bg: "#dcfce7" },
              { value: "7 Days", label: "Store Ready", bg: "#dbeafe" },
              { value: "100%", label: "Done-For-You", bg: "#fef3c7" },
            ].map((s) => (
              <div key={s.label} style={{ backgroundColor: s.bg, borderRadius: "10px", padding: "12px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-dark)" }}>{s.value}</div>
                <div style={{ fontSize: "11px", color: "#555" }}>{s.label}</div>
              </div>
            ))}
          </div>
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
            <Link href="/contact" className="btn-outline">
              Get Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["150+ Stores Launched", "Zero Inventory Risk", "5-10 Day Setup"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">COMMON PROBLEMS, SOLVED</span>
            <h2 className="typo-h2">Struggling With Dropshipping? We Fix That.</h2>
            <p className="typo-subtext">Every challenge new dropshippers face — we have a proven solution for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {problemSolutions.map((item) => (
              <div
                key={item.problem}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "14px" }}>
                  <span style={{ color: "#dc2626", fontSize: "16px", fontWeight: 700, lineHeight: 1.3, flexShrink: 0 }}>&#10007;</span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#dc2626", lineHeight: 1.3 }}>{item.problem}</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "var(--color-primary)", fontSize: "16px", fontWeight: 700, lineHeight: 1.4, flexShrink: 0 }}>&rarr;</span>
                  <p className="typo-small" style={{ lineHeight: 1.5 }}>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT&apos;S INCLUDED</span>
            <h2 className="typo-h2">Everything You Need to Start Dropshipping</h2>
            <p className="typo-subtext">From niche research to automated fulfillment — we build your complete dropshipping business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: "/images/services/icons/product-research.png", title: "Niche & Product Research", desc: "Data-driven winning product research using trend analysis, competitor study, and profit margin calculations. We find high-demand, low-competition products with 25%+ margins." },
              { icon: "/images/services/icons/inventory.png", title: "Supplier Vetting & Sourcing", desc: "We find reliable suppliers from AliExpress, CJ Dropshipping, Spocket, and US-based sources. Each supplier is vetted for quality, shipping speed, and reliability." },
              { icon: "/images/services/icons/order-fulfillment.png", title: "Product Import & Optimization", desc: "Bulk product import with optimized titles, descriptions, images, and variants. SEO-friendly listings designed to convert visitors into paying customers." },
              { icon: "/images/services/icons/zero-work.png", title: "Automated Fulfillment", desc: "Set up automated order processing so orders are sent to suppliers instantly. Tracking numbers sync automatically. Zero manual work after a sale." },
              { icon: "/images/services/icons/marketing.png", title: "Branded Store Design", desc: "Professional storefront with custom logo, brand colors, trust badges, and conversion-focused layout. Your store looks like a premium brand, not a generic template." },
              { icon: "/images/services/icons/scalability.png", title: "Sales Channel Integration", desc: "Connect your store to Facebook Shop, Instagram Shopping, TikTok, and Google Shopping. Maximize your product visibility across every platform." },
            ].map((item) => (
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

      {/* ── COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Building It Yourself</h2>
            <p className="typo-subtext">Skip months of trial and error. Get a proven, ready-to-sell store.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>DIY / Others</th>
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
