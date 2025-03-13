"use client";

import { parseAsString, useQueryState } from "nuqs";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const ProductCatalogContext = createContext<{
     brand: string | null;
     setBrand: (brand: string | null) => void;
}>({
     brand: null,
     setBrand: () => {},
});

export const ProductCatalogContextProvider = ({ children }: PropsWithChildren) => {
     const [brand, setBrand] = useQueryState("brand", parseAsString);
     return <ProductCatalogContext.Provider value={{ brand, setBrand }}>{children}</ProductCatalogContext.Provider>;
};

export const useProductCatalogContext = () => {
     return useContext(ProductCatalogContext);
};
