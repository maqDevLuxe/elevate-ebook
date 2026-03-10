import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Digital Edition",
    price: "$24",
    desc: "Instant access to the complete e-book",
    features: ["Full e-book (PDF, ePub, Kindle)", "Bonus worksheets", "Chapter summaries", "Lifetime updates"],
    featured: false,
  },
  {
    name: "Premium Hardcover",
    price: "$49",
    desc: "The definitive collector's edition",
    features: ["Signed hardcover edition", "Digital edition included", "Exclusive author notes", "Priority shipping", "Premium bookmark"],
    featured: true,
  },
  {
    name: "Executive Bundle",
    price: "$89",
    desc: "For teams and serious professionals",
    features: ["5× Digital licenses", "1× Signed hardcover", "Private webinar access", "Quarterly strategy digest", "Community access"],
    featured: false,
  },
];

const PackagesSection = () => (
  <section id="packages" className="section-padding section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Choose Your Edition
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Digital & <span className="text-gradient-gold italic">Hardcover</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`rounded-xl p-8 relative ${
              pkg.featured
                ? "glass-card border border-primary/30 shadow-[var(--shadow-glow)]"
                : "glass-card"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full">
                <Sparkles className="w-3 h-3" />
                <span className="font-body text-xs font-bold tracking-wider uppercase">Most Popular</span>
              </div>
            )}
            <h3 className="font-display text-2xl font-semibold text-foreground mb-1">{pkg.name}</h3>
            <p className="font-body text-xs text-muted-foreground mb-4">{pkg.desc}</p>
            <p className="font-display text-5xl font-bold text-gradient-gold mb-6">{pkg.price}</p>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{f}</span>
                </li>
              ))}
            </ul>
            <button className={pkg.featured ? "btn-gold w-full" : "btn-outline-gold w-full"}>
              {pkg.featured ? "Pre-order Now" : "Select"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
