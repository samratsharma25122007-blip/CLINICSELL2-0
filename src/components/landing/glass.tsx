import React from "react";
import { cn } from "@/lib/utils";

/**
 * Landing-page glass primitives (light theme).
 *
 * These reproduce the layered "liquid glass" technique from
 * `@/components/ui/liquid-glass` (backdrop blur + distortion filter + tint +
 * inner specular highlight) without modifying that file. They rely on the
 * same `#glass-distortion` SVG filter, rendered once by <LandingBackground />.
 *
 * Tuned for a light silver/white background: frosted-white panels with a soft
 * bluish shadow and dark slate content.
 */

/** Soft, cool drop shadow that reads on a light background. */
const LIGHT_PANEL_SHADOW =
  "0 10px 30px rgba(30, 41, 59, 0.10), 0 2px 8px rgba(30, 41, 59, 0.06)";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Route the backdrop through the #glass-distortion SVG filter (heavier). */
  distort?: boolean;
  /** Tailwind classes for the tint layer. */
  tint?: string;
  contentClassName?: string;
}

export function GlassPanel({
  children,
  className,
  contentClassName,
  distort = false,
  tint = "bg-white/55",
  style,
  ...rest
}: GlassPanelProps) {
  return (
    <div
      className={cn("relative overflow-hidden ring-1 ring-slate-900/5", className)}
      style={{
        boxShadow: LIGHT_PANEL_SHADOW,
        ...style,
      }}
      {...rest}
    >
      <div
        className="absolute inset-0 z-0"
        style={
          distort
            ? {
                backdropFilter: "blur(3px)",
                filter: "url(#glass-distortion)",
                isolation: "isolate",
              }
            : { backdropFilter: "blur(16px)" }
        }
      />
      <div className={cn("absolute inset-0 z-10", tint)} />
      <div
        className="absolute inset-0 z-20"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.7), inset -1px -1px 1px 1px rgba(148, 163, 184, 0.12)",
        }}
      />
      <div className={cn("relative z-30", contentClassName)}>{children}</div>
    </div>
  );
}

type GlassCTAVariant = "primary" | "secondary";

interface GlassCTABaseProps {
  variant?: GlassCTAVariant;
  distort?: boolean;
  className?: string;
  children: React.ReactNode;
}

type GlassCTAProps = GlassCTABaseProps &
  (
    | ({ href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "className" | "children"
      >)
    | ({ href?: undefined } & Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
      >)
  );

const ctaTints: Record<GlassCTAVariant, string> = {
  primary: "bg-teal-600/85",
  secondary: "bg-white/60",
};

const ctaText: Record<GlassCTAVariant, string> = {
  primary: "text-white",
  secondary: "text-slate-800",
};

export function GlassCTA({
  variant = "primary",
  distort = true,
  className,
  children,
  ...rest
}: GlassCTAProps) {
  const inner = (
    <>
      <div
        className="absolute inset-0 z-0"
        style={
          distort
            ? {
                backdropFilter: "blur(3px)",
                filter: "url(#glass-distortion)",
                isolation: "isolate",
              }
            : { backdropFilter: "blur(12px)" }
        }
      />
      <div className={cn("absolute inset-0 z-10", ctaTints[variant])} />
      <div
        className="absolute inset-0 z-20"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)",
        }}
      />
      <span className="relative z-30 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  const baseClasses = cn(
    "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    ctaText[variant],
    className,
  );
  const baseStyle: React.CSSProperties = {
    boxShadow: LIGHT_PANEL_SHADOW,
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.4)",
  };

  if (rest.href !== undefined) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={baseClasses} style={baseStyle} {...anchorProps}>
        {inner}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={baseClasses} style={baseStyle} {...buttonProps}>
      {inner}
    </button>
  );
}

/** Small frosted chip used for badges and floating labels. */
export function GlassChip({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <GlassPanel
      className={cn("rounded-full", className)}
      contentClassName={cn(
        "flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700",
        contentClassName,
      )}
      tint="bg-white/60"
    >
      {children}
    </GlassPanel>
  );
}

/** Shared heading block for landing sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
