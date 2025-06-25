"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
	technologiesList: {
		id: number;
		name: string;
		image: string | StaticImageData;
		description: string;
		link: string;
	}[];
}

const TechnologiesSlider: React.FC<Props> = ({ technologiesList }) => {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={1.2}
			modules={[Autoplay]}
			className="mt-5 sm:mt-10"
			autoplay={{
				delay: 4000,
				disableOnInteraction: true,
			}}
			speed={1500}
			breakpoints={{
				480: {
					slidesPerView: 1.8,
				},
				600: {
					slidesPerView: 2.2,
				},
				768: {
					slidesPerView: 3.2,
				},
				1024: {
					slidesPerView: 4,
				},
			}}
		>
			{technologiesList.map((el) => {
				return (
					<SwiperSlide key={el.id}>
						<Link href={`/technologies${el.link}`} className="block">
							<Image
								src={el.image}
								alt="technologies"
								width={2000}
								height={2000}
								className="w-full h-auto aspect-square rounded-[5px]"
							/>
							<div className="mt-5 leading-130% flex flex-col gap-2.5 px-1">
								<h3 className="font-semibold text-[18px]">{el.name}</h3>
								<p className="line-clamp-2">{el.description}</p>
							</div>
						</Link>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default TechnologiesSlider;
