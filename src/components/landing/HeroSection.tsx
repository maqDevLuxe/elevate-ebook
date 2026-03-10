import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bookImg from "@/assets/book-3d.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bookRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const bookY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y: textY, opacity }} className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            The Definitive Guide to Business Mastery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6"
          >
            The{" "}
            <span className="text-gradient-gold font-semibold italic">
              Ascent
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-body text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
          >
            A masterclass in career acceleration, strategic thinking, and
            building a life of meaning and impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#preorder" className="btn-gold">
              Pre-order Now
            </a>
            <a href="#chapters" className="btn-outline-gold">
              Explore Chapters
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: bookY, rotateY: bookRotate, opacity }}
          className="flex justify-center perspective-[1200px]"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            src={bookImg}
            alt="The Ascent - Premium Business Book"
            className="w-80 lg:w-[420px] drop-shadow-[0_20px_60px_rgba(180,140,60,0.25)] animate-float"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
