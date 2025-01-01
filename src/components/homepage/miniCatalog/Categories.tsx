import temp from "@img/home/alba.webp";
import { StaticImageData } from "next/image";
import Image from "next/image";
import MiniCatalogCard from "./MiniCatalogCard";

interface Props {
  locale: string;
}

interface CategoryProps {
  locale: string;
  img: StaticImageData;
  params?: Array<string>;
  title: string;
}

const Categories: React.FC<Props> = ({ locale }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <MiniCatalogCard locale={locale} img={temp} params={["Для небольших помещений"]} title="Бытовые кондиционеры" />
      <MiniCatalogCard
        locale={locale}
        img={temp}
        params={["Для кафе, ресторанов, торговых центров"]}
        title="Промышленные кондиционеры"
      />
    </div>
  );
};

export default Categories;
