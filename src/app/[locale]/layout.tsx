import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/footer/Footer";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
     title: "Climate Academy",
     description: "Midea кондиционеры",
};

interface RootLayoutProps {
     children: React.ReactNode;
     params: Promise<{
          locale: string;
     }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
     const { locale } = await params;
     if (!routing.locales.includes(locale as "ru" | "uz")) {
          notFound();
     }
     const messages = await getMessages();
     const nav = [
          {
               id: 0,
               title: "Каталог",
               href: "/catalog",
          },
          /*{
               id: 1,
               title: "Доставка и оплата",
               href: "/delivery",
          },*/
          {
               id: 3,
               title: "Новости",
               href: "/news",
          },
          {
               id: 4,
               title: "Наши проекты",
               href: "https://admin.climate-academy.uz/uploads/Nashi_Obekty_e547bbd9ee.pdf",
               isExternal: true,
          },
     ];
     return (
          <html lang={locale}>
               <body className="">
                    <NextTopLoader color="#ffffff" initialPosition={0.08} crawlSpeed={200} height={2} showSpinner={false} shadow="0 0 10px #fff,0 0 5px #fff" />
                    <div className="wrapper">
                         <NuqsAdapter>
                              <NextIntlClientProvider messages={messages}>
                                   <Header locale={locale} nav={nav} />
                                   {children}
                                   <Footer locale={locale} nav={nav} />
                              </NextIntlClientProvider>
                         </NuqsAdapter>
                    </div>
               </body>
          </html>
     );
}
