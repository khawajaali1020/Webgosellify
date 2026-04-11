"use client";

const partners = [
  { name: "USPS", img: "/images/partners/usps.webp", w: 157, h: 77 },
  { name: "Amazon SPN", img: "/images/partners/amazon-spn.webp", w: 157, h: 60 },
  { name: "Sam's Club", img: "/images/partners/sams-club.webp", w: 157, h: 65 },
  { name: "CenturyLink", img: "/images/partners/centurylink.webp", w: 157, h: 62 },
  { name: "EasyShip", img: "/images/partners/easyship.webp", w: 157, h: 86 },
  { name: "Zoro", img: "/images/partners/zoro.webp", w: 157, h: 82 },
  { name: "Shopify", img: "/images/partners/shopify.webp", w: 158, h: 85 },
  { name: "Google Workspace", img: "/images/partners/google-workspace.webp", w: 157, h: 38 },
  { name: "Walmart", img: "/images/partners/walmart.png", w: 157, h: 75 },
  { name: "Google Ads", img: "/images/partners/google-ads.webp", w: 157, h: 53 },
];

export default function PartnersSection() {
  return (
    <section style={{ padding: "50px 0", backgroundColor: "#f6f7f9" }}>
      <div className="container-main">
        <div className="section-header" style={{ marginBottom: "20px" }}>
          <span className="typo-label">Trusted Partners</span>
          <h2 className="typo-h2" style={{ fontSize: "22px" }}>Companies We Work With</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px 40px",
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="partner-logo"
              style={{
                width: "130px",
                height: "55px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.5,
                filter: "grayscale(100%)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <img
                src={partner.img}
                alt={partner.name}
                style={{ maxWidth: "120px", maxHeight: "48px", width: "auto", height: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .partner-logo:hover {
            opacity: 1 !important;
            filter: grayscale(0%) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
