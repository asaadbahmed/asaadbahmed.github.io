import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
export type IconProps = React.HTMLAttributes<SVGElement>;

const tabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 });
  const [contactHovered, setContactHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);

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
        layout="position"
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

      <motion.div
        onMouseLeave={() => setContactHovered(false)}
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
            onMouseEnter={() => setContactHovered(tab.label === "Contact")}
            className={`${
              activeTab === tab.id
                ? "text-black"
                : "text-muted-foreground hover:text-black"
            } relative rounded-full px-4 py-1.5 text-sm font-medium transition`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
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

        {contactHovered && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", damping: 10 }}
              className="flex items-center justify-center gap-x-1 h-8"
            >
              <Separator orientation="vertical" className="h-4" />
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full"
                onClick={() =>
                  window.open("mailto:asaadbinahmed@gmail.com", "_self")
                }
              >
                <Mail className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full"
                onClick={() => window.open("https://github.com/asaadbahmed")}
              >
                <Github className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full"
                onClick={() => window.open("https://linkedin.com/in/...")}
              >
                <Linkedin className="w-3 h-3" />
              </Button>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
