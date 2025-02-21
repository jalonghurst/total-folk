import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopNavBar } from "@repo/ui/top-nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend App",
  description: "Frontend application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-10 flex h-screen overflow-hidden">
          <div className="relative z-10 min-h-screen w-screen">
            <TopNavBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
