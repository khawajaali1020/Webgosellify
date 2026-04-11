"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Sales Last Year", value: 10, prefix: "$", suffix: " M" },
  { label: "Profit Made", value: 5, prefix: "$", suffix: " M" },
  { label: "Active Store", value: 15, prefix: "", suffix: " +" },
  { label: "Happy Client", value: 150, prefix: "", suffix: " +" },
];

export default function ServiceConfidence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main" ref={sectionRef}>
        <div className="section-header">
          <span className="typo-label">Our Track Record</span>
          <h2 className="typo-h2">Confidence with EcomGarden Service</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                flex: "1 1 auto",
                textAlign: "center",
                padding: "16px 28px",
                position: "relative",
                minWidth: "140px",
                borderRight:
                  index < stats.length - 1
                    ? "1px solid rgba(0,0,0,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "var(--color-dark)",
                  lineHeight: "1.1",
                }}
              >
                {isVisible ? (
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  `${stat.prefix}0${stat.suffix}`
                )}
              </div>
              <p className="typo-label" style={{ marginTop: "8px" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
