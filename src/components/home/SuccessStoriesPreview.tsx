"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SuccessStoriesPreview() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Success Stories</span>
          <h2 className="typo-h2">Real Results From Real Clients</h2>
          <p className="typo-subtext">
            Don&apos;t just take our word for it — watch our clients share their actual store results,
            revenue numbers, and experience working with our team. We&apos;ve helped clients generate
            over $12M in revenue with an average ROI of 35-80%. Your success story could be next.
          </p>
        </div>

        {/* YouTube Video Embeds - larger */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto 28px",
          }}
          className="success-videos"
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              src="https://www.youtube.com/embed/9DqDFAGLPrc"
              title="Client Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              src="https://www.youtube.com/embed/D8B-AKLZciA"
              title="Client Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          <Link href="/success-story" className="btn-primary">
            More Success Stories
          </Link>
          <a
            href="https://wa.link/m2ac6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <FaWhatsapp style={{ fontSize: "16px" }} />
            Quick Whatsapp
          </a>
        </div>

        <style jsx>{`
          @media (max-width: 639px) {
            .success-videos {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
