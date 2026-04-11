"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Ecommerce-specialized team", us: true, them: false },
  { feature: "Shopify Partner certified", us: true, them: "Rarely" },
  { feature: "Full store setup (A-Z)", us: true, them: "Partial" },
  { feature: "Payment gateway configuration", us: true, them: "Extra cost" },
  { feature: "SEO setup included", us: true, them: false },
  { feature: "Speed optimization included", us: true, them: "Extra $500+" },
  { feature: "Turnaround time", us: "5-10 days", them: "2-6 weeks" },
  { feature: "Post-launch support", us: "30 days free", them: "Hourly billing" },
  { feature: "WhatsApp direct support", us: true, them: false },
];

const faqs = [
  {
    q: "How long does it take to build a Shopify store?",
    a: "A complete Shopify store setup takes 5-10 business days depending on complexity. This includes theme setup, product listing, payment gateway, shipping configuration, and SEO basics. Custom features or large product catalogs may extend the timeline by a few days.",
  },
  {
    q: "Do you handle product listing and content?",
    a: "Yes. We handle bulk product import via CSV, manual entry, or data scraping from any source. Each listing gets optimized titles, descriptions, images, and variants. SEO-friendly product content is included in our setup service.",
  },
  {
    q: "Can you migrate my store from another platform to Shopify?",
    a: "Absolutely. We migrate stores from WooCommerce, Magento, BigCommerce, Wix, Squarespace, and any other platform. We transfer products, customers, orders, blog content, and URL redirects to preserve your SEO rankings.",
  },
  {
    q: "What payment gateways do you set up?",
    a: "We configure Shopify Payments, PayPal, Stripe, and any region-specific gateways your business needs. We also set up multi-currency support and tax configurations based on your selling regions.",
  },
  {
    q: "Do you offer ongoing store management?",
    a: "Yes. We offer monthly management packages that include product updates, order processing, customer support, design tweaks, app management, and performance monitoring. Our team acts as your dedicated Shopify operations partner.",
  },
  {
    q: "What is included in the SEO setup?",
    a: "Our SEO setup includes keyword research, meta title and description optimization for all pages, image alt tags, sitemap submission, Google Search Console setup, schema markup, and site speed optimization for Core Web Vitals.",
  },
  {
    q: "Can you integrate third-party apps and tools?",
    a: "Yes. We install, configure, and customize any Shopify app including email marketing (Klaviyo), reviews (Judge.me), upsells, subscriptions, loyalty programs, and custom API integrations with your existing business tools.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every project includes 30 days of free post-launch support for bug fixes, minor adjustments, and questions. After that, we offer affordable monthly retainer packages for ongoing development and management.",
  },
];

export default function ShopifyDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY DEVELOPMENT</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Complete Shopify Store Development &amp; Management
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            We&apos;ve built and managed <strong>200+ Shopify stores</strong> across every niche — from single-product brands to 10,000+ SKU catalogs.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "28px" }}>
            Ready-to-sell store in 5-10 business days. Zero technical headaches.
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
              Get Free Consultation
            </a>
            <Link href="/contact" className="btn-outline">
              Get Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["200+ Stores Built", "50+ Expert Team", "5-10 Day Delivery"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED (4x2 icon grid) ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHAT YOU GET</span>
            <h2 className="typo-h2">Complete Shopify Solutions Under One Roof</h2>
            <p className="typo-subtext">From store setup to ongoing management — everything your Shopify business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {[
              { icon: "/images/services/icons/scalability.png", title: "Store Setup & Configuration", desc: "Complete A-Z Shopify store setup including domain, theme installation, navigation, pages, policies, shipping zones, and tax configuration." },
              { icon: "/images/services/icons/marketing.png", title: "Theme Customization", desc: "Customize any Shopify theme to match your brand — colors, fonts, layouts, custom sections, and homepage design. Pixel-perfect implementation." },
              { icon: "/images/services/icons/scalability.png", title: "App Integration", desc: "Install and configure essential Shopify apps for email marketing, reviews, upsells, loyalty programs, subscriptions, and third-party integrations." },
              { icon: "/images/services/icons/safety.png", title: "Payment Gateway Setup", desc: "Configure Shopify Payments, PayPal, Stripe, and region-specific gateways. Multi-currency support, tax setup, and checkout optimization." },
              { icon: "/images/services/icons/marketing.png", title: "SEO & Speed Optimization", desc: "On-page SEO setup with keyword-optimized meta tags, schema markup, image optimization, and Core Web Vitals tuning for fast loading." },
              { icon: "/images/services/icons/personal-manager.png", title: "Ongoing Management", desc: "Monthly store management including product updates, order processing, customer support, design tweaks, app updates, and performance monitoring." },
              { icon: "/images/services/icons/order-fulfillment.png", title: "Product Listing", desc: "Bulk product import with optimized titles, descriptions, images, and variants. SEO-friendly listings designed to convert visitors into buyers." },
              { icon: "/images/services/icons/inventory.png", title: "Migration Services", desc: "Migrate from WooCommerce, Magento, BigCommerce, or any platform. Products, customers, orders, and URL redirects preserved." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
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

      {/* ── OUR SHOPIFY PORTFOLIO ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR WORK</span>
            <h2 className="typo-h2">Our Shopify Portfolio</h2>
            <p className="typo-subtext">A sample of the project types we deliver for Shopify merchants every month.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
            {[
              { title: "Store Setup", desc: "Complete new store builds from scratch — theme, products, payments, shipping, and launch-ready configuration.", icon: "/images/services/icons/scalability.png", stat: "80+ stores" },
              { title: "Theme Customization", desc: "Deep customization of premium and free themes to match unique brand identities and conversion goals.", icon: "/images/services/icons/marketing.png", stat: "60+ projects" },
              { title: "App Integration", desc: "Complex multi-app setups including Klaviyo, ReCharge, Loyalty Lion, and custom API integrations.", icon: "/images/services/icons/safety.png", stat: "40+ integrations" },
              { title: "Platform Migration", desc: "Seamless migration from WooCommerce, Magento, BigCommerce, and other platforms with zero data loss.", icon: "/images/services/icons/order-fulfillment.png", stat: "30+ migrations" },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                  <img src={item.icon} alt={item.title} style={{ width: "52px", height: "52px", objectFit: "contain" }} />
                </div>
                <h3 className="typo-h4" style={{ marginBottom: "4px" }}>{item.title}</h3>
                <span style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 700, display: "block", marginBottom: "8px" }}>{item.stat}</span>
                <p className="typo-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US / COMPARISON ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WHY CHOOSE US</span>
            <h2 className="typo-h2">EcomGarden vs Fiverr Freelancers</h2>
            <p className="typo-subtext">We&apos;re not a random freelancer. We&apos;re a dedicated Shopify Partner team.</p>
          </div>

          <div style={{ maxWidth: "750px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>Feature</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>EcomGarden</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Freelancers</th>
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
