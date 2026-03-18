import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalo Lorenzon — Video Editor & Content Creator",
  description: "Visual stories, real impact. Video editing, content strategy and social media management.",
  keywords: ["video editor", "content creator", "social media manager", "reels", "branding", "storytelling"],
  authors: [{ name: "Gonzalo Lorenzon" }],
  openGraph: {
    title: "Gonzalo Lorenzon — Video Editor & Content Creator",
    description: "Visual stories, real impact.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}