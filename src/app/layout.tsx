import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Gosellify - All-in-one Automated Ecommerce Management Services",
  description:
    "Start, Grow & Scale Your eCommerce Businesses with our All-in-one Automated Ecommerce Management Services. Amazon, Walmart, eBay, Shopify store management.",
  keywords:
    "ecommerce management, amazon wholesale, amazon arbitrage, walmart management, shopify development, 3pl warehouse",
  icons: {
    icon: "/images/favicon.webp",
    apple: "/images/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${roboto.variable} antialiased`} style={{ fontFamily: "var(--font-roboto)" }}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
