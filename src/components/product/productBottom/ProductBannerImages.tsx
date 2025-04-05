import { ImageDescriptionInterface } from "@/interfaces/products.interface";
import { strapiUrl } from "@/utils/consts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Props = {
  productBanners: ImageDescriptionInterface[];
};

const ProductBannerImages: React.FC<Props> = ({ productBanners }) => {
  return (
    <div>
      {productBanners.map((el) => {
        return (
          <div key={el.id} className="mt-[60px]">
            {el.image && (
              <>
                <Image
                  src={strapiUrl + (el.image.url || "")}
                  alt="banner"
                  width={4000}
                  height={4000}
                  className={`${el.image_mobile ? "hidden" : ""} md:block w-full h-auto aspect-square object-cover md:aspect-video`}
                />
                {el.image_mobile && (
                  <Image
                    src={strapiUrl + el.image_mobile?.url}
                    alt="banner-mobile"
                    width={4000}
                    height={4000}
                    className="block md:hidden w-full h-auto aspect-square object-cover"
                  />
                )}
              </>
            )}
            {el.text && (
              <div className="mt-5 flex flex-col gap-3 leading-120% text-[14px] xl:text-[16px]">
                <ReactMarkdown>{el.text}</ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductBannerImages;
