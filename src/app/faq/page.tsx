"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const faqs = [
  {
    question: "Does 2 Step Dropshipping Legal?",
    answer:
      "Yes, 2 step dropshipping is legal. You will never face any legal issue with 2 step dropshipping model.",
  },
  {
    question: "How Safe 2 Step Dropshipping Business?",
    answer:
      "Its 100% safe business model. Amazon required sending products with Amazon's branded packaging or white branding. As well, no 3rd party retailer invoice into the parcel. Our warehouse will remove the walmart invoice and repackaging products with Amazon branded box.",
  },
  {
    question:
      "Does 2 Step Dropshipping profitable after shipping and warehouse cost?",
    answer:
      "Yes. Its fully profitable. When we do products research, we pick products thats only have good profit margin and it will cover our warehouse & shipping cost.",
  },
  {
    question: "How much ROI (Return ON Investment) can I get?",
    answer:
      "Our average ROI is 35%. You will get 30-40% PROFIT MARGIN after all expense (shipping, warehouse and all other fees)",
  },
  {
    question:
      "Why I Need Investment Where Dropshipping Not Required any upfront?",
    answer:
      "Good question. Amazon will send you payout after 14 days of order delivery. So you need purchase products using your own funds. Then you will get payment from Amazon. So you need capital to purchase products when customer will order.",
  },
  {
    question: "Can I use my address as warehouse?",
    answer:
      "Yes, If you can handle products receiving and shipping to customer, then why you will pay 3rd party warehouse!",
  },
  {
    question: "Where do you source products?",
    answer:
      "We use authentic products sources only and use sourcing where its cheapest. We use Walmart, Amazon Prime, Sams Club, Target, Home Depot, Costco Wholesale.",
  },
  {
    question: "Will you guys manage my whole business?",
    answer:
      "Yes, We provide A-Z management including products research, sourcing, order management, shipping, return handling, customer support, promotion.",
  },
  {
    question: "What if I can not create any profit?",
    answer:
      "Our working method is 100% profit guarantee. You will get full refund of any charge with no question ask.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Got Questions?</span>
            <h1 className="typo-h1">Frequently Asked Questions</h1>
            <p className="typo-subtext" style={{ maxWidth: "480px", margin: "0 auto" }}>
              Everything you need to know about our eCommerce management
              services and business models.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
        <div className="container-main">
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
                      : "1px solid #eee",
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
                          fontSize: "13px",
                          fontWeight: 700,
                          color: isOpen ? "#fff" : "var(--color-primary)",
                          transition: "all 0.3s",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: isOpen ? "var(--color-primary)" : "var(--color-text)",
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
                      <p className="typo-body">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions? */}
          <div
            style={{
              maxWidth: "780px",
              margin: "28px auto 0",
              background: "#fff",
              borderRadius: "14px",
              padding: "24px",
              textAlign: "center",
              border: "1px solid #eee",
              boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
            }}
          >
            <h3 className="typo-h3" style={{ marginBottom: "6px" }}>
              Still have questions?
            </h3>
            <p className="typo-body" style={{ marginBottom: "14px" }}>
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our team.
            </p>
            <div
              className="flex flex-wrap justify-center"
              style={{ gap: "10px" }}
            >
              <a
                href="https://wa.link/m2ac6m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                className="btn-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
