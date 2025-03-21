import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoBlack from "@icons/common/ca-logo.webp";
import close from "@icons/common/close.svg";
import LangSwitcher from "../common/langSwitcher/LangSwitcher";
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

const Burger: React.FC<Props> = ({ locale, nav }) => {
     const [isOpen, setIsOpen] = useState(false);
     useEffect(() => {
          const scrollbarWidth = window.innerWidth - document.body.clientWidth;
          if (isOpen) {
               document.body.style.overflow = "hidden";
               document.body.style.paddingRight = `${scrollbarWidth}px`;
          } else {
               document.body.style.overflow = "";
               document.body.style.paddingRight = "";
          }

          return () => {
               document.body.style.overflow = "";
               document.body.style.paddingRight = "";
          };
     }, [isOpen]);
     return (
          <>
               <button onClick={() => setIsOpen(true)} className="flex flex-col gap-2 md:hidden w-[30px] h-auto">
                    <span className="h-[1px] max-w-[30px] w-full bg-white"></span>
                    <span className="h-[1px] max-w-[30px] w-full bg-white"></span>
                    <span className="h-[1px] max-w-[30px] w-full bg-white"></span>
               </button>
               <AnimatePresence>
                    {isOpen && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="lg:hidden fixed top-0 left-0 z-40 w-screen h-screen burger-modal flex items-center justify-end"
                              onClick={() => setIsOpen(false)}
                         >
                              <motion.div
                                   initial={{ x: 1000 }}
                                   animate={{ x: 0 }}
                                   exit={{ x: 1000 }}
                                   transition={{ duration: 0.5 }}
                                   className="bg-[#E7F1FA] px-4 relative z-10 w-[70vw] h-full flex flex-col justify-between text-black border"
                                   onClick={(e) => e.stopPropagation()}
                              >
                                   <div className="flex justify-between mt-5">
                                        <Image src={logoBlack} alt="Midea" width={120} height={40} className="max-w-[120px] w-full h-auto aspect-[1080/433] object-contain" />
                                        <button className="p-2.5" onClick={() => setIsOpen(false)}>
                                             <Image src={close} alt="close" width={20} height={20} className="" />
                                        </button>
                                   </div>
                                   <nav className="flex justify-center">
                                        <ul className="flex flex-col items-center font-medium text-[22px] gap-10 lg:gap-8">
                                             {nav.map((el) => (
                                                  <li key={el.id} className="relative z-10">
                                                       {el.isExternal ? (
                                                            <a target="_blank" onClick={() => setIsOpen(false)} href={el.href}>
                                                                 <span>{el.title}</span>
                                                            </a>
                                                       ) : (
                                                            <Link href={`/${locale}${el.href}`} onClick={() => setIsOpen(false)}>
                                                                 <span>{el.title}</span>
                                                            </Link>
                                                       )}
                                                  </li>
                                             ))}
                                        </ul>
                                   </nav>
                                   <div className="flex justify-center mb-[120px]">
                                        <LangSwitcher locale={locale} inBurger />
                                   </div>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     );
};

export default Burger;
