"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPlayCircle,
  FaBoxOpen,
  FaShieldAlt,
  FaWarehouse,
  FaHeadset,
  FaTimes,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaBoxOpen,
    title: "Up to 80% ROI",
    desc: "Proven profit across 55+ stores",
  },
  {
    icon: FaShieldAlt,
    title: "Zero Risk Model",
    desc: "Pay only once you see profit",
  },
  {
    icon: FaWarehouse,
    title: "3 US Warehouses",
    desc: "NY, FL & CT — same-day prep",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Dedicated VA for your store",
  },
];

const barLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const barX = [35, 78, 121, 164, 207, 250, 293, 336, 379];

// Multiple data sets to cycle through — simulates live dashboard
const dataSets = [
  { revenue: "$691,224", roi: "+35%", orders: "20,768", profit: "$241,928", stores: "55+", bars: [60, 90, 120, 100, 135, 110, 150, 165, 155] },
  { revenue: "$724,891", roi: "+38%", orders: "22,140", profit: "$275,460", stores: "57+", bars: [80, 70, 140, 130, 110, 145, 160, 140, 170] },
  { revenue: "$758,320", roi: "+41%", orders: "23,950", profit: "$310,912", stores: "58+", bars: [95, 110, 85, 150, 125, 170, 130, 155, 145] },
  { revenue: "$812,450", roi: "+44%", orders: "25,380", profit: "$357,478", stores: "60+", bars: [70, 130, 110, 90, 165, 120, 145, 170, 160] },
];

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % dataSets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = dataSets[dataIndex];

  return (
    <>
      <section style={{ backgroundColor: "#f6f7f9", position: "relative", overflow: "hidden" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left Content */}
            <div style={{ padding: "55px 0 110px" }}>
              <span className="typo-label" style={{ display: "block", marginBottom: "10px" }}>
                #1 Ecommerce Management Agency
              </span>

              <h1 className="typo-h1" style={{ marginBottom: "6px" }}>
                All-in-one Automated Ecommerce Management Services
              </h1>
              <p className="typo-body" style={{ color: "var(--color-primary)", fontWeight: 600, marginBottom: "6px", fontSize: "16px" }}>
                Fully managed Amazon, Walmart, eBay &amp; Shopify stores
              </p>
              <p className="typo-h3" style={{ color: "var(--color-accent)", marginBottom: "12px" }}>
                100% Risk Free. Pay only once you see profit.
              </p>
              <p className="typo-body" style={{ marginBottom: "20px", maxWidth: "480px" }}>
                Start, grow &amp; scale your ecommerce business with our expert team.
                We handle everything from product research to fulfillment — you just collect profits.
              </p>

              {/* Highlight pills */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e8e8",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "7px",
                        backgroundColor: "rgba(22,163,74,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon style={{ color: "var(--color-primary)", fontSize: "13px" }} />
                    </span>
                    <div>
                      <p className="typo-small" style={{ fontWeight: 700, color: "var(--color-text)", lineHeight: 1.2 }}>
                        {item.title}
                      </p>
                      <p className="typo-small" style={{ color: "#999", marginTop: "1px" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Link
                  href="/success-story"
                  className="btn-primary btn-primary-pulse"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <FaPlayCircle style={{ fontSize: "14px" }} />
                  See Our Results
                </Link>
                <a
                  href="https://wa.me/message/Q6XJRMT4HKTBF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}
                >
                  <FaWhatsapp style={{ fontSize: "18px", color: "#25d366" }} />
                  Quick Whatsapp
                </a>
              </div>
            </div>

            {/* Right — Animated SVG with click-to-popup video */}
            <div
              className="hidden lg:flex items-center justify-center"
              style={{ position: "relative", minHeight: "100%", paddingTop: "40px", paddingBottom: "40px" }}
            >
              <div
                onClick={() => setShowVideo(true)}
                style={{ width: "100%", maxWidth: "440px", cursor: "pointer", position: "relative" }}
              >
                <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                  <defs>
                    <style>{`
                      @keyframes pulseGlow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
                      .roi-badge { animation: pulseGlow 2s ease-in-out infinite; }
                      @keyframes playPulse {
                        0% { box-shadow: 0 4px 20px rgba(22,163,74,0.4), 0 0 0 0 rgba(22,163,74,0.4); }
                        70% { box-shadow: 0 4px 20px rgba(22,163,74,0.4), 0 0 0 16px rgba(22,163,74,0); }
                        100% { box-shadow: 0 4px 20px rgba(22,163,74,0.4), 0 0 0 0 rgba(22,163,74,0); }
                      }
                    `}</style>
                  </defs>

                  {/* Background card */}
                  <rect x="0" y="0" width="440" height="440" rx="16" fill="white" />
                  <rect x="0" y="0" width="440" height="440" rx="16" stroke="#e8e8ee" strokeWidth="1" />

                  {/* Header bar */}
                  <rect x="0" y="0" width="440" height="48" rx="16" fill="#1a1a2e" />
                  <rect x="0" y="16" width="440" height="32" fill="#1a1a2e" />
                  <circle cx="24" cy="24" r="5" fill="#e74c3c" />
                  <circle cx="42" cy="24" r="5" fill="#f59e0b" />
                  <circle cx="60" cy="24" r="5" fill="#16a34a" />
                  <text x="220" y="28" textAnchor="middle" fill="#9494ac" fontSize="12" fontFamily="Roboto, sans-serif">Gosellify Dashboard</text>

                  {/* Revenue — values change with transition */}
                  <text x="30" y="80" fill="#999" fontSize="11" fontFamily="Roboto, sans-serif">TOTAL REVENUE</text>
                  <text x="30" y="108" fill="#1a1a2e" fontSize="28" fontWeight="800" fontFamily="Roboto, sans-serif">
                    {data.revenue}
                  </text>
                  <rect className="roi-badge" x="210" y="90" width="72" height="24" rx="12" fill="rgba(22,163,74,0.1)" />
                  <text className="roi-badge" x="246" y="106" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="700" fontFamily="Roboto, sans-serif">
                    {data.roi} ROI
                  </text>

                  {/* Mini stat cards — values update */}
                  <rect x="30" y="130" width="115" height="55" rx="8" fill="#f6f7f9" />
                  <text x="42" y="152" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Orders</text>
                  <text x="42" y="172" fill="#1a1a2e" fontSize="17" fontWeight="700" fontFamily="Roboto, sans-serif">
                    {data.orders}
                  </text>

                  <rect x="160" y="130" width="115" height="55" rx="8" fill="#f6f7f9" />
                  <text x="172" y="152" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Profit</text>
                  <text x="172" y="172" fill="#16a34a" fontSize="17" fontWeight="700" fontFamily="Roboto, sans-serif">
                    {data.profit}
                  </text>

                  <rect x="290" y="130" width="120" height="55" rx="8" fill="#f6f7f9" />
                  <text x="302" y="152" fill="#999" fontSize="10" fontFamily="Roboto, sans-serif">Active Stores</text>
                  <text x="302" y="172" fill="#1a1a2e" fontSize="17" fontWeight="700" fontFamily="Roboto, sans-serif">
                    {data.stores}
                  </text>

                  {/* Chart label */}
                  <text x="30" y="215" fill="#999" fontSize="11" fontFamily="Roboto, sans-serif">MONTHLY REVENUE</text>
                  <line x1="30" y1="225" x2="410" y2="225" stroke="#f0f0f0" strokeWidth="1" />

                  {/* Chart bars — heights transition smoothly */}
                  {data.bars.map((h: number, i: number) => (
                    <rect
                      key={barLabels[i]}
                      x={barX[i]}
                      y={400 - h}
                      width="32"
                      height={h}
                      rx="4"
                      fill={h > 140 ? "#16a34a" : "#dcfce7"}
                      style={{ transition: "y 0.8s ease, height 0.8s ease, fill 0.5s ease" }}
                    />
                  ))}

                  {/* Chart labels */}
                  {barLabels.map((label: string, i: number) => (
                    <text
                      key={`label-${label}`}
                      x={barX[i] + 16}
                      y="420"
                      fill="#bbb"
                      fontSize="10"
                      textAnchor="middle"
                      fontFamily="Roboto, sans-serif"
                    >
                      {label}
                    </text>
                  ))}
                </svg>

                {/* Play button overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.08)"; }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(22,163,74,0.4)",
                      animation: "playPulse 2s ease-in-out infinite",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p style={{
                    marginTop: "10px",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                  }}>
                    Watch Client Results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "900px",
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaTimes />
              <span style={{ fontSize: "14px", fontWeight: 600 }}>Close</span>
            </button>
            <div style={{ position: "relative", paddingBottom: "56.25%" }}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/9DqDFAGLPrc?autoplay=1"
                title="Gosellify - Client Results"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
