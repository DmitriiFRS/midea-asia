import NextBreadcrumb from "@/components/common/Breadcrumbs";
import Container from "@/components/common/container/Container";
import NewsList from "@/components/news/NewsList";
import { strapiGet } from "@/fetch/strapiGet";
import { strapiApiUrl } from "@/utils/consts";

const page = async () => {
     const newsData = await strapiGet(`${strapiApiUrl}/news?populate=image`);
     return (
          newsData.data && (
               <main className="flex-[1_1_auto]">
                    <section className="section-margin">
                         <Container>
                              <NextBreadcrumb homeElement="Главная" separator="/" />
                              <h1 className="mt-5 text-[40px] font-medium">Новости и статьи</h1>
                              <NewsList news={newsData.data} />
                         </Container>
                    </section>
               </main>
          )
     );
};

export default page;
