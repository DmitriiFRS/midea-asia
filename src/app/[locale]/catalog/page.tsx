import industrial from "@/../public/images/home/alba.webp";
import Container from "@/components/common/container/Container";
import CatalogList from "@/components/common/catalogList/CatalogList";
import { Catalog } from "@/interfaces/catalog.interface";
import aircond from "@/../public/images/catalog/aircond.webp";
import airpur from "@/../public/images/catalog/air-purifiers-humidifiers.webp";
import cascond from "@/../public/images/catalog/cas-cond.webp";
import channels from "@/../public/images/catalog/channels.webp";
import chiller from "@/../public/images/catalog/chillers.webp";
import fancoils from "@/../public/images/catalog/fancoils.webp";
import vrf from "@/../public/images/catalog/vrf.webp";
import curtain from "@/../public/images/catalog/curtain.webp";

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
                         href: "/catalog/channel-air-conditioners",
                         image: channels,
                    },
                    {
                         id: 2,
                         title: "Колонные кондиционеры",
                         href: "/catalog/column-air-conditioners",
                         image: industrial,
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
                         image: industrial,
                    },
                    {
                         id: 1,
                         title: "Рекуператоры",
                         href: "/catalog/recuperators",
                         image: industrial,
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
                         image: industrial,
                    },
                    {
                         id: 4,
                         title: "Кулеры для воды",
                         href: "/catalog/water-coolers",
                         image: industrial,
                    },
               ],
          },
          {
               id: 3,
               title: "Промышленные кондиционеры",
               list: [
                    {
                         id: 0,
                         title: "VRF Системы",
                         href: "/catalog/vrf-systems",
                         image: vrf,
                    },
                    {
                         id: 1,
                         title: "Чиллеры",
                         href: "/catalog/chillers",
                         image: chiller,
                    },
                    {
                         id: 2,
                         title: "Фанкойлы",
                         href: "/catalog/fancoils",
                         image: fancoils,
                    },
               ],
          },
     ];
     return (
          <main className="flex-[1_1_auto]">
               <section className="section-margin">
                    <Container>
                         <h1 className="text-[40px] font-medium">Каталог</h1>
                         <CatalogList items={items} locale={locale} />
                    </Container>
               </section>
          </main>
     );
};

export default page;
