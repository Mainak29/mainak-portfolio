import { motion } from "framer-motion";

const skills = [
  { name: "Java", projects: ["Microservices @ Amdocs", "Notification Model"], aiTag: "core" },
  { name: "Spring Boot", projects: ["Enterprise APIs", "Contract Lifecycle"], aiTag: "core" },
  { name: "Kafka", projects: ["Event-driven systems", "Notification Model"], aiTag: "core" },
  { name: "Python", projects: ["Scripting", "Automation"], aiTag: "proficient" },
  { name: "GenAI / LLMs", projects: ["AI-assisted SDLC", "This website"], aiTag: "passion" },
  { name: "Kubernetes / OpenShift", projects: ["Container orchestration"], aiTag: "proficient" },
  { name: "SQL / Couchbase", projects: ["Data persistence layer"], aiTag: "core" },
  { name: "REST APIs", projects: ["All enterprise projects"], aiTag: "core" },
  { name: "Microservices", projects: ["Distributed architecture"], aiTag: "core" },
  { name: "CursorAI / Antigravity", projects: ["AI-powered development"], aiTag: "passion" },
  { name: "Agile / Scrum", projects: ["Team workflows"], aiTag: "proficient" },
  { name: "Troubleshooting", projects: ["Kibana, Splunk, Camunda"], aiTag: "core" },
];

const tagColors: Record<string, string> = {
  core: "border-primary/50 text-signal",
  proficient: "border-border text-foreground/70",
  passion: "border-accent/50 text-magenta",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-signal mb-8">
          {">"} MAPPING competency_graph...
        </p>
        <h2 className="font-mono text-2xl font-semibold text-foreground mb-4">
          Technical Skills
        </h2>
        <p className="font-mono text-xs text-magenta mb-10">
          {"// rendering: skill_nodes. method: demonstrated_proficiency. no_arbitrary_percentages."}
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="group relative"
          >
            <div className={`font-mono text-sm px-4 py-2 border rounded-sm cursor-default transition-all duration-300 hover:glow-box ${tagColors[skill.aiTag]}`}>
              {skill.name}
            </div>
            <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block z-10 min-w-[220px]">
              <div className="bg-card border border-border rounded-sm p-3 shadow-lg">
                <p className="font-mono text-xs text-signal mb-1">
                  {"// "}cross_reference:
                </p>
                {skill.projects.map((p, i) => (
                  <p key={i} className="font-sans text-xs text-foreground/70">→ {p}</p>
                ))}
                <p className="font-mono text-xs text-magenta mt-2">
                  level: {skill.aiTag}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 p-4 border border-primary/20 rounded-sm bg-primary/5"
      >
        <p className="font-mono text-sm text-signal mb-2">
          🤖 AI & Vibe Coding
        </p>
        <p className="font-sans text-sm text-foreground/80 leading-relaxed">
          Microsoft Azure AI Fundamentals certified (AI-900). Proficient with AI tools like CursorAI and 
          Antigravity across the full SDLC. This entire portfolio was built through vibe coding — 
          a human-AI collaborative development process that demonstrates the future of software engineering.
        </p>
        <p className="font-mono text-xs text-magenta mt-3">
          {"// verification: azure_cert_id === '889D113EE334BFFA'. vibe_coding_mode: active."}
        </p>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
