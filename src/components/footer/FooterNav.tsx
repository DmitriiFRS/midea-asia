import Link from "next/link";

interface Props {
     locale: string;
     nav: {
          id: number;
          title: string;
          href: string;
          isExternal?: boolean;
     }[];
}

const FooterNav: React.FC<Props> = ({ locale, nav }) => {
     return (
          <nav className="font-semibold mt-10 xs:mt-0">
               <ul className="flex flex-col gap-4 md:gap-8">
                    {nav.map((el) => (
                         <li key={el.id} className="text-center md:text-start">
                              {el.isExternal ? (
                                   <a target="_blank" href={el.href} className="duration-300 hover:opacity-50">
                                        <span className="text-[16px]">{el.title}</span>
                                   </a>
                              ) : (
                                   <Link href={`/${locale}${el.href}`} className="duration-300 hover:opacity-50">
                                        <span className="text-[16px]">{el.title}</span>
                                   </Link>
                              )}
                         </li>
                    ))}
               </ul>
          </nav>
     );
};

export default FooterNav;
