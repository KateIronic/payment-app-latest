import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientLayout } from "./ClientLayout";
import { Providers } from "../providers";

import { AppbarClient } from "../components/AppbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            <ClientLayout>
              <AppbarClient /> {children}
            </ClientLayout>
          </div>
        </body>
      </Providers>
    </html>
  );
}