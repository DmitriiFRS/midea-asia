import Image from "next/image";
import logo from "@icons/common/ca-logo.webp";
import Link from "next/link";

interface Props {
     locale: string;
}

const FooterLogo: React.FC<Props> = ({ locale }) => {
     return (
          <Link className="block h-max" href={`/${locale}`}>
               <Image src={logo} alt="Midea" width={300} height={100} className=" aspect-[200/66] max-w-[200px] w-full h-auto" />
          </Link>
     );
};

export default FooterLogo;
