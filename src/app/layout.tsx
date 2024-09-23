import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repos Search App",
  description: "Search github for repos",
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
