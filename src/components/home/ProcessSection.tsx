"use client";

const steps = [
  {
    img: "/images/process/discussion.png",
    title: "Discussion",
    description: "Discuss requirements, agree on needs & pricing",
  },
  {
    img: "/images/process/get-access.png",
    title: "Get Access",
    description: "Share store access & required portal credentials",
  },
  {
    img: "/images/process/planning.png",
    title: "Planning",
    description: "We build a plan for maximum profit output",
  },
  {
    img: "/images/process/growth.png",
    title: "Growth",
    description: "We execute the plan & start generating profit",
  },
  {
    img: "/images/process/calculation.png",
    title: "Calculation",
    description: "We report every sale & you pay from profits",
  },
];

export default function ProcessSection() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Our Process</span>
          <h2 className="typo-h2">How It Works — 5 Simple Steps</h2>
          <p className="typo-subtext">
            Getting started is easy. We&apos;ve streamlined our onboarding to get your store
            profitable as fast as possible — most clients see results within the first 30 days.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="process-grid"
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                padding: "0 8px",
              }}
            >
              {/* Icon — no bg circle, no step number */}
              <div style={{ marginBottom: "12px" }}>
                <img
                  src={step.img}
                  alt={step.title}
                  style={{ width: "72px", height: "72px", objectFit: "contain" }}
                />
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block"
                  style={{
                    position: "absolute",
                    top: "36px",
                    left: "calc(50% + 40px)",
                    width: "calc(100% - 80px)",
                    height: "2px",
                    background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-light))",
                    opacity: 0.3,
                  }}
                />
              )}

              <h3 className="typo-h3" style={{ marginBottom: "4px" }}>
                {step.title}
              </h3>
              <p className="typo-small">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 1023px) {
            .process-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 24px !important;
            }
          }
          @media (max-width: 639px) {
            .process-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
