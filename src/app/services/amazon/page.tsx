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
    title: "Amazon FBA",
    desc: "Fulfillment by Amazon — we set up and manage your FBA business from product sourcing to inventory management, letting Amazon handle storage, packing, and shipping.",
    href: "/services/amazon-fba",
  },
  {
    img: "/images/services/icons/inventory.png",
    title: "Amazon Wholesale",
    desc: "Buy branded products in bulk directly from manufacturers and distributors, then sell on Amazon at a profit. We handle supplier sourcing, negotiations, and account management.",
    href: "/services/amazon-wholesale",
  },
  {
    img: "/images/services/icons/product-research.png",
    title: "2 Step Amazon Dropshipping",
    desc: "Source products from retailers, ship to a prep center, then send to customers or Amazon warehouses. Lower risk, no large inventory investment required.",
    href: "/services/amazon-arbitrage",
  },
  {
    img: "/images/services/icons/account-health.png",
    title: "Amazon Account Reinstatement",
    desc: "Suspended or deactivated Amazon account? We craft professional appeals, address root causes, and work to get your selling privileges restored quickly.",
    href: "/services/amazon-reinstatement",
  },
];

const faqs = [
  {
    q: "How much does it cost to start selling on Amazon?",
    a: "Amazon Professional seller plan costs $39.99/month. Beyond that, you need inventory capital (varies by model), and our service fees. We offer packages for every budget — contact us for a custom quote based on your business model.",
  },
  {
    q: "Which Amazon business model is best for beginners?",
    a: "For beginners, we typically recommend either Amazon FBA Wholesale or 2-Step Dropshipping. Wholesale offers more predictable margins with established brands, while dropshipping requires less upfront capital. We help you choose based on your budget and goals.",
  },
  {
    q: "Do I need a US LLC to sell on Amazon?",
    a: "While you can sell on Amazon as an individual or with a foreign entity, having a US LLC provides significant advantages: easier tax compliance, professional credibility, access to US bank accounts, and better protection. We offer complete LLC formation services.",
  },
  {
    q: "How long does it take to set up an Amazon store?",
    a: "Account registration takes 1-3 days. Full store setup with product listings, optimization, and brand registry (if applicable) takes 7-14 days. First sales typically come within 2-4 weeks of launch depending on the business model.",
  },
  {
    q: "Can you help if my Amazon account is suspended?",
    a: "Yes. Our Amazon Account Reinstatement service has a high success rate. We analyze the suspension reason, create a comprehensive Plan of Action (POA), submit the appeal, and follow up until your account is reinstated.",
  },
  {
    q: "What kind of results can I expect?",
    a: "Results vary by model and investment. Our FBA wholesale clients typically see 15-25% ROI, while dropshipping clients can start generating revenue within the first month. We provide realistic projections during your free consultation.",
  },
];

export default function AmazonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <span className="typo-label" style={{ marginBottom: "8px", display: "block" }}>AMAZON SELLER SERVICES</span>
          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>
            Amazon Seller Services — Complete Store Management
          </h1>
          <p className="typo-body" style={{ marginBottom: "24px", fontSize: "17px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            Launch, manage, and scale your Amazon business with proven strategies on the world&apos;s #1 marketplace.
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
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>The World&apos;s #1 Marketplace</h2>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Amazon has over 300 million active customers worldwide and generates more than $600 billion in annual sales. Over 60% of those sales come from third-party sellers — that&apos;s the opportunity waiting for you.
              </p>
              <p className="typo-body" style={{ marginBottom: "14px" }}>
                Whether you&apos;re looking to build a wholesale business, launch an FBA brand, or start with low-risk dropshipping, Amazon provides the infrastructure, customer base, and fulfillment network to scale fast.
              </p>
              <p className="typo-body">
                At Gosellify, we handle everything from store setup and product sourcing to daily operations and advertising — so you can focus on growing your investment.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/services/hero/amazon-platform.jpg" alt="Amazon Marketplace" style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR AMAZON SERVICES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR SERVICES</span>
            <h2 className="typo-h2">Our Amazon Services</h2>
            <p className="typo-subtext">End-to-end Amazon solutions tailored to your business goals and budget.</p>
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
