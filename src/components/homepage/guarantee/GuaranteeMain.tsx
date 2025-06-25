"use client";

import { useRef } from "react";
import { NewsInterface } from "@/interfaces/news.interface";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { strapiUrl } from "@/utils/consts";
import CommonButton2 from "@/components/common/commonButton/CommonButton2";
import ReactMarkdown from "react-markdown";
import { truncate } from "@/helpers/truncateText";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface Props {
	locale: string;
	news: NewsInterface[];
}

const GuaranteeMain: React.FC<Props> = ({ locale, news }) => {
	const swiperRef1 = useRef<SwiperRef>(null);
	const swiperRef2 = useRef<SwiperRef>(null);
	const handleSlideChange = (swiper: SwiperClass) => {
		if (swiperRef1.current && swiperRef2.current) {
			swiperRef1.current.swiper.slideTo(swiper.activeIndex);
			setTimeout(() => {
				swiperRef2.current?.swiper.slideTo(swiper.activeIndex);
			}, 200);
		}
	};
	return (
		<div className="grid grid-cols-1 gap-10 max-w-full md:grid-cols-2">
			<div className="overflow-hidden relative rounded-xl">
				<Swiper
					ref={swiperRef1}
					onSwiper={(swiper) => (swiperRef1.current = { swiper })}
					onSlideChange={handleSlideChange}
					className="w-full h-full relative"
					slidesPerView={1}
					modules={[Pagination, EffectFade, Navigation]}
					navigation={{
						nextEl: ".news-swiper-button-next",
						prevEl: ".news-swiper-button-prev",
					}}
					pagination={{
						clickable: true,
						el: ".guarantee-swiper-pagination",
						bulletClass: "guarantee-swiper-pagination-bullet",
						bulletActiveClass: "guarantee-swiper-pagination-bullet-active",
					}}
				>
					<div className="absolute top-0 left-0 w-full h-full z-50 flex justify-between items-center pointer-events-none px-2">
						<button className="news-swiper-button-prev size-10 pointer-events-auto rounded-[4px] bg-white">
							<GrFormPrevious size={40} />
						</button>
						<button className="news-swiper-button-next rounded-[4px] bg-white size-10 pointer-events-auto">
							<GrFormNext size={40} />
						</button>
					</div>
					{news.map((el) => (
						<SwiperSlide key={el.id} className="w-full h-auto aspect-square">
							<div className="w-full h-full">
								<Image
									src={strapiUrl + el.image?.url}
									alt="slide"
									width={4000}
									height={4000}
									className="w-full h-full object-cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="guarantee-swiper-pagination absolute bottom-4 left-0 w-full h-4 z-10 flex gap-4 justify-center"></div>
			</div>

			<div className="flex flex-col">
				<Swiper
					navigation={false}
					pagination={false}
					touchMoveStopPropagation={true}
					ref={swiperRef2}
					onSwiper={(swiper) => (swiperRef2.current = { swiper })}
					onSlideChange={handleSlideChange}
					className="w-full h-full pointer-events-none"
				>
					{news.map((el) => {
						const truncatedDescription = truncate(el.description, 400);
						return (
							<SwiperSlide key={el.id}>
								<div className="flex flex-col justify-center h-full">
									<h3 className="text-[24px] text-[#3b3b3b] font-semibold leading-120% lg:text-[36px]">{el.title}</h3>
									<div className="mt-10 flex flex-col gap-5 text-[16px] leading-120% xl:mt-14 xl:text-[20px]">
										<ReactMarkdown>{truncatedDescription}</ReactMarkdown>
									</div>
									<CommonButton2
										href={"/news/" + el.slug}
										className="mt-10 text-[16px] pointer-events-auto max-w-[250px] max-h-[50px] flex items-center justify-center lg:max-w-[300px] lg:text-[20px]"
									>
										Подробнее
									</CommonButton2>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default GuaranteeMain;
