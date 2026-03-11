"use client";

import { useEffect, useRef, useState } from "react";

const MIN_SHOW_MS = 400;
const MAX_SHOW_MS = 1200;

export function PageLoadSpinner() {
  const [visible, setVisible] = useState(true);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();
    let mounted = true;
    const hide = () => {
      if (!mounted) return;
      const elapsed = performance.now() - startRef.current;
      const remaining = Math.max(0, MIN_SHOW_MS - elapsed);
      setTimeout(() => {
        if (mounted) setVisible(false);
      }, remaining);
    };
    if (document.readyState === "complete") {
      hide();
      return () => { mounted = false; };
    }
    window.addEventListener("load", hide);
    const fallback = setTimeout(hide, MAX_SHOW_MS);
    return () => {
      mounted = false;
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--background)]"
      aria-hidden
    >
      <div
        className="relative h-8 w-8 rotate-45"
        role="presentation"
      >
        <div
          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-sm bg-[var(--secondary)] opacity-75"
          style={{ animation: "page-load-ping 1.2s ease-in-out infinite" }}
        />
        <div
          className="absolute right-0 top-0 h-3.5 w-3.5 rounded-sm bg-[var(--secondary)] opacity-75"
          style={{
            animation: "page-load-ping 1.2s ease-in-out infinite",
            animationDelay: "0.15s",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-sm bg-[var(--secondary)] opacity-75"
          style={{
            animation: "page-load-ping 1.2s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-3.5 w-3.5 rounded-sm bg-[var(--secondary)] opacity-75"
          style={{
            animation: "page-load-ping 1.2s ease-in-out infinite",
            animationDelay: "0.45s",
          }}
        />
      </div>
    </div>
  );
}
