import Container from "@/components/common/container/Container";
import ProductBottom from "@/components/product/productBottom/ProductBottom";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import ProductSlider from "@/components/product/productSlider/ProductSlider";
import { ProductContextProvider } from "@/context/ProductContext";
import { getOneProduct } from "@/fetch/getOneProduct";
import { Product } from "@/interfaces/products.interface";

interface Props {
     params: Promise<{
          locale: string;
          slug: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale, slug } = await params;
     const { data } = await getOneProduct({ locale, slug });
     console.log(data);
     return (
          data && (
               <main className="flex-[1_1_auto]">
                    <section className="section-margin pb-[120px]">
                         <ProductContextProvider>
                              <Container>
                                   <div className="grid grid-cols-2 gap-20">
                                        <ProductSlider images={data.images} />
                                        <ProductDetails locale={locale} product={data} />
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
