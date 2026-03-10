import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const FreeChapterPreview = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 spotlight opacity-50" />
        <div className="relative z-10">
          <BookOpen className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            Read Chapter One — <span className="text-gradient-gold italic">Free</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Experience the intellectual depth and practical clarity of The Ascent. 
            Download the opening chapter and begin your transformation today.
          </p>
          <button className="btn-gold inline-flex items-center gap-2 group">
            Download Free Chapter
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FreeChapterPreview;
