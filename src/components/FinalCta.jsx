import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" /> */}

      <div className="container relative z-10 px-6 mx-auto text-center max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Discipline becomes real when money is involved.
          </h2>
          <p className="mb-10 text-xl text-muted-foreground">
            Join thousands building real consistency — not just good intentions.
          </p>

          <Button size="lg" className="h-16 px-10 mb-4 text-xl font-bold transition-transform hover:scale-105">
            Start Your Commitment
          </Button>
          <p className="text-sm text-muted-foreground">
            Cancel anytime. Charges only apply when you miss.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
