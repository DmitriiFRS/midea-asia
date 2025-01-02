import Container from "@/components/common/container/Container";
import HomepageFormSection from "./HomepageFormSection";

interface Props {
  locale: string;
}

const HomepageForm: React.FC<Props> = ({ locale }) => {
  return (
    <section className="my-[100px]">
      <Container className="py-20 bg-black text-white text-center">
        <div className="text-[36px] leading-120% font-bold uppercase">остались вопросы?</div>
        <div className="mt-5 text-[20px] leading-120% font-medium">Оставьте заявку и мы свяжемся с вами в ближайшее время</div>
        <div>
          <HomepageFormSection locale={locale} />
        </div>
      </Container>
    </section>
  );
};

export default HomepageForm;
