import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeffrey — Funnel & Marketing Specialist",
  description: "Portfolio of Jeffrey, funnel and marketing specialist.",
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
