import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface ServiceProsConsProps {
  heading: string;
  pros: string[];
  cons: string[];
}

export default function ServiceProsCons({
  heading,
  pros,
  cons,
}: ServiceProsConsProps) {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div className="section-header">
          <span className="typo-label">Pros &amp; Cons</span>
          <h2 className="typo-h2">{heading}</h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          {/* Pros */}
          <div
            style={{
              backgroundColor: "#f6f7f9",
              borderRadius: "10px",
              padding: "24px",
            }}
          >
            <h3 className="typo-h3" style={{ color: "var(--color-primary)", marginBottom: "14px" }}>
              Pros
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {pros.map((pro) => (
                <div key={pro} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <FaCheckCircle style={{ fontSize: "14px", color: "var(--color-primary)", flexShrink: 0, marginTop: "3px" }} />
                  <span className="typo-body" style={{ margin: 0 }}>{pro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cons */}
          <div
            style={{
              backgroundColor: "#f6f7f9",
              borderRadius: "10px",
              padding: "24px",
            }}
          >
            <h3 className="typo-h3" style={{ color: "#e74c3c", marginBottom: "14px" }}>
              Cons
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {cons.map((con) => (
                <div key={con} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <FaTimesCircle style={{ fontSize: "14px", color: "#e74c3c", flexShrink: 0, marginTop: "3px" }} />
                  <span className="typo-body" style={{ margin: 0 }}>{con}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
