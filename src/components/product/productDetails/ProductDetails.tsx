import NextBreadcrumb from "@/components/common/Breadcrumbs";
import Image from "next/image";
import wifi from "@img/product/wifi.png";
import inverter from "@img/product/Inverter.png";

interface Props {
     locale: string;
}

const ProductDetails: React.FC<Props> = ({ locale }) => {
     const advantages = [
          {
               id: 0,
               title: "С встроенным модулем Wi-Fi",
               img: wifi,
          },
          {
               id: 1,
               title: "Инверторный компрессор",
               img: inverter,
          },
     ];
     return (
          <div className="">
               <NextBreadcrumb homeElement="Главная" separator="/" />
               <div className="mt-5 flex flex-col gap-8">
                    <h1 className="text-[35px] font-semibold">Настенный кондиционер Alba Midea</h1>
                    <p className="leading-130% text-[18px] tracking-tight">
                         Расширьте свои возможности съёмки с DJI Air 3S — мощным дроном с двумя камерами, который идеально подходит для путешествий. С широкоугольной и телекамерой,
                         а также поддержкой интеллектуальных режимов съёмки, этот дрон позволит вам запечатлеть моменты с максимальной точностью и деталями.
                    </p>
               </div>
               <div className="mt-[30px] flex items-center gap-10">
                    {advantages.map((el) => {
                         return (
                              <div key={el.id} className="flex items-center gap-2 bg-white h-[80px] px-10 rounded-xl">
                                   <Image src={el.img} alt="icon" width={80} height={80} />
                                   <p className="leading-130% text-[16px] font-medium">{el.title}</p>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default ProductDetails;
