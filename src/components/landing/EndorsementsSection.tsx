import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const endorsements = [
  {
    quote: "A transformative work that redefines what it means to lead with purpose.",
    name: "Sarah Chen",
    title: "CEO, Meridian Ventures",
  },
  {
    quote: "I've recommended this to every executive on my team. It's that essential.",
    name: "Marcus Webb",
    title: "Managing Partner, Blackstone Advisory",
  },
  {
    quote: "Rare intellectual depth paired with actionable strategy. A modern masterpiece.",
    name: "Dr. Elena Vasquez",
    title: "Dean, Harvard Business School",
  },
];

const EndorsementsSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Praised by Visionaries
        </p>
        <div className="gold-divider mb-6" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {endorsements.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-card rounded-lg p-8 text-center"
          >
            <Quote className="w-6 h-6 text-primary/40 mx-auto mb-4" />
            <p className="font-display text-lg italic text-foreground/90 leading-relaxed mb-6">
              "{e.quote}"
            </p>
            <p className="font-body text-sm font-bold text-primary">{e.name}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{e.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EndorsementsSection;
