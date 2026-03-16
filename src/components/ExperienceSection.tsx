import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "Amdocs",
    type: "Full-time",
    period: "July 2022 — Present",
    description: [
      "Developed and maintained multiple microservices using Java, Spring Boot, REST APIs, Kafka, and Couchbase.",
      "Proficient with AI tools integrated across SDLC workflows.",
      "Production troubleshooting with Kibana, Splunk, Camunda, and ElasticSearch.",
      "Built features for T-Mobile USA, Claro Brazil & Bouygues Telecom France — including contract lifecycle management, BYOD/BYOS, and order capture systems.",
    ],
    aiComment: "// cross_ref: enterprise_scale. clients: [T-Mobile, Claro, Bouygues]. impact: global.",
  },
  {
    role: "Software Engineer",
    company: "Virtusa",
    type: "Internship",
    period: "April 2022 — June 2022",
    description: [
      "Developed an administration system performing CRUD operations with additional functionality.",
    ],
    aiComment: "// career.origin_point. foundation: solid.",
  },
  {
    role: "R&D Team Member",
    company: "SAAC — Jalpaiguri Govt. Engineering College",
    type: "Apprenticeship",
    period: "Jan 2020 — April 2022",
    description: [
      "Space & Aeronautics research initiative. Hardware-software integration projects.",
    ],
    aiComment: "// domain: aerospace. curiosity_index: exceptional.",
  },
];

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-signal mb-8">
          {">"} LOADING experience_log...
        </p>
        <h2 className="font-mono text-2xl font-semibold text-foreground mb-12">
          Professional Experience
        </h2>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative border-l-2 border-border pl-6 hover:border-primary/50 transition-colors duration-500"
          >
            <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-secondary border-2 border-primary/50" />
            
            <motion.div custom={0} variants={lineVariants}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="font-mono text-lg font-medium text-foreground">{exp.role}</h3>
                <span className="font-mono text-sm text-signal">{exp.company}</span>
                <span className="font-mono text-xs px-2 py-0.5 bg-secondary rounded-sm text-muted-foreground">{exp.type}</span>
              </div>
            </motion.div>

            <motion.p custom={1} variants={lineVariants} className="font-mono text-xs text-muted-foreground mb-4">
              {exp.period}
            </motion.p>

            <ul className="space-y-2 mb-4">
              {exp.description.map((line, i) => (
                <motion.li key={i} custom={i + 2} variants={lineVariants} className="font-sans text-sm text-foreground/80 leading-relaxed">
                  {line}
                </motion.li>
              ))}
            </ul>

            <motion.p custom={exp.description.length + 2} variants={lineVariants} className="font-mono text-xs text-magenta">
              {exp.aiComment}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
