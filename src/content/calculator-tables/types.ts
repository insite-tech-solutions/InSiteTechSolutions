/**
 * Shared type definitions for pricing calculator configuration tables.
 * Includes reusable interfaces for cost ranges, feature options, and support options.
 */

/**
 * Represents a range of costs with minimum and maximum values.
 * 
 * @interface CostRange
 * @property {number} min - The minimum cost value.
 * @property {number} max - The maximum cost value.
 */
export interface CostRange {
    min: number;
    max: number;
  }
  
/**
 * Represents a multiplier with an optional description.
 * 
 * @interface Multiplier
 * @property {number} value - The multiplier value.
 * @property {string} [description] - An optional description of the multiplier.
 */
  export interface Multiplier {
    value: number;
    description?: string;
  }
  
/**
 * Represents an option for a feature with associated cost and optional description.
 * 
 * @interface FeatureOption
 * @property {string} name - The name of the feature option.
 * @property {CostRange} cost - The cost range for the feature option.
 * @property {string} [description] - An optional description of the feature option.
 */
  export interface FeatureOption {
    name: string;
    cost: CostRange;
    description?: string;
  }
  
/**
 * Represents an option for support with associated cost and optional description.
 * 
 * @interface SupportOption
 * @property {string} name - The name of the support option.
 * @property {CostRange} cost - The cost range for the support option.
 * @property {string} [description] - An optional description of the support option.
 */
  export interface SupportOption {
    name: string;
    cost: CostRange;
    description?: string;
  }