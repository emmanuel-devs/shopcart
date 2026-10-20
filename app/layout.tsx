import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Shopcart | Better tech, thoughtfully chosen", description: "Discover headphones, audio, and everyday technology at Shopcart." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
