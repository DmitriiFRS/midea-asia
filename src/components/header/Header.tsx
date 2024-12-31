import Container from "../common/container/Container";
import Image from "next/image";
import logo from "@img/common/logo.svg";
import Link from "next/link";
import LangSwitcher from "../common/langSwitcher/LangSwitcher";

interface Props {
  locale: string;
  nav: {
    id: number;
    title: string;
    href: string;
  }[];
}

const Header: React.FC<Props> = ({ locale, nav }) => {
  const leftNav = nav.slice(0, 3);
  const rightNav = nav.slice(3, 5);
  return (
    <header className="absolute left-0 top-0 w-full h-[100px] text-white">
      <div className="bg-black opacity-25 w-full h-full absolute left-0 top-0 -z-10"></div>
      <Container className="h-full flex justify-between items-center">
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
        <Link className="aspect-[300/100] max-w-[200px] w-full h-auto" href={`/${locale}`}>
          <Image src={logo} alt="Midea" width={300} height={100} className="w-full h-full object-contain" />
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
          <LangSwitcher locale={locale} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
