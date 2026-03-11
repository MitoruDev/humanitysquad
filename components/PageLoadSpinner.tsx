"use client";

import { useEffect, useState } from "react";

export function PageLoadSpinner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    const onLoad = () => {
      // Minimum display so the spinner is visible briefly
      const elapsed = performance.now();
      const minShow = 600;
      const remaining = Math.max(0, minShow - elapsed);
      setTimeout(hide, remaining);
    };
    if (document.readyState === "complete") {
      onLoad();
      return;
    }
    window.addEventListener("load", onLoad);
    const t = setTimeout(onLoad, 2500);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
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
