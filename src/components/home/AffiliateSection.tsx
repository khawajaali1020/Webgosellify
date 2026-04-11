import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AffiliateSection() {
  return (
    <section style={{ padding: "20px 0" }}>
      <div className="container-main">
        <div
          style={{
            background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
            borderRadius: "12px",
            padding: "28px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="typo-h3" style={{ color: "white", marginBottom: "6px" }}>
              Become an Affiliate Partner — Earn $1,000+/month per referral*
            </h2>
            <p className="typo-body" style={{ color: "rgba(255,255,255,0.85)", margin: "0 auto 16px", maxWidth: "600px" }}>
              No selling required. Just refer clients to EcomGarden and earn recurring monthly commissions.
              Our top affiliates earn $5,000+ per month with just a few referrals.
            </p>
            <Link
              href="/referral"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "white",
                color: "var(--color-primary-dark)",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "14px",
                padding: "11px 28px",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
            >
              Join Affiliate Program <FaArrowRight style={{ fontSize: "11px" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
