import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-signal mb-8">
          {">"} ESTABLISHING connection_protocol...
        </p>
        <h2 className="font-mono text-2xl font-semibold text-foreground mb-4">
          Contact
        </h2>
        <p className="font-mono text-xs text-magenta mb-10">
          {"// directive: initiate_contact. probability_of_positive_outcome: high."}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="border border-border rounded-sm p-6 bg-card space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground w-20">EMAIL</span>
            <a href="mailto:dasguptaofficial29@gmail.com" className="font-mono text-sm text-signal hover:glow-green transition-all">
              dasguptaofficial29@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground w-20">PHONE</span>
            <span className="font-mono text-sm text-foreground/80">+91-7501403020</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground w-20">GITHUB</span>
            <a href="https://github.com/Mainak29" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-signal hover:glow-green transition-all">
              github.com/Mainak29
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground w-20">LINKEDIN</span>
            <a href="https://linkedin.com/in/mainakdasgupta/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-signal hover:glow-green transition-all">
              linkedin.com/in/mainakdasgupta
            </a>
          </div>
        </div>

        <div className="border border-border rounded-sm p-6 bg-card">
          <p className="font-mono text-sm text-foreground/80 mb-2">Education</p>
          <p className="font-sans text-sm text-foreground">B.Tech in Electronics & Communication Engineering</p>
          <p className="font-sans text-xs text-muted-foreground">Siliguri Institute of Technology, West Bengal — DGPA: 8.86 (2018–2022)</p>
        </div>

        <div className="border border-border rounded-sm p-6 bg-card">
          <p className="font-mono text-sm text-foreground/80 mb-2">Certifications</p>
          <div className="space-y-2">
            <p className="font-sans text-sm text-foreground">🏅 AI-900: Microsoft Azure AI Fundamentals <span className="text-muted-foreground text-xs">(2024)</span></p>
            <p className="font-sans text-sm text-foreground">🏅 Agile Project Management — Udemy Certified <span className="text-muted-foreground text-xs">(2024)</span></p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 pt-8 border-t border-border"
      >
        <p className="font-mono text-xs text-muted-foreground text-center">
          [SYSTEM] :: session_complete. vibe_coding_protocol: terminated.
        </p>
        <p className="font-mono text-xs text-magenta text-center mt-2">
          {"// built_with: human_intent + ai_execution. framework: lovable. year: 2026."}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-12 py-8 border-t border-border"
      >
        <p className="font-sans text-sm text-muted-foreground text-center italic leading-relaxed max-w-lg mx-auto">
          "Like any good system, neither this website nor my skills are static
          — both are under <span className="text-signal font-medium not-italic">continuous upgrade</span>."
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
