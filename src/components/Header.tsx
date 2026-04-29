"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaWhatsapp, FaUserCircle } from "react-icons/fa";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; desc?: string }[];
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Amazon",
    href: "/services/amazon",
    children: [
      { name: "Amazon FBA", href: "/services/amazon-fba", desc: "Private label & FBA management" },
      { name: "Amazon Wholesale", href: "/services/amazon-wholesale", desc: "Full-service wholesale management" },
      { name: "2 Step Amazon Dropshipping", href: "/services/amazon-arbitrage", desc: "Low-risk arbitrage model" },
      { name: "Amazon Account Reinstatement", href: "/services/amazon-reinstatement", desc: "Suspended account recovery" },
    ],
  },
  {
    name: "Walmart",
    href: "/services/walmart",
    children: [
      { name: "Walmart WFS", href: "/services/walmart-wfs", desc: "Walmart Fulfillment Services" },
      { name: "Walmart Wholesale", href: "/services/walmart-wholesale", desc: "Wholesale store management" },
      { name: "2 Step Walmart Dropshipping", href: "/services/walmart-dropshipping", desc: "Low-risk dropshipping model" },
      { name: "Walmart Account Reinstatement", href: "/services/walmart-reinstatement", desc: "Suspended account recovery" },
    ],
  },
  {
    name: "Shopify",
    href: "/services/shopify",
    children: [
      { name: "Shopify Dropshipping Store", href: "/services/shopify-dropshipping", desc: "Ready-to-sell dropship store" },
      { name: "Shopify Store Redesign", href: "/services/shopify-redesign", desc: "Conversion-optimized redesign" },
      { name: "Shopify Theme Development", href: "/services/shopify-theme-development", desc: "Custom theme from scratch" },
      { name: "Shopify App Development", href: "/services/shopify-app-development", desc: "Custom app solutions" },
      { name: "Shopify Store Marketing", href: "/services/shopify-marketing", desc: "SEO, ads & growth" },
    ],
  },
  {
    name: "Others Services",
    href: "/services",
    children: [
      { name: "Etsy Dropshipping", href: "/services/etsy-dropshipping", desc: "Etsy store management" },
      { name: "eBay Dropshipping", href: "/services/ebay-dropshipping", desc: "eBay store management" },
      { name: "Warehouse Service", href: "/services/3pl-warehouse", desc: "3PL storage & fulfillment" },
      { name: "Company Filing LLC & LTD", href: "/services/company-filing", desc: "Business formation services" },
      { name: "Company Tax Filing", href: "/services/tax-filing", desc: "Tax preparation & filing" },
    ],
  },
  { name: "Success Story", href: "/success-story" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [pathname]);

  const isLinkActive = (link: NavItem) => {
    if (pathname === link.href) return true;
    if (link.children) {
      return link.children.some((child) => pathname === child.href);
    }
    return false;
  };

  return (
    <header
      style={{
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "box-shadow 0.3s",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.08)"
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div className="container-main">
        <div
          className="flex items-center justify-between"
          style={{ height: "64px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/logo.webp"
              alt="Gosellify"
              className="w-auto"
              style={{ height: "42px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center"
            style={{ height: "64px" }}
          >
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const hasDropdown = !!link.children;
              return (
                <div
                  key={link.name}
                  className="relative group"
                  style={{ height: "100%" }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "0 12px",
                      height: "100%",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      position: "relative",
                    }}
                    className="hover:!text-primary"
                  >
                    {link.name}
                    {hasDropdown && (
                      <FaChevronDown
                        style={{
                          fontSize: "8px",
                          transition: "transform 0.2s",
                        }}
                      />
                    )}
                    {/* Active indicator */}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "12px",
                          right: "12px",
                          height: "3px",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "3px 3px 0 0",
                        }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% - 4px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#fff",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                        borderRadius: "10px",
                        padding: "8px 0",
                        minWidth: "250px",
                        opacity: 0,
                        visibility: "hidden" as const,
                        transition: "all 0.2s ease",
                        zIndex: 50,
                      }}
                      className="group-hover:!opacity-100 group-hover:!visible"
                    >
                      {/* CSS Arrow */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "50%",
                          transform: "translateX(-50%) rotate(45deg)",
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#fff",
                          boxShadow: "-2px -2px 4px rgba(0,0,0,0.04)",
                        }}
                      />
                      {link.children!.map((child, idx) => (
                        <div key={child.name}>
                          {idx > 0 && (
                            <div style={{ display: "flex", justifyContent: "center", padding: "0 20px" }}>
                              <div style={{ width: "100%", height: "0.5px", backgroundColor: "#ebebeb" }} />
                            </div>
                          )}
                        <Link
                          href={child.href}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px 20px",
                            textDecoration: "none",
                            transition: "background 0.15s",
                          }}
                          className="hover:!bg-gray-50"
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: pathname === child.href ? "var(--color-primary)" : "var(--color-text)",
                            }}
                          >
                            {child.name}
                          </span>
                          {child.desc && (
                            <span
                              style={{
                                fontSize: "13px",
                                color: "#999",
                                marginTop: "1px",
                              }}
                            >
                              {child.desc}
                            </span>
                          )}
                        </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* My Account + CTA Buttons */}
          <div className="hidden lg:flex items-center" style={{ gap: "20px" }}>
          <a
            href="https://portal.gosellify.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-text)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="hover:!text-primary"
          >
            <FaUserCircle style={{ fontSize: "18px" }} />
            Login
          </a>
          <a
            href="https://wa.me/message/Q6XJRMT4HKTBF1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 24px",
              fontSize: "14px",
              animation: "none",
            }}
          >
            <FaWhatsapp style={{ fontSize: "16px" }} />
            Quick WhatsApp
          </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              padding: "8px",
              fontSize: "22px",
              color: "var(--color-text)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="!flex lg:!hidden items-center justify-center"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        style={{
          maxHeight: mobileMenuOpen ? "800px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          borderTop: mobileMenuOpen ? "1px solid #f0f0f0" : "none",
        }}
        className="lg:!hidden"
      >
        <div style={{ padding: "8px 0 16px" }}>
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);
            const hasDropdown = !!link.children;
            const isOpen = openMobileDropdown === link.name;
            return (
              <div key={link.name}>
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenMobileDropdown(isOpen ? null : link.name)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "12px 20px",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--color-text)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.name}
                      <FaChevronDown
                        style={{
                          fontSize: "10px",
                          transition: "transform 0.2s",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                        }}
                      />
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? "400px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      {link.children!.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 20px 10px 36px",
                            fontSize: "16px",
                            color: pathname === child.href ? "var(--color-primary)" : "#555",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          className="hover:!text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    className="hover:!text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
          {/* Mobile CTA */}
          <div style={{ padding: "8px 16px 4px" }}>
            <a
              href="https://wa.me/message/Q6XJRMT4HKTBF1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                animation: "none",
                width: "100%",
              }}
            >
              <FaWhatsapp style={{ fontSize: "16px" }} />
              Quick WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
