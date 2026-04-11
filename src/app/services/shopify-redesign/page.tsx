"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Data-driven UX audit first", us: true, them: false },
  { feature: "Conversion optimization focus", us: true, them: "Design only" },
  { feature: "Speed optimization included", us: true, them: "Extra cost" },
  { feature: "Mobile-first approach", us: true, them: "Desktop-first" },
  { feature: "SEO preservation during redesign", us: true, them: false },
  { feature: "Zero downtime migration", us: true, them: "Hours of downtime" },
  { feature: "Turnaround time", us: "2-4 weeks", them: "6-12 weeks" },
  { feature: "Post-launch A/B testing", us: true, them: false },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How long does a Shopify store redesign take?",
    a: "A typical redesign takes 2-4 weeks depending on scope. Simple theme-based redesigns can be done in 1-2 weeks, while custom redesigns with unique layouts and features may take 3-4 weeks. We provide a detailed timeline after the initial audit.",
  },
  {
    q: "Will I lose my existing SEO rankings during the redesign?",
    a: "No. We take great care to preserve your SEO. We maintain all existing URLs, set up proper redirects where needed, preserve meta data, and ensure all on-page SEO elements are carried over or improved. Your organic traffic is protected.",
  },
  {
    q: "Can you redesign my store without changing the theme?",
    a: "Yes. We can work within your existing theme by customizing the CSS, Liquid templates, and section configurations. However, if your current theme is outdated or limiting performance, we may recommend switching to a modern, optimized theme.",
  },
  {
    q: "How do you ensure the redesign improves conversions?",
    a: "We start with a data-driven audit using analytics, heatmaps, and user behavior data. Every design decision is based on conversion best practices — strategic CTA placement, simplified navigation, trust signals, and mobile optimization.",
  },
  {
    q: "Will my store have downtime during the redesign?",
    a: "No. We work on a development or duplicate theme so your live store continues operating normally. Once the redesign is approved, we publish the new design in minutes with zero downtime.",
  },
  {
    q: "Do you provide mobile-responsive designs?",
    a: "All our redesigns follow a mobile-first approach since over 70% of ecommerce traffic comes from mobile devices. We test on multiple devices and screen sizes to ensure a seamless shopping experience everywhere.",
  },
  {
    q: "What if I do not like the redesign?",
    a: "We involve you at every stage with design mockups and revisions before any development. We offer up to 3 rounds of revisions on the design phase. Your existing store remains untouched until you approve the final redesign.",
  },
  {
    q: "Can you also improve my store speed during the redesign?",
    a: "Speed optimization is a core part of our redesign process. We optimize images, minimize code, implement lazy loading, audit third-party apps, and ensure your redesigned store loads in under 3 seconds on mobile.",
  },
];

export default function ShopifyRedesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Dark Centered) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#1a1a2e" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block", color: "var(--color-primary)" }}>SHOPIFY REDESIGN</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto", color: "#fff" }}>
            Transform Your Shopify Store Into a <span style={{ color: "var(--color-primary)" }}>Conversion Machine</span>
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto", color: "rgba(255,255,255,0.8)" }}>
            Our redesigns deliver an average <strong style={{ color: "#fff" }}>40% increase in conversion rate</strong>. Data-driven UX, modern design, and mobile-first approach.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Zero downtime. SEO preserved. Results in 2-4 weeks.
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
              Get Free Store Audit
            </a>
            <Link href="/contact" className="btn-outline-white">
              Get Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["100+ Stores Redesigned", "40% Avg Conversion Lift", "2-4 Week Turnaround"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE VS AFTER ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">REAL RESULTS</span>
            <h2 className="typo-h2">Before vs After Our Redesigns</h2>
            <p className="typo-subtext">Measurable improvements across every key metric that matters for your revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { area: "Page Speed", before: "3s+ load time", after: "Under 1s", desc: "Optimized code, compressed images, lazy loading, and removed bloated apps. Faster stores rank higher and convert better.", icon: "/images/services/icons/scalability.png" },
              { area: "Conversion Rate", before: "1.2% average", after: "3.5% average", desc: "Strategic CTA placement, simplified checkout, trust signals, and mobile-first UX. Every design decision drives revenue.", icon: "/images/services/icons/calculation.png" },
              { area: "Mobile Experience", before: "Desktop-only design", after: "Mobile-first", desc: "70%+ of traffic is mobile. Our redesigns prioritize the mobile shopping experience with touch-friendly navigation and fast load times.", icon: "/images/services/icons/marketing.png" },
            ].map((item) => (
              <div
                key={item.area}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "10px",
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                  <img src={item.icon} alt={item.area} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "12px" }}>{item.area}</h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "14px" }}>
                  <div style={{
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "line-through",
                  }}>
                    {item.before}
                  </div>
                  <span style={{ fontSize: "18px", color: "var(--color-primary)", fontWeight: 800 }}>&rarr;</span>
                  <div style={{
                    backgroundColor: "rgba(22,163,74,0.08)",
                    color: "var(--color-primary)",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}>
                    {item.after}
                  </div>
                </div>
                <p className="typo-small">{item.desc}</p>
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
            <h2 className="typo-h2">Complete Redesign That Drives Revenue</h2>
            <p className="typo-subtext">Every redesign decision is backed by data, not guesswork.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: "/images/services/icons/product-research.png", title: "UX Audit & Analysis", desc: "Deep-dive audit of your current store using analytics, heatmaps, session recordings, and user flow analysis to identify exactly where you are losing sales." },
              { icon: "/images/services/icons/calculation.png", title: "Conversion Optimization", desc: "Strategic placement of CTAs, trust signals, social proof, urgency elements, and simplified checkout flow. Every element is positioned to maximize revenue." },
              { icon: "/images/services/icons/scalability.png", title: "Speed Optimization", desc: "Comprehensive performance tuning — image compression, code minification, lazy loading, app audit, and third-party script cleanup for sub-3-second load times." },
              { icon: "/images/services/icons/marketing.png", title: "Mobile-First Design", desc: "Responsive design that prioritizes the mobile shopping experience. 70%+ of your traffic is mobile — your store needs to perform perfectly on every screen size." },
              { icon: "/images/services/icons/marketing.png", title: "Brand Alignment", desc: "Unified visual identity across every page — consistent typography, colors, imagery, and brand voice. Your redesigned store reflects your brand at its best." },
              { icon: "/images/services/icons/order-fulfillment.png", title: "Product & Checkout Pages", desc: "Enhanced product pages with better galleries, compelling copy, and cross-sell recommendations. Streamlined checkout with fewer steps and trust elements." },
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
            <h2 className="typo-h2">EcomGarden vs Other Redesign Services</h2>
            <p className="typo-subtext">We don&apos;t just make stores pretty. We make them profitable.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Others</th>
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
