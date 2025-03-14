import NextBreadcrumb from "@/components/common/Breadcrumbs";
import Container from "@/components/common/container/Container";
import NewsPageContent from "@/components/newsPage/NewsPageContent";
import { strapiGet } from "@/fetch/strapiGet";
import { strapiApiUrl } from "@/utils/consts";

interface Props {
     params: Promise<{
          locale: string;
          slug: string;
     }>;
}
const page: React.FC<Props> = async ({ params }) => {
     const { locale, slug } = await params;
     const newsData = await strapiGet(`${strapiApiUrl}/news/${slug}`);
     if (!newsData.data) {
          return (
               <main className="mt-28 flex-[1_1_auto]">
                    <Container>
                         <div className="text-[50px]">Упс, страница не найдена</div>
                    </Container>
               </main>
          );
     }
     return (
          newsData.data && (
               <main className="flex-[1_1_auto]">
                    <section className="section-margin pb-[120px]">
                         <Container>
                              <div>
                                   <NextBreadcrumb homeElement="Главная" separator="/" newsData={newsData.data} />
                                   <h1 className="mt-5 text-[32px] md:text-[40px] font-medium">Новости и статьи</h1>
                                   <NewsPageContent news={newsData.data} />
                              </div>
                         </Container>
                    </section>
               </main>
          )
     );
};

export default page;
