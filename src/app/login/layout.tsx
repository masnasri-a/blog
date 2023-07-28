import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.scss";

export const metadata: Metadata = {
  title: "Login Page",
  description: "ICE Media Login Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
