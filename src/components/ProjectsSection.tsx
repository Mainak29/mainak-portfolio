import { motion } from "framer-motion";

const projects = [
  {
    title: "Notification Model for CRUD Events",
    year: "2024",
    tech: ["Kafka", "Apache ZooKeeper", "SQL", "Java", "REST APIs"],
    description: "Event-driven notification system that triggers alerts on any CRUD operation within the system, built with Kafka for reliable message streaming.",
    aiComment: "// architecture_pattern: event_sourcing. scalability: high. kafka_partitions: optimized.",
  },
  {
    title: "Autonomous Solar Tracking System",
    year: "2021",
    tech: ["Arduino", "Sensor-Actuator Tech", "Embedded C"],
    description: "Hardware project implementing real-time solar tracking using light-dependent resistors and servo actuators for maximum energy harvesting efficiency.",
    aiComment: "// domain: renewable_energy. hardware_software_integration: true. innovation_score: notable.",
  },
  {
    title: "Google Assistant Door Lock & Home Automation",
    year: "2019",
    tech: ["IoT", "Google Assistant API", "Microcontrollers"],
    description: "Voice-controlled home automation system integrating Google Assistant with IoT devices for secure door locking and smart home controls.",
    aiComment: "// early_ai_interest: confirmed. iot_proficiency: demonstrated.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-signal mb-8">
          {">"} QUERYING project_registry...
        </p>
        <h2 className="font-mono text-2xl font-semibold text-foreground mb-12">
          Projects
        </h2>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="border border-border rounded-sm p-6 hover:border-primary/30 hover:glow-box transition-all duration-500 bg-card"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="font-mono text-lg font-medium text-foreground">{project.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>

            <p className="font-sans text-sm text-foreground/75 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-2 py-1 bg-secondary rounded-sm text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <p className="font-mono text-xs text-magenta">{project.aiComment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
