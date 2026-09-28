import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeffrey De Vera Caudilla — Funnel Builder",
  description:
    "Portfolio of Jeffrey De Vera Caudilla, a Funnel Builder specializing in Funnelish and Shopify e-commerce.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bgdark text-white antialiased">{children}</body>
    </html>
  );
}
