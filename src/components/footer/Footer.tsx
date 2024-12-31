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
  const leftNav = nav.slice(0, 3);
  const rightNav = nav.slice(3, 5);
  return (
    <footer className="text-white bg-black">
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
    </footer>
  );
};

export default Footer;
