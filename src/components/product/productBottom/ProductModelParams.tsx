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
          //

          {
               title: "Тип",
               value: currentModel.params?.vrf_outer?.type,
          },
          {
               title: "Тип мотора вентилятора",
               value: currentModel.params?.vrf_outer?.fan_motor_type,
          },
          {
               title: "Холопроизводительность kW",
               value: currentModel.params?.vrf_outer?.cooling_kw,
          },
          {
               title: "Теплопроизводительность kW",
               value: currentModel.params?.vrf_outer?.heating_kw,
          },
          {
               title: "Электропитание, В/Гц/Ф",
               value: currentModel.params?.vrf_outer?.powerSupply,
          },
          {
               title: "ESP (статическое давление), Па",
               value: currentModel.params?.vrf_outer?.esp,
          },
          {
               title: "Номинальная потребляемая мощность (охлаждение), кВт",
               value: currentModel.params?.vrf_outer?.cooling_power_cons_nom,
          },
          {
               title: "Коэффициент энергоэффективности EER",
               value: currentModel.params?.vrf_outer?.eer,
          },
          {
               title: "Номинальная потребляемая мощность (нагрев), кВт",
               value: currentModel.params?.vrf_outer?.heating_power_cons_nom,
          },
          {
               title: "Коэффициент энергоэффективности COP",
               value: currentModel.params?.vrf_outer?.cop,
          },
          {
               title: "Максимальный потребляемый ток, А",
               value: currentModel.params?.vrf_outer?.max_energy_cons_a,
          },
          {
               title: "Рекомендуемый автомат, А",
               value: currentModel.params?.vrf_outer?.automat_a,
          },
          {
               title: "Расход воздуха, м³/ч",
               value: currentModel.params?.vrf_outer?.airflow,
          },
          {
               title: "Уровень звукового давления, дБ(А)",
               value: currentModel.params?.vrf_outer?.sound_pressure_level,
          },
          {
               title: "Уровень шума, дБ(A)",
               value: currentModel.params?.vrf_outer?.noise,
          },
          {
               title: "Тип компрессора",
               value: currentModel.params?.vrf_outer?.compressor_type,
          },
          {
               title: "Бренд компрессора",
               value: currentModel.params?.vrf_outer?.compressor_brand,
          },
          {
               title: "Количество компрессоров",
               value: currentModel.params?.vrf_outer?.compressor_quantity,
          },
          {
               title: "Количество вентиляторов",
               value: currentModel.params?.vrf_outer?.fan_quantity,
          },
          {
               title: "Тип хладагента",
               value: currentModel.params?.vrf_outer?.freon_type,
          },
          {
               title: "Заводская заправка хладагента, кг",
               value: currentModel.params?.vrf_outer?.freon_value,
          },
          {
               title: "Диаметр жидкостной трубы, мм (дюйм)",
               value: currentModel.params?.vrf_outer?.liquid_pipe_diam,
          },
          {
               title: "Диаметр газовой трубы, мм (дюйм)",
               value: currentModel.params?.vrf_outer?.gas_pipe_diam,
          },
          {
               title: "Рабочий диапазон наружных температур при охлаждении, °C",
               value: currentModel.params?.vrf_outer?.temp_cooling,
          },
          {
               title: "Рабочий диапазон наружных температур при нагреве, °C",
               value: currentModel.params?.vrf_outer?.temp_heating,
          },
          {
               title: "Размер (Ш×В×Г), мм",
               value: currentModel.params?.vrf_outer?.sizes,
          },
          {
               title: "Размер в упаковке (Ш×В×Г), мм",
               value: currentModel.params?.vrf_outer?.package_sizes,
          },
          {
               title: "Вес (нетто/брутто), кг",
               value: currentModel.params?.vrf_outer?.weight,
          },
          {
               title: "Максимальное количество подключаемых внутренних блоков",
               value: currentModel.params?.vrf_outer?.max_blocks,
          },
          {
               title: "Суммарная мощность подключаемых внутренних блоков, %",
               value: currentModel.params?.vrf_outer?.inner_blocks_power,
          },
          //

          {
               title: "Источник электропитания",
               value: currentModel.params?.heat_curtains?.power_supply,
          },
          {
               title: "Расход воздуха (m3/h)",
               value: currentModel.params?.heat_curtains?.airflow,
          },
          {
               title: "Скорость воздуха (m/s)",
               value: currentModel.params?.heat_curtains?.air_velocity,
          },
          {
               title: "Температура на выходе, °C max",
               value: currentModel.params?.heat_curtains?.temp_output,
          },
          {
               title: "Потребление кВт/ч",
               value: currentModel.params?.heat_curtains?.consumption,
          },
          {
               title: "Размер (Ш.В.Г), мм",
               value: currentModel.params?.heat_curtains?.size,
          },

          //
          {
               title: "Холодопроизводительность, кВт",
               value: currentModel.params?.centrifugal_chillers?.cooling_kw,
          },
          {
               title: "Теплопроизводительность, кВт",
               value: currentModel.params?.centrifugal_chillers?.heating_kw,
          },
          {
               title: "Электропитание, В/Гц/Ф",
               value: currentModel.params?.centrifugal_chillers?.powerSupply,
          },
          {
               title: "Номинальная потребляемая мощность (охлаждение), кВт",
               value: currentModel.params?.centrifugal_chillers?.cooling_power_cons_nom,
          },
          {
               title: "Номинальная потребляемая мощность (нагрев), кВт",
               value: currentModel.params?.centrifugal_chillers?.heating_power_cons_nom,
          },
          {
               title: "Коэффициент энергоэффективности EER",
               value: currentModel.params?.centrifugal_chillers?.eer,
          },
          {
               title: "COP, Вт/Вт",
               value: currentModel.params?.centrifugal_chillers?.cop,
          },
          {
               title: "IPLV, Вт/Вт",
               value: currentModel.params?.centrifugal_chillers?.iplv,
          },
          {
               title: "Мощность двигателя Кв.",
               value: currentModel.params?.centrifugal_chillers?.engine_power_kw,
          },
          {
               title: "Номинальный ток А",
               value: currentModel.params?.centrifugal_chillers?.nominal_voltage_a,
          },
          {
               title: "Пусковой ток, А",
               value: currentModel.params?.centrifugal_chillers?.inrush_current_a,
          },
          {
               title: "Максимальный рабочий ток А",
               value: currentModel.params?.centrifugal_chillers?.max_voltage_a,
          },
          {
               title: "Максимальный потребляемый ток, А",
               value: currentModel.params?.centrifugal_chillers?.max_cons_voltage_a,
          },
          {
               title: "Гидравлические параметры испарителя: тип",
               value: currentModel.params?.centrifugal_chillers?.hpe_type,
          },
          {
               title: "Гидравлические параметры испарителя: диаметр труб, мм",
               value: currentModel.params?.centrifugal_chillers?.hpe_pipe_diameter_mm,
          },
          {
               title: "Охлаждение: Гидравлические параметры испарителя: сопротивление, кПа",
               value: currentModel.params?.centrifugal_chillers?.cooling_hpe_res,
          },
          {
               title: "Охлаждение: Гидравлические параметры испарителя: расход воды, м³/ч",
               value: currentModel.params?.centrifugal_chillers?.cooling_hpe_water_cons,
          },
          {
               title: "Нагрев: Гидравлические параметры испарителя: сопротивление, кПа",
               value: currentModel.params?.centrifugal_chillers?.heating_hpe_res,
          },
          {
               title: "Нагрев: Гидравлические параметры испарителя: расход воды, м³/ч",
               value: currentModel.params?.centrifugal_chillers?.heating_hpe_water_cons,
          },
          {
               title: "Гидравлические параметры (конденсатор, кожухотрубный): диаметр труб, мм",
               value: currentModel.params?.centrifugal_chillers?.hp_htc_pipe_diam,
          },
          {
               title: "Охлаждение: Гидравлические параметры конденсатора: сопротивление, кПа",
               value: currentModel.params?.centrifugal_chillers?.cooling_hpc_res,
          },
          {
               title: "Охлаждение: Гидравлические параметры конденсатора: расход воды, м³/ч",
               value: currentModel.params?.centrifugal_chillers?.cooling_hpc_water_cons,
          },
          {
               title: "Нагрев: Гидравлические параметры конденсатора: сопротивление, кПа",
               value: currentModel.params?.centrifugal_chillers?.heating_hpc_res,
          },
          {
               title: "Нагрев: Гидравлические параметры конденсатора: расход воды, м³/ч",
               value: currentModel.params?.centrifugal_chillers?.heating_hpc_water_cons,
          },
          {
               title: "Тип компрессора",
               value: currentModel.params?.centrifugal_chillers?.compressor_type,
          },
          {
               title: "Уровень шума, дБ(A)",
               value: currentModel.params?.centrifugal_chillers?.noise,
          },
          {
               title: "Тип хладагента",
               value: currentModel.params?.centrifugal_chillers?.freon_type,
          },
          {
               title: "Заводская заправка хладагента, кг",
               value: currentModel.params?.centrifugal_chillers?.freon_value,
          },
          {
               title: "Размер (Ш×В×Г), мм",
               value: currentModel.params?.centrifugal_chillers?.size,
          },
          {
               title: "Вес (нетто/брутто), кг",
               value: currentModel.params?.centrifugal_chillers?.weight,
          },
          {
               title: "Операционный вес, кг",
               value: currentModel.params?.centrifugal_chillers?.operating_weight,
          },
          {
               title: "Вес нетто RHWE-HA, кг",
               value: currentModel.params?.centrifugal_chillers?.weight_rhwe_ha,
          },
          {
               title: "Вес нетто RHWE-HAB, кг",
               value: currentModel.params?.centrifugal_chillers?.weight_rhwe_hab,
          },
          {
               title: "Операционный вес, RHWE-HA, кг",
               value: currentModel.params?.centrifugal_chillers?.oper_weight_rhwe_ha,
          },
          {
               title: "Операционный вес, RHWE-HAB, кг",
               value: currentModel.params?.centrifugal_chillers?.oper_weight_rhwe_hab,
          },
     ];
     return (
          currentModel.variation && (
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
          )
     );
};

export default ProductModelParams;
