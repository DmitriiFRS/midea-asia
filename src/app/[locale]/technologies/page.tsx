import NextBreadcrumb from "@/components/common/Breadcrumbs";
import Container from "@/components/common/container/Container";
import NewsList from "@/components/news/NewsList";
import TechnologiesList from "@/components/technologies/TechnologiesList";
import sample from "@img/home/technology-sample.webp";

const page: React.FC = () => {
	const data = [
		{ id: 1, name: "Reactfdfdff gfgfgf gfgfgfggf fffg", image: sample, description: "Description 1", link: "/link1" },
		{ id: 2, name: "Vue", image: sample, description: "Description 2", link: "/link2" },
		{ id: 3, name: "Angular", image: sample, description: "Description 3", link: "/link3" },
		{ id: 4, name: "Svelte", image: sample, description: "Description 4", link: "/link4" },
		{ id: 5, name: "Ember", image: sample, description: "Description 5", link: "/link5" },
		{ id: 6, name: "Backbone", image: sample, description: "Description 6", link: "/link6" },
		{ id: 7, name: "jQuery", image: sample, description: "Description 7", link: "/link7" },
	];
	return (
		<main className="flex-[1_1_auto]">
                    <section className="section-margin">
                         <Container>
                              <NextBreadcrumb homeElement="Главная" separator="/" />
                              <h1 className="mt-5 text-[40px] font-medium">Новости и статьи</h1>
                              <NewsList list={data} />
                         </Container>
                    </section>
               </main>
	);
};

export default page;
