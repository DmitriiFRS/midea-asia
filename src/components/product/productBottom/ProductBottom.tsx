import { ParamsOtherInterface, VariationInterface } from "@/interfaces/products.interface";
import ProductNavButtons from "./ProductNavButtons";
import ProductParams from "./ProductParams";
import ReactMarkdown from "react-markdown";
import ProductModelParams from "./ProductModelParams";

interface Props {
     locale: string;
     productDescription: string;
     productVariations: VariationInterface[];
     productParams: ParamsOtherInterface;
}

const ProductBottom: React.FC<Props> = ({ locale, productDescription, productVariations, productParams }) => {
     return (
          <section className="mt-[60px] lg:mt-[120px]">
               <div className="flex justify-center">
                    <ProductNavButtons locale={locale} />
               </div>
               <div className="mt-[40px] md:mt-[60px]">
                    <h2 className="text-[24px] font-semibold leading-120% md:text-[35px]">Технические характеристики</h2>
                    <ProductParams locale={locale} productParams={productParams} />
                    <ProductModelParams locale={locale} />
               </div>

               <div className="space-y-5 mt-[60px]" id="productDescription">
                    <div className="product-description text-[14px] leading-130% flex flex-col items-center gap-5 md:text-[18px]">
                         <ReactMarkdown>{productDescription}</ReactMarkdown>
                    </div>
               </div>
          </section>
     );
};

export default ProductBottom;
