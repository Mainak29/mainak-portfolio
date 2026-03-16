import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-[800px] mx-auto px-6 md:px-8 flex items-center justify-between h-14">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          mainak<span className="text-signal">::</span>portfolio
        </span>
        <div className="flex items-center gap-3">
          <a
            href="/Mainak_Resume_2026.pdf"
            download
            className="font-mono text-xs border border-border px-4 py-2 text-muted-foreground hover:text-signal hover:border-primary/40 transition-all rounded-sm flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
          <a
            href="mailto:dasguptaofficial29@gmail.com"
            className="font-mono text-xs border border-primary/40 px-4 py-2 text-signal hover:bg-primary/10 transition-all rounded-sm flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;
