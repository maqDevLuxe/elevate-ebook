import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stories = [
  { name: "Priya Sharma", role: "VP of Strategy, Deloitte", quote: "This book gave me the vocabulary to articulate my leadership philosophy. I got promoted within six months.", stars: 5 },
  { name: "James Whitfield", role: "Founder, Helix Studios", quote: "The career framework chapter alone is worth 10x the price. I've re-read it three times.", stars: 5 },
  { name: "Yuki Tanaka", role: "Director, Goldman Sachs", quote: "Mercer writes with the precision of a strategist and the soul of a poet. Extraordinary.", stars: 5 },
  { name: "Amara Okafor", role: "Tech Lead, Stripe", quote: "Finally, a business book that doesn't insult your intelligence. Profound and practical.", stars: 5 },
];

const SuccessStories = () => (
  <section id="success-stories" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Reader Stories
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Lives <span className="text-gradient-gold italic">Transformed</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-lg p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: s.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-display text-lg italic text-foreground/90 leading-relaxed mb-6">
              "{s.quote}"
            </p>
            <div>
              <p className="font-body text-sm font-bold text-primary">{s.name}</p>
              <p className="font-body text-xs text-muted-foreground">{s.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
