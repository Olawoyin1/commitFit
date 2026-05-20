import { motion } from "framer-motion";
import { LuMapPin, LuZap, LuTrendingUp, LuScale, LuBell, LuClock } from "react-icons/lu";

export default function FeaturesSection() {
    const features = [
        { icon: <LuMapPin />, title: "GPS Gym Verification", desc: "Check-ins are tied to physical location. No faking it." },
        { icon: <LuZap />, title: "Automatic Penalty Enforcement", desc: "Miss a workout, get charged instantly. No manual processing." },
        { icon: <LuTrendingUp />, title: "Streak Tracking", desc: "Build momentum with visual proof of your consistency." },
        { icon: <LuScale />, title: "Dispute System", desc: "Legitimate emergency? Dispute the charge within 24 hours." },
        { icon: <LuBell />, title: "Smart Reminders", desc: "Get notified before your window closes." },
        { icon: <LuClock />, title: "Commitment History", desc: "View your long-term success rate and total penalties paid." }
    ];

    return (
        <section id="features" className="py-32 bg-surface">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to stop negotiating with yourself.</h2>
                    <p className="text-lg text-muted-foreground">Built like a financial product, because it is one.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6"
                        >
                            <div className="w-10 h-10 rounded bg-background border border-border flex items-center justify-center text-primary mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
