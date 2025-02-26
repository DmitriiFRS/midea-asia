import Container from "@/components/common/container/Container";
import { RiSofaLine } from "react-icons/ri";
import icon1 from "@icons/homepage/icon-1.webp";
import icon2 from "@icons/homepage/icon-2.webp";
import icon3 from "@icons/homepage/icon-3.webp";
import icon4 from "@icons/homepage/icon-4.webp";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
     locale: string;
}

interface GreatSolutionCards {
     id: number;
     title: string;
     img: StaticImageData;
}

const GreatSolution: React.FC<Props> = ({ locale }) => {
     const cards: GreatSolutionCards[] = [
          {
               id: 0,
               title: "Профессиональный монтаж и обслуживание",
               img: icon1,
          },
          {
               id: 1,
               title: "Быстрая доставка",
               img: icon2,
          },
          {
               id: 2,
               title: "Круглосуточная поддержка",
               img: icon3,
          },
          {
               id: 3,
               title: "Гарантия качества",
               img: icon4,
          },
     ];
     return (
          <section className="mt-[100px]">
               <Container>
                    <h2 className="text-[42px] font-bold leading-130% uppercase text-center">Надёжность и комфорт с первого дня</h2>
                    <ul className="flex gap-4 justify-between mt-[60px]">
                         {cards.map((el) => {
                              return (
                                   <li key={el.id} className="flex flex-col gap-[30px] items-center">
                                        <div className="max-w-[50px] h-auto aspect aspect-square">
                                             <Image src={el.img} alt="icon" height={100} width={100} className="w-full h-full" />
                                        </div>
                                        <span className="text-[18px] font-medium text-light-black">{el.title}</span>
                                   </li>
                              );
                         })}
                    </ul>
               </Container>
          </section>
     );
};

export default GreatSolution;
