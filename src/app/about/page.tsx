import Link from "next/link";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const stats = [
  { value: "200+", label: "Clients Worldwide" },
  { value: "250+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "3", label: "Countries Served" },
];

const values = [
  "Transparency in everything we do",
  "Performance-based pricing — pay from profit",
  "24/7 dedicated support for every client",
  "Data-driven decisions, not guesswork",
  "Long-term partnerships, not one-off projects",
  "Continuous learning and innovation",
];

const teamMembers = [
  {
    name: "Muhammad Jamshed",
    title: "Founder & Head Of Business",
    bio: "Founder & Head Of Business of Gosellify. Have 8 years experience with ecommerce.",
    photo: "/images/about/muhammad-jamshed-dp.webp",
  },
  {
    name: "Ahmad Ali",
    title: "Co-Founder",
    bio: "Abu Sama have 6 years ecommerce experience and leading the Amazon department",
    photo: "/images/about/ahmad-ali.webp",
  },
  {
    name: "Muhammad Umar",
    title: "Manager, Amazon Arbitrage",
    bio: "Rifat have 5 years experience with eBay. He leading 30+ active ebay stores.",
    photo: "/images/about/muhammad-umar.webp",
  },
  {
    name: "Mohammad Amir",
    title: "Manager, Wholesale Department",
    bio: "Amir managing the wholesale department of Amazon, Walmart and eBay.",
    photo: "/images/about/mohammad-amir.webp",
  },
  {
    name: "Jakaria Islam",
    title: "Manager, Walmart Department",
    bio: "Jakaria have 6 years experience with Walmart. He leading the Walmart department",
    photo: "/images/about/jakaria-islam.webp",
  },
  {
    name: "Mahbub H.",
    title: "Manager, Warehouse & Shipping",
    bio: "Mahbub managing our US and UK warehouse and all kinds of shipping operation",
    photo: "/images/about/mahbub-h.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "60px 0" }}>
        <div className="container-main text-center">
          <span className="typo-label">About Us</span>
          <h1 className="typo-h1" style={{ marginTop: "8px", marginBottom: "12px" }}>
            Your Trusted eCommerce Partner Since 2022
          </h1>
          <p className="typo-subtext" style={{ maxWidth: "560px", margin: "0 auto 32px" }}>
            We help entrepreneurs build and scale profitable Amazon, eBay, Walmart, and
            Shopify businesses across nine countries — with $12M+ in revenue generated for our clients.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              maxWidth: "700px",
              margin: "0 auto",
            }}
            className="stats-grid"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "20px 16px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    marginBottom: "4px",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div className="typo-small" style={{ fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="typo-label" style={{ display: "block", marginBottom: "8px" }}>Who We Are</span>
              <h2 className="typo-h2" style={{ marginBottom: "14px" }}>
                Welcome to Gosellify
              </h2>
              <p className="typo-body" style={{ marginBottom: "12px" }}>
                Hello and welcome to Gosellify, your friendly Amazon business
                advisor since 2022. We&apos;re thrilled to share our journey
                with you &ndash; it includes partnering with over 200 clients,
                completing upward of 250 projects, and growing our team to more
                than 50 enthusiastic members. We&apos;ve spread our wings across
                three different countries, helping people just like you everywhere.
              </p>
              <p className="typo-body" style={{ marginBottom: "12px" }}>
                Our team is here to make selling on Amazon a breeze. Whether
                you&apos;re looking to sell big quantities through Amazon FBA
                wholesale, find good deals with online arbitrage, create your
                own brand with a private label, or just get started with your
                Amazon account, we&apos;ve got your back.
              </p>
              <p className="typo-body" style={{ marginBottom: "20px" }}>
                Let us join your Amazon adventure and make your business soar.
                We keep things straightforward and successful &ndash;
                that&apos;s the Gosellify way!.
              </p>
              <a
                href="https://wa.me/message/Q6XJRMT4HKTBF1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <FaWhatsapp style={{ fontSize: "18px" }} />
                Let&apos;s Schedule a Meeting
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/about/muhammad-jamshed.webp"
                alt="Gosellify Team"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: "55px 0", backgroundColor: "#f6f7f9" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — Our Story */}
            <div>
  <span className="typo-label" style={{ display: "block", marginBottom: "8px" }}>
    Our Story
  </span>

  <h2 className="typo-h2" style={{ marginBottom: "14px" }}>
    From Freelancer to Full-Service Agency
  </h2>

  <p className="typo-body" style={{ marginBottom: "12px" }}>
    In 2018, I started my journey as an SEO expert on Fiverr,
    working with different clients and helping improve their dropshipping stores.
    I worked on many projects and always focused on giving the best results.
    In 2020, I started learning and working on Amazon dropshipping
    at Ecomhutsy in Multan, where I gained real experience in eCommerce.
    In 2022, I started my own business, and after getting good success,
    decided to grow with a team. In 2023,
    I registered my company in the USA as Gosellify LLC.
  </p> {/* ✅ THIS WAS MISSING */}

  <div>
    <p
      className="typo-h3"
      style={{
        color: "var(--color-primary)",
        marginBottom: "2px",
        fontSize: "16px",
      }}
    >
      Muhammad Jamshed
    </p>

    <p className="typo-small">
      Founder &amp; Head Of Business, Gosellify
    </p>
  </div>
</div>
            {/* Right — Values */}
            <div>
              <span className="typo-label" style={{ display: "block", marginBottom: "8px" }}>Our Values</span>
              <h2 className="typo-h2" style={{ marginBottom: "16px" }}>
                What Drives Us Every Day
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {values.map((v) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaCheckCircle style={{ fontSize: "14px", color: "var(--color-primary)", flexShrink: 0 }} />
                    <span className="typo-body" style={{ fontWeight: 500, margin: 0 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "55px 0", background: "#fff" }}>
        <div className="container-main">
          <div className="section-header">
            <span className="typo-label">Leadership Team</span>
            <h2 className="typo-h2">Meet The People Behind Gosellify</h2>
            <p className="typo-subtext">
              Our leadership team brings decades of combined ecommerce experience
              across Amazon, Walmart, eBay, and Shopify marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-hover"
                style={{
                  textAlign: "center",
                  padding: "28px 20px",
                  borderRadius: "10px",
                  background: "#f6f7f9",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #fff",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    }}
                  />
                </div>
                <h4 className="typo-h3" style={{ marginBottom: "4px", fontSize: "17px" }}>
                  {member.name}
                </h4>
                <p className="typo-small" style={{ color: "var(--color-primary)", fontWeight: 600, marginBottom: "8px" }}>
                  {member.title}
                </p>
                <p className="typo-small">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
