"use client"

import { useProductContext } from "@/context/ProductContext";
import { ParamsOtherInterface } from "@/interfaces/products.interface";

interface Props {
     locale: string;
     productParams: ParamsOtherInterface
}

const ProductParams: React.FC<Props> = ({ locale, productParams }) => {
     const params = [
          {
               title: "Источник нагрева",
               value: productParams?.boilers?.heating_source
          },
          {
               title: "Рабочее давление газа",
               value: productParams?.boilers?.gas_pressure
          },
          {
               title: "Производительность макс./мин.",
               value: productParams?.boilers?.performance
          },
          {
               title: "КПД",
               value: productParams?.boilers?.kpd
          },
          {
               title: "Рабочий диапазон температур (отопление)",
               value: productParams?.boilers?.temp_range_heating
          },
          {
               title: "Рабочий диапазон температур (Горячая вода)",
               value: productParams?.boilers?.temp_range_heating_heatWater
          },
          {
               title: "Рабочее давление",
               value: productParams?.boilers?.working_pressure
          },
          {
               title: "Номинальное напряжение",
               value: productParams?.boilers?.nominal_voltage
          },
          {
               title: "Максимальная теплопроизводительность",
               value: productParams?.boilers?.max_heat_output
          },
          {
               title: "Диаметр подключения трубопровода (отопление)",
               value: productParams?.boilers?.pipe_diameter_heating
          },
          {
               title: "Диаметр подключения трубопровода (Горячая вода)",
               value: productParams?.boilers?.pipe_diameter_heat_water
          },
          {
               title: "Диаметр подключения газовой трубы",
               value: productParams?.boilers?.pipe_diameter
          },
          {
               title: "Габаритные размеры",
               value: productParams?.boilers?.size
          },
          {
               title: "Объем расширительного бака",
               value: productParams?.boilers?.expansion_tank_vol
          },
          {
               title: "Марка насоса",
               value: productParams?.boilers?.pump_brand
          },
          {
               title: "Марка газового клапана",
               value: productParams?.boilers?.gas_valve_brand
          },
          {
               title: "Горячая вода при t =25 C (литр/мин.)",
               value: productParams?.boilers?.heat_water_25
          },
          {
               title: "Горячая вода при t =30 C (литр/мин.)",
               value: productParams?.boilers?.heat_water_30
          },
          {
               title: "Максимальное/Минимальное давление газа",
               value: productParams?.boilers?.max_min_gas_pressure
          },
          {
               title: "Подача кислорода",
               value: productParams?.boilers?.oxygen_supply
          },
          {
               title: "Расход газа макс./мин. Nm3/h",
               value: productParams?.boilers?.gas_flowrate
          },
          {
               title: "Тип камеры сгорания",
               value: productParams?.boilers?.combustion_chamber
          },

          //

          {
               title: "Электропитание",
               value: productParams?.dehumids?.power_supply
          },
          {
               title: "Потребление",
               value: productParams?.dehumids?.consumption
          },
          {
               title: "Номинальный ток мощность",
               value: productParams?.dehumids?.nominal_power
          },
          {
               title: "Емкость",
               value: productParams?.dehumids?.capacity
          },
          {
               title: "Циркулируемый поток воздуха",
               value: productParams?.dehumids?.circ_air_flow
          },
          {
               title: "Хладагент",
               value: productParams?.dehumids?.freon
          },
          {
               title: "Размер",
               value: productParams?.dehumids?.size
          },
          {
               title: "Общий вес",
               value: productParams?.dehumids?.weight
          },
          {
               title: "Площадь применения",
               value: productParams?.dehumids?.m2
          },
          {
               title: "Производительность",
               value: productParams?.dehumids?.performance
          },
          {
               title: "Входная номинальная мощность",
               value: productParams?.dehumids?.input_nominal_power
          },
          {
               title: "Компрессор",
               value: productParams?.dehumids?.compressor
          },
          {
               title: "Воздушный фильтр",
               value: productParams?.dehumids?.air_filter
          },
          {
               title: "Рабочая температура",
               value: productParams?.dehumids?.working_temp
          },
          {
               title: "Дренаж",
               value: productParams?.dehumids?.drenage
          },

          //

          {
               title: "Номинальное напряжение",
               value: productParams?.humids?.nominal_power
          },
          {
               title: "Номинальная частота",
               value: productParams?.humids?.nominal_frequency
          },
          {
               title: "Номинальная мощность",
               value: productParams?.humids?.rated_power
          },
          {
               title: "Шум (низкая скорость)",
               value: productParams?.humids?.noise_min
          },
          {
               title: "Концентрация анионов",
               value: productParams?.humids?.anions
          },
          {
               title: "Объем удаления частиц",
               value: productParams?.humids?.particle_removal
          },
          {
               title: "Объем формальдегида",
               value: productParams?.humids?.formaldehyde
          },
          {
               title: "Площадь помещения",
               value: productParams?.humids?.m2
          },
          {
               title: "Предлагаемый период замены фильтров",
               value: productParams?.humids?.filter_replacement
          },
          {
               title: "Вес нетто",
               value: productParams?.humids?.weight
          },
          {
               title: "Размеры",
               value: productParams?.humids?.size
          },
          {
               title: "Емкость бака",
               value: productParams?.humids?.tank_capacity
          },
          {
               title: "Максимальный объем распыления",
               value: productParams?.humids?.max_spray_vol
          },
          {
               title: "Длина кабеля",
               value: productParams?.humids?.cable_length
          },
          {
               title: "Cкорость двигателя",
               value: productParams?.humids?.engine_speed
          },
          {
               title: "Cкорость воздуха",
               value: productParams?.humids?.airflow
          },
          {
               title: "Cтепень колебаний",
               value: productParams?.humids?.degree_oscil
          },
     ]

     return <ul className="grid grid-cols-1 justify-between mt-5 gap-5 md:gap-10 xs:grid-cols-2 md:mt-10 md:grid-cols-3 lg:grid-cols-4" id="productParams">
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
};

export default ProductParams;
