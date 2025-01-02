import CommonButton2 from "@/components/common/commonButton/CommonButton2";
import Container from "@/components/common/container/Container";
import BrandDescriptionBottom from "./BrandDescriptionBottom";
import BrandDescriptionTop from "./BrandDescriptionTop";

interface Props {
  locale: string;
}

const BrandDescription: React.FC<Props> = ({ locale }) => {
  return (
    <section className="mt-[100px]">
      <div>
        <BrandDescriptionTop locale={locale} />
      </div>
      <div>
        <BrandDescriptionBottom locale={locale} />
      </div>
      <Container>
        <CommonButton2 className="mt-5">Перейти в каталог</CommonButton2>
      </Container>
    </section>
  );
};

export default BrandDescription;
//1F94D2
