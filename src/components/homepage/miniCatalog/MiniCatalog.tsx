import Container from "@/components/common/container/Container";
import Categories from "./Categories";
import Products from "./Products";

interface Props {
  locale: string;
}

const MiniCatalog: React.FC<Props> = ({ locale }) => {
  return (
    <section className="mt-[100px]">
      <Container className="flex flex-col gap-10">
        <div>
          <Categories locale={locale} />
        </div>
        <div>
          <Products locale={locale} />
        </div>
      </Container>
    </section>
  );
};

export default MiniCatalog;
