import Container from "@/components/common/container/Container";
import GuaranteeTitle from "./GuaranteeTitle";
import GuaranteeMain from "./GuaranteeMain";

interface Props {
     locale: string;
}

const Guarantee: React.FC<Props> = ({ locale }) => {
     return (
          <section className="mt-[60px] md:mt-[100px]">
               <Container>
                    <div className="mt-20">{/*<GuaranteeMain locale={locale} />*/}</div>
               </Container>
          </section>
     );
};

export default Guarantee;
