import { motion } from "framer-motion";
import { ReactNode } from "react";

const PrimaryModal = ({ children, setIsOpen }: { children: ReactNode; setIsOpen: (b: boolean) => void }) => {
     return (
          <motion.div
               onClick={() => setIsOpen(false)}
               animate={{ opacity: 1 }}
               initial={{ opacity: 0 }}
               exit={{ opacity: 0 }}
               className="p-2.5 fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
               {children}
          </motion.div>
     );
};

export default PrimaryModal;
