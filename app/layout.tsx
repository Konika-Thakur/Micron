import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Micron Competitive Intelligence",
  description: "Evidence-graded competitive intelligence for memory and storage strategy."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
