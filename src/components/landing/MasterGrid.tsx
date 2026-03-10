import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Lightbulb, Shield, Rocket } from "lucide-react";

const items = [
  { icon: Target, title: "Strategic Vision", desc: "Build a career roadmap that anticipates market shifts." },
  { icon: TrendingUp, title: "Executive Presence", desc: "Command any room with poise and intellectual authority." },
  { icon: Users, title: "Elite Networking", desc: "Cultivate relationships that compound over decades." },
  { icon: Lightbulb, title: "Innovation Mindset", desc: "Think in systems, not just solutions." },
  { icon: Shield, title: "Resilient Leadership", desc: "Navigate uncertainty with unwavering composure." },
  { icon: Rocket, title: "Exponential Growth", desc: "Scale your impact from individual to institutional." },
];

const MasterGrid = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          What You Will Master
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Six Pillars of <span className="text-gradient-gold italic">Excellence</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card rounded-lg p-8 group cursor-default"
          >
            <item.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MasterGrid;
