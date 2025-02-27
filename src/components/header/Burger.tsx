import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
     locale: string;
}

const Burger: React.FC<Props> = ({ locale }) => {
     const [isOpen, setIsOpen] = useState(false);
     return (
          <>
               <button className="flex flex-col gap-2 md:hidden w-[30px] h-auto">
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
                              transition={{ duration: 0.3 }}
                              className="lg:hidden fixed top-0 left-0 z-40 w-screen h-screen burger-modal"
                              onClick={() => setIsOpen(false)}
                         >
                              <motion.div
                                   initial={{ opacity: 0, y: -200 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   exit={{ opacity: 0, y: -200 }}
                                   transition={{ duration: 0.3 }}
                                   className="bg-[#E7F1FA] px-4 relative z-10"
                                   onClick={(e) => e.stopPropagation()}
                              >
                                   <span></span>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     );
};

export default Burger;
