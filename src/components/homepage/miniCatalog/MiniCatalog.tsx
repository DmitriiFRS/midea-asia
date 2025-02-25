import CommonButton from "@/components/common/commonButton/CommonButton";
import Container from "@/components/common/container/Container";
import aircond from "@img/catalog/aircond.webp";
import chillers from "@img/catalog/chillers.webp";
import vrf from "@img/catalog/vrf.webp";
import Image from "next/image";

interface Props {
     locale: string;
}

const MiniCatalog: React.FC<Props> = ({ locale }) => {
     const cards = [
          {
               id: 0,
               img: aircond,
               title: "Бытовые кондиционеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/airconds`,
          },
          {
               id: 1,
               img: aircond,
               title: "Колонные кондиционеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/column-air-conditioners`,
          },
          {
               id: 2,
               img: aircond,
               title: "Кассетные кондиционеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/cassette-air-conditioners`,
          },
          {
               id: 3,
               img: aircond,
               title: "Канальные кондиционеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/channel-air-conditioners`,
          },
          {
               id: 4,
               img: vrf,
               title: "VRF Системы",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/vrf`,
          },
          {
               id: 5,
               img: chillers,
               title: "Чиллеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/chillers`,
          },
     ];
     return (
          <section className="mt-[100px]">
               <Container>
                    <div className="grid gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-2">
                         {cards.map((el) => {
                              return (
                                   <div key={el.id} className="relative w-full h-full aspect-[785/466] rounded-md overflow-hidden">
                                        <Image src={el.img} alt={el.title} width={800} height={500} className="absolute left-0 top-0 w-full h-full object-cover" />
                                        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-40"></div>
                                        <div className="w-full h-full relative z-10 flex flex-col gap-5 justify-end p-5 text-white">
                                             <h3 className="text-[28px] font-medium">{el.title}</h3>
                                             <p className="font-medium">{el.subtitle}</p>
                                             <CommonButton href={el.href} className=" max-w-[200px] font-semibold">
                                                  Подробнее
                                             </CommonButton>
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </Container>
          </section>
     );
};

export default MiniCatalog;
