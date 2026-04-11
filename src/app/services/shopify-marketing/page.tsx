"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const comparisonData = [
  { feature: "Shopify-specific expertise", us: true, them: "Generic" },
  { feature: "Full-funnel strategy (SEO + Ads + Email)", us: true, them: "Single channel" },
  { feature: "Shopify analytics & pixel setup", us: true, them: "Basic setup" },
  { feature: "Ad creative design included", us: true, them: "Extra cost" },
  { feature: "Email automation flows", us: true, them: false },
  { feature: "Conversion rate optimization", us: true, them: false },
  { feature: "Results timeline", us: "Week 1 (paid)", them: "Months" },
  { feature: "Transparent ROAS reporting", us: true, them: "Vanity metrics" },
  { feature: "No long-term contracts", us: true, them: "6-12 mo lock-in" },
];

const marketingChannels = [
  { icon: "/images/services/icons/product-research.png", title: "SEO", desc: "On-page, technical, and content SEO to drive sustainable organic traffic growth and reduce dependency on paid ads." },
  { icon: "/images/services/icons/marketing.png", title: "Google Ads", desc: "Search, Shopping, Display, and Performance Max campaigns with continuous ROAS optimization and negative keyword management." },
  { icon: "/images/services/icons/scalability.png", title: "Facebook / Meta", desc: "Data-driven Facebook and Instagram ad campaigns with audience targeting, creative testing, and retargeting funnels." },
  { icon: "/images/services/icons/customer-support.png", title: "Email Marketing", desc: "Automated flows via Klaviyo — welcome series, abandoned cart, post-purchase upsells, win-back, and promotional campaigns." },
  { icon: "/images/services/icons/zero-work.png", title: "TikTok Ads", desc: "Short-form video ad campaigns targeting younger demographics with viral creative formats and conversion tracking." },
  { icon: "/images/services/icons/calculation.png", title: "SMS Marketing", desc: "Direct-to-phone campaigns for flash sales, cart recovery, and VIP offers with high open rates and instant engagement." },
];

const faqs = [
  {
    q: "Which marketing channel is best for my Shopify store?",
    a: "It depends on your product type, audience, and budget. Facebook and Instagram Ads work great for visual products and impulse purchases. Google Ads captures high-intent shoppers actively searching. SEO provides long-term organic growth. We analyze your business and recommend the optimal channel mix for maximum ROI.",
  },
  {
    q: "How much should I spend on marketing?",
    a: "We recommend starting with a minimum ad spend of $500-1,000 per month per channel to gather enough data for optimization. As we identify winning campaigns, we scale budgets for maximum profitability. Our management fees are separate from ad spend.",
  },
  {
    q: "How long does it take to see results?",
    a: "Paid advertising (Facebook, Google Ads) can generate results within the first week. SEO typically takes 3-6 months for significant organic traffic growth. Email marketing shows results quickly once flows are set up. We set realistic expectations and provide regular progress updates.",
  },
  {
    q: "Do you create ad creatives and copy?",
    a: "Yes. Our team handles everything — ad creative design, video production, copywriting, and A/B testing. We create multiple variations for testing and continuously optimize based on performance data to find the best-performing combinations.",
  },
  {
    q: "How do you track and measure performance?",
    a: "We set up comprehensive tracking using Facebook Pixel, Google Analytics 4, Google Tag Manager, and Shopify analytics. We track ROAS, CPA, conversion rate, CLV, and attribution across all channels. You receive detailed monthly reports with actionable insights.",
  },
  {
    q: "Can you help with email marketing automation?",
    a: "Yes. We set up complete email automation using Klaviyo or your preferred platform — welcome series, abandoned cart flows, post-purchase sequences, win-back campaigns, browse abandonment, and promotional campaigns with segmented audiences.",
  },
  {
    q: "Do you offer Shopify-specific SEO?",
    a: "Yes. Shopify SEO has unique considerations. We handle technical SEO (canonical tags, site speed, structured data, URL structure), on-page SEO (keyword-optimized product descriptions, collection pages, blog content), and meta tag optimization specific to the Shopify platform.",
  },
  {
    q: "What ROAS can I expect from paid advertising?",
    a: "ROAS varies by industry and product. On average, our clients achieve 3-5x ROAS on Facebook Ads and 4-8x ROAS on Google Shopping. We set ROAS targets based on your profit margins and continuously optimize campaigns to improve profitability.",
  },
];

export default function ShopifyMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO (Centered) ── */}
      <section style={{ padding: "55px 0 70px", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY MARKETING</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Drive Traffic, Sales &amp; Revenue to Your Shopify Store
          </h1>
          <p className="typo-body" style={{ marginBottom: "12px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Our clients average <strong>3-5x ROAS on paid ads</strong> and <strong>300% organic traffic growth</strong>. SEO, Google Ads, Meta Ads, email marketing — all under one roof.
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-primary)", fontWeight: 600, marginBottom: "24px" }}>
            No long-term contracts. Transparent reporting. Real ROI.
          </p>
          <div style={{ marginBottom: "24px" }}>
            <div style={{ backgroundColor: "var(--color-dark)", borderRadius: "10px", padding: "16px 24px", display: "inline-block" }}>
              <span style={{ color: "var(--color-primary)", fontSize: "24px", fontWeight: 800 }}>3-5x</span>
              <span style={{ color: "#fff", fontSize: "14px", marginLeft: "8px" }}>Average ROAS for our Shopify clients</span>
            </div>
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
              Get Free Marketing Audit
            </a>
            <Link href="/contact" className="btn-outline">
              Get Pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
            {["$2M+ Ad Spend Managed", "3-5x Avg ROAS", "Results in Week 1"].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#555" }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETING CHANNELS WE COVER ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR CHANNELS</span>
            <h2 className="typo-h2">Marketing Channels We Cover</h2>
            <p className="typo-subtext">Multi-channel marketing strategy customized to your products, audience, and goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {marketingChannels.map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: "#f6f7f9",
                  borderRadius: "10px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <img src={item.icon} alt={item.title} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                </div>
                <div>
                  <h3 className="typo-h4" style={{ marginBottom: "6px" }}>{item.title}</h3>
                  <p className="typo-small">{item.desc}</p>
                </div>
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
            <h2 className="typo-h2">EcomGarden vs Generic Marketing Agencies</h2>
            <p className="typo-subtext">We don&apos;t just run ads. We understand Shopify and ecommerce funnels.</p>
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
