import CommonButton from "@/components/common/commonButton/CommonButton";
import Container from "@/components/common/container/Container";
import HeroSwiper from "./HeroSwiper";

interface Props {
  locale: string;
}

const Hero: React.FC<Props> = ({ locale }) => {
  return (
    <section className="w-full h-screen relative overflow-hidden text-white">
      <div className="w-full h-full absolute left-0 top-0 bg-black opacity-25 -z-10"></div>
      <Container className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="leading-130% text-[45px] font-semibold text-center">
          Бытовые и промышленные кондиционеры от компании Midea
        </h1>
        <p className="mt-[30px] text-[24px] leading-130% max-w-[50%] text-center font-medium">
          Зона комфорта вашего пространства, в которой хочется находиться, не хочется выходить и хочется возвращаться
        </p>
        <CommonButton className="mt-[60px]">Каталог</CommonButton>
      </Container>
      <HeroSwiper locale={locale} />
    </section>
  );
};

export default Hero;
