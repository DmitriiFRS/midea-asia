import CommonButton from "@/components/common/commonButton/CommonButton";
import Container from "@/components/common/container/Container";
import TechnologiesSlider from "./TechnologiesSlider";
import sample from "@img/home/technology-sample.webp";
import CommonButton2 from "@/components/common/commonButton/CommonButton2";

const Technologies = () => {
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
		<section className="mt-[100px]">
			<Container>
				<div className="sm:flex-row sm:flex sm:items-center sm:justify-between">
					<h2 className="text-[32px] font-semibold leading-130%">Технологии Midea</h2>
					<CommonButton2
						href="/technologies"
						className="mt-4 text-[16px] pointer-events-auto max-w-[250px] max-h-[50px] sm:mt-0 flex items-center justify-center lg:max-w-[300px] lg:text-[20px]"
					>
						Смотреть полностью
					</CommonButton2>
				</div>
				<TechnologiesSlider technologiesList={data} />
			</Container>
		</section>
	);
};

export default Technologies;
