import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function SocialProof() {
  const quotes = [
    {
      text: "I set my penalty to $50. I haven't missed a 6AM workout in 3 months. The fear of losing money is real.",
      name: "Marcus T.",
      init: "MT"
    },
    {
      text: "Every other fitness app focuses on 'rah-rah' motivation. This focuses on consequences. Exactly what I needed.",
      name: "Sarah J.",
      init: "SJ"
    },
    {
      text: "It feels like signing a contract with myself. The interface is cold and serious, which makes me take it seriously.",
      name: "David K.",
      init: "DK"
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Early users are showing up.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl"
            >
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{quote.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border border-border">
                  <AvatarFallback className="bg-background text-xs">{quote.init}</AvatarFallback>
                </Avatar>
                <div className="text-sm font-semibold">{quote.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
