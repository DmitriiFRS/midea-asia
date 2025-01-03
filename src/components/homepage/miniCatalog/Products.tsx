import temp from "@img/home/alba.webp";
import MiniCatalogCard from "./MiniCatalogCard";

interface Props {
  locale: string;
}

const Products: React.FC<Props> = ({ locale }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <MiniCatalogCard
        locale={locale}
        img={temp}
        params={["Для небольших помещений"]}
        title="Бытовые кондиционеры"
        blockClassName="aspect-square"
      />
      <MiniCatalogCard
        locale={locale}
        img={temp}
        params={["Для кафе, ресторанов, торговых центров"]}
        title="Промышленные кондиционеры"
        blockClassName="aspect-square"
      />
      <MiniCatalogCard
        locale={locale}
        img={temp}
        params={["Для кафе, ресторанов, торговых центров"]}
        title="Промышленные кондиционеры"
        blockClassName="aspect-square"
      />
      <MiniCatalogCard
        locale={locale}
        img={temp}
        params={["Для кафе, ресторанов, торговых центров"]}
        title="Промышленные кондиционеры"
        blockClassName="aspect-square"
      />
    </div>
  );
};

export default Products;
