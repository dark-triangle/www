import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lost in the Sauce | Modern Web Development Agency",
  description:
    "Lost in the Sauce is a modern web development agency building fast, polished, maintainable websites and web applications.",
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
