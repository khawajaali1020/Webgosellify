import Link from "next/link";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, var(--color-dark) 0%, var(--color-dark-light) 50%, var(--color-dark) 100%)",
        padding: "55px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(22,163,74,0.06)" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "-30px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(22,163,74,0.04)" }} />

      <div className="container-main" style={{ position: "relative" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(22,163,74,0.12)",
              border: "1px solid rgba(22,163,74,0.2)",
              borderRadius: "50px",
              padding: "5px 16px",
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-primary)", display: "inline-block" }} />
            <span className="typo-small" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
              We are online CST 11 PM to 3 PM
            </span>
          </div>

          <h2 className="typo-h2" style={{ color: "#fff", marginBottom: "10px", maxWidth: "550px", marginLeft: "auto", marginRight: "auto" }}>
            Ready to Scale Your eCommerce Business?
          </h2>
          <p className="typo-subtext" style={{ color: "#9494ac", maxWidth: "520px", margin: "0 auto 24px" }}>
            Connect with our in-house team of highly vetted ecommerce experts eager to propel your
            Amazon, Walmart, or Shopify store to new heights — with transparent pricing and guaranteed results.
          </p>

          <div className="flex flex-wrap justify-center" style={{ gap: "12px" }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              Contact Us
              <FaChevronRight style={{ fontSize: "10px" }} />
            </Link>
            <a
              href="https://wa.me/message/Q6XJRMT4HKTBF1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp style={{ fontSize: "18px" }} />
              Quick WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
