import { motion } from "framer-motion";
import { LuLock, LuShieldCheck, LuScale, LuFileText } from "react-icons/lu";

export default function TrustSection() {
    const items = [
        { icon: LuLock, title: "Secure payments via Stripe", desc: "Enterprise-grade encryption" },
        { icon: LuShieldCheck, title: "End-to-end privacy", desc: "Your data is never shared" },
        { icon: LuScale, title: "Dispute protection", desc: "Fair review on every charge" },
        { icon: LuFileText, title: "Transparent terms", desc: "No hidden fees, ever" }
    ];

    return (
        <section className="py-24 border-y border-white/5 bg-[#0D0D0D]">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-4xl">Your money is safe. Your excuses aren't.</h2>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="flex items-center justify-center mb-6 transition-all duration-300 border w-14 h-14 rounded-2xl bg-white/5 border-white/10 text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="mb-1 text-sm font-bold tracking-wider text-white uppercase">{item.title}</h3>
                            <p className="text-xs font-medium text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
