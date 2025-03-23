import Container from "@/components/common/container/Container";
import ProductBottom from "@/components/product/productBottom/ProductBottom";
import ProductDetails from "@/components/product/productDetails/ProductDetails";
import ProductSlider from "@/components/product/productSlider/ProductSlider";
import { ProductContextProvider } from "@/context/ProductContext";
import { getDollarValue } from "@/fetch/getDollarValue";
import { getOneProduct } from "@/fetch/getOneProduct";
import { Product } from "@/interfaces/products.interface";

export async function generateMetadata({ params }: Props) {
     const { locale, slug } = await params;
     const { data }: { data: Product } = await getOneProduct({ locale, slug });
     if (!data) return null;
     return (
          data && {
               title: `${data.name} ${data.brand.title}, Купить в Ташкенте, Узбекистане`,
               description: `Купить или оставить заявку на ${data.name} ${data.brand.title}. Гарантия качества. Доставка по Ташкенту и всему Узбекистану.`,
               openGraph: {
                    type: "website",
                    locale: locale,
                    url: `https://climate-academy.uz/${locale === "ru" ? "" : locale}/catalog/${data.categories.slug}/${data.slug}`,
                    siteName: "climate-academy",
                    title: `${data.name} ${data.brand.title}, Купить в Ташкенте, Узбекистане`,
                    description: `Купить или оставить заявку на ${data.name} ${data.brand.title}. Гарантия качества. Доставка по Ташкенту и всему Узбекистану.`,
               },
          }
     );
}

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
                                   <div className="grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20 md:grid-cols-2">
                                        <ProductSlider images={data.images} />
                                        <ProductDetails locale={locale} product={data} dollarValue={dollarValue.data.value} />
                                   </div>
                                   <div>
                                        <ProductBottom
                                             locale={locale}
                                             productDescription={data.mainDescription}
                                             productParams={data.params_other}
                                             productVideo={data.video}
                                             productImages={data.img_description}
                                        />
                                   </div>
                              </Container>
                         </ProductContextProvider>
                    </section>
               </main>
          )
     );
};

export default page;
