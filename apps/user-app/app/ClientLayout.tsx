"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { AppbarClient } from "../components/AppbarClient";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <RecoilRoot>
        <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
          <AppbarClient />
          {children}
        </div>
      </RecoilRoot>
    </SessionProvider>
  );
}
