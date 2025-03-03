"use client";

import { VariationInterface } from "@/interfaces/products.interface";
import { createContext, PropsWithChildren, useState } from "react";

const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: PropsWithChildren) => {
     const [currentModel, setCurrentModel] = useState<VariationInterface | null>(null);
     return <ProductContext.Provider value={{ currentModel, setCurrentModel }}>{children}</ProductContext.Provider>;
};
