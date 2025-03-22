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
     params_other: ParamsOtherInterface;
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
          vrf_outer: VrfOuterParamsInterface;
          vrf_inner: null;
          heat_curtains: HeatCurtainsParamsInterface;
     };
}

export interface ParamsOtherInterface {
     id: number
     humids: HumidsParamsInterface;
     dehumids: DehumidsParamsInterface;
     boilers: BoilersParamsInterface;
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
export interface VrfOuterParamsInterface {
     type: string | null;
     fan_motor_type: string | null;
     cooling_kw: string | null;
     heating_kw: string | null;
     powerSupply: string | null;
     esp: string | null;
     cooling_power_cons_nom: string | null;
     eer: string | null;
     heating_power_cons_nom: string | null;
     cop: string | null;
     max_energy_cons_a: string | null;
     automat_a: string | null;
     airflow: string | null;
     sound_pressure_level: string | null;
     noise: string | null;
     compressor_type: string | null;
     compressor_brand: string | null;
     compressor_quantity: string | null;
     fan_quantity: string | null;
     freon_type: string | null;
     freon_value: string | null;
     liquid_pipe_diam: string | null;
     gas_pipe_diam: string | null;
     temp_cooling: string | null;
     temp_heating: string | null;
     sizes: string | null;
     package_sizes: string | null;
     weight: string | null;
     max_blocks: string | null;
     inner_blocks_power: string | null;
}
export interface HeatCurtainsParamsInterface {
     power_supply: string | null;
     airflow: string | null;
     air_velocity: string | null;
     temp_output: string | null;
     consumption: string | null;
     size: string | null;
}
export interface BoilersParamsInterface {
     heating_source: string | null;
     gas_pressure: string | null;
     performance: string | null;
     kpd: string | null;
     temp_range_heating: string | null;
     temp_range_heating_heatWater: string | null;
     working_pressure: string | null;
     nominal_voltage: string | null;
     max_heat_output: string | null;
     pipe_diameter_heating: string | null;
     pipe_diameter_heat_water: string | null;
     pipe_diameter: string | null;
     size: string | null;
     expansion_tank_vol: string | null;
     pump_brand: string | null;
     gas_valve_brand: string | null;
     heat_water_25: string | null;
     heat_water_30: string | null;
     max_min_gas_pressure: string | null;
     oxygen_supply: string | null;
     gas_flowrate: string | null;
     combustion_chamber: string | null;
}
export interface HumidsParamsInterface {
     nominal_power: string | null;
     nominal_frequency: string | null;
     rated_power: string | null;
     noise_min: string | null;
     anions: string | null;
     particle_removal: string | null;
     formaldehyde: string | null;
     m2: string | null;
     filter_replacement: string | null;
     weight: string | null;
     size: string | null;
     tank_capacity: string | null;
     max_spray_vol: string | null;
     cable_length: string | null;
     engine_speed: string | null;
     airflow: string | null;
     degree_oscil: string | null;
}
export interface DehumidsParamsInterface {
     power_supply: string | null;
     consumption: string | null;
     nominal_power: string | null;
     capacity: string | null;
     circ_air_flow: string | null;
     freon: string | null;
     size: string | null;
     weight: string | null;
     m2: string | null;
     performance: string | null;
     input_nominal_power: string | null;
     compressor: string | null;
     air_filter: string | null;
     working_temp: string | null;
     drenage: string | null;
}