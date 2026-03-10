import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CinematicPortrait = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroBg}
          alt="Elegant writing workspace"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <p className="font-display text-3xl md:text-5xl font-light italic text-foreground leading-relaxed max-w-3xl">
            "The greatest investment you'll ever make is in the{" "}
            <span className="text-gradient-gold">architecture of your ambition</span>."
          </p>
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mt-8">
            — Alexander Mercer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicPortrait;
