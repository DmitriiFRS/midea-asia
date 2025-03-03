import NextBreadcrumb from "@/components/common/Breadcrumbs";
import Image from "next/image";
import wifi from "@img/product/wifi.png";
import inverter from "@img/product/Inverter.png";
import ProductModels from "./ProductModels";
import { Product } from "@/interfaces/products.interface";
import { strapiUrl } from "@/utils/consts";

interface Props {
     locale: string;
     product: Product;
}

const ProductDetails: React.FC<Props> = ({ locale, product }) => {
     return (
          <div className="">
               <NextBreadcrumb homeElement="Главная" separator="/" />
               <div className="mt-5 flex flex-col gap-8">
                    <h1 className="text-[35px] font-semibold leading-120%">
                         {product.name} {product.brand.title}
                    </h1>
                    {product.description && <p className="leading-130% text-[18px] tracking-tight">{product.description}</p>}
               </div>
               <div className="mt-[30px] flex items-center gap-10">
                    {product.general_params.length > 0 &&
                         product.general_params.map((el) => {
                              return (
                                   <div key={el.id} className="flex items-center gap-2 bg-white h-[80px] px-10 rounded-xl">
                                        <Image src={strapiUrl + el.icon.url} alt="icon" width={80} height={80} />
                                        <p className="leading-130% text-[16px] font-medium">{el.title}</p>
                                   </div>
                              );
                         })}
               </div>
               <div className="mt-10">
                    <h2 className="font-semibold text-[22px]">Все модели</h2>
                    <ProductModels locale={locale} models={product.variation} />
               </div>
               <div className="mt-10 text-[35px] font-semibold">2 000 000 Сум</div>
               <button className="mt-10 rounded-2xl text-white bg-black text-[24px] flex items-center justify-center p-5 text-center w-full">Оставить заявку</button>
          </div>
     );
};

export default ProductDetails;
