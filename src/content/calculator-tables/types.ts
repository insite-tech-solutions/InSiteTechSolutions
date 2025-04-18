// content/calculator_tables/types.ts

export interface CostRange {
    min: number;
    max: number;
  }
  
  export interface Multiplier {
    value: number;
    description?: string;
  }
  
  export interface FeatureOption {
    name: string;
    cost: CostRange;
    description?: string;
  }
  
  export interface SupportOption {
    name: string;
    cost: CostRange;
    description: string;
  }