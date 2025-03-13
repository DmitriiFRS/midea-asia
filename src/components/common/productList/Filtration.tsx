"use client";

import { useProductCatalogContext } from "@/context/ProductCatalogContext";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { parseAsString, useQueryState } from "nuqs";

interface Props {
     locale: string;
}

const Filtration: React.FC<Props> = ({ locale }) => {
     const { brand, setBrand } = useProductCatalogContext();

     const handleChange = (event: SelectChangeEvent<string>) => {
          if (event.target.value === "") {
               setBrand(null);
               return;
          }
          setBrand(event.target.value);
     };

     return (
          <div className="flex items-center gap-5 max-h-10">
               <span className="text-[16px] font-semibold">Бренд:</span>
               <Select
                    value={brand ?? ""}
                    onChange={handleChange}
                    displayEmpty
                    MenuProps={{
                         disableScrollLock: true,
                    }}
                    sx={{
                         "& .MuiSelect-select": {
                              padding: "0 10px",
                              maxWidth: "100px",
                              width: "70px",
                         },
                    }}
                    className="h-full"
                    renderValue={brand !== "" ? undefined : () => <span>Выбрать</span>}
               >
                    <MenuItem value="">Все</MenuItem>
                    <MenuItem value="Midea">Midea</MenuItem>
                    <MenuItem value="Welkin">Welkin</MenuItem>
               </Select>
          </div>
     );
};

export default Filtration;
