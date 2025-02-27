import Container from "@/components/common/container/Container";
import logo from "@img/common/logo.svg";
import Image from "next/image";

interface Props {
     locale: string;
}

const BrandDescriptionTop: React.FC<Props> = ({ locale }) => {
     return (
          <div className="bg-[#1F94D2] py-10 md:py-20">
               <Container className="flex flex-col items-center">
                    <Image src={logo} alt="Midea" width={300} height={100} className="w-full max-w-[300px] h-auto aspect-[4/1]" />
                    <h2 className="mt-10 font-semibold text-[18px] text-center leading-130%">Midea & Welkin: всё для идеального климата и комфорта</h2>
                    <div className="mt-[30px] leading-120% text-[14px] text-center flex flex-col gap-5 max-w-[700px] font-light">
                         <p>
                              Откройте для себя широкий выбор бытовых и промышленных кондиционеров Midea, а также другое современное оборудование для поддержания оптимального
                              микроклимата в любом помещении.
                         </p>
                         <p>
                              Мы предлагаем официальную продукцию, профессиональный монтаж и сервисную поддержку, чтобы вы могли купить надёжную технику и наслаждаться комфортом
                              каждый день.
                         </p>
                    </div>
               </Container>
          </div>
     );
};

export default BrandDescriptionTop;
