import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  variant?: "service" | "testimonial" | "blog";
  author?: string;
  authorRole?: string;
  authorImage?: string;
  date?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt = "Card image",
  tag,
  ctaLabel,
  onCtaClick,
  variant = "service",
  author,
  authorRole,
  authorImage,
  date,
}) => {
  const isTestimonial = variant === "testimonial";
  const isBlog = variant === "blog";

  return (
    <div
      className="group relative flex flex-col bg-background rounded-[0.375rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E0D6C8]"
    >
      {/* Image area (blog or service with image) */}
      {imageSrc && !isTestimonial && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {tag && (
            <span className="absolute top-3 left-3 bg-secondary text-background text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-[0.375rem]">
              {tag}
            </span>
          )}
        </div>
      )}

      {/* Card Body */}
      <div className={`flex flex-col flex-1 p-6 ${isTestimonial ? "pt-8" : ""}`}>
        {/* Icon for service cards */}
        {Icon && !isTestimonial && !isBlog && (
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-[0.375rem] bg-secondary/10 text-secondary">
            <Icon size={24} strokeWidth={1.75} />
          </div>
        )}

        {/* Tag for service variant (no image) */}
        {tag && !imageSrc && !isTestimonial && (
          <span className="mb-3 inline-block text-secondary text-xs font-body font-semibold uppercase tracking-widest">
            {tag}
          </span>
        )}

        {/* Testimonial quote mark */}
        {isTestimonial && (
          <div className="mb-4 text-accent text-5xl font-heading leading-none select-none">
            &ldquo;
          </div>
        )}

        {/* Date for blog */}
        {isBlog && date && (
          <p className="text-sm font-body text-secondary mb-2 tracking-wide">{date}</p>
        )}

        {/* Title */}
        {!isTestimonial && (
          <h3 className="font-heading text-primary text-xl font-semibold mb-3 leading-snug">
            {title}
          </h3>
        )}

        {/* Description / Quote */}
        <p
          className={`font-body text-foreground leading-relaxed flex-1 ${
            isTestimonial ? "text-base italic text-foreground/80" : "text-sm"
          }`}
        >
          {description}
        </p>

        {/* Testimonial author */}
        {isTestimonial && (
          <div className="mt-6 flex items-center gap-3">
            {authorImage ? (
              <img
                src={authorImage}
                alt={author ?? "Author"}
                className="w-10 h-10 rounded-full object-cover border-2 border-accent"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-heading font-bold text-lg">
                {author ? author.charAt(0) : "?"}
              </div>
            )}
            <div>
              <p className="font-heading text-primary text-sm font-semibold leading-tight">
                {author}
              </p>
              {authorRole && (
                <p className="font-body text-foreground/60 text-xs">{authorRole}</p>
              )}
            </div>
          </div>
        )}

        {/* Decorative accent line */}
        {!isTestimonial && (
          <div className="mt-5 mb-5 w-10 h-[2px] bg-accent rounded-full" />
        )}

        {/* CTA Button */}
        {ctaLabel && !isTestimonial && (
          <button
            onClick={onCtaClick}
            className="mt-auto self-start bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-[0.375rem] shadow-md hover:brightness-95 active:scale-95 transition-all duration-200"
          >
            {ctaLabel}
          </button>
        )}
      </div>

      {/* Bottom accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-accent via-secondary to-primary opacity-70" />
    </div>
  );
};

export default Card;