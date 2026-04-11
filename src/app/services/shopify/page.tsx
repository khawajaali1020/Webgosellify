"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    img: "/images/services/icons/product-research.png",
    title: "Shopify Dropshipping Store",
    desc: "Complete done-for-you Shopify dropshipping store setup. We handle niche research, supplier sourcing, product importing, store design, and launch-ready configuration.",
    href: "/services/shopify-dropshipping",
  },
  {
    img: "/images/services/icons/scalability.png",
    title: "Shopify Store Redesign",
    desc: "Transform your existing Shopify store with a professional redesign. Improved UX, faster load times, better conversion rates, and a modern look that builds trust.",
    href: "/services/shopify-redesign",
  },
  {
    img: "/images/services/icons/zero-work.png",
    title: "Shopify Theme Development",
    desc: "Custom Shopify theme built from scratch to match your brand identity. Fully responsive, optimized for speed, and designed to convert visitors into customers.",
    href: "/services/shopify-theme-development",
  },
  {
    img: "/images/services/icons/inventory.png",
    title: "Shopify App Development",
    desc: "Custom Shopify apps to extend your store's functionality. From inventory management to custom checkout flows, we build exactly what your business needs.",
    href: "/services/shopify-app-development",
  },
  {
    img: "/images/services/icons/marketing.png",
    title: "Shopify Store Marketing",
    desc: "Drive traffic and sales with our comprehensive Shopify marketing services. Facebook Ads, Google Ads, SEO, email marketing, and social media management.",
    href: "/services/shopify-marketing",
  },
];

const faqs = [
  {
    q: "How long does it take to build a Shopify store?",
    a: "A standard dropshipping store takes 5-7 business days. Custom theme development takes 10-15 days. Store redesigns typically take 7-10 days. We provide a clear timeline during your consultation based on your specific requirements.",
  },
  {
    q: "Do you help with product sourcing and niche selection?",
    a: "Yes. For dropshipping stores, we conduct thorough niche and product research to identify profitable opportunities. We analyze competition, profit margins, and market trends before recommending products for your store.",
  },
  {
    q: "Can you redesign my existing Shopify store?",
    a: "Absolutely. We audit your current store, identify conversion bottlenecks, and create a redesign plan. We improve your store's visual design, user experience, page speed, and mobile responsiveness while preserving your existing products and data.",
  },
  {
    q: "What makes a custom Shopify theme worth it?",
    a: "A custom theme gives you complete control over your brand presentation, loads faster than bloated pre-made themes, and is built specifically for your target audience. Custom themes typically see 20-40% higher conversion rates compared to free themes.",
  },
  {
    q: "Do you offer ongoing Shopify store management?",
    a: "Yes. We offer ongoing marketing, advertising management, SEO, content creation, and store maintenance packages. Many clients start with a store build and continue with our monthly marketing services to drive traffic and sales.",
  },
  {
    q: "Why Shopify over other platforms like WooCommerce or BigCommerce?",
    a: "Shopify offers the best balance of ease of use, scalability, and ecosystem. With 4.4M+ stores, it has the largest app marketplace, most payment integrations, and strongest infrastructure. You own your customer data and brand — unlike selling on Amazon or Walmart.",
  },
];

export default function ShopifyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>SHOPIFY SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Shopify Development &amp; Marketing Services
          </h1>
          <p className="typo-body" style={{ marginBottom: "24px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Build, design, and grow your own ecommerce brand on the world&apos;s most popular ecommerce platform.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://wa.link/m2ac6m" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-pulse" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <FaWhatsapp style={{ fontSize: "18px" }} /> Get Free Consultation
            </a>
            <Link href="/contact" className="btn-outline">Get Pricing</Link>
          </div>
        </div>
      </section>

      {/* ── PLATFORM INTRODUCTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>Own Your Brand, Own Your Store</h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Shopify powers over 4.4 million stores worldwide and has processed more than $444 billion in total sales. Unlike selling on marketplaces, Shopify gives you full control over your brand, customer data, and store experience.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                With thousands of apps, fully customizable themes, and built-in payment processing, Shopify is the most versatile ecommerce platform available. Whether you&apos;re launching a dropshipping business or building a premium brand, it scales with you.
              </p>
              <p className="typo-body">
                EcomGarden offers end-to-end Shopify services — from store setup and custom theme development to marketing and ongoing management — so your store looks professional and drives real sales from day one.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/services/hero/shopify-platform.jpg" alt="Shopify Platform" style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SHOPIFY SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Our Shopify Services</h2>
            <p className="typo-subtext">Everything you need to build and grow a successful Shopify business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginTop: "32px" }}>
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card-hover"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "28px 24px",
                    border: "1px solid rgba(0,0,0,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img src={service.img} alt={service.title} style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "14px" }} />
                  <h3 className="typo-h3" style={{ marginBottom: "8px" }}>{service.title}</h3>
                  <p className="typo-body" style={{ marginBottom: "16px", flex: 1 }}>{service.desc}</p>
                  <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "14px" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <FeaturesGrid />

      {/* ── SERVICE BENEFITS ── */}
      <ServiceBenefits />

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
