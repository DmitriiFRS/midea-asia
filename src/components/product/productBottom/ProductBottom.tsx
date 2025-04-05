import { ImageDescriptionInterface, ParamsOtherInterface, VariationInterface } from "@/interfaces/products.interface";
import ProductNavButtons from "./ProductNavButtons";
import ProductParams from "./ProductParams";
import ReactMarkdown from "react-markdown";
import ProductModelParams from "./ProductModelParams";
import { strapiUrl } from "@/utils/consts";
import Image from "next/image";
import ProductVideo from "./ProductVideo";
import ProductImages from "./ProductImages";
import ProductBannerImages from "./ProductBannerImages";

interface Props {
  locale: string;
  productDescription: string;
  productParams: ParamsOtherInterface;
  productVideo: {
    url: string;
  } | null;
  productImages: ImageDescriptionInterface[];
  productTopBanners: ImageDescriptionInterface[];
  productBottomBanners: ImageDescriptionInterface[];
}

const ProductBottom: React.FC<Props> = ({
  locale,
  productDescription,
  productParams,
  productVideo,
  productImages,
  productTopBanners,
  productBottomBanners,
}) => {
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
        <h2 className="text-[24px] font-semibold leading-120% md:text-[35px]">Подробное описание</h2>
        {productVideo && <ProductVideo productVideo={productVideo} />}
        {productTopBanners && productTopBanners.length > 0 && <ProductBannerImages productBanners={productTopBanners} />}
        {productImages && productImages.length > 0 && <ProductImages productImages={productImages} />}
        {productBottomBanners && productBottomBanners.length > 0 && <ProductBannerImages productBanners={productBottomBanners} />}
        <div className="product-description text-[14px] leading-130% flex flex-col items-center product-markdown gap-5 md:text-[18px] mt-10">
          <ReactMarkdown>{productDescription}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default ProductBottom;

/* 
{productVideo && (
                         <div className="w-full h-auto aspect-[16/7] border hidden">
                              <video autoPlay className="w-full h-full border object-cover">
                                   <source src={strapiUrl + productVideo.url} className="w-full h-full object-cover" />
                              </video>
                         </div>
                    )}
*/
