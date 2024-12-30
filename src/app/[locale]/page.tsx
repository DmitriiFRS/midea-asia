import Image from "next/image";

interface Props {
  params: {
    locale: string
  }
}

export default async function Home({params}: Props) {
  const {locale} = await params
  return (
    <main className="">
    </main>
  );
}
