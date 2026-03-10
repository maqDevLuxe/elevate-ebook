import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const articles = [
  { title: "Why I Wrote The Ascent", tag: "Essay", desc: "The personal experiences that compelled me to put pen to paper." },
  { title: "The Research Behind the Framework", tag: "Video", desc: "A 12-minute deep dive into the methodology.", isVideo: true },
  { title: "On Career Architecture in 2026", tag: "Interview", desc: "Featured in Harvard Business Review." },
];

const BehindTheBook = () => (
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
          Behind the Book
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Insights & <span className="text-gradient-gold italic">Media</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-lg p-8 cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-4">
              {a.isVideo ? (
                <Play className="w-4 h-4 text-primary" />
              ) : (
                <ArrowUpRight className="w-4 h-4 text-primary" />
              )}
              <span className="font-body text-xs tracking-widest uppercase text-primary">{a.tag}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {a.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BehindTheBook;
