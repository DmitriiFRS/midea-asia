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
          //

          {
               title: "Холодопроизводительность, кВт",
               value: currentModel.params?.chillers?.cooling_kw,
          },
          {
               title: "Теплопроизводительность, кВт",
               value: currentModel.params?.chillers?.heating_kw,
          },
          {
               title: "Электропитание, В/Гц/Ф",
               value: currentModel.params?.chillers?.powerSupply,
          },
          {
               title: "Номинальная потребляемая мощность (охлаждение), кВт",
               value: currentModel.params?.chillers?.cooling_power_cons_nom,
          },
          {
               title: "Номинальная потребляемая мощность (нагрев), кВт",
               value: currentModel.params?.chillers?.heating_power_cons_nom,
          },
          {
               title: "Коэффициент энергоэффективности EER",
               value: currentModel.params?.chillers?.eer,
          },
          {
               title: "Коэффициент энергоэффективности COP",
               value: currentModel.params?.chillers?.cop,
          },
          {
               title: "Номинальный потребляемый ток (нагрев), А",
               value: currentModel.params?.chillers?.heat_energy_consumption_nom,
          },
          {
               title: "Максимальная потребляемая мощность, кВт",
               value: currentModel.params?.chillers?.max_energy_cons_kw,
          },
          {
               title: "Максимальный потребляемый ток, А",
               value: currentModel.params?.chillers?.max_energy_cons_a,
          },
          {
               title: "Рекомендуемый автомат, А",
               value: currentModel.params?.chillers?.automat_a,
          },
          {
               title: "Пусковой ток, А",
               value: currentModel.params?.chillers?.inrush_current,
          },
          {
               title: "Расход воды, м³/ч",
               value: currentModel.params?.chillers?.water_consumption,
          },
          {
               title: "Гидравлические параметры испарителя: тип",
               value: currentModel.params?.chillers?.hpe_type,
          },
          {
               title: "Гидравлическое сопротивление, кПа",
               value: currentModel.params?.chillers?.hydraulic_resistance_kpa,
          },
          {
               title: "Гидравлические параметры испарителя: расход воды, м³/ч",
               value: currentModel.params?.chillers?.hpe_water_consumption,
          },
          {
               title: "Гидравлические параметры испарителя: диаметр труб, дюйм",
               value: currentModel.params?.chillers?.hpe_pipe_diameter,
          },
          {
               title: "Гидравлические параметры испарителя: сопротивление, кПа",
               value: currentModel.params?.chillers?.hpe_resistance_kpa,
          },
          {
               title: "Гидравлические параметры испарителя: объем воды, л",
               value: currentModel.params?.chillers?.hpe_water_value,
          },
          {
               title: "Гидравлические параметры испарителя: диаметр труб, мм",
               value: currentModel.params?.chillers?.hpe_pipe_diameter_mm,
          },
          {
               title: "Гидравлические параметры (конденсатор, кожухотрубный): сопротивление, кПа",
               value: currentModel.params?.chillers?.hpc_resistance_kpa,
          },
          {
               title: "Гидравлические параметры (конденсатор, кожухотрубный): расход воды, м³/ч",
               value: currentModel.params?.chillers?.hpc_water_consumption,
          },
          {
               title: "Уровень звуковой мощности, дБ",
               value: currentModel.params?.chillers?.noise_power,
          },
          {
               title: "Уровень звукового давления, дБ(А)",
               value: currentModel.params?.chillers?.sound_pressure_level,
          },
          {
               title: "Уровень шума, дБ(A)",
               value: currentModel.params?.chillers?.noise,
          },
          {
               title: "Тип компрессора",
               value: currentModel.params?.chillers?.compressor_type,
          },
          {
               title: "Количество компрессоров",
               value: currentModel.params?.chillers?.compressor_quantity,
          },
          {
               title: "Бренд компрессора",
               value: currentModel.params?.chillers?.compressor_brand,
          },
          {
               title: "Тип вентилятора",
               value: currentModel.params?.chillers?.fan_type,
          },
          {
               title: "Теплообменник",
               value: currentModel.params?.chillers?.heat_exchanger,
          },
          {
               title: "Расширительный вентиль",
               value: currentModel.params?.chillers?.expansion_valve,
          },
          {
               title: "Тип хладагента (фреон)",
               value: currentModel.params?.chillers?.freon_type,
          },
          {
               title: "Заводская заправка хладагента, кг",
               value: currentModel.params?.chillers?.freon_value,
          },
          {
               title: "Диаметр труб, DN, мм",
               value: currentModel.params?.chillers?.pipe_diameter,
          },
          {
               title: "Рабочий диапазон наружных температур при охлаждении, °C",
               value: currentModel.params?.chillers?.temp_cooling,
          },
          {
               title: "Рабочий диапазон наружных температур при нагреве, °C",
               value: currentModel.params?.chillers?.temp_heating,
          },
          {
               title: "Температура воды на выходе (охлаждение), °С",
               value: currentModel.params?.chillers?.temp_output_cooling,
          },
          {
               title: "Температура воды на выходе (нагрев), °С",
               value: currentModel.params?.chillers?.temp_output_heating,
          },
          {
               title: "Размер (Ш×В×Г), мм",
               value: currentModel.params?.chillers?.sizes,
          },
          {
               title: "Размер в упаковке (Ш×В×Г), мм",
               value: currentModel.params?.chillers?.sizes_package,
          },
          {
               title: "Вес (нетто/брутто), кг",
               value: currentModel.params?.chillers?.weight,
          },
          {
               title: "Пульт (пример KJRM-120H2/BMWK)",
               value: currentModel.params?.chillers?.remote,
          },
          {
               title: "Диапазон расхода воды м3/ч",
               value: currentModel.params?.chillers?.water_flow_range,
          },
          {
               title: "Класс энергоэффективности сезонного отопления помещений (ТВВых при 35°С)",
               value: currentModel.params?.chillers?.e_eff_class_35,
          },
     ];
     return (
          <ul className="grid grid-cols-1 justify-between mt-5 gap-5 md:gap-10 xs:grid-cols-2 md:mt-10 md:grid-cols-3 lg:grid-cols-4" id="productParams">
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
