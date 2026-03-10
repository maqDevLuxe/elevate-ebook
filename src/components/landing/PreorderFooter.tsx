import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bookImg from "@/assets/book-3d.png";

const PreorderFooter = () => (
  <>
    <section id="preorder" className="section-padding section-alt relative overflow-hidden">
      <div className="absolute inset-0 spotlight" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={bookImg}
            alt="The Ascent Book"
            className="w-48 mx-auto mb-10 drop-shadow-[0_20px_40px_rgba(180,140,60,0.2)]"
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Begin Your Ascent
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
            Your Next Chapter <span className="text-gradient-gold italic">Starts Now</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Join over 125,000 professionals who have transformed their careers. 
            Pre-order today and receive exclusive bonuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold inline-flex items-center gap-2 group">
              Pre-order — $24
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline-gold">
              Get the Hardcover — $49
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    <footer className="border-t border-border/50 px-6 py-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-semibold text-foreground">
            The <span className="text-gradient-gold">Ascent</span>
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            © 2026 Alexander Mercer. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          {["Privacy", "Terms", "Contact", "Press"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  </>
);

export default PreorderFooter;
