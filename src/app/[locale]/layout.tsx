import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
     title: "Midea",
     description: "Description",
};

interface RootLayoutProps {
     children: React.ReactNode;
     params: Promise<{
          locale: string;
     }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
     const { locale } = await params;
     const nav = [
          {
               id: 0,
               title: "Каталог",
               href: "/catalog",
          },
          {
               id: 1,
               title: "Доставка и оплата",
               href: "/delivery",
          },
          {
               id: 3,
               title: "Новости",
               href: "/news",
          },
          {
               id: 4,
               title: "Наши проекты",
               href: "/projects",
          },
     ];
     return (
          <html lang={locale}>
               <body className="">
                    <div className="wrapper">
                         <NuqsAdapter>
                              <Header locale={locale} nav={nav} />
                              {children}
                              <Footer locale={locale} nav={nav} />
                         </NuqsAdapter>
                    </div>
               </body>
          </html>
     );
}
