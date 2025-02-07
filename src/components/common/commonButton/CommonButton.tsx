import Link from "next/link";

interface Props {
     children: React.ReactNode;
     className?: string;
     href?: string;
}

const CommonButton: React.FC<Props> = ({ children, className, href }) => {
     return href ? (
          <Link
               href={href}
               className={`flex items-center justify-center bg-black text-white text-[24px] max-w-[200px] rounded-md font-medium hover:bg-white hover:text-black duration-300 w-full h-[60px] ${className}`}
          >
               {children}
          </Link>
     ) : (
          <button className={`bg-black text-white text-[24px] max-w-[200px] rounded-md font-medium hover:bg-white hover:text-black duration-300 w-full h-[60px] ${className}`}>
               {children}
          </button>
     );
};

export default CommonButton;
