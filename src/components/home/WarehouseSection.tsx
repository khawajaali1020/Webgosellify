"use client";

import Link from "next/link";

import { FaCheckCircle } from "react-icons/fa";

const warehouseFeatures = [
  "FBA Prep & WFS Prep",
  "2-Step Dropshipping",
  "Storage & Inventory",
  "Direct-to-Customer Shipping",
];

export default function WarehouseSection() {
  return (
    <section style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "center",
          }}
          className="warehouse-grid"
        >
          {/* Left - Text Content */}
          <div>
            <span className="typo-label" style={{ display: "block", marginBottom: "8px" }}>
              Our Warehouses
            </span>
            <h2 className="typo-h2" style={{ marginBottom: "12px" }}>
              3 Dedicated Warehouses in NY, FL &amp; CT
            </h2>
            <p className="typo-body" style={{ marginBottom: "16px" }}>
              No matter which selling method you use — FBA, WFS, dropshipping, or direct-to-customer — our
              warehouses handle it all. We process thousands of orders monthly with same-day prep and
              discounted flat-rate shipping labels to keep your costs low and margins high.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
              {warehouseFeatures.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaCheckCircle style={{ fontSize: "13px", color: "var(--color-primary)", flexShrink: 0 }} />
                  <span className="typo-body" style={{ fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/services/3pl-warehouse" className="btn-primary">
              Get Warehouse Service
            </Link>
          </div>

          {/* Right - Map Image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/warehouse/warehouse-map.webp"
              alt="Warehouse Locations Map"
              style={{ width: "100%", maxWidth: "440px", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .warehouse-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
