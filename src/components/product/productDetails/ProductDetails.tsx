import NextBreadcrumb from "@/components/common/Breadcrumbs";
import Image from "next/image";
import ProductModels from "./ProductModels";
import { Product } from "@/interfaces/products.interface";
import { strapiUrl } from "@/utils/consts";
import ProductPrice from "./ProductPrice";
import ProductFormButton from "./ProductFormButton";

interface Props {
     locale: string;
     product: Product;
     dollarValue: number;
}

const ProductDetails: React.FC<Props> = ({ locale, product, dollarValue }) => {
     return (
          <div className="">
               <NextBreadcrumb homeElement="Главная" separator="/" />
               <div className="mt-5 flex flex-col gap-5 lg:gap-8">
                    <h1 className="text-[24px] font-semibold leading-120% lg:text-[35px]">
                         {product.name} {product.brand.title}
                    </h1>
                    {product.description && <p className="leading-130% text-[16px] tracking-tight lg:text-[18px]">{product.description}</p>}
               </div>
               <div className="mt-[30px] flex flex-col items-center gap-5 lg:flex-row">
                    {product.general_params.length > 0 &&
                         product.general_params.map((el) => {
                              return (
                                   <div key={el.id} className="flex items-center w-full gap-2 bg-white h-[80px] px-2.5 rounded-xl xl:px-10">
                                        <Image src={strapiUrl + el.icon.url} alt="icon" width={80} height={80} />
                                        <p className="leading-130% text-[16px] font-medium">{el.title}</p>
                                   </div>
                              );
                         })}
               </div>
               <div className="mt-5 lg:mt-10">
                    <h2 className="font-semibold text-[18px] lg:text-[22px]">Все модели</h2>
                    {product.variation && <ProductModels locale={locale} models={product.variation} />}
               </div>
               <ProductPrice lng={locale} product={product} dollarValue={dollarValue} />
               <ProductFormButton />
          </div>
     );
};

export default ProductDetails;
