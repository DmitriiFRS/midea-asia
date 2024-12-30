import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "Midea",
  description: "Description",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
     locale: string;
  };
}

export default async function RootLayout({children, params}: RootLayoutProps) {
  const {locale} = await params;  
  return (
    <html lang={locale}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
