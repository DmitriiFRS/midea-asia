import CatalogList from "@/components/common/catalogList/CatalogList";

interface Props {
     params: Promise<{
          locale: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale } = await params;

     return <section></section>;
};

export default page;
