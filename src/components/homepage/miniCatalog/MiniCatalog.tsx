import CommonButton from "@/components/common/commonButton/CommonButton";
import Container from "@/components/common/container/Container";
import aircond from "@img/catalog/aircond.webp";
import chillers from "@img/catalog/chillers.webp";
import vrf from "@img/catalog/vrf.webp";
import Image from "next/image";
import cols from "@img/catalog/cols.webp";
import cas from "@img/catalog/cas-cond.webp";
import ducted from "@img/catalog/channels.webp";
import Link from "next/link";

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
               href: `/${locale}/catalog/air-conditioners`,
          },
          {
               id: 1,
               img: cols,
               title: "Колонные кондиционеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/column-air-conditioners`,
          },
          {
               id: 2,
               img: cas,
               title: "Кассетные кондиционеры",
               subtitle: "Кондиционеры для дома и офиса",
               href: `/${locale}/catalog/cassette-air-conditioners`,
          },
          {
               id: 3,
               img: ducted,
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
                    <h2 className="text-[32px] font-semibold">Популярные категории</h2>
                    <div className="grid gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-2 mt-10">
                         {cards.map((el) => {
                              return (
                                   <Link href={el.href} key={el.id} className="relative w-full h-full aspect-[785/466] rounded-md overflow-hidden group">
                                        <Image
                                             src={el.img}
                                             alt={el.title}
                                             width={800}
                                             height={500}
                                             className="absolute left-0 top-0 w-full h-full object-cover duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-40"></div>
                                        <div className="w-full h-full relative z-10 flex flex-col gap-5 justify-end p-[10px] text-white sm:p-5">
                                             <h3 className="text-[24px] font-medium lg:text-[28px]">{el.title}</h3>
                                             <p className="font-medium">{el.subtitle}</p>
                                             <CommonButton className=" max-w-[200px] font-semibold h-10 duration-300 lg:h-[50px] group-hover:bg-white group-hover:text-black">
                                                  Подробнее
                                             </CommonButton>
                                        </div>
                                   </Link>
                              );
                         })}
                    </div>
               </Container>
          </section>
     );
};

export default MiniCatalog;
