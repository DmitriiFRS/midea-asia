import Container from "@/components/common/container/Container";
import { RiSofaLine } from "react-icons/ri";

interface Props {
  locale: string;
}

interface GreatSolutionCards {
  id: number;
  title: string;
  img: string;
}

const GreatSolution: React.FC<Props> = ({ locale }) => {
  const cards: GreatSolutionCards[] = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet.",
      img: "",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      img: "",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      img: "",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      img: "",
    },
  ];
  return (
    <section className="mt-[100px]">
      <Container>
        <h2 className="text-[48px] font-bold leading-130% uppercase text-center">Отличное решение</h2>
        <ul className="flex gap-4 justify-between mt-[60px]">
          {cards.map((el) => {
            return (
              <li key={el.id} className="flex flex-col gap-[30px] items-center">
                <div className="w-full h-auto">
                  <RiSofaLine className="w-full h-auto aspect-[2.5/1] font-extralight" />
                </div>
                <span>{el.title}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default GreatSolution;
