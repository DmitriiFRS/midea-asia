import Container from "@/components/common/container/Container";
import GuaranteeMain from "./GuaranteeMain";
import { strapiApiUrl } from "@/utils/consts";
import { strapiGet } from "@/fetch/strapiGet";

interface Props {
     locale: string;
}

const Guarantee: React.FC<Props> = async ({ locale }) => {
     const news = await strapiGet(`${strapiApiUrl}/news?limit=10&locale=${locale}&populate=image`);
     return (
          news.data && (
               <section className="mt-[100px]">
                    <Container>
                         <h2 className="text-[32px] font-semibold">Новости и статьи</h2>
                         <div className="mt-10">
                              <GuaranteeMain locale={locale} news={news.data} />
                         </div>
                    </Container>
               </section>
          )
     );
};

export default Guarantee;
