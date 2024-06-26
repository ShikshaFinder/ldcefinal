import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LDCE",
  description: "LD College of engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     

    <html lang="en">
     

      <body className={inter.className}>{children}</body>
    </html>
         

  );
}
