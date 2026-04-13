import { Metadata } from "next";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Affiliate Referral Program - Gosellify",
  description: "Earn $1,000+ every month by referring clients to Gosellify.",
};

const benefits = [
  "Earn $1,000+ per referral per month",
  "No cap on earnings",
  "Monthly commission payouts",
  "Dedicated affiliate dashboard",
  "Marketing materials provided",
  "Personal affiliate manager",
];

export default function ReferralPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Referral Program</span>
            <h1 className="typo-h1">Affiliate Referral Program</h1>
            <p className="typo-subtext" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Earn $1,000+ every month from each referral
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="section-header text-center" style={{ marginBottom: "28px" }}>
            <h2 className="typo-h2">
              Why Join Our <span style={{ color: "var(--color-primary)" }}>Affiliate Program</span>?
            </h2>
            <p className="typo-subtext" style={{ maxWidth: "600px", margin: "10px auto 0" }}>
              Partner with Gosellify and earn generous commissions for every client you refer. Our affiliate program is designed to reward you for helping others discover our premium eCommerce management services.
            </p>
          </div>

          <div
            style={{
              background: "#f6f7f9",
              borderRadius: "12px",
              padding: "32px",
              marginBottom: "28px",
            }}
          >
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <FaCheck className="flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                  <span className="typo-body" style={{ fontWeight: 500 }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/message/Q6XJRMT4HKTBF1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" /> Join Affiliate
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
