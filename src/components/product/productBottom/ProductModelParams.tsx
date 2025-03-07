"use client";

import { useProductContext } from "@/context/ProductContext";

interface Props {
     locale: string;
}

const ProductModelParams: React.FC<Props> = ({ locale }) => {
     const { currentModel } = useProductContext();
     if (!currentModel) return null;
     const params = [
          {
               title: "Холодопроизводительность (btu)",
               value: currentModel.params?.airconds?.cooling_btu,
          },
          {
               title: "Холодопроизводительность (kW)",
               value: currentModel.params?.airconds?.cooling_kw,
          },
          {
               title: "Теплопроизводительность (btu)",
               value: currentModel.params?.airconds?.heating_btu,
          },
          {
               title: "Теплопроизводительность (kW)",
               value: currentModel.params?.airconds?.heating_kw,
          },
          {
               title: "Расход эл-ва (kW) от",
               value: currentModel.params?.airconds?.energy_output,
          },
          {
               title: "Обслуживаемая площадь (m2)",
               value: currentModel.params?.airconds?.m2,
          },
          {
               title: "Обслуживаемая площадь (m3)",
               value: currentModel.params?.airconds?.m3,
          },
          {
               title: "Кол-во / марка фреона (g)",
               value: currentModel.params?.airconds?.freon,
          },
          {
               title: "Размер внутр. блока (Ш.В.Г)",
               value: currentModel.params?.airconds?.size_inner,
          },
          {
               title: "Размер внеш. блока (Ш.В.Г)",
               value: currentModel.params?.airconds?.size_outer,
          },
          {
               title: "Расход воздуха max. (m3/h)",
               value: currentModel.params?.airconds?.airflow,
          },
          {
               title: "Уровень шума внутр.бл.(dB) от",
               value: currentModel.params?.airconds?.noise_inner,
          },
          {
               title: "Уровень шума внеш.бл.(dB)",
               value: currentModel.params?.airconds?.noise_outer,
          },
          {
               title: "Диапазон рабочих темп-р +/- (°C)",
               value: currentModel.params?.airconds?.temperature,
          },
          {
               title: "Длина трассы (m)",
               value: currentModel.params?.airconds?.route_length,
          },
          {
               title: "Диаметр трассы",
               value: currentModel.params?.airconds?.route_diameter,
          },
          {
               title: "Вес внут. блока (kg)",
               value: currentModel.params?.airconds?.weight_inner,
          },
          {
               title: "Вес внеш. блока (kg)",
               value: currentModel.params?.airconds?.weight_outer,
          },
     ];
     return (
          <ul className="grid grid-cols-4 justify-between mt-10 gap-10" id="productParams">
               {params.map((el, index) => {
                    if (!el.value) return null;
                    return (
                         <li key={index} className="flex flex-col gap-2.5">
                              <p className="text-[#989898] font-medium">{el.title}</p>
                              <p>{el.value}</p>
                         </li>
                    );
               })}
          </ul>
     );
};

export default ProductModelParams;
