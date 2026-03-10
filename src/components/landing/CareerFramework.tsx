import { motion } from "framer-motion";

const stages = [
  { stage: "01", title: "Foundation", desc: "Master the fundamentals of strategic thinking and self-awareness.", color: "from-primary/20 to-primary/5" },
  { stage: "02", title: "Acceleration", desc: "Build momentum through high-leverage decisions and visible impact.", color: "from-primary/30 to-primary/10" },
  { stage: "03", title: "Influence", desc: "Expand your reach through authentic leadership and mentorship.", color: "from-primary/40 to-primary/15" },
  { stage: "04", title: "Legacy", desc: "Create lasting institutional impact that transcends your tenure.", color: "from-primary/50 to-primary/20" },
];

const CareerFramework = () => (
  <section className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Framework
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Career Growth <span className="text-gradient-gold italic">Blueprint</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        <div className="space-y-12">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative flex items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="relative z-10 w-16 h-16 rounded-full glass-card flex items-center justify-center shrink-0">
                <span className="font-display text-lg font-bold text-primary">{s.stage}</span>
              </div>
              <div className="flex-1 glass-card rounded-lg p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CareerFramework;
