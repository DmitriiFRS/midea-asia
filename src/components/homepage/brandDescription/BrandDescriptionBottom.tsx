import Container from "@/components/common/container/Container";
import Image from "next/image";
import banner from "@img/home/banner.webp";

interface Props {
     locale: string;
}

const BrandDescriptionBottom: React.FC<Props> = ({ locale }) => {
     return (
          <div className="relative w-full h-auto aspect-[1854/642]">
               <Image src={banner} alt="banner" width={1920} height={1080} className="absolute -z-10 left-0 top-0 w-full h-full object-cover" />
               <Container className="w-full h-full flex items-end text-white font-medium text-[24px] leading-130% pb-10">
                    <div className="max-w-[50%]">
                         Компания Midea, входящая в рейтинг Fortune Global 500, уже много лет подтверждает своё лидерство в сфере разработки и производства климатической техники.
                         Бытовые и промышленные кондиционеры, а также другое оборудование Midea, отличаются инновационными технологиями, высокой энергоэффективностью и надёжностью
                    </div>
               </Container>
          </div>
     );
};

export default BrandDescriptionBottom;
