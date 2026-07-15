/**
 * Fixed full-page background for the landing page (light theme).
 *
 * A softly drifting silver / white / light-blue gradient replaces the original
 * dark photo. The `moveBackground` keyframe (from index.css) is reused, slowed
 * to 78s (30% slower than the original 60s). A static overlay adds light-blue
 * accents in a couple of areas only, and the #glass-distortion SVG filter is
 * kept verbatim from `@/components/ui/liquid-glass`.
 */
export function LandingBackground() {
  return (
    <>
      {/* Animated silver/white base with a light-blue band. The gradient is a
          vertical palindrome so the scrolling tile loops seamlessly. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "#eef3f8",
          backgroundImage:
            "linear-gradient(180deg, #eef3f8 0%, #ffffff 22%, #dbe7f5 50%, #ffffff 78%, #eef3f8 100%)",
          backgroundSize: "100% 40%",
          backgroundRepeat: "repeat",
          animation: "moveBackground 78s linear infinite",
        }}
      />
      {/* Light-blue accents in some areas only + a gentle silver vignette. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 85% 12%, rgba(186, 216, 245, 0.55) 0%, rgba(186, 216, 245, 0) 60%), radial-gradient(55% 50% at 10% 90%, rgba(203, 213, 225, 0.45) 0%, rgba(203, 213, 225, 0) 60%)",
        }}
      />

      {/* SVG filter copied verbatim from liquid-glass.tsx (GlassFilter). */}
      <svg style={{ display: "none" }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
}
