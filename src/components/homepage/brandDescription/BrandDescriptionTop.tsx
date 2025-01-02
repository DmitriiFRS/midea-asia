import Container from "@/components/common/container/Container";
import logo from "@img/common/logo.svg";
import Image from "next/image";

interface Props {
  locale: string;
}

const BrandDescriptionTop: React.FC<Props> = ({ locale }) => {
  return (
    <div className="bg-[#1F94D2] py-20">
      <Container className="flex flex-col items-center">
        <Image src={logo} alt="Midea" width={300} height={100} className="w-full max-w-[300px] h-auto aspect-[4/1]" />
        <h2 className="mt-10 font-semibold text-[18px] leading-130%">Мебель BIG PUFF & SOFA - эта мягкие домашние любимцы,</h2>
        <div className="mt-[30px] leading-120% text-[14px] text-center flex flex-col gap-5 max-w-[700px] font-light">
          <p>
            которые приносят радость, комфорт и компаньонство, надежные друзья, c ними можно расслабиться, улучшить настроение и
            психологическое благополучие семьи погрузившись в их тепло, уют и мягкость.
          </p>
          <p>
            Каждая коллекция мебели названа в честь домашнего питомца – хранителя эмоционального тепла. Вдохновил нас на такую
            идею пес одной из первых покупательниц по кличке НОРД, в честь которого была создана одноименная коллекция пуфов{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BrandDescriptionTop;
