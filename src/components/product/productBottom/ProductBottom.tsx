import { VariationInterface } from "@/interfaces/products.interface";
import ProductNavButtons from "./ProductNavButtons";
import ProductParams from "./ProductParams";

interface Props {
     locale: string;
     productDescription: string;
     productVariations: VariationInterface[];
}

const ProductBottom: React.FC<Props> = ({ locale, productDescription, productVariations }) => {
     return (
          <section className="mt-[120px]">
               <div className="flex justify-center">
                    <ProductNavButtons locale={locale} />
               </div>
               <div className="space-y-5 mt-[60px]" id="productDescription">
                    <div dangerouslySetInnerHTML={{ __html: productDescription }} className="whitespace-pre-wrap" />
               </div>

               <div className="mt-[60px]">
                    <h2 className="text-[35px] font-semibold leading-120%">Технические характеристики</h2>
                    <ProductParams locale={locale} />
               </div>
          </section>
     );
};

export default ProductBottom;
