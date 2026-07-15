"use client";
import { useEffect, useRef } from "react";

/**
 * Full-viewport WebGL shader background — RGB-split sine waves in blue/navy
 * drifting over a warm off-white (#FAFAF9) field.
 *
 * The vertex and fragment shaders are copied verbatim from the reference
 * sketch (21st.dev "WebGL Shader", designali-in/web-gl-shader). The sketch
 * drives them through Three.js from a CDN; here the same fullscreen quad is
 * drawn with the raw WebGL API instead, so no dependency is added for a
 * single quad. If WebGL is unavailable the canvas stays transparent and the
 * page's #FAFAF9 fallback shows through. Honors prefers-reduced-motion by
 * rendering a single static frame.
 */

const VERTEX_SHADER = `
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float xScale;
uniform float yScale;
uniform float distortion;

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

    float d = length(p) * distortion;

    float rx = p.x * (1.0 + d);
    float gx = p.x;
    float bx = p.x * (1.0 - d);

    float r = 0.04 / abs(p.y + sin((rx + time) * xScale) * yScale);
    float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
    float b = 0.06 / abs(p.y + sin((bx + time) * xScale) * yScale);

    // Background color #FAFAF9
    vec3 bgColor = vec3(0.98, 0.98, 0.976);

    // Blue wave color #2563EB
    vec3 blueColor = vec3(0.145, 0.388, 0.922);
    // Navy accent #0F172A
    vec3 navyColor = vec3(0.059, 0.09, 0.165);

    float waveIntensity = clamp((r + g + b) * 0.4, 0.0, 1.0);

    // Mix between blue and navy based on position
    vec3 waveCol = mix(blueColor, navyColor, sin(p.x * 2.0 + time * 0.5) * 0.5 + 0.5);

    vec3 finalColor = mix(bgColor, waveCol, waveIntensity * 0.25);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function WebGLShader({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: true });
    if (!gl) return;

    const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // Fullscreen quad, same six vertices as the sketch.
    const positions = new Float32Array([
      -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0,
      1.0, 0.0, 1.0, 1.0, 0.0,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");
    gl.uniform1f(gl.getUniformLocation(program, "xScale"), 1.0);
    gl.uniform1f(gl.getUniformLocation(program, "yScale"), 0.5);
    gl.uniform1f(gl.getUniformLocation(program, "distortion"), 0.05);

    gl.clearColor(0.98, 0.98, 0.976, 1.0);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let time = 0;
    let frame = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const renderFrame = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    if (reduceMotion) {
      renderFrame();
    } else {
      const animate = () => {
        time += 0.008;
        renderFrame();
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
