import { ImageDescriptionInterface } from "@/interfaces/products.interface";
import Image from "next/image";
import { strapiUrl } from "@/utils/consts";
import ReactMarkdown from "react-markdown";

type Props = {
  productImages: ImageDescriptionInterface[];
};

const ProductImages: React.FC<Props> = ({ productImages }) => {
  return (
    <div className="flex flex-col gap-20 mt-[60px]">
      {productImages.map((el, index) => {
        return (
          <div key={index} className="grid grid-cols-1 gap-20 items-center md:grid-cols-2">
            <Image
              src={strapiUrl + el.image?.url}
              alt="image"
              width={1920}
              height={1080}
              className={`w-full h-auto aspect-[16/12] object-cover ${index % 2 === 0 ? "md:order-1" : "md:order-2"} lg:aspect-[16/9]`}
            />
            <div className={`flex flex-col gap-3 leading-120% text-[14px] ${index % 2 === 0 ? "md:order-2" : "md:order-1"} xl:text-[16px]`}>
              <ReactMarkdown>{el.text}</ReactMarkdown>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductImages;
