import Hero from "@/components/homepage/hero/Hero";
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
      <SubheroTitle locale={locale} />
      <MiniCatalog locale={locale} />
    </main>
  );
}
