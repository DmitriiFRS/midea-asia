"use client";

import { VariationInterface } from "@/interfaces/products.interface";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const ProductContext = createContext<{
     currentModel: VariationInterface | null;
     setCurrentModel: (model: VariationInterface | null) => void;
}>({
     currentModel: null,
     setCurrentModel: () => {},
});

export const ProductContextProvider = ({ children }: PropsWithChildren) => {
     const [currentModel, setCurrentModel] = useState<VariationInterface | null>(null);
     return <ProductContext.Provider value={{ currentModel, setCurrentModel }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
     return useContext(ProductContext);
};
