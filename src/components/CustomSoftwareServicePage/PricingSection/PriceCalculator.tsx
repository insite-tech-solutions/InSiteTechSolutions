"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Info, ExternalLink, Calculator, ArrowRight } from "lucide-react"

// Import service tables
import webAppDevelopmentTable from "@/content/calculator_tables/webAppDevelopment"
import customSoftwareSolutionsTable from "@/content/calculator_tables/customSoftwareSolutions"
import seoOnlineMarketingTable from "@/content/calculator_tables/seoOnlineMarketing"
import graphicDesignBrandingTable from "@/content/calculator_tables/graphicDesignBranding"
import dataAnalysisTable from "@/content/calculator_tables/dataAnalysis"
import aiAutomationTable from "@/content/calculator_tables/aiAutomation"
import consultingTrainingTable from "@/content/calculator_tables/consultingTraining"

// Type definitions
interface CostRange {
  min: number
  max: number
}

interface Multiplier {
  value: number
  description?: string
}

// Renamed from Option to avoid conflict and be more specific
interface CalculatorOption {
  name: string
  cost?: CostRange
  multiplier?: Multiplier
  description?: string
}

// Type for options in the 'extraServices' section or similar informational lists
interface ExtraServiceOption {
  name: string
  url?: string
}

// Type for a generic section within a service table
// It can have options structured as a Record or an array (for informational lists)
interface ServiceSection {
  title: string
  description?: string
  options: Record<string, CalculatorOption> | (string | ExtraServiceOption)[]
}

// Type for the metadata within a service table
interface ServiceMetadata {
  categories: Record<string, string[]>
  renderTypes: Record<string, string | Record<string, string>> // Can be string or nested object
  recurringCosts?: Record<string, string>
}

// The main interface for a service table object being imported
interface ServiceTable {
  name: string
  metadata: ServiceMetadata
  specialNotes?: string[]
  // Define sections dynamically based on string keys.
  // The value can be a ServiceSection, or other top-level properties like name, metadata, specialNotes.
  [key: string]: string | ServiceMetadata | string[] | ServiceSection | undefined
}

// Type for the map holding all service tables
type ServiceTablesMap = Record<string, ServiceTable>

interface CalculatorState {
  service: string
  selectedOptions: Record<string, string> // Values are option keys (strings)
  selectedMultiOptions: Record<string, string[]> // For checkboxes
}

interface RecurringCostItem {
  name: string
  period: string
  min: number
  max: number
}

// Type for a section entry tuple used when iterating over organized sections
// The value can be a ServiceSection or the specific structure for specialNotes/extraServices
type SectionEntryValue = ServiceSection | { description?: string; options?: (string | ExtraServiceOption)[] } | string[]
type SectionEntry = [string, SectionEntryValue]

// Type for the categorized sections object
type CategorizedSections = Record<string, SectionEntry[]>

const PriceCalculator: React.FC<{ fixedService?: string }> = ({ fixedService }) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    service: fixedService || "customSoftwareSolutions", // Use fixedService if provided, otherwise use default
    selectedOptions: {},
    selectedMultiOptions: {},
  })

  // Get the selected service table
  const serviceTable = useMemo(() => {
    const tables: ServiceTablesMap = {
      webAppDevelopment: webAppDevelopmentTable,
      customSoftwareSolutions: customSoftwareSolutionsTable,
      seoOnlineMarketing: seoOnlineMarketingTable,
      graphicDesignBranding: graphicDesignBrandingTable,
      dataAnalysis: dataAnalysisTable,
      aiAutomation: aiAutomationTable,
      consultingTraining: consultingTrainingTable,
    }
    return tables[calculatorState.service]
  }, [calculatorState.service])

  // Set default selections when service changes
  useEffect(() => {
    if (!serviceTable) return

    const defaultOptions: Record<string, string> = {}
    const defaultMultiOptions: Record<string, string[]> = {}

    // For tables with metadata
    if (serviceTable.metadata) {
      // Initialize multi-select sections as empty arrays
      Object.entries(serviceTable.metadata.renderTypes).forEach(([sectionKey, renderType]) => {
        if (renderType === "multi-checkbox") {
          defaultMultiOptions[sectionKey] = []
        }
      })
    }

    // Process each section to find default options
    Object.entries(serviceTable).forEach(([sectionKey, sectionValue]) => {
      // Skip non-object sections or special sections
      if (
        typeof sectionValue !== "object" ||
        sectionValue === null || // Add null check for safety
        Array.isArray(sectionValue) || // Skip arrays like specialNotes
        sectionKey === "name" ||
        sectionKey === "metadata"
      ) {
        return
      }

      // Assert sectionValue as a potential ServiceSection to access properties
      const section = sectionValue as Partial<ServiceSection>
      // Get render type if available
      const renderType = serviceTable.metadata?.renderTypes?.[sectionKey] || null

      // Handle sections with options property (structured as Record<string, CalculatorOption>)
      if (section.options && typeof section.options === "object" && !Array.isArray(section.options)) {
        // For dropdown sections
        if (renderType === "dropdown") {
          const options = Object.entries(section.options as Record<string, CalculatorOption>)
          if (options.length > 0) {
          // For featureImplementationType, default to "thirdParty"
          if (sectionKey === "featureImplementationType") {
            defaultOptions[sectionKey] = "thirdParty";
          } else {
            // Find base or standard option for other sections
            const defaultOption = options.find(
              ([key, opt]: [string, CalculatorOption]) =>
                key === "standard" ||
                key === "none" ||
                (opt.multiplier && opt.multiplier.value === 1.0) ||
                (opt.cost && opt.cost.min === 0 && opt.cost.max === 0) ||
                (opt.description && opt.description?.includes("Base")),
            );

            if (defaultOption) {
              defaultOptions[sectionKey] = defaultOption[0];
            } else {
              // Default to first option if no base found
              defaultOptions[sectionKey] = options[0][0];
            }
          }
        }
      }
    }
  });

    // Set default selections
    setCalculatorState((prev) => ({
      ...prev,
      selectedOptions: defaultOptions,
      selectedMultiOptions: defaultMultiOptions,
    }))
  }, [serviceTable])

  // const handleServiceChange = (value: string) => {
  //   // Reset the state when changing services
  //   setCalculatorState({
  //     service: value,
  //     selectedOptions: {},
  //     selectedMultiOptions: {},
  //   })
  // }

    // Skip service change handling if fixedService is set
    const handleServiceChange = (value: string) => {
      if (fixedService) return; // Prevent changing service if fixedService is provided
      
      // Reset the state when changing services
      setCalculatorState({
        service: value,
        selectedOptions: {},
        selectedMultiOptions: {},
      })
    }

  // Handler for dropdown selections
  const handleOptionChange = (section: string, value: string) => {
    setCalculatorState((prev) => ({
      ...prev,
      selectedOptions: {
        ...prev.selectedOptions,
        [section]: value,
      },
    }))
  }

  // Handler for multi-select checkboxes
  const handleMultiOptionToggle = (section: string, key: string) => {
    setCalculatorState((prev) => {
      const currentSelections = prev.selectedMultiOptions[section] || []
      const isSelected = currentSelections.includes(key)

      return {
        ...prev,
        selectedMultiOptions: {
          ...prev.selectedMultiOptions,
          [section]: isSelected ? currentSelections.filter((k) => k !== key) : [...currentSelections, key],
        },
      }
    })
  }

  // Calculate the one-time and recurring costs
// Calculate the one-time and recurring costs
const calculateCosts = () => {
  let oneTimeMin = 0;
  let oneTimeMax = 0;
  let multiplier = 1.0;
  const recurringCosts: RecurringCostItem[] = [];

  // Get features multiplier for webAppDevelopment
  let featuresMultiplier = 1.0;
  if (calculatorState.service === "webAppDevelopment") {
    const featureImplementationTypeKey = calculatorState.selectedOptions["featureImplementationType"];
    if (featureImplementationTypeKey) {
      const featureImplementationTypeSection = serviceTable["featureImplementationType"] as ServiceSection | undefined;
      
      if (
        featureImplementationTypeSection?.options && 
        typeof featureImplementationTypeSection.options === "object" && 
        !Array.isArray(featureImplementationTypeSection.options) && 
        featureImplementationTypeSection.options[featureImplementationTypeKey]?.multiplier
      ) {
        featuresMultiplier = (featureImplementationTypeSection.options[featureImplementationTypeKey] as CalculatorOption).multiplier?.value || 1.0;
      }
    }
  }

  // Process all selected options (dropdowns)
  Object.entries(calculatorState.selectedOptions).forEach(([sectionKey, value]) => {
    // Skip featureImplementationType as its multiplier is applied separately
    if (sectionKey === "featureImplementationType") return;
    
    const isRecurring = serviceTable.metadata?.recurringCosts?.[sectionKey];
    const section = serviceTable[sectionKey] as ServiceSection | undefined;

    if (
      section &&
      section.options &&
      typeof section.options === "object" &&
      !Array.isArray(section.options) &&
      section.options[value]
    ) {
      const option = section.options[value] as CalculatorOption;

      if (option.cost) {
        if (isRecurring) {
          recurringCosts.push({
            name: option.name,
            period: isRecurring,
            min: option.cost.min,
            max: option.cost.max,
          });
        } else {
          oneTimeMin += option.cost.min;
          oneTimeMax += option.cost.max;
        }
      }

      if (option.multiplier) {
        multiplier *= option.multiplier.value;
      }
    }
  });

  // Process multi-select options (features, addOns)
  Object.entries(calculatorState.selectedMultiOptions).forEach(([sectionKey, selectedKeys]) => {
    const isRecurring = serviceTable.metadata?.recurringCosts?.[sectionKey];
    const section = serviceTable[sectionKey] as ServiceSection | undefined;

    if (section && section.options && typeof section.options === "object" && !Array.isArray(section.options)) {
      const options = section.options as Record<string, CalculatorOption>;
      selectedKeys.forEach((key) => {
        if (options[key]) {
          const option = options[key];
          if (option.cost) {
            // Apply featuresMultiplier only to the "features" section and only for webAppDevelopment
            if (sectionKey === "features" && calculatorState.service === "webAppDevelopment") {
              if (isRecurring) {
                recurringCosts.push({
                  name: option.name,
                  period: isRecurring,
                  min: option.cost.min * featuresMultiplier,
                  max: option.cost.max * featuresMultiplier,
                });
              } else {
                oneTimeMin += option.cost.min * featuresMultiplier;
                oneTimeMax += option.cost.max * featuresMultiplier;
              }
            } else {
              if (isRecurring) {
                recurringCosts.push({
                  name: option.name,
                  period: isRecurring,
                  min: option.cost.min,
                  max: option.cost.max,
                });
              } else {
                oneTimeMin += option.cost.min;
                oneTimeMax += option.cost.max;
              }
            }
          }
        }
      });
    }
  });

  // Rest of the function remains the same...
  // ...

  // Apply multiplier to one-time costs
  const finalOneTimeMin = Math.round(oneTimeMin * multiplier);
  const finalOneTimeMax = Math.round(oneTimeMax * multiplier);

  return {
    oneTime: { min: finalOneTimeMin, max: finalOneTimeMax },
    recurring: recurringCosts,
    multiplier,
  }
}

  const costs = calculateCosts()

  // Get all sections and organize them by category
  const getOrganizedSections = () => {
    if (!serviceTable) return {}

    // If there's metadata with categories, use it
    if (serviceTable.metadata && serviceTable.metadata.categories) {
      const categories: CategorizedSections = {}

      // Initialize categories
      Object.keys(serviceTable.metadata.categories).forEach((category) => {
        categories[category] = []
      })

      // Populate categories with sections
      Object.entries(serviceTable.metadata.categories).forEach(([category, sectionKeys]) => {
        // Ensure sectionKeys is treated as an array of strings
        ;(sectionKeys as string[]).forEach((sectionKey: string) => {
          const sectionValue = serviceTable[sectionKey]
          if (sectionValue) {
            // Ensure the pushed value matches the SectionEntryValue type
            categories[category].push([sectionKey, sectionValue as SectionEntryValue])
          }
        })
      })

      return categories
    }

    // Fallback for tables without metadata
    const defaultCategories: CategorizedSections = {
      "Project Details": [],
      Features: [],
      "Support & Timeline": [],
      "Additional Options": [],
    }

    Object.entries(serviceTable)
      .filter(
        ([key, value]) =>
          typeof value === "object" &&
          key !== "name" &&
          key !== "metadata" &&
          key !== "specialNotes" &&
          key !== "extraServices",
      )
      .forEach(([key, value]) => {
        const sectionEntry: SectionEntry = [key, value as SectionEntryValue] // Create typed entry
        if (
          key === "projectType" ||
          key === "integrationsRequired" ||
          key === "platformSpecifics" ||
          key === "computingEnvironment" ||
          key === "developmentFocus" ||
          key === "programmingLanguages"
        ) {
          defaultCategories["Project Details"].push(sectionEntry)
        } else if (key === "features") {
          defaultCategories["Features"].push(sectionEntry)
        } else if (key === "timeline" || key === "documentation" || key === "ongoingMaintenance") {
          defaultCategories["Support & Timeline"].push(sectionEntry)
        } else {
          defaultCategories["Additional Options"].push(sectionEntry)
        }
      })

    return defaultCategories
  }

  // Determine how to render a section based on metadata or structure
  const getSectionRenderType = (sectionKey: string, subsectionKey?: string): string => {
    // If we have metadata with render types
    if (serviceTable.metadata && serviceTable.metadata.renderTypes) {
      const renderType = serviceTable.metadata.renderTypes[sectionKey]

      // If it's a nested structure with subsection render types
      if (subsectionKey && typeof renderType === "object") {
        return renderType[subsectionKey] || "dropdown"
      }

      // Otherwise use the section render type
      if (typeof renderType === "string") {
        return renderType
      }
    }

    // Fallback based on section key or structure
    if (sectionKey === "features" || sectionKey === "addOns") {
      return "multi-checkbox"
    }

    if (sectionKey === "timeline" || sectionKey === "maintenance") {
      return "dropdown"
    }

    if (sectionKey === "specialNotes" || sectionKey === "extraServices") {
      return "informational"
    }

    if (sectionKey === "featureImplementationType") {
      return "radio";
    }

    // Default to dropdown for structured sections
    return "dropdown"
  }

  // Helper function to render a dropdown
  const renderDropdown = (sectionKey: string, section: ServiceSection | undefined) => {
    // Ensure section and its options are valid and structured as expected for dropdowns
    if (!section || !section.options || typeof section.options !== "object" || Array.isArray(section.options))
      return null

    const options = section.options as Record<string, CalculatorOption> // Cast for safety
    const selectedKey = calculatorState.selectedOptions[sectionKey] || ""

    return (
      <div className="space-y-2 mb-6">
        <div className="flex items-center space-x-2">
          <Label className="text-gray-800 font-medium">{section.title}</Label>
          {section.description && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                  <Info className="h-4 w-4 text-medium-blue-alt hover:text-blue-700 transition-colors" />
                </Button>
              </PopoverTrigger>
              <PopoverContent side="top" className="w-auto max-w-xs bg-white text-gray-800 border border-blue-500 p-3 rounded-lg shadow-lg">
                <p>{section.description}</p>
              </PopoverContent>
            </Popover>
          )}
        </div>

        <Select value={selectedKey} onValueChange={(value) => handleOptionChange(sectionKey, value)}>
          <SelectTrigger className="w-full bg-white border-gray-200 text-gray-800 hover:border-gray-300 transition-colors">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200">
            {Object.entries(options).map(([key, option]: [string, CalculatorOption]) => (
              <SelectItem key={key} value={key} className="text-gray-800">
                {option.name}
                {option.cost && (
                  <span className="ml-1 text-gray-600">
                    (${option.cost.min.toLocaleString()}–${option.cost.max.toLocaleString()})
                  </span>
                )}
                {option.multiplier && <span className="ml-1 text-gray-600">({option.multiplier.value}x)</span>}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  // Helper function to render multi-select checkboxes
const renderMultiCheckbox = (sectionKey: string, section: ServiceSection | undefined) => {
  // Ensure section and its options are valid and structured as expected for checkboxes
  if (!section || !section.options || typeof section.options !== "object" || Array.isArray(section.options))
    return null;

  const options = section.options as Record<string, CalculatorOption>; // Cast for safety
  const selectedKeys = calculatorState.selectedMultiOptions[sectionKey] || [];

  // Get features multiplier for webAppDevelopment
  let featuresMultiplier = 1.0;
  if (sectionKey === "features" && calculatorState.service === "webAppDevelopment") {
    const featureImplementationTypeKey = calculatorState.selectedOptions["featureImplementationType"];
    if (featureImplementationTypeKey) {
      const featureImplementationTypeSection = serviceTable["featureImplementationType"] as ServiceSection | undefined;
      
      if (
        featureImplementationTypeSection?.options && 
        typeof featureImplementationTypeSection.options === "object" && 
        !Array.isArray(featureImplementationTypeSection.options) && 
        featureImplementationTypeSection.options[featureImplementationTypeKey]?.multiplier
      ) {
        featuresMultiplier = (featureImplementationTypeSection.options[featureImplementationTypeKey] as CalculatorOption).multiplier?.value || 1.0;
      }
    }
  }

  return (
    <div className="space-y-3 mb-6">
      <div className="flex items-center space-x-2">
        <Label className="text-gray-800 font-medium">{section.title}</Label>
        {section.description && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                <Info className="h-4 w-4 text-medium-blue-alt hover:text-blue-700 transition-colors" />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-auto max-w-xs bg-white text-gray-800 border border-blue-500 p-3 rounded-lg shadow-lg">
              <p className="whitespace-normal">{section.description}</p>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        {Object.entries(options).map(([key, option]: [string, CalculatorOption]) => {
          const isSelected = selectedKeys.includes(key);
          
          // Apply multiplier to costs if this is the features section in webAppDevelopment
          const displayCost = 
            option.cost && sectionKey === "features" && calculatorState.service === "webAppDevelopment"
              ? {
                  min: Math.round(option.cost.min * featuresMultiplier),
                  max: Math.round(option.cost.max * featuresMultiplier),
                }
              : option.cost;
          
          return (
            <div
              key={key}
              className={`flex items-start space-x-2 border rounded-lg p-3 ${isSelected ? "bg-blue-50 border-blue-400" : "bg-white border-gray-200"} hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer`}
              onClick={(e) => {
                // Prevent double-triggering if clicking the checkbox directly
                if (!(e.target as HTMLElement).closest("button")) {
                  handleMultiOptionToggle(sectionKey, key);
                }
              }}
            >
              <Checkbox
                id={`${sectionKey}_${key}`}
                checked={isSelected}
                onCheckedChange={() => handleMultiOptionToggle(sectionKey, key)}
                className="mt-1 h-5 w-5 border-gray-300 text-medium-blue-alt rounded"
              />
              <div className="flex-1">
                <Label htmlFor={`${sectionKey}_${key}`} className="font-medium text-gray-800 cursor-pointer">
                  {option.name}
                </Label>

                {displayCost && (
                  <div className="text-sm text-gray-600 mt-1">
                    ${displayCost.min.toLocaleString()}–${displayCost.max.toLocaleString()}
                    {sectionKey === "features" && calculatorState.service === "webAppDevelopment" && featuresMultiplier > 1 && (
                      <span className="ml-1 text-xs text-gray-500">
                        (includes {featuresMultiplier}x multiplier)
                      </span>
                    )}
                  </div>
                )}

                {option.description && <p className="text-xs text-gray-500 mt-1">{option.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

  // Helper function to render informational sections (like extraServices or specialNotes)
  const renderInformational = (sectionKey: string, sectionData: SectionEntryValue) => {
    // Type guard to check if it's the specialNotes string array
    if (Array.isArray(sectionData) && sectionData.every((item) => typeof item === "string")) {
      return (
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700">
            <span className="text-md font-semibold text-gray-800">Note:</span> {(sectionData as string[]).join(" ")}
          </p>
        </div>
      )
    }

    // Handle object structures (like extraServices or sections rendered as informational)
    if (typeof sectionData === "object" && sectionData !== null && !Array.isArray(sectionData)) {
      const section = sectionData as { title?: string; description?: string; options?: (string | ExtraServiceOption)[] } // More specific type assertion

      return (
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          {section.title && <h4 className="text-md font-semibold text-gray-800 mb-2">{section.title}</h4>}
          {section.description && <p className="text-sm text-gray-600 mb-3">{section.description}</p>}

          {section.options && Array.isArray(section.options) ? (
            <div className="space-y-3">
              {section.options.map((option: string | ExtraServiceOption, index: number) => {
                // Check if option is an object with url property
                if (typeof option === "object" && option.url) {
                  return (
                    <a
                      key={index}
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-medium-blue-alt hover:text-blue-800 flex items-center gap-2 transition-colors"
                    >
                      {option.name}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )
                }

                // Handle string options or simple name objects
                return (
                  <p key={index} className="text-gray-700">
                    {typeof option === "string" ? option : option.name}
                  </p>
                )
              })}
            </div>
          ) : null}
        </div>
      )
    }

    return null // Return null if sectionData format is unexpected
  }



// Helper function to render radio buttons
const renderRadio = (sectionKey: string, section: ServiceSection | undefined) => {
  // Ensure section and its options are valid and structured as expected
  if (!section || !section.options || typeof section.options !== "object" || Array.isArray(section.options))
    return null;

  const options = section.options as Record<string, CalculatorOption>; // Cast for safety
  const selectedKey = calculatorState.selectedOptions[sectionKey] || "";

  return (
    <div className="space-y-2 mb-6">
      <div className="flex items-center space-x-2">
        <Label className="text-gray-800 font-medium">{section.title}</Label>
        {section.description && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                <Info className="h-4 w-4 text-medium-blue-alt hover:text-blue-700 transition-colors" />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-auto max-w-xs bg-white text-gray-800 border border-blue-500 p-3 rounded-lg shadow-lg">
              <p>{section.description}</p>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {Object.entries(options).map(([key, option]: [string, CalculatorOption]) => (
          <div
            key={key}
            className={`flex items-center space-x-2 p-3 border rounded-lg ${
              selectedKey === key ? "bg-blue-50 border-blue-400" : "bg-white border-gray-200"
            } hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer`}
            onClick={() => handleOptionChange(sectionKey, key)}
          >
            <div className="h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center">
              {selectedKey === key && <div className="h-2 w-2 rounded-full bg-medium-blue-alt" />}
            </div>
            <Label className="font-medium text-gray-800 cursor-pointer flex-1">
              {option.name}
              {option.multiplier && <span className="ml-1 text-gray-600">({option.multiplier.value}x)</span>}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};


  // Render a section based on its type
  const renderSection = (sectionKey: string, section: SectionEntryValue) => {
    // Skip non-renderable types based on our logic
    if (typeof section !== "object" || section === null) {
      return null
    }

    // Handle specialNotes array case directly if needed here, or rely on renderInformational
    if (sectionKey === "specialNotes" && Array.isArray(section)) {
      return renderInformational(sectionKey, section)
    }

    // For object-based sections (ServiceSection or extraServices-like)
    if (!Array.isArray(section)) {
      const renderType = getSectionRenderType(sectionKey)

      // Render based on determined type
      switch (renderType) {
        case "dropdown":
          // Pass section directly, renderDropdown will handle type check
          return renderDropdown(sectionKey, section as ServiceSection)
        case "multi-checkbox":
          // Pass section directly, renderMultiCheckbox will handle type check
          return renderMultiCheckbox(sectionKey, section as ServiceSection)
        case "informational":
          // Pass section directly, renderInformational will handle type check
          return renderInformational(sectionKey, section)
        case "radio":
          return renderRadio(sectionKey, section as ServiceSection)
        default:
          console.warn(`Unknown render type "${renderType}" for section "${sectionKey}"`)
          return null
      }
    }

    return null // Fallback if type is not handled
  }

  const organizedSections = getOrganizedSections()

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-gray-700 text-sm leading-relaxed">
        <p>
          The interactive calculator below is not a formal quote and does not imply a commitment to accept any project. It&apos;s a helpful tool designed to provide transparency, set expectations, and give potential clients a general idea of their investment range. If you&apos;re unsure about your project or the estimated costs, feel free to reach out for a free consultation, as we will do our best to find a solution which meets your goals and budget. We offer various pricing models and payment options to best suit your needs.
        </p>
      </div>
      <Card className="m-10 w-full max-w-4xl mx-auto shadow-xl bg-white border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-medium-blue to-blue-800 text-white border-b-0 pb-6">
          <div className="flex items-center gap-3">
            <Calculator className="h-10 w-10" />
            <CardTitle className="text-2xl font-bold">Service Price Calculator</CardTitle>
          </div>
          <p className="text-blue-100 mt-2 text-sm">Configure your service options to get an instant price estimate</p>
        </CardHeader>

        <CardContent className="p-0">
          {/* Only show service selection if fixedService is not provided */}
          {!fixedService && (
            <div className="bg-gray-200 p-6 border border-gray-300">
              {/* Service Selection */}
              <div className="mb-0">
                <Label className="text-gray-800 font-medium mb-2 block">Select Service</Label>
                <Select value={calculatorState.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full bg-white border-gray-200 text-gray-800 hover:border-gray-300 transition-colors">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    <SelectItem value="webAppDevelopment" className="text-gray-800">
                      Web & App Development
                    </SelectItem>
                    <SelectItem value="customSoftwareSolutions" className="text-gray-800">
                      Custom Software Solutions
                    </SelectItem>
                    <SelectItem value="seoOnlineMarketing" className="text-gray-800">
                      SEO & Online Marketing
                    </SelectItem>
                    <SelectItem value="graphicDesignBranding" className="text-gray-800">
                      Graphic Design & Branding
                    </SelectItem>
                    <SelectItem value="dataAnalysis" className="text-gray-800">
                      Data Analysis
                    </SelectItem>
                    <SelectItem value="aiAutomation" className="text-gray-800">
                      AI & Automation
                    </SelectItem>
                    <SelectItem value="consultingTraining" className="text-gray-800">
                      Consulting & Training
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="p-6">
            {/* Render organized sections */}
            {Object.entries(organizedSections).map(
              ([categoryName, sections]) =>
                sections.length > 0 && (
                  <div key={categoryName} className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{categoryName}</h3>
                    </div>

                    <div className="space-y-4">
                      {sections.map(([sectionKey, section]: SectionEntry) => (
                        <div key={sectionKey}>{renderSection(sectionKey, section)}</div>
                      ))}
                    </div>

                    <Separator className="my-8 bg-gray-200" />
                  </div>
                ),
            )}

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-gray-900">Estimated Price Range</h2>
                <Badge className="bg-blue-100 text-dark-blue-alt hover:bg-blue-200 border-0">Based on your selections</Badge>
              </div>

              {/* One-time costs */}
              <div className="space-y-3 mb-4 mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-900">
                  <span className="font-medium font-semibold">Project Cost:</span>
                  <span className="font-bold text-lg">
                    ${costs.oneTime.min.toLocaleString()} – ${costs.oneTime.max.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Recurring costs */}
              {costs.recurring.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="mb-3 font-semibold text-gray-900">Other Costs:</h4>
                  <div className="space-y-2">
                    {costs.recurring.map((item, index) => (
                      <div key={index} className="flex justify-between text-gray-800">
                        <span>{item.name}:</span>
                        <span className="font-medium px-2">
                          ${item.min.toLocaleString()} – ${item.max.toLocaleString()} /{item.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-600 mt-6 italic">
                This is just an estimated price range. Contact us for a detailed estimate tailored to your specific needs.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            Ready to get started? Request a detailed estimate and free consultation.
          </p>
          <Button size="lg" className="px-8 bg-medium-blue-alt hover:bg-blue-700 text-white transition-colors w-full sm:w-auto">
            Request Detailed Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PriceCalculator
