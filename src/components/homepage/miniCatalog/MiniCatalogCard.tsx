import Image, { StaticImageData } from "next/image";

interface Props {
  locale: string;
  img: StaticImageData;
  params?: Array<string>;
  title: string;
}

const MiniCatalogCard: React.FC<Props> = ({ locale, img, params, title }) => {
  return (
    <div>
      <div className="relative h-auto aspect-[2.5/1] w-full bg-[#f5f5f5]">
        <div className="absolute left-3 top-3 w-full h-auto"></div>
        <Image src={img} alt={title} width={800} height={300} className="w-full h-full object-contain" />
      </div>
      <h4 className="mt-4 text-[20px] leading-130%">{title}</h4>
    </div>
  );
};

export default MiniCatalogCard;
