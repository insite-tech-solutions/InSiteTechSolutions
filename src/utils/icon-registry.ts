// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
import {
  Code,
  Layout,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Cpu,
  ArrowRight,
  Cog,
  Shield,
  Layers,
  TrendingUp,
  Settings,
  MonitorCog,
  Search,
  ClipboardList,
  Paintbrush,
  Rocket,
  Clock,
  Users,
  CodeXml,
  Headphones,
  HandCoins,
  Handshake,
  MessageCircle,
  TestTube,
  Server,
  ShoppingCart,
  Briefcase,
  Truck,
  Code2,
  CheckCircle,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

// Map of icon names to components
export const IconRegistry = {
  'Code': Code,
  'Layout': Layout,
  'Globe': Globe,
  'Smartphone': Smartphone,
  'Cloud': Cloud,
  'Bot': Bot,
  'Cpu': Cpu,
  'ArrowRight': ArrowRight,
  'Cog': Cog,
  'Shield': Shield,
  'Layers': Layers,
  'TrendingUp': TrendingUp,
  'Settings': Settings,
  'MonitorCog': MonitorCog,
  'Search': Search,
  'ClipboardList': ClipboardList,
  'Paintbrush': Paintbrush,
  'Rocket': Rocket,
  'Clock': Clock,
  'Users': Users,
  'CodeXml': CodeXml,
  'Headphones': Headphones,
  'HandCoins': HandCoins,
  'Handshake': Handshake,
  'MessageCircle': MessageCircle,
  'TestTube': TestTube,
  'Server': Server,
  'ShoppingCart': ShoppingCart,
  'Briefcase': Briefcase,
  'Truck': Truck,
  'Code2': Code2,
  'CheckCircle': CheckCircle,
  'ChevronUp': ChevronUp,
  'ChevronDown': ChevronDown
};

// Type for icon names
export type IconName = keyof typeof IconRegistry;

// Helper function to get an icon component from its name
export function getIcon(name: string) {
  return IconRegistry[name as IconName] || IconRegistry['Code'];
}
