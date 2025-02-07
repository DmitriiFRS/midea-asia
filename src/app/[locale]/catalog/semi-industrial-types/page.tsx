import cols from "@/../public/images/home/alba.webp";
import cass from "@/../public/images/home/alba.webp";
import duct from "@/../public/images/home/alba.webp";
import CatalogList from "@/components/common/catalogList/CatalogList";
import Container from "@/components/common/container/Container";

interface Props {
     params: Promise<{
          locale: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale } = await params;
     const items = [
          {
               id: 0,
               title: "Колонные кондиционеры",
               image: cols,
               slug: "/catalog/cols",
          },
          {
               id: 1,
               title: "Кассетные кондиционеры",
               image: cass,
               slug: "/catalog/cass",
          },
          {
               id: 2,
               title: "Канальные кондиционеры",
               image: duct,
               slug: "/catalog/ducts",
          },
     ];
     return (
          <main className="flex-[1_1_auto]">
               <CatalogList items={items} locale={locale} />
          </main>
     );
};

export default page;
