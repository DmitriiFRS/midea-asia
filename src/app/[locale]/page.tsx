import Hero from "@/components/homepage/hero/Hero";
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
    </main>
  );
}
