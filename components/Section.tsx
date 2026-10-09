import React from "react";

type SectionVariant = "default" | "alternate" | "primary" | "secondary" | "mint";

interface SectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  id?: string;
  className?: string;
  containerClassName?: string;
  paddingSize?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centered?: boolean;
  as?: React.ElementType;
}

const paddingMap: Record<NonNullable<SectionProps["paddingSize"]>, string> = {
  sm: "py-8 px-4 sm:px-6",
  md: "py-12 px-4 sm:px-6 lg:px-8",
  lg: "py-16 px-4 sm:px-6 lg:px-8",
  xl: "py-24 px-4 sm:px-6 lg:px-8",
};

const maxWidthMap: Record<NonNullable<SectionProps["maxWidth"]>, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

const variantMap: Record<SectionVariant, string> = {
  default: "bg-background text-foreground",
  alternate: "bg-[#EAE2D6] text-foreground",
  primary: "bg-primary text-background",
  secondary: "bg-secondary text-background",
  mint: "bg-mint text-foreground",
};

const Section: React.FC<SectionProps> = ({
  children,
  variant = "default",
  id,
  className = "",
  containerClassName = "",
  paddingSize = "lg",
  maxWidth = "xl",
  centered = false,
  as: Tag = "section",
}) => {
  const sectionClasses = [
    "w-full",
    variantMap[variant],
    paddingMap[paddingSize],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClasses = [
    "mx-auto w-full",
    maxWidthMap[maxWidth],
    centered ? "text-center" : "",
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={sectionClasses}>
      <div className={containerClasses}>{children}</div>
    </Tag>
  );
};

export default Section;