import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-fit" ref={containerRef}>
      <motion.div
        className={`
    relative z-10 flex flex-row 
    rounded-full p-2 gap-4
    border-2 border-[rgb(247,247,249)]
    backdrop-blur-sm
    ${scrolled ? "bg-white" : "bg-white sm:bg-white/10"}
  `}
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

            <motion.div className="flex flex-row justify-center items-center gap-2">
              <span
                ref={(el: HTMLSpanElement | null) => {
                  tabRefs.current[i] = el;
                }}
                className="relative z-10"
              >
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="h-1 w-1 rounded-full bg-rose-500 z-50" />
              )}
            </motion.div>
          </button>
        ))}

        {
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 10 }}
            className="hidden sm:flex items-center justify-center gap-x-1 h-8"
          >
            <Separator orientation="vertical" className="h-4" />
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full"
              onClick={() =>
                window.open("mailto:asaadbinahmed@gmail.com", "_self")
              }
            >
              <Mail className="w-4 h-4" color="gray" />
            </Button>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full"
              onClick={() => window.open("https://github.com/asaadbahmed")}
            >
              <Github className="w-4 h-4" color="gray" />
            </Button>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full"
              onClick={() => window.open("https://linkedin.com/in/...")}
            >
              <Linkedin className="w-4 h-4" color="gray" />
            </Button>
          </motion.div>
        }
      </motion.div>
    </div>
  );
}
