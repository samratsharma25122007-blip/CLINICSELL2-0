import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-700 shadow-lg ring-1 ring-slate-900/10 backdrop-blur-xl transition-all hover:scale-110 hover:bg-white"
    >
      <ChevronUp className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
