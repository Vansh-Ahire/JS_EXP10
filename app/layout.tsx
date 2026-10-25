import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Welcome to the Student Portal. View student profiles and academic details.",
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