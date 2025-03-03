import Container from "@/components/common/container/Container";
import ProductList from "@/components/common/productList/ProductList";
import { getCategories } from "@/fetch/getCategories";
import { getDollarValue } from "@/fetch/getDollarValue";

interface Props {
     params: Promise<{
          locale: string;
          categorySlug: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale, categorySlug } = await params;
     const { data } = await getCategories({ locale, categoryValue: categorySlug });
     const dollarValue = await getDollarValue();
     if (!data || data.length === 0) {
          return (
               <main className="flex-[1_1_auto]">
                    <section className="section-margin">
                         <Container>
                              <h1 className="text-[40px] font-medium">404</h1>
                              <p>Not Found</p>
                         </Container>
                    </section>
               </main>
          );
     }
     return (
          data &&
          dollarValue.data && (
               <main className="flex-[1_1_auto]">
                    <section className="section-margin">
                         <Container>
                              <h1 className="text-[40px] font-medium">{data.title}</h1>
                              <ProductList locale={locale} categorySlug={categorySlug} dollarValue={dollarValue.data.value} />
                         </Container>
                    </section>
               </main>
          )
     );
};

export default page;
