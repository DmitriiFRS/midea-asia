import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/footer/Footer";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { ReactLenis } from "@/components/common/lenis";
import AllScripts from "@/components/common/AllScripts";

export const metadata: Metadata = {
	title: "Climate Academy | Промышленные и бытовые кондиционеры Midea и Welkin",
	description:
		"Climate Academy является официальным представителем Midea в Узбекистане. Продажа, установка и обслуживание промышленных, бытовых кондиционеров и другой бытовой техники.",
	openGraph: {
		type: "website",
		locale: "ru",
		url: "https://climate-academy.uz",
		siteName: "climate-academy",
		title: "Climate Academy | Промышленные и бытовые кондиционеры Midea & Welkin",
		description:
			"Climate Academy является официальным представителем Midea в Узбекистане. Продажа, установка и обслуживание промышленных, бытовых кондиционеров и другой бытовой техники.",
	},
	verification: {
		google: "8CUKHvpk7LZPGIXMc7BH7ZBRd25JIBdgD5laP3yRHZg",
	},
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
			<ReactLenis root>
				<body className="">
					<AllScripts />
					<NextTopLoader
						color="#ffffff"
						initialPosition={0.08}
						crawlSpeed={200}
						height={2}
						showSpinner={false}
						shadow="0 0 10px #fff,0 0 5px #fff"
					/>
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
			</ReactLenis>
		</html>
	);
}
