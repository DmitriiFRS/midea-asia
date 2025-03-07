"use client";

import PrimaryModal from "@/components/common/modals/PrimaryModal";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import close from "@icons/common/close.svg";
import Image from "next/image";
import Form from "@/components/common/form/Form";

const ProductFormButtom = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [success, setSuccess] = useState(false);
     useEffect(() => {
          const scrollWidth = window.innerWidth - document.body.clientWidth;
          if (isOpen) {
               document.body.style.overflow = "hidden";
               document.body.style.paddingRight = `${scrollWidth}px`;
          } else {
               document.body.style.overflow = "auto";
               document.body.style.paddingRight = `0px`;
          }
     }, [isOpen]);
     return (
          <>
               <AnimatePresence>
                    {isOpen && (
                         <PrimaryModal setIsOpen={setIsOpen}>
                              <motion.div
                                   onClick={(e) => e.stopPropagation()}
                                   initial={{ y: 100 }}
                                   animate={{ y: 0 }}
                                   exit={{ y: 100 }}
                                   className="relative rounded-lg bg-light-gray h-auto w-auto p-5"
                              >
                                   <button onClick={() => setIsOpen(false)} className="absolute right-2.5 top-2.5 p-2.5 w-[40px] h-[40px]">
                                        <Image src={close} alt="" width={40} height={40} className="w-full h-full" />
                                   </button>
                                   <p className="mt-10 text-[20px] font-semibold leading-130%">Оставьте заявку на оборудование, и специалист свяжется с вами в кратчайшие сроки</p>
                                   <div className="mt-5 flex flex-col items-center justify-center w-full">
                                        <Form wrapperClassName="gap-10" locale={"ru"} success={success} setSuccess={setSuccess} additionalFields={["comment"]} />
                                   </div>
                              </motion.div>
                         </PrimaryModal>
                    )}
               </AnimatePresence>

               <button
                    onClick={() => setIsOpen(true)}
                    className="mt-5 rounded-2xl text-white bg-black text-[20px] border border-black flex items-center justify-center p-[19px] text-center w-full duration-300 hover:bg-transparent hover:text-black md:p-5 lg:text-[24px] lg:mt-10"
               >
                    Оставить заявку
               </button>
          </>
     );
};

export default ProductFormButtom;
