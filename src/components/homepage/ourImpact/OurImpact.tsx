import { brands } from "@/data/homepage.data";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Container from "@/components/common/container/Container";
import map from "@/../public/images/home/map.webp";

const OurImpact: React.FC = () => {
	return (
		<section className="mt-20 w-full">
			<Marquee speed={70} delay={0} autoFill={true} className="h-20 overflow-hidden">
				{brands &&
					brands.map((el, index) => {
						return (
							<div key={index} className="mr-[50px]">
								<Image
									src={el}
									alt="brand"
									width={500}
									height={500}
									className="w-full max-w-[120px] h-full max-h-20 object-contain"
								/>
							</div>
						);
					})}
			</Marquee>
			<Image src={map} alt="map" width={500} height={500} className="mt-20 w-ful h-auto aspect-[5156/2474]" />
		</section>
	);
};

export default OurImpact;
