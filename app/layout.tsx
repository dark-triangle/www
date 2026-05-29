import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lost in the Sauce | Modern Web Development Agency",
  description:
    "Lost in the Sauce builds fast, polished websites for modern discovery, online sales, appointment booking, SEO, and generative engine optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
