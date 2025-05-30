import Container from "../common/container/Container";
import FooterNav from "./FooterNav";
import FooterContacts from "./FooterContacts";
import FooterLogo from "./FooterLogo";
import { getProducts } from "@/fetch/getProducts";
import { getProductsSitemap } from "@/fetch/getProductsSitemap";
import { getCategories } from "@/fetch/getCategories";

interface Props {
     locale: string;
     nav: {
          id: number;
          title: string;
          href: string;
          isExternal?: boolean;
     }[];
}

const Footer: React.FC<Props> = ({ locale, nav }) => {
     return (
          <footer className="text-white bg-black py-[60px]">
               <Container className="">
                    <div className="hidden md:flex justify-between">
                         <FooterLogo locale={locale} />
                         <FooterNav locale={locale} nav={nav} />
                         <FooterContacts locale={locale} />
                    </div>
                    <div className="flex flex-col items-center xs:items-start xs:flex-row xs:justify-between md:hidden">
                         <FooterLogo locale={locale} />
                         <div>
                              <FooterNav locale={locale} nav={nav} />
                              <FooterContacts locale={locale} />
                         </div>
                    </div>
                    <p className="text-center mt-10 leading-120% text-[#a3a3a3] text-[14px] md:mt-[60px] md:text-[18px]">
                         Все материалы, размещенные на этом сайте, защищены законом об авторских правах. Копирование, воспроизведение, распространение или модификация любой
                         информации с этого сайта без письменного разрешения владельца авторских прав строго запрещены.
                    </p>
               </Container>
          </footer>
     );
};

export default Footer;
