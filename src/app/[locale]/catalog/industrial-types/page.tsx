interface Props {
     params: Promise<{
          locale: string;
     }>;
}

const page: React.FC<Props> = async ({ params }) => {
     const { locale } = await params;
     return <main></main>;
};

export default page;
