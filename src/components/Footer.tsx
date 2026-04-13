import Link from "next/link";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Referral Program", href: "/referral" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const serviceLinks = [
  { name: "3PL Warehouse Service", href: "/services/3pl-warehouse" },
  { name: "Amazon Arbitrage", href: "/services/amazon-arbitrage" },
  { name: "Amazon Wholesale", href: "/services/amazon-wholesale" },
  { name: "Flat Rate Shipping", href: "/services/flat-rate-shipping" },
  { name: "Walmart Management", href: "/services/walmart-management" },
  { name: "Shopify Development", href: "/services/shopify-development" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com/ecomgarden", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com/@ecomgarden", label: "YouTube" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/ecomgarden", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div style={{ backgroundColor: "var(--color-dark)", paddingTop: "44px", paddingBottom: "14px" }}>
        <div className="container-main">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "32px" }}
          >
            {/* Column 1 — Brand */}
            <div>
              <Link href="/" style={{ display: "inline-block", marginBottom: "12px" }}>
                <img
                  src="/images/logo-white.webp"
                  alt="gosellify"
                  style={{ height: "44px", width: "auto" }}
                />
              </Link>
              <p
                style={{
                  color: "var(--color-primary)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Ecommerce Management
              </p>
              <p
                style={{
                  color: "#8a8aa0",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                Gosellify. Your trusted
                partner for complete eCommerce management solutions.
              </p>
              <div className="flex" style={{ gap: "8px" }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8a8aa0",
                      fontSize: "13px",
                      transition: "all 0.3s",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    className="hover:!bg-primary hover:!text-white hover:!border-primary"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Company */}
            <div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  paddingBottom: "10px",
                  borderBottom: "2px solid var(--color-primary)",
                  display: "inline-block",
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {companyLinks.map((link) => (
                  <li key={link.name} style={{ marginBottom: "10px" }}>
                    <Link
                      href={link.href}
                      style={{
                        color: "#8a8aa0",
                        fontSize: "15px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "color 0.2s, padding-left 0.2s",
                      }}
                      className="hover:!text-primary hover:!pl-1"
                    >
                      <FaChevronRight style={{ fontSize: "8px", color: "var(--color-primary)" }} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  paddingBottom: "10px",
                  borderBottom: "2px solid var(--color-primary)",
                  display: "inline-block",
                }}
              >
                Our Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {serviceLinks.map((link) => (
                  <li key={link.name} style={{ marginBottom: "10px" }}>
                    <Link
                      href={link.href}
                      style={{
                        color: "#8a8aa0",
                        fontSize: "15px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "color 0.2s, padding-left 0.2s",
                      }}
                      className="hover:!text-primary hover:!pl-1"
                    >
                      <FaChevronRight style={{ fontSize: "8px", color: "var(--color-primary)" }} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  paddingBottom: "10px",
                  borderBottom: "2px solid var(--color-primary)",
                  display: "inline-block",
                }}
              >
                Contact Us
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a
                  href="tel:+13073938789"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#8a8aa0",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:!text-white"
                >
                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaPhoneAlt style={{ color: "var(--color-primary)", fontSize: "12px" }} />
                  </span>
                  +1 307 393 8789
                </a>
                <a
                  href="mailto:info@gosellify.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#8a8aa0",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:!text-white"
                >
                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaEnvelope style={{ color: "var(--color-primary)", fontSize: "12px" }} />
                  </span>
                  info@gosellify.com
                </a>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "#8a8aa0",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <FaMapMarkerAlt style={{ color: "var(--color-primary)", fontSize: "12px" }} />
                  </span>
                  <span style={{ lineHeight: 1.6 }}>
                    30 N Gould St, Sheridan,
                    <br />
                    WY 82801, USA
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "#8a8aa0",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <FaMapMarkerAlt style={{ color: "var(--color-primary)", fontSize: "12px" }} />
                  </span>
                  <span style={{ lineHeight: 1.6 }}>
                    Office 963, 3 Fitzroy Place, 1/1, Sauchiehall Street,Finnieston, Glasgow Central
                    <br />
                    G3 7RH, UK
                    <br />
                    <span style={{ fontSize: "13px", color: "#5a5a70" }}>
                      Company #837682
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              marginTop: "36px",
              paddingTop: "16px",
              paddingBottom: "8px",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p style={{ color: "#5a5a70", fontSize: "14px" }}>
                &copy; {new Date().getFullYear()} GoSellify. All Rights Reserved.
              </p>
              <div className="flex items-center" style={{ gap: "20px" }}>
                <Link
                  href="/privacy-policy"
                  style={{ color: "#5a5a70", fontSize: "14px", textDecoration: "none" }}
                  className="hover:!text-gray-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  style={{ color: "#5a5a70", fontSize: "14px", textDecoration: "none" }}
                  className="hover:!text-gray-300"
                >
                  Terms
                </Link>
                <Link
                  href="/contact"
                  style={{ color: "#5a5a70", fontSize: "14px", textDecoration: "none" }}
                  className="hover:!text-gray-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
