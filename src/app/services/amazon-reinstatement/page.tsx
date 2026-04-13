"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaExclamationTriangle } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const caseStudies = [
  { type: "Inauthentic Item Claim", days: "11", situation: "Multiple inauthentic complaints on branded products. Two previous appeals denied.", result: "Gathered authorized distributor invoices, documented supply chain, submitted evidence-backed POA." },
  { type: "IP Violation", days: "8", situation: "Brand owner filed IP complaint. Entire catalog suspended without warning.", result: "Negotiated retraction with rights owner, submitted retraction confirmation with documentation." },
  { type: "Account Health / ODR", days: "14", situation: "Order Defect Rate exceeded threshold. Account suspended with inventory locked in FBA.", result: "Identified packaging damage root cause, implemented new prep procedures, submitted preventive plan." },
];

const comparisonData = [
  { feature: "Custom Plan of Action (no templates)", us: true, diy: false, legal: "Generic legal language" },
  { feature: "Amazon policy expertise", us: true, diy: "Google research", legal: "Limited" },
  { feature: "Evidence gathering & documentation", us: true, diy: "You figure it out", legal: "Extra fee" },
  { feature: "Previously denied appeal recovery", us: true, diy: false, legal: "Some firms" },
  { feature: "Appeal submitted in 48-72 hours", us: true, diy: "Days to weeks", legal: "1-2 weeks" },
  { feature: "Post-reinstatement protection plan", us: true, diy: false, legal: false },
  { feature: "Free case assessment", us: true, diy: "N/A", legal: "$200-500 consult" },
  { feature: "Money-back if not reinstated", us: true, diy: "N/A", legal: false },
];

const faqs = [
  { question: "Why was my Amazon account suspended?", answer: "Common reasons include inauthentic item claims, IP violations, policy violations, high order defect rates, linked accounts, or restricted product sales. We analyze your specific suspension notice to identify the exact cause and build a targeted appeal." },
  { question: "How long does reinstatement take?", answer: "Most cases resolve within 2-4 weeks. Simple policy violations can be faster, complex cases with multiple violations may take longer. We submit appeals within 48-72 hours of receiving your account access." },
  { question: "Can you help if my appeal was already denied?", answer: "Yes — 75%+ of our cases involve previously denied appeals. We review past submissions, identify weaknesses, gather stronger evidence, and craft a new appeal. Many of our best results come from cases others gave up on." },
  { question: "What is a Plan of Action (POA)?", answer: "A formal document for Amazon explaining the root cause, corrective actions taken, and preventive measures implemented. Amazon has specific expectations for format and content — a poorly written POA can lead to permanent closure." },
  { question: "Do you guarantee reinstatement?", answer: "No one can guarantee 100% as the final decision is Amazon's. Our success rate is 90%+. We only take cases we believe are winnable. If we can't help, we tell you upfront and don't charge." },
  { question: "What do you need from me to start?", answer: "Access to your Seller Central account, the suspension notification, any previous appeals, invoices for flagged products, and a brief overview of your business. We handle everything from there." },
  { question: "How much does it cost?", answer: "Pricing depends on case complexity. We offer a free initial assessment and transparent quote. No hidden fees. Money-back guarantee if we're unable to achieve reinstatement." },
];

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60; const increment = value / steps; let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); } else { setCount(Math.floor(current)); }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <div ref={ref} style={{ fontSize: "36px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{count}{suffix}</div>;
}

export default function AmazonReinstatementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "70px 0 50px", backgroundColor: "#1a1a2e" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)",
            borderRadius: "20px", padding: "6px 16px", marginBottom: "20px",
          }}>
            <FaExclamationTriangle style={{ color: "#dc2626", fontSize: "14px" }} />
            <span style={{ color: "#dc2626", fontSize: "13px", fontWeight: 600 }}>ACCOUNT SUSPENDED? ACT NOW</span>
          </div>

          <h1 className="typo-h1" style={{ marginBottom: "14px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto", color: "#fff" }}>
            Every Day Your Account Is Down, You&apos;re <span style={{ color: "#dc2626" }}>Losing Money</span>
          </h1>
          <p style={{ maxWidth: "620px", margin: "0 auto 20px", fontSize: "17px", color: "rgba(255,255,255,0.8)" }}>
            Professional Amazon account reinstatement with a <strong style={{ color: "#fff" }}>90%+ success rate</strong>. Custom appeals — not templates. We only take cases we can win.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", marginBottom: "28px" }}>
            {[
              { value: 90, suffix: "%+", label: "Success Rate" },
              { value: 200, suffix: "+", label: "Accounts Recovered" },
              { value: 48, suffix: "h", label: "Appeal Turnaround" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <AnimatedStat value={stat.value} suffix={stat.suffix} />
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https:https://wa.me/message/Q6XJRMT4HKTBF1" target="_blank" rel="noopener noreferrer"
              className="btn-primary btn-primary-pulse"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", padding: "14px 28px" }}>
              <FaWhatsapp style={{ fontSize: "20px" }} />
              Get Emergency Help Now
            </a>
            <a href="https:https://wa.me/message/Q6XJRMT4HKTBF1" target="_blank" rel="noopener noreferrer"
              className="btn-outline-white"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Free Case Assessment
            </a>
          </div>
        </div>
      </section>

      {/* ── URGENCY BAR ── */}
      <section style={{ padding: "14px 0", backgroundColor: "#dc2626" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, margin: 0 }}>
            ⚠ FBA inventory? Storage fees continue while suspended. Rankings drop daily. Lost Buy Box is hard to recover. Every hour matters.
          </p>
        </div>
      </section>

      {/* ── SUSPENSION TYPES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">WE HANDLE IT ALL</span>
            <h2 className="typo-h2">No Matter Why You Were Suspended — We&apos;ve Seen It Before</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ marginTop: "28px", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
            {[
              "Inauthentic Item Claims",
              "IP / Trademark Violations",
              "Policy Violations",
              "High Order Defect Rate",
              "Linked Account Issues",
              "Previously Denied Appeals",
            ].map((item) => (
              <div key={item} style={{
                backgroundColor: "#f6f7f9", borderRadius: "8px", padding: "14px 16px",
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "13px", fontWeight: 600, border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">OUR PROCESS</span>
            <h2 className="typo-h2">From Suspended to Selling in 4 Steps</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: "32px" }}>
            {[
              { img: "/images/process/discussion.png", title: "Case Analysis", desc: "We review your suspension notice, account history, and metrics to identify the exact root cause." },
              { img: "/images/process/get-access.png", title: "Evidence Building", desc: "Collect invoices, supplier docs, authenticity certificates — everything Amazon needs to see." },
              { img: "/images/process/planning.png", title: "Appeal Submission", desc: "Custom Plan of Action addressing root cause, corrective actions, and prevention steps. Submitted in 48-72h." },
              { img: "/images/process/growth.png", title: "Account Restored", desc: "We follow up with Seller Performance until your account is fully reinstated and selling again." },
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

      {/* ── CASE STUDIES ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">REAL RESULTS</span>
            <h2 className="typo-h2">Recent Reinstatement Cases</h2>
            <p className="typo-subtext">Real suspensions. Real reinstatements. Details anonymized for privacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: "28px" }}>
            {caseStudies.map((cs) => (
              <div key={cs.type} className="card-hover" style={{
                backgroundColor: "#fff", borderRadius: "10px", overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
              }}>
                <div style={{ padding: "14px 20px", backgroundColor: "#fef2f2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#991b1b" }}>{cs.type}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-primary)", backgroundColor: "var(--color-primary-light)", padding: "2px 10px", borderRadius: "20px" }}>
                    {cs.days} days
                  </span>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px", lineHeight: 1.6 }}>
                    <FaTimesCircle style={{ color: "#dc2626", fontSize: "11px", marginRight: "6px" }} />
                    {cs.situation}
                  </p>
                  <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "12px" }}>
                    <p style={{ fontSize: "13px", color: "#166534", lineHeight: 1.6, margin: 0 }}>
                      <FaCheckCircle style={{ color: "var(--color-primary)", fontSize: "11px", marginRight: "6px" }} />
                      {cs.result}
                    </p>
                  </div>
                </div>
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
            <h2 className="typo-h2">Gosellify vs DIY Appeals vs Legal Firms</h2>
            <p className="typo-subtext">Most sellers try DIY first, fail, then come to us. Save time — start with experts.</p>
          </div>

          <div style={{ maxWidth: "850px", margin: "32px auto 0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8" }}>What You Need</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "var(--color-primary)", color: "#fff", borderBottom: "2px solid var(--color-primary-dark)", minWidth: "130px" }}>Gosellify</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>DIY Appeal</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, fontSize: "13px", backgroundColor: "#f6f7f9", borderBottom: "2px solid #e8e8e8", minWidth: "120px" }}>Legal Firms</th>
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
                      {row.diy === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.diy}</span>}
                    </td>
                    <td style={{ padding: "12px 20px", textAlign: "center", borderBottom: "1px solid #f0f0f0", verticalAlign: "middle" }}>
                      {row.legal === false ? <FaTimesCircle style={{ color: "#dc2626", fontSize: "18px", display: "inline-block", verticalAlign: "middle" }} /> : <span style={{ fontSize: "13px", color: "#888" }}>{row.legal}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA ── */}
      <section style={{ padding: "50px 0", backgroundColor: "#1a1a2e" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
            Don&apos;t Wait Another Day. <span style={{ color: "#dc2626" }}>Get Your Account Back.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", maxWidth: "500px", margin: "0 auto 24px" }}>
            Free case assessment within 2 hours. Money-back guarantee if we can&apos;t reinstate.
          </p>
          <a href="https://https://wa.me/message/Q6XJRMT4HKTBF1" target="_blank" rel="noopener noreferrer"
            className="btn-primary btn-primary-pulse"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", padding: "14px 28px" }}>
            <FaWhatsapp style={{ fontSize: "20px" }} />
            Get Emergency Help Now
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">GOT QUESTIONS?</span>
            <h2 className="typo-h2">Everything You Need to Know</h2>
          </div>

          <div style={{ maxWidth: "750px", margin: "24px auto 0" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                backgroundColor: "#fff", borderRadius: "8px", marginBottom: "8px",
                overflow: "hidden", border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "14px 18px", background: "none", border: "none",
                    cursor: "pointer", fontSize: "15px", fontWeight: 600,
                    color: "var(--color-dark)", textAlign: "left",
                  }}>
                  {faq.question}
                  {openFaq === i ? <FaChevronUp style={{ fontSize: "12px", flexShrink: 0 }} /> : <FaChevronDown style={{ fontSize: "12px", flexShrink: 0 }} />}
                </button>
                <div style={{ maxHeight: openFaq === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                  <p className="typo-body" style={{ padding: "0 18px 14px" }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
