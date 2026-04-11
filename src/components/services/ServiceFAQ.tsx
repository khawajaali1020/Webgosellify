"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">FAQ</span>
          <h2 className="typo-h2">Frequently Asked Questions FAQs</h2>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                style={{
                  marginBottom: "8px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "#fff",
                  border: isOpen
                    ? "1px solid color-mix(in srgb, var(--color-primary) 25%, transparent)"
                    : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: isOpen
                    ? "0 4px 20px color-mix(in srgb, var(--color-primary) 8%, transparent)"
                    : "0 1px 4px rgba(0,0,0,0.02)",
                  transition: "all 0.3s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "14px",
                    transition: "background 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "7px",
                        background: isOpen
                          ? "var(--color-primary)"
                          : "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "11px",
                        fontWeight: 700,
                        color: isOpen ? "#fff" : "var(--color-primary)",
                        transition: "all 0.3s",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: isOpen
                          ? "var(--color-primary)"
                          : "var(--color-text)",
                        transition: "color 0.2s",
                      }}
                    >
                      {item.question}
                    </span>
                  </div>
                  <span
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: isOpen
                        ? "color-mix(in srgb, var(--color-primary) 10%, transparent)"
                        : "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s",
                    }}
                  >
                    <FaChevronDown
                      style={{
                        fontSize: "10px",
                        color: isOpen ? "var(--color-primary)" : "#999",
                        transition: "transform 0.3s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      }}
                    />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 18px 16px 58px",
                    }}
                  >
                    <p className="typo-body" style={{ margin: 0 }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
