import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoBlack from "@img/common/midea-black.webp";
import close from "@icons/common/close.svg";

interface Props {
     locale: string;
}

const Burger: React.FC<Props> = ({ locale }) => {
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
                                   className="bg-[#E7F1FA] px-4 relative z-10 w-[70vw] h-full"
                                   onClick={(e) => e.stopPropagation()}
                              >
                                   <div className="flex justify-between mt-5">
                                        <Image src={logoBlack} alt="Midea" width={120} height={40} className="max-w-[120px] w-full h-auto aspect-[1080/433]" />
                                        <button className="p-2.5" onClick={() => setIsOpen(false)}>
                                             <Image src={close} alt="close" width={20} height={20} className="" />
                                        </button>
                                   </div>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     );
};

export default Burger;
