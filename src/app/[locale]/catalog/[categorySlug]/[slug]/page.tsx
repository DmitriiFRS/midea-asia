import Container from "@/components/common/container/Container";
import ProductBottom from "@/components/product/productBottom/ProductBottom";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import ProductSlider from "@/components/product/productSlider/ProductSlider";
import { getOneProduct } from "@/fetch/getOneProduct";

interface Props {
     params: Promise<{
          locale: string;
          slug: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale, slug } = await params;
     const product = await getOneProduct({ locale, slug });
     return (
          product.data && (
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
          )
     );
};

export default page;
