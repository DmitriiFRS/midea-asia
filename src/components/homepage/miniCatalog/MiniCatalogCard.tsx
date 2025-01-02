import Image, { StaticImageData } from "next/image";

interface Props {
  locale: string;
  img: StaticImageData;
  params?: Array<string>;
  title: string;
  blockClassName?: string;
}

const MiniCatalogCard: React.FC<Props> = ({ locale, img, params, title, blockClassName }) => {
  return (
    <div>
      <div className={`relative h-auto aspect-[2.5/1] w-full bg-[#f5f5f5] rounded-lg overflow-hidden ${blockClassName}`}>
        <div className="absolute left-3 top-3 w-full h-auto">
          <ul className="flex gap-2">
            {params?.map((el, i) => (
              <li key={i} className="text-[12px] bg-white p-1 rounded-lg font-light">
                {el}
              </li>
            ))}
          </ul>
        </div>
        <Image src={img} alt={title} width={800} height={300} className="w-[70%] m-[0_auto] h-full object-contain" />
      </div>
      <h4 className="mt-4 text-[20px] leading-130% font-medium text-slate-700">{title}</h4>
    </div>
  );
};

export default MiniCatalogCard;
