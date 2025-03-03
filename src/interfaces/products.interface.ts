export interface Product {
     id: number;
     locale: string;
     description: string;
     mainDescription: string;
     name: string;
     price: number | null;
     slug: string;
     previewImage: {
          url: string;
     };
     images: {
          url: string;
     }[];
     brand: BrandInterface;
     categories: CategoryInterface[];
     variation: VariationInterface[];
     general_params: {
          id: number;
          title: string;
          icon: {
               url: string;
          };
     }[];
}
export interface BrandInterface {
     id: number;
     slug: string;
     title: string;
}
export interface CategoryInterface {
     id: number;
     slug: string;
     title: string;
}
export interface VariationInterface {
     id: number;
     price: number | null;
     price_wifi: number | null;
     value: string;
     variation: "Мощность" | "Модель" | "Длина";
     params: {
          id: number;
          airconds: AircondsParamsInterface | null;
          chillers: ChillersParamsInterface | null;
          vrf_outer: null;
          vrf_inner: null;
     };
}

export interface AircondsParamsInterface {
     cooling_btu: string | null;
     cooling_kw: string | null;
     heating_btu: string | null;
     heating_kw: string | null;
     energy_output: string | null;
     m2: string | null;
     m3: string | null;
     freon: string | null;
     size_inner: string | null;
     size_outer: string | null;
     airflow: string | null;
     noise_inner: string | null;
     noise_outer: string | null;
     temperature: string | null;
     route_length: string | null;
     route_diameter: string | null;
     weight_inner: string | null;
     weight_outer: string | null;
}
export interface ChillersParamsInterface {
     cooling_kw: string | null;
     heating_kw: string | null;
     powerSupply: string | null;
     cooling_power_cons_nom: string | null;
     heating_power_cons_nom: string | null;
     eer: string | null;
     cop: string | null;
     heat_energy_consumption_nom: string | null;
     max_energy_cons_kw: string | null;
     max_energy_cons_a: string | null;
     automat_a: string | null;
     inrush_current: string | null;
     water_consumption: string | null;
     hpe_type: string | null;
     hydraulic_resistance_kpa: string | null;
     hpe_water_consumption: string | null;
     hpe_pipe_diameter: string | null;
     hpe_resistance_kpa: string | null;
     hpe_water_value: string | null;
     hpe_pipe_diameter_mm: string | null;
     hpc_resistance_kpa: string | null;
     hpc_water_consumption: string | null;
     noise_power: string | null;
     sound_pressure_level: string | null;
     noise: string | null;
     compressor_type: string | null;
     compressor_quantity: string | null;
     compressor_brand: string | null;
     fan_type: string | null;
     heat_exchanger: string | null;
     expansion_valve: string | null;
     freon_type: string | null;
     freon_value: string | null;
     pipe_diameter: string | null;
     temp_cooling: string | null;
     temp_heating: string | null;
     temp_output_cooling: string | null;
     temp_output_heating: string | null;
     sizes: string | null;
     sizes_package: string | null;
     weight: string | null;
     remote: string | null;
     water_flow_range: string | null;
     e_eff_class_35: string | null;
}
