import { NewsInterface } from "@/interfaces/news.interface";
import { strapiUrl } from "@/utils/consts";
import Image from "next/image";
import Link from "next/link";

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	news: any[];
}

const NewsList = ({ news }: Props) => {
	return (
		<div className="mt-20 grid items-stretch grid-cols-1 gap-x-5 gap-y-10 h-full pb-20 xs:grid-cols-2 lmd:grid-cols-3 xl:grid-cols-4">
			{news.length ? (
				news.map((el) => {
					return (
						<Link href={"/news/" + el.slug} key={el.id} className="flex flex-col items-stretch group">
							<div className="flex-[1_1_auto] overflow-hidden rounded-lg">
								<Image
									src={strapiUrl + el.image?.url}
									alt={el.title}
									width={300}
									height={300}
									className="w-full h-auto aspect-square object-cover duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="flex-[1_1_auto]">
								<h2 className="text-[20px] font-medium mt-5 md:text-[24px]">{el.title}</h2>
								<p className="mt-5 leading-120% line-clamp-3 opacity-60">{el.preview_description}</p>
							</div>
						</Link>
					);
				})
			) : (
				<p>Нет новостей</p>
			)}
		</div>
	);
};

export default NewsList;
