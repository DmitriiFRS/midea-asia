import BrandDescription from "@/components/homepage/brandDescription/BrandDescription";
import GreatSolution from "@/components/homepage/greatSolution/GreatSolution";
import Guarantee from "@/components/homepage/guarantee/Guarantee";
import Hero from "@/components/homepage/hero/Hero";
import HomepageForm from "@/components/homepage/homepageForm/HomepageForm";
import MiniCatalog from "@/components/homepage/miniCatalog/MiniCatalog";
import SubheroTitle from "@/components/homepage/subheroTitle/SubheroTitle";
import Image from "next/image";

interface Props {
     params: Promise<{
          locale: string;
     }>;
}

export default async function Home({ params }: Props) {
     const { locale } = await params;
     return (
          <main className="flex-[1_1_auto]">
               <Hero locale={locale} />
               {/*<SubheroTitle locale={locale} />*/}
               <MiniCatalog locale={locale} />
               <GreatSolution locale={locale} />
               <BrandDescription locale={locale} />
               <Guarantee locale={locale} />
               <HomepageForm locale={locale} />
          </main>
     );
}
