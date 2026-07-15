import { WebGLShader } from "@/components/ui/web-gl-shader";

/**
 * Fixed full-page background for the landing page.
 *
 * An animated WebGL shader (blue/navy RGB-split sine waves over a warm
 * off-white field, shaders verbatim from the reference sketch) fills the
 * viewport behind the content. A solid #FAFAF9 underlay covers loading,
 * overscroll, and no-WebGL fallback, and the #glass-distortion SVG filter is
 * kept verbatim from `@/components/ui/liquid-glass` for the glass panels.
 */
export function LandingBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: "#FAFAF9" }}
      />
      <WebGLShader className="fixed inset-0 -z-10 h-full w-full" />

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
