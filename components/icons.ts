import {
  Baby,
  Briefcase,
  Church,
  HeartPulse,
  Home,
  School,
  Sprout,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/content";

export const ICONS: Record<IconName, LucideIcon> = {
  briefcase: Briefcase,
  "heart-pulse": HeartPulse,
  baby: Baby,
  home: Home,
  school: School,
  church: Church,
  sprout: Sprout,
  stethoscope: Stethoscope,
};
