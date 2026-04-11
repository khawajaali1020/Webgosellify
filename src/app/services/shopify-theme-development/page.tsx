"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "100% unique to your brand", us: true, them: false },
  { feature: "Shopify 2.0 architecture", us: true, them: "Some themes" },
  { feature: "Custom sections & blocks", us: "Unlimited", them: "Limited" },
  { feature: "No unused bloated code", us: true, them: false },
  { feature: "Performance optimized", us: "Sub-2s loads", them: "3-5s loads" },
  { feature: "No monthly theme app fees", us: true, them: "$50-200/mo in apps" },
  { feature: "Ongoing support", us: "30 days free", them: "Forum only" },
  { feature: "Design-to-code accuracy", us: "Pixel-perfect", them: "Close enough" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const includedItems = [
  "Custom Liquid template development",
  "Shopify 2.0 JSON templates & app blocks",
  "Responsive design (mobile, tablet, desktop)",
  "Custom homepage sections & blocks",
  "Product page with gallery & variants",
  "Collection page with filtering & sorting",
  "Cart drawer / cart page",
  "Header & footer with mega menu",
  "Blog templates & article pages",
  "Speed optimization (90+ Lighthouse)",
  "SEO-friendly semantic HTML & schema",
  "Theme editor documentation & training",
];

const notIncludedItems = [
  "Ongoing content writing or copywriting",
  "Product photography or image creation",
  "Third-party app subscriptions",
  "Marketing campaign setup or management",
  "Inventory management or order fulfillment",
  "Domain purchase or hosting fees",
];

const faqs = [
  {
    q: "Why should I get a custom theme instead of a pre-built one?",
    a: "A custom theme gives you a unique brand identity that stands out from thousands of competitors using the same templates. It is built specifically for your products and customers, offers better performance with no unused code, and provides exactly the features you need without relying on monthly app subscriptions.",
  },
  {
    q: "How long does custom Shopify theme development take?",
    a: "A custom theme typically takes 4-8 weeks depending on complexity. Simple themes with standard layouts can be done in 3-4 weeks, while complex themes with custom features, animations, and multiple templates may take 6-8 weeks. We provide a detailed timeline after understanding your requirements.",
  },
  {
    q: "Do you build themes using Shopify 2.0 architecture?",
    a: "Yes. All our custom themes use Shopify Online Store 2.0 architecture with JSON templates, app blocks, and flexible sections on every page. This gives you maximum flexibility to customize your store directly from the theme editor without touching code.",
  },
  {
    q: "Can I customize the theme myself after development?",
    a: "Absolutely. We build themes with the Shopify theme editor in mind — intuitive section settings, block configurations, and clear labels. We also provide comprehensive documentation and training so you can make changes without developer help.",
  },
  {
    q: "Will the custom theme be fast and SEO-friendly?",
    a: "Performance and SEO are core priorities. We write clean, minimal code, optimize all assets, implement proper semantic HTML, add structured data markup, and ensure excellent Core Web Vitals scores. No bloated frameworks or unnecessary scripts.",
  },
  {
    q: "Do you convert Figma or PSD designs to Shopify themes?",
    a: "Yes. We specialize in converting design files from Figma, Adobe XD, Sketch, or PSD into fully functional Shopify themes. We ensure pixel-perfect accuracy while maintaining responsive behavior and Shopify best practices.",
  },
  {
    q: "What about ongoing support after the theme is delivered?",
    a: "We provide 30 days of free bug-fix support after delivery. For ongoing needs, we offer monthly maintenance packages that include theme updates, new feature additions, performance monitoring, and priority support.",
  },
  {
    q: "Can you add custom features not available in standard themes?",
    a: "Yes — that is the biggest advantage of a custom theme. We can build product configurators, advanced filtering systems, loyalty point displays, subscription flows, mega menus, or any unique functionality specific to your business.",
  },
];

export default function ShopifyThemeDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY THEME DEVELOPMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Custom Shopify Themes Built From Scratch
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Stop looking like every other Shopify store. Get a <strong>unique, brand-matching theme</strong> with Shopify 2.0 architecture and blazing-fast performance.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "20px" }}>
            Pixel-perfect. Performance-first. Built to convert.
          </p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "24px" }}>
            {["Liquid Expert", "Shopify 2.0", "Responsive", "Performance First", "Custom Sections"].map((tag) => (
              <span key={tag} style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "6px 14px", fontSize: "12px", fontWeight: 600, color: "#555" }}>
                {tag}
              </span>
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
            {["80+ Custom Themes Built", "Shopify 2.0 Experts", "4-8 Week Delivery"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED CHECKLIST ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">SCOPE OF WORK</span>
            <h2 className="typo-h2">What&apos;s Included in Your Custom Theme</h2>
            <p className="typo-subtext">Clear expectations — here is exactly what you get and what falls outside the scope.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "32px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            {/* Included */}
            <div style={{
              backgroundColor: "#f6f7f9",
              borderRadius: "12px",
              padding: "28px",
              border: "1px solid rgba(22,163,74,0.15)",
            }}>
              <h3 className="typo-h4" style={{ marginBottom: "16px", color: "var(--color-primary)" }}>
                <FaCheckCircle style={{ marginRight: "8px", fontSize: "16px", verticalAlign: "middle" }} />
                Included
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {includedItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px", marginTop: "3px", flexShrink: 0 }} />
                    <span className="typo-small">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included */}
            <div style={{
              backgroundColor: "#fefefe",
              borderRadius: "12px",
              padding: "28px",
              border: "1px solid rgba(220,38,38,0.1)",
            }}>
              <h3 className="typo-h4" style={{ marginBottom: "16px", color: "#dc2626" }}>
                <FaTimesCircle style={{ marginRight: "8px", fontSize: "16px", verticalAlign: "middle" }} />
                Not Included
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {notIncludedItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <FaTimesCircle style={{ color: "#dc2626", fontSize: "13px", marginTop: "3px", flexShrink: 0 }} />
                    <span className="typo-small">{item}</span>
                  </div>
                ))}
              </div>
              <p className="typo-small" style={{ marginTop: "16px", color: "#888", fontStyle: "italic" }}>
                These can be added as separate services if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CUSTOM</span>
            <h2 className="typo-h2">Custom Theme vs Pre-Made Templates</h2>
            <p className="typo-subtext">A custom theme pays for itself by eliminating app fees and outperforming generic themes.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Pre-Made</th>
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
