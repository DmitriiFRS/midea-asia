import CommonButton from "@/components/common/commonButton/CommonButton";
import Container from "@/components/common/container/Container";
import HeroSwiper from "./HeroSwiper";
import { strapiGet } from "@/fetch/strapiGet";
import { strapiApiUrl } from "@/utils/consts";

interface Props {
	locale: string;
}

const Hero: React.FC<Props> = async ({ locale }) => {
	const { data } = await strapiGet(`${strapiApiUrl}/homepage?populate=main_banners`);
	return (
		<section className="w-full h-screen relative overflow-hidden text-white">
			<div className="w-full h-screen absolute left-0 top-0 bg-black opacity-25 -z-10"></div>
			<Container className="w-full h-full flex flex-col items-center justify-center">
				<h1 className="leading-130% text-[30px] font-semibold text-center lg:text-[45px]">
					Бытовые и промышленные кондиционеры от компании Midea
				</h1>
				<p className="mt-[30px] text-[16px] leading-130% max-w-full text-center font-medium lg:text-[22px] lg:max-w-[70%]">
					Мы являемся официальными представителями Midea и Welkin. Вы можете купить кондиционеры, промышленное оборудование и системы
					вентиляции у нас по выгодным ценам.
				</p>
				<CommonButton className="mt-[60px] text-[16px] max-h-[50px] md:max-h-[initial] md:text-[22px]" href={`/catalog`}>
					Каталог
				</CommonButton>
			</Container>
			<HeroSwiper locale={locale} bannersData={data} />
		</section>
	);
};

export default Hero;
