import { motion } from "framer-motion";
import { LuCalendarDays, LuBanknote, LuMapPin, LuZap } from "react-icons/lu";

const steps = [
    {
        number: "01",
        icon: LuCalendarDays,
        title: "Set your schedule",
        description:
            "Select the days you commit to showing up. Choose a time window — minimum 30 minutes. This becomes your contract.",
        detail: "Mon · Wed · Fri · 6am – 8am",
    },
    {
        number: "02",
        icon: LuBanknote,
        title: "Choose your penalty",
        description:
            "Set a penalty amount between ₦1,000 and ₦50,000. Make it high enough to actually hurt. That's the point.",
        detail: "₦5,000 per missed session",
    },
    {
        number: "03",
        icon: LuMapPin,
        title: "GPS check-in",
        description:
            "When you arrive, tap Check In. The app confirms you're within 150m of your gym and inside your time window.",
        detail: "Within 150m · Time verified",
    },
    {
        number: "04",
        icon: LuZap,
        title: "Miss it — get charged",
        description:
            "If no valid check-in is recorded when your window closes, your card is charged automatically. No manual steps.",
        detail: "Charged within minutes",
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13 } },
};

const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 bg-background overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.08] mb-4">
                        Simple system.<br />
                        <span className="text-muted-foreground font-light">Zero room for excuses.</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        CommitFit runs in the background. You just have to show up — or face the consequence.
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isLast = i === steps.length - 1;
                        return (
                            <motion.div
                                key={step.number}
                                variants={item}
                                className={`group relative rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${isLast
                                    ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                                    : "bg-card border-border hover:border-border/80"
                                    }`}
                            >
                                {/* Top row: number + icon */}
                                <div className="flex items-start justify-between">
                                    <span className={`text-xs font-black tracking-widest ${isLast ? "text-primary" : "text-muted-foreground"}`}>
                                        {step.number}
                                    </span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isLast ? "bg-primary/10" : "bg-muted"
                                        }`}>
                                        <Icon className={`w-5 h-5 ${isLast ? "text-primary" : "text-foreground"}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className={`text-base font-bold leading-snug ${isLast ? "text-primary" : "text-foreground"}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom detail pill */}
                                <div className={`self-start text-xs font-semibold px-3 py-1.5 rounded-full border ${isLast
                                    ? "bg-primary/10 border-primary/20 text-primary"
                                    : "bg-background border-border text-muted-foreground"
                                    }`}>
                                    {step.detail}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Connector line — desktop only */}
                <div className="hidden lg:flex items-center justify-between mt-8 px-10 pointer-events-none select-none" aria-hidden>
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="flex-1 mx-4 h-px border-t border-dashed border-border" />
                    ))}
                </div>

            </div>
        </section>
    );
}
