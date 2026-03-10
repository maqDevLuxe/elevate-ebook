import { motion } from "framer-motion";
import authorImg from "@/assets/author-portrait.jpg";

const AuthorJourney = () => (
  <section id="author-journey" className="section-padding section-alt">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Author
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
          A Journey of <span className="text-gradient-gold italic">Purpose</span>
        </h2>
        <div className="gold-divider !mx-0 mb-8" />
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
          After two decades at the intersection of strategy, leadership, and human potential, 
          Alexander Mercer distilled his insights into a framework that has transformed thousands of careers.
        </p>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
          From advising Fortune 100 executives to mentoring first-generation professionals, 
          his work bridges the gap between intellectual rigor and practical wisdom.
        </p>
        <p className="font-body text-sm text-primary font-bold tracking-wider uppercase mt-6">
          Former McKinsey Partner · Stanford Lecturer · Three-time Bestselling Author
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
        <img
          src={authorImg}
          alt="Alexander Mercer - Author Portrait"
          className="relative rounded-xl w-full object-cover aspect-square shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default AuthorJourney;
