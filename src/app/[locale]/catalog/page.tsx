import cols from "@/../public/images/catalog/cols-catalog.webp";
import Container from "@/components/common/container/Container";
import CatalogList from "@/components/common/catalogList/CatalogList";
import { Catalog } from "@/interfaces/catalog.interface";
import aircond from "@/../public/images/catalog/aircond-catalog.webp";
import airpur from "@/../public/images/catalog/air-purifiers-humidifiers.webp";
import cascond from "@/../public/images/catalog/cas-cond-catalog.webp";
import channels from "@/../public/images/catalog/channels-catalog.webp";
import chiller from "@/../public/images/catalog/chillers-catalog.webp";
import fancoils from "@/../public/images/catalog/fancoils-catalog.webp";
import vrf from "@/../public/images/catalog/vrf-catalog.webp";
import curtain from "@/../public/images/catalog/heat-curtains-catalog.webp";
import boiler from "@/../public/images/catalog/gas-boiler-catalog.webp";
import recup from "@/../public/images/catalog/recups-catalog.webp";
import dehumids from "@/../public/images/catalog/dehumids-catalog.webp";
import NextBreadcrumb from "@/components/common/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Climate Academy | Каталог категорий. Промышленные и бытовые кондиционеры, бытовая техника Midea и Welkin",
     description:
          "Climate Academy является официальным представителем Midea в Узбекистане. Продажа, установка и обслуживание промышленных, бытовых кондиционеров и другой бытовой техники.",
     openGraph: {
          type: "website",
          locale: "ru",
          url: "https://climate-academy.uz/catalog",
          siteName: "climate-academy",
          title: "Climate Academy | Каталог категорий. Промышленные и бытовые кондиционеры, бытовая техника Midea и Welkin",
          description:
               "Climate Academy является официальным представителем Midea в Узбекистане. Продажа, установка и обслуживание промышленных, бытовых кондиционеров и другой бытовой техники.",
     },
};

interface Props {
     params: Promise<{
          locale: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale } = await params;
     const items: Catalog[] = [
          {
               id: 0,
               title: "Бытовые кондиционеры",
               list: [
                    {
                         id: 0,
                         title: "Бытовые кондиционеры",
                         href: "/catalog/air-conditioners",
                         image: aircond,
                    },
               ],
          },
          {
               id: 1,
               title: "Полупромышленные кондиционеры",
               list: [
                    {
                         id: 0,
                         title: "Кассетные кондиционеры",
                         href: "/catalog/cassette-air-conditioners",
                         image: cascond,
                    },
                    {
                         id: 1,
                         title: "Канальные кондиционеры",
                         href: "/catalog/ducted-air-conditioners",
                         image: channels,
                    },
                    {
                         id: 2,
                         title: "Колонные кондиционеры",
                         href: "/catalog/column-air-conditioners",
                         image: cols,
                    },
                    {
                         id: 3,
                         title: "Тепловые завесы",
                         href: "/catalog/heat-curtains",
                         image: curtain,
                    },
               ],
          },
          {
               id: 2,
               title: "Бытовая техника",
               list: [
                    {
                         id: 0,
                         title: "Газовые котлы",
                         href: "/catalog/gas-boilers",
                         image: boiler,
                    },
                    {
                         id: 1,
                         title: "Рекуператоры",
                         href: "/catalog/recuperators",
                         image: recup,
                    },
                    {
                         id: 2,
                         title: "Очистители-увлажнители воздуха",
                         href: "/catalog/air-purifiers-humidifiers",
                         image: airpur,
                    },
                    {
                         id: 3,
                         title: "Осушители",
                         href: "/catalog/dehumidifiers",
                         image: dehumids,
                    },
                    /*{
                         id: 4,
                         title: "Кулеры для воды",
                         href: "/catalog/water-coolers",
                         image: coolers,
                    },*/
               ],
          },
          {
               id: 3,
               title: "Промышленные кондиционеры",
               list: [
                    {
                         id: 0,
                         title: "VRF Системы",
                         href: "/catalog/vrf",
                         image: vrf,
                    },
                    {
                         id: 1,
                         title: "Чиллеры",
                         href: "/catalog/chillers",
                         image: chiller,
                    },
                    /*{
                         id: 2,
                         title: "Фанкойлы",
                         href: "/catalog/fancoils",
                         image: fancoils,
                    },*/
               ],
          },
     ];
     return (
          <main className="flex-[1_1_auto]">
               <section className="section-margin">
                    <Container>
                         <NextBreadcrumb homeElement="Главная" separator="/" />
                         <h1 className="text-[40px] font-medium mt-5">Каталог</h1>
                         <CatalogList items={items} locale={locale} />
                    </Container>
               </section>
          </main>
     );
};

export default page;
