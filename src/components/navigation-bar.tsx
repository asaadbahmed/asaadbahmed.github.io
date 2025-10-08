import { motion } from "framer-motion";
import { useLayoutEffect, useEffect, useRef, useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 });

  const measureHighlight = () => {
    const idx = tabs.findIndex((t) => t.id === activeTab);
    const el = tabRefs.current[idx];
    const containerRect = containerRef.current?.getBoundingClientRect();
    const textRect = el?.getBoundingClientRect();

    if (containerRect && textRect) {
      setHighlightStyle({
        width: textRect.width,
        left: textRect.left - containerRect.left,
      });
    }
  };

  useLayoutEffect(() => {
    measureHighlight();
  }, [activeTab]);

  useLayoutEffect(() => {
    requestAnimationFrame(measureHighlight);
  }, [activeTab]);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(measureHighlight);
    }
  }, [activeTab]);

  return (
    <div className="relative w-fit" ref={containerRef}>
      <motion.div
        layout
        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
        style={{
          width: highlightStyle.width,
          left: highlightStyle.left,
        }}
        className="
          absolute 
          -top-1.5
          h-2
          bg-black 
          rounded-t-sm
          z-0
        "
      />

      <div
        className="
           relative z-10 flex flex-row 
    rounded-full p-2 gap-4
    bg-white/10 backdrop-blur-sm 
    border-2 border-[rgb(247,247,249)] 
    shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]
        "
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? "text-black"
                : "text-muted-foreground hover:text-black"
            } relative rounded-full px-4 py-1.5 text-sm font-medium transition`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {/* 🌫️ Glass effect only for active tab */}
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="
                   absolute inset-0 z-0 
    bg-neutral-100/80 backdrop-blur-sm 
    border border-white/20 
    rounded-full
                "
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            <span
              ref={(el: HTMLSpanElement | null) => {
                tabRefs.current[i] = el;
              }}
              className="relative z-10"
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
