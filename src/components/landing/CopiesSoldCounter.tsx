import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 125000, label: "Copies Sold", suffix: "+" },
  { value: 48, label: "Countries", suffix: "" },
  { value: 14, label: "Weeks on Bestseller List", suffix: "" },
  { value: 4.9, label: "Average Rating", suffix: "/5" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = value >= 1000 ? display.toLocaleString() : Number.isInteger(value) ? display : display.toFixed(1);

  return (
    <span className="text-gradient-gold font-display text-5xl md:text-6xl font-bold">
      {formatted}{suffix}
    </span>
  );
};

const CopiesSoldCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="section-padding section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <AnimatedNumber value={s.value} suffix={s.suffix} inView={inView} />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-3">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopiesSoldCounter;
