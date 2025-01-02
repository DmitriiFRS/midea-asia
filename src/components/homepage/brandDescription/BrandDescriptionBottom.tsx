import Container from "@/components/common/container/Container";
import Image from "next/image";
import banner from "@img/home/banner.webp";

interface Props {
  locale: string;
}

const BrandDescriptionBottom: React.FC<Props> = ({ locale }) => {
  return (
    <div className="relative w-full h-auto aspect-[1854/642]">
      <Image
        src={banner}
        alt="banner"
        width={1920}
        height={1080}
        className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
      />
      <Container className="w-full h-full flex items-end text-white font-medium text-[24px] leading-130% pb-10">
        <div className="max-w-[50%]">
          С 2018 года бренд создает зоны комфорта в частных домах и бизнесах в мегаполисах России и поставляет комфорт в больших
          объемах
        </div>
      </Container>
    </div>
  );
};

export default BrandDescriptionBottom;
