import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BaseLayout from "../base-components/base-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend App",
  description: "Frontend application",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
};

export default RootLayout;
