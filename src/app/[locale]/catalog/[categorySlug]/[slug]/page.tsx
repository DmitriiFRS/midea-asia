import Container from "@/components/common/container/Container";
import ProductBottom from "@/components/product/productBottom/ProductBottom";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import ProductSlider from "@/components/product/productSlider/ProductSlider";
import { ProductContextProvider } from "@/context/ProductContext";
import { getDollarValue } from "@/fetch/getDollarValue";
import { getOneProduct } from "@/fetch/getOneProduct";

interface Props {
     params: Promise<{
          locale: string;
          slug: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale, slug } = await params;
     const { data } = await getOneProduct({ locale, slug });
     const dollarValue = await getDollarValue();
     return (
          data &&
          dollarValue.data && (
               <main className="flex-[1_1_auto]">
                    <section className="section-margin pb-[120px]">
                         <ProductContextProvider>
                              <Container>
                                   <div className="grid grid-cols-1 gap-5 lg:gap-20 md:grid-cols-2">
                                        <ProductSlider images={data.images} />
                                        <ProductDetails locale={locale} product={data} dollarValue={dollarValue.data.value} />
                                   </div>
                                   <div>
                                        <ProductBottom locale={locale} productDescription={data.mainDescription} productVariations={data.variation} />
                                   </div>
                              </Container>
                         </ProductContextProvider>
                    </section>
               </main>
          )
     );
};

export default page;
