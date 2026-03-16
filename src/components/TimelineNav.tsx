import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "init", label: "INIT" },
  { id: "experience", label: "EXP" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJ" },
  { id: "contact", label: "LINK" },
];

const TimelineNav = () => {
  const [active, setActive] = useState("init");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1"
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 w-px bg-border" />
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="relative z-10 flex items-center gap-3 py-3 group"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === id 
                ? "bg-primary scale-125 shadow-[0_0_8px_hsl(145_100%_60%/0.6)]" 
                : "bg-muted group-hover:bg-muted-foreground"
            }`} />
            <span className={`font-mono text-[10px] tracking-widest transition-all duration-300 ${
              active === id 
                ? "text-signal glow-green" 
                : "text-muted-foreground group-hover:text-foreground"
            }`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default TimelineNav;
