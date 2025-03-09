import Link from "next/link";
import Container from "../common/container/Container";
import Image from "next/image";
import logo from "@img/common/logo.svg";

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
               <Container className="flex justify-between items-center">
                    <nav>
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
                    <div className="flex gap-[120px]">
                         <ul className="flex gap-8">
                              {rightNav.map((el) => (
                                   <li key={el.id} className="">
                                        <Link href={`/${locale}${el.href}`}>
                                             <span className="text-[16px]">{el.title}</span>
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </Container>
               <Container className="text-center mt-[60px]">
                    <p className="mt-[60px] leading-120% text-[#a3a3a3] text-[18px]">
                         Все материалы, размещенные на этом сайте, защищены законом об авторских правах. Копирование, воспроизведение, распространение или модификация любой
                         информации с этого сайта без письменного разрешения владельца авторских прав строго запрещены.
                    </p>
               </Container>
          </footer>
     );
};

export default Footer;
