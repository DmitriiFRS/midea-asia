import Container from "@/components/common/container/Container";
import ProductList from "@/components/common/productList/ProductList";

interface Props {
     params: Promise<{
          locale: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale } = await params;
     return (
          <main className="flex-[1_1_auto]">
               <section className="section-margin">
                    <Container>
                         <h1 className="text-[40px] font-medium">Бытовые кондиционеры</h1>
                         <ProductList locale={locale} />
                    </Container>
               </section>
          </main>
     );
};

export default page;
