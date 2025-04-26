import { NewsPageInterface } from "@/interfaces/newsPage.interface";
import { strapiUrl } from "@/utils/consts";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import NewsPageSlider from "./NewsPageSlider";

interface Props {
  news: NewsPageInterface;
}

const NewsPageContent = ({ news }: Props) => {
  console.log(news.images);
  console.log(news.images);
  return (
    <section className="mt-14 grid grid-cols-1 items-center md:gap-10 xl:gap-28 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        {news.date && <p className="hidden text-light-black font-semibold opacity-80 lg:block">{news.date}</p>}
        <h2 className="mt-8 text-[32px] font-medium">{news.title}</h2>
        <div className="leading-120% mt-8 text-[16px] flex flex-col gap-5 opacity-70">
          <ReactMarkdown>{news.description}</ReactMarkdown>
        </div>
      </div>
      <div className="w-full h-auto aspect-video order-1 lg:order-2 lg:aspect-square">
        {news.date && <p className="block text-light-black font-semibold opacity-80 lg:hidden">{news.date}</p>}
        {news.image?.url && (
          <Image
            src={strapiUrl + news.image.url}
            alt="image"
            width={500}
            height={500}
            className=" mt-10 lg:mt-0 rounded-xl w-full h-full object-contain"
          />
        )}
        {news.images && news.images.length > 0 && <NewsPageSlider images={news.images} />}
      </div>
    </section>
  );
};

export default NewsPageContent;
