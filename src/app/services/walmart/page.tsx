"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    img: "/images/services/icons/order-fulfillment.png",
    title: "Walmart WFS",
    desc: "Walmart Fulfillment Services — similar to Amazon FBA. We set up your WFS account, manage inventory shipments, and optimize your listings for Walmart's fulfillment network.",
    href: "/services/walmart-wfs",
  },
  {
    img: "/images/services/icons/inventory.png",
    title: "Walmart Wholesale",
    desc: "Source branded products from authorized distributors and sell on Walmart Marketplace. We handle supplier relationships, pricing strategy, and ongoing account management.",
    href: "/services/walmart-wholesale",
  },
  {
    img: "/images/services/icons/product-research.png",
    title: "2 Step Walmart Dropshipping",
    desc: "Source products from retailers, route through a prep center, then fulfill Walmart orders. A lower-risk entry point with no large upfront inventory investment needed.",
    href: "/services/walmart-dropshipping",
  },
  {
    img: "/images/services/icons/account-health.png",
    title: "Walmart Account Reinstatement",
    desc: "Walmart account suspended or deactivated? We analyze the issue, prepare a detailed appeal, and work with Walmart's team to restore your selling privileges.",
    href: "/services/walmart-reinstatement",
  },
];

const faqs = [
  {
    q: "How is Walmart Marketplace different from Amazon?",
    a: "Walmart Marketplace has lower competition, no monthly seller fees (only referral fees per sale), and access to Walmart's massive customer base. Unlike Amazon, Walmart is still growing its seller base, meaning early movers have a significant advantage.",
  },
  {
    q: "What are the requirements to sell on Walmart?",
    a: "You need a US business entity (LLC or Corporation), US EIN, US business address, and a track record of ecommerce experience or a strong business plan. Walmart is more selective than Amazon, but we help you build a compelling application.",
  },
  {
    q: "How long does it take to get approved on Walmart?",
    a: "Walmart application review typically takes 2-4 weeks. Store setup and listing optimization takes another 5-7 days. We prepare your application to maximize approval chances and handle the entire onboarding process.",
  },
  {
    q: "What is Walmart Fulfillment Services (WFS)?",
    a: "WFS is Walmart's version of FBA. You ship inventory to Walmart's fulfillment centers, and they handle storage, packing, shipping, and customer service. WFS listings get the 'Fulfilled by Walmart' badge, improving visibility and trust.",
  },
  {
    q: "Can I sell on both Amazon and Walmart?",
    a: "Absolutely. Many of our clients sell on both platforms. We help you diversify across marketplaces to reduce risk and maximize revenue. Different platforms often attract different customer segments.",
  },
  {
    q: "What if my Walmart seller application gets rejected?",
    a: "We have extensive experience with Walmart applications. If your initial application is declined, we analyze the rejection reason, strengthen your profile, and reapply. Our approval rate is significantly higher than self-applications.",
  },
];

export default function WalmartPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>WALMART MARKETPLACE SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Walmart Marketplace Services — Complete Store Management
          </h1>
          <p className="typo-body" style={{ marginBottom: "24px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Tap into the fastest-growing ecommerce marketplace with 120M+ monthly visitors and significantly lower competition.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://wa.me/message/Q6XJRMT4HKTBF1" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-pulse" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <FaWhatsapp style={{ fontSize: "18px" }} /> Get Free Consultation
            </a>
            <Link href="/pricing" className="btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* ── PLATFORM INTRODUCTION ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>The Fastest-Growing Marketplace</h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Walmart Marketplace attracts over 120 million unique monthly visitors and is rapidly expanding its third-party seller program. With no monthly seller fees and lower competition than Amazon, early movers have a massive advantage.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Walmart&apos;s fulfillment infrastructure, trusted brand reputation, and growing online presence make it the ideal platform for sellers looking to diversify beyond Amazon or enter ecommerce for the first time.
              </p>
              <p className="typo-body">
                Gosellify helps you navigate Walmart&apos;s approval process, set up your store, source products, and manage daily operations — giving you a head start on this rapidly growing platform.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/services/hero/walmart-platform.jpeg" alt="Walmart Marketplace" style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR WALMART SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Our Walmart Services</h2>
            <p className="typo-subtext">Full-service Walmart Marketplace solutions to help you launch and scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ marginTop: "32px" }}>
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
