import Link from "next/link";

interface Props {
     children: React.ReactNode;
     className?: string;
     href?: string;
}

const CommonButton2: React.FC<Props> = ({ children, className, href }) => {
     if (href) {
          return (
               <Link
                    href={href}
                    className={`bg-black text-white w-full border border-black rounded-md font-medium hover:bg-white hover:text-black duration-300 h-[80px] ${className}`}
               >
                    {children}
               </Link>
          );
     } else {
          return (
               <button className={`bg-black text-white w-full border border-black rounded-md font-medium hover:bg-white hover:text-black duration-300 h-[80px] ${className}`}>
                    {children}
               </button>
          );
     }
};

export default CommonButton2;
