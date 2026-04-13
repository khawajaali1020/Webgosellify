"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Shopify API specialists", us: true, them: "Generalists" },
  { feature: "Shopify 2.0 & Checkout extensions", us: true, them: false },
  { feature: "Full lifecycle (design to deploy)", us: true, them: "Code only" },
  { feature: "App Store submission support", us: true, them: "Extra cost" },
  { feature: "Security best practices (OAuth, HMAC)", us: true, them: "Basic" },
  { feature: "Post-launch monitoring", us: true, them: false },
  { feature: "Turnaround time", us: "2-8 weeks", them: "2-6 months" },
  { feature: "Ongoing maintenance plans", us: true, them: "Hourly billing" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const appTypes = [
  {
    title: "Private Apps",
    icon: "/images/services/icons/safety.png",
    desc: "Custom private apps built exclusively for your store. Tailored to your specific business logic — inventory management, custom pricing rules, order routing, or internal workflows that no off-the-shelf app can handle.",
  },
  {
    title: "Public Apps",
    icon: "/images/services/icons/scalability.png",
    desc: "Full-featured public apps designed for the Shopify App Store. We handle architecture, development, App Store submission, listing optimization, and monetization strategy to reach millions of merchants.",
  },
  {
    title: "Checkout Extensions",
    icon: "/images/services/icons/order-fulfillment.png",
    desc: "Custom checkout UI extensions for personalized checkout experiences — custom fields, post-purchase upsells, payment customizations, delivery date pickers, and loyalty program integrations at checkout.",
  },
  {
    title: "API Integrations",
    icon: "/images/services/icons/calculation.png",
    desc: "Connect Shopify with ERPs (NetSuite, SAP), CRMs (Salesforce, HubSpot), shipping carriers, accounting software (QuickBooks), and custom backends via REST and GraphQL APIs with real-time data sync.",
  },
];

const faqs = [
  {
    q: "What types of Shopify apps can you build?",
    a: "We build all types — private custom apps, public apps for the App Store, embedded admin apps, checkout extensions, theme app extensions, and headless commerce solutions using the Storefront API. If Shopify supports it, we can build it.",
  },
  {
    q: "What technologies do you use for Shopify app development?",
    a: "We use the official Shopify tech stack: Node.js with Express or Remix, React for frontend, Prisma for database, and Shopify API libraries. We work with both REST Admin API and GraphQL Admin API, plus the Storefront API for headless solutions.",
  },
  {
    q: "How long does it take to develop a custom Shopify app?",
    a: "Simple apps with basic functionality take 2-4 weeks. Medium-complexity apps with integrations and custom UI take 4-8 weeks. Complex enterprise-grade apps with multiple integrations may take 8-16 weeks. We provide accurate estimates after understanding your requirements.",
  },
  {
    q: "Can you integrate Shopify with my existing systems?",
    a: "Yes. We specialize in integrations with ERPs like NetSuite and SAP, CRMs like Salesforce and HubSpot, shipping carriers, accounting software like QuickBooks, and custom internal tools via APIs and webhooks.",
  },
  {
    q: "Do you help with Shopify App Store submission?",
    a: "Yes. We handle the entire submission process — meeting Shopify review requirements, creating app listing content, screenshots, demo stores, and responding to reviewer feedback until your app is approved and published.",
  },
  {
    q: "How do you handle app security and data privacy?",
    a: "Security is built into our process. We implement OAuth 2.0 authentication, HMAC verification, encrypted data storage, rate limiting, and follow Shopify security best practices. We ensure GDPR and CCPA compliance for user data handling.",
  },
  {
    q: "Can you maintain and update the app after launch?",
    a: "Yes. We offer maintenance packages that include API version updates when Shopify releases new versions, bug fixes, performance optimization, new feature development, and 24/7 monitoring with alert-based incident response.",
  },
  {
    q: "What is the cost of custom Shopify app development?",
    a: "Simple apps start around $2,000-5,000, medium-complexity apps range from $5,000-15,000, and enterprise solutions can be $15,000+. We provide detailed quotes after understanding your specific requirements and scope.",
  },
];

export default function ShopifyAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY APP DEVELOPMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Custom Shopify Apps That Solve Real Business Problems
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            When off-the-shelf apps fall short, we build <strong>custom solutions</strong>. Private apps, public apps, API integrations, and checkout extensions by Shopify specialists.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Scalable. Secure. Built to grow with your business.
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
              Discuss Your App Idea
            </a>
            <Link href="/contact" className="btn-outline">
              Get Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["50+ Custom Apps Shipped", "Shopify API Certified", "Enterprise-Grade Security"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div style={{ height: "4px", background: "linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary))" }} />

      {/* ── TYPES OF APPS WE BUILD ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT WE BUILD</span>
            <h2 className="typo-h2">Types of Apps We Build</h2>
            <p className="typo-subtext">From simple integrations to complex enterprise solutions — we build it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {appTypes.map((item) => (
              <div
                key={item.title}
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
                  <img src={item.icon} alt={item.title} style={{ width: "52px", height: "52px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">Gosellify vs Generic Developers</h2>
            <p className="typo-subtext">Shopify app development requires Shopify expertise, not just coding skills.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Generic Devs</th>
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
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
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
