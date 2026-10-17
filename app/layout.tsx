import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hakeem Hafiz Hassan — Portfolio",
  description: "Aspiring software engineer and web developer based in Abuja, Nigeria.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
