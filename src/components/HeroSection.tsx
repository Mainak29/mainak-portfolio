import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ text, delay = 0, speed = 40, className = "", onComplete }: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      onComplete?.();
    }
  }, [started, displayed, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="cursor-blink">&nbsp;</span>
      )}
    </span>
  );
};

const apiEndpoints = [
  { method: "GET", path: "/api/mainak/profile", status: 200, section: "init" },
  { method: "GET", path: "/api/mainak/professional-exp", status: 200, section: "experience" },
  { method: "GET", path: "/api/mainak/skills", status: 200, section: "skills" },
  { method: "GET", path: "/api/mainak/projects", status: 200, section: "projects" },
  { method: "GET", path: "/api/mainak/contact", status: 200, section: "contact" },
];

const ApiCallsVisualization = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < apiEndpoints.length) {
      const timer = setTimeout(() => setVisibleCount((c) => c + 1), 400);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-mono text-xs space-y-1.5 mt-6">
      <p className="text-muted-foreground mb-3">
        {">"} Fetching resources from <span className="text-signal">mainakdasgupta.dev</span>...
      </p>
      <div
        className="border border-border rounded-sm overflow-hidden bg-card/50"
        style={{ perspective: "800px" }}
      >
        {apiEndpoints.map((ep, i) => (
          <motion.div
            key={ep.path}
            initial={{ opacity: 0, rotateX: -30, y: -10 }}
            animate={
              i < visibleCount
                ? { opacity: 1, rotateX: 0, y: 0 }
                : { opacity: 0, rotateX: -30, y: -10 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => scrollTo(ep.section)}
            className="flex items-center gap-3 px-4 py-2 border-b border-border last:border-b-0 cursor-pointer hover:bg-primary/5 transition-colors group"
            style={{ transformOrigin: "top center" }}
          >
            <span className="text-signal font-bold text-[11px] w-8">{ep.method}</span>
            <span className="text-foreground/80 flex-1 group-hover:text-signal transition-colors">
              {ep.path}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={i < visibleCount ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-signal px-1.5 py-0.5 rounded bg-primary/10 text-[10px]"
            >
              {ep.status} OK
            </motion.span>
          </motion.div>
        ))}
      </div>
      {visibleCount >= apiEndpoints.length && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-2"
        >
          {">"} All endpoints responded. Rendering profile...{" "}
          <span className="text-signal">✓</span>
        </motion.p>
      )}
    </div>
  );
};

const HeroSection = () => {
  const [phase, setPhase] = useState(0);

  // Reliable phase progression with timers
  useEffect(() => {
    if (phase === 1) {
      const t = setTimeout(() => setPhase(2), 900);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <section id="init" className="min-h-screen flex flex-col justify-center py-20">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-mono text-sm text-signal glow-green mb-8">
            <TypewriterText
              text="[SYSTEM] :: VIBE CODING PROTOCOL INITIALIZED..."
              speed={30}
              onComplete={() => setTimeout(() => setPhase(1), 400)}
            />
          </p>
        </motion.div>

        {phase >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mainak Dasgupta
            </h1>
            <p className="font-mono text-lg md:text-xl text-signal mt-2">
              Software Engineer
            </p>
          </motion.div>
        )}

        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Curious problem-solver with 3.5+ years building scalable microservices, 
              distributed systems, and AI-powered solutions. Passionate about clean architecture 
              and the future of human-machine collaboration.
            </p>

            <ApiCallsVisualization />

            <div className="font-mono text-xs text-magenta pt-4 space-y-1">
              <p>{"// ai_analysis: profile_loaded. competency_map: generated."}</p>
              <p>{"// note: this_entire_site === vibe_coded. confidence: 100%"}</p>
            </div>
          </motion.div>
        )}

        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="mailto:dasguptaofficial29@gmail.com"
              className="font-mono text-sm border border-primary/40 px-5 py-2.5 text-signal hover:bg-primary/10 transition-all rounded-sm"
            >
              initiate_contact()
            </a>
            <a
              href="https://github.com/Mainak29"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-border px-5 py-2.5 text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all rounded-sm"
            >
              github.explore()
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
