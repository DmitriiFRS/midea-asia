import Container from "@/components/common/container/Container";
import ProductBottom from "@/components/product/productBottom/ProductBottom";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import ProductSlider from "@/components/product/productSlider/ProductSlider";

interface Props {
     params: Promise<{
          locale: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale } = await params;
     return (
          <main className="flex-[1_1_auto]">
               <section className="section-margin pb-[120px]">
                    <Container>
                         <div className="grid grid-cols-2 gap-20">
                              <ProductSlider />
                              <ProductDetails locale={locale} />
                         </div>
                         <div>
                              <ProductBottom locale={locale} />
                         </div>
                    </Container>
               </section>
          </main>
     );
};

export default page;
