"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, prefix: "$", suffix: "M+", label: "Revenue Last Year" },
  { value: 2, prefix: "$", suffix: "M+", label: "Profit Made" },
  { value: 55, prefix: "", suffix: "+", label: "Active Stores" },
  { value: 250, prefix: "", suffix: "+", label: "Happy Clients" },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  label,
  duration = 2000,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} style={{ textAlign: "center", flex: 1, padding: "0 10px" }}>
      <div
        style={{
          fontSize: "28px",
          lineHeight: "1",
          fontWeight: 800,
          color: "var(--color-dark)",
          marginBottom: "4px",
          letterSpacing: "-0.5px",
          fontFamily: "var(--font-roboto)",
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <p className="typo-label" style={{ fontSize: "11px", fontWeight: 600, margin: 0 }}>
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-42px",
        marginBottom: "-42px",
      }}
    >
      <div className="container-main">
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "22px 16px",
            boxShadow: "0 6px 30px rgba(0,0,0,0.07)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0",
            flexWrap: "wrap",
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                flex: 1,
                minWidth: "130px",
              }}
            >
              <AnimatedCounter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
              {index < stats.length - 1 && (
                <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(0,0,0,0.08)", flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
