"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const offices = [
  {
    name: "Arizona Office",
    flag: "/images/contact/flag-usa.webp",
    address: "1311 W Baseline Road, Tempe, Arizona, 85283, USA",
    phone: "+1 307 393 8789",
  },
  {
    name: "London Office",
    flag: "/images/contact/flag-uk.png",
    address: "71-75 Shelton street, London, WC2H 9JQ, UK",
    phone: "+1 307 393 8789",
  },
  {
    name: "Pakistan Office",
    flag: "/images/contact/flag-pakistan.webp",
    address: "Shalimar Colony St No 15, Multan, 60000, Pakistan",
    phone: "+92 316 606 7315",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Get In Touch</span>
            <h1 className="typo-h1">Contact Us</h1>
            <p className="typo-subtext" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Have questions about our services or need support? We&apos;re here to help.
              Reach out and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.name}
                className="text-center transition-all duration-300"
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 24px rgba(22,163,74,0.1)";
                  el.style.borderColor = "rgba(22,163,74,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                  el.style.borderColor = "#e5e7eb";
                }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={office.flag}
                    alt={office.name}
                    style={{ width: "72px", height: "auto" }}
                    className="object-contain"
                  />
                </div>
                <h3 className="typo-h3" style={{ marginBottom: "8px" }}>
                  {office.name}
                </h3>
                <p className="typo-body" style={{ marginBottom: "8px" }}>
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  style={{
                    fontSize: "15px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                  }}
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: "55px 0", background: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="typo-h2" style={{ marginBottom: "10px" }}>
                Let&apos;s get in touch
              </h2>
              <p className="typo-body" style={{ marginBottom: "28px" }}>
                Make a free consultation with our expert team to solve your
                problems. Fill out the form and we&apos;ll get back to you at the
                earliest.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaPhoneAlt style={{ color: "var(--color-primary)", fontSize: "15px" }} />
                  </div>
                  <div>
                    <p className="typo-small" style={{ marginBottom: "2px" }}>
                      Call us
                    </p>
                    <a
                      href="tel:+13072055481"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                      }}
                    >
                      +1 307 393 8789
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaEnvelope style={{ color: "var(--color-primary)", fontSize: "15px" }} />
                  </div>
                  <div>
                    <p className="typo-small" style={{ marginBottom: "2px" }}>
                      Email us
                    </p>
                    <a
                      href="mailto:info@ecomgarden.com"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                      }}
                    >
                      info@ecomgarden.com
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(22,163,74,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaWhatsapp style={{ color: "var(--color-primary)", fontSize: "17px" }} />
                  </div>
                  <div>
                    <p className="typo-small" style={{ marginBottom: "2px" }}>
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/13072055481"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-primary)",
                      }}
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted && (
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    background: "#dcfce7",
                    color: "#15803d",
                    fontSize: "15px",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none bg-white"
                  style={{ padding: "14px 16px", fontSize: "15px", borderRadius: "10px" }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
