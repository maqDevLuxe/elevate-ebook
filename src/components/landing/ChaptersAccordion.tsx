import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const chapters = [
  { num: "01", title: "The Architecture of Ambition", desc: "Understanding the invisible structures that separate extraordinary careers from ordinary ones. Learn to map your strategic landscape." },
  { num: "02", title: "Intellectual Capital", desc: "How to compound your knowledge and convert curiosity into a competitive advantage that no one can replicate." },
  { num: "03", title: "The Art of Influence", desc: "Navigate organizational politics with grace. Build alliances, communicate with precision, and lead without formal authority." },
  { num: "04", title: "Decision Architecture", desc: "A framework for making high-stakes decisions under uncertainty. From first principles to probabilistic thinking." },
  { num: "05", title: "Scaling Impact", desc: "Transition from individual contributor to force multiplier. Build teams, systems, and cultures that thrive." },
  { num: "06", title: "The Long Game", desc: "Design a career and life that compounds meaning over decades. Beyond success to significance." },
];

const ChaptersAccordion = () => (
  <section id="chapters" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Inside the Book
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Chapter <span className="text-gradient-gold italic">Overview</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {chapters.map((ch, i) => (
          <motion.div
            key={ch.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <AccordionItem value={ch.num} className="glass-card rounded-lg border-none px-6">
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-5 text-left">
                  <span className="font-display text-2xl font-bold text-primary/50">{ch.num}</span>
                  <span className="font-display text-xl font-medium text-foreground">{ch.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p className="font-body text-sm text-muted-foreground leading-relaxed pl-14">{ch.desc}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ChaptersAccordion;
