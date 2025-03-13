import Link from "next/link";
import Container from "../common/container/Container";
import Image from "next/image";
import logo from "@icons/common/ca-logo.webp";
import { FaTelegram } from "react-icons/fa";

interface Props {
     locale: string;
     nav: {
          id: number;
          title: string;
          href: string;
     }[];
}

const Footer: React.FC<Props> = ({ locale, nav }) => {
     const leftNav = nav.slice(0, 1);
     const rightNav = nav.slice(1, 2);
     return (
          <footer className="text-white bg-black py-[60px]">
               <Container className="">
                    <div className="flex justify-between items-center">
                         <nav className="font-semibold">
                              <ul className="flex gap-8">
                                   {leftNav.map((el) => (
                                        <li key={el.id} className="">
                                             <Link href={`/${locale}${el.href}`}>
                                                  <span className="text-[16px]">{el.title}</span>
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </nav>
                         <Link className="aspect-[300/100] max-w-[200px] w-full h-auto block" href={`/${locale}`}>
                              <Image src={logo} alt="Midea" width={300} height={100} className="w-full h-full" />
                         </Link>
                         <nav className="flex gap-[120px] font-semibold">
                              <ul className="flex gap-8">
                                   {rightNav.map((el) => (
                                        <li key={el.id} className="">
                                             <Link href={`/${locale}${el.href}`}>
                                                  <span className="text-[16px]">{el.title}</span>
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </nav>
                    </div>
                    <div className="flex justify-between items-center mt-10">
                         <div className="flex flex-col gap-5 text-[16px] font-semibold items-center">
                              <p className="text-[#a1a1a1]">Связаться с нами</p>
                              <div className="flex gap-5">
                                   <a target="_blank" href="tel:+998712000667" className="underline underline-offset-4 hover:no-underline">
                                        +998 71 200 06 67
                                   </a>
                                   <a target="_blank" href="tel:+998779500636" className="underline underline-offset-4 hover:no-underline">
                                        +998 77 950 06 36
                                   </a>
                              </div>
                         </div>
                         <div className="h-10">
                              <a target="_blank" href="https://t.me/+998712000667">
                                   <FaTelegram className="h-full w-8" />
                              </a>
                         </div>
                    </div>
                    <p className="text-center mt-[60px] leading-120% text-[#a3a3a3] text-[18px]">
                         Все материалы, размещенные на этом сайте, защищены законом об авторских правах. Копирование, воспроизведение, распространение или модификация любой
                         информации с этого сайта без письменного разрешения владельца авторских прав строго запрещены.
                    </p>
               </Container>
          </footer>
     );
};

export default Footer;
