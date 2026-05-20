import { motion } from "framer-motion";
import { LuX, LuCheck } from "react-icons/lu";

const stats = [
    {
        stat: "80%",
        label: "of gym members quit within 5 months",
        detail:
            "Not from lack of knowledge. Not from a bad plan. From zero consequence when they stop showing up.",
    },
    {
        stat: "₦0",
        label: "cost of skipping the gym — until now",
        detail:
            "When skipping is free, skipping is easy. CommitFit changes that equation. Every missed session has a real price.",
    },
    {
        stat: "2×",
        label: "more powerful than reward motivation",
        detail:
            "Decades of behavioural research confirm it: loss aversion outperforms positive incentives every time. Pain of loss beats hope of gain.",
    },
];

const notThis = [
    "A workout coaching app",
    "A fitness tracker",
    "A gamification or rewards platform",
    "A calorie counter",
];

const thisIs = [
    "A financial penalty enforcement system",
    "A commitment contract platform",
    "A behaviour change tool powered by money",
    "An accountability engine with real consequences",
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSection() {
    return (
        <section className="bg-[#F2F1ED] text-[#111111] py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="max-w-2xl mb-12 md:mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E63946] mb-4 block">
                        The Problem
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5">
                        Motivation fades.<br />
                        <span className="text-[#E63946]">Consequences don't.</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-xl">
                        Every gym app on the market is built around rewards, streaks, and encouragement.
                        CommitFit is built around something more powerful: the fear of losing money.
                    </p>
                </motion.div>

                {/* Stat cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-24"
                >
                    {stats.map((s) => (
                        <motion.div
                            key={s.stat}
                            variants={item}
                            className="bg-white border border-[#E2E1DC] rounded-2xl p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl sm:text-5xl font-black text-[#E63946]">{s.stat}</div>
                            <div className="text-base font-bold text-[#111] leading-snug">{s.label}</div>
                            <div className="text-sm text-[#666] leading-relaxed">{s.detail}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* IS / IS NOT comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="rounded-2xl overflow-hidden border border-[#E2E1DC] shadow-sm"
                >
                    {/* Mobile: stacked layout */}
                    <div className="md:hidden">
                        {/* NOT section */}
                        <div className="bg-[#F8F7F3] border-b border-[#E2E1DC] px-5 py-4 flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-[#E2E1DC] flex items-center justify-center shrink-0">
                                <LuX className="w-3.5 h-3.5 text-[#999]" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-[#999]">CommitFit is not</span>
                        </div>
                        {notThis.map((notItem, i) => (
                            <div key={i} className={`bg-white px-5 py-4 flex items-center gap-3 ${i < notThis.length - 1 ? "border-b border-[#E2E1DC]" : ""}`}>
                                <div className="w-5 h-5 rounded-full bg-[#F2F1ED] border border-[#E2E1DC] flex items-center justify-center shrink-0">
                                    <LuX className="w-2.5 h-2.5 text-[#bbb]" />
                                </div>
                                <span className="text-sm text-[#888] line-through decoration-[#ccc]">{notItem}</span>
                            </div>
                        ))}
                        {/* IS section */}
                        <div className="bg-[#111] border-t-2 border-[#E63946]/30 px-5 py-4 flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-[#E63946]/15 border border-[#E63946]/25 flex items-center justify-center shrink-0">
                                <LuCheck className="w-3.5 h-3.5 text-[#E63946]" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-[#E63946]">CommitFit is</span>
                        </div>
                        {thisIs.map((thisItem, i) => (
                            <div key={i} className={`bg-[#111] px-5 py-4 flex items-center gap-3 ${i < thisIs.length - 1 ? "border-b border-[#1e1e1e]" : ""}`}>
                                <div className="w-5 h-5 rounded-full bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center shrink-0">
                                    <LuCheck className="w-2.5 h-2.5 text-[#E63946]" />
                                </div>
                                <span className="text-sm text-[#ddd] font-medium">{thisItem}</span>
                            </div>
                        ))}
                        <div className="bg-[#0D0D0D] border-t border-[#1e1e1e] px-5 py-4">
                            <p className="text-xs text-[#555] leading-relaxed">
                                Built on the same psychological principle that powers financial contracts and commitment devices used by behavioural economists worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Desktop: side-by-side layout */}
                    <div className="hidden md:block">
                        {/* Header row */}
                        <div className="grid grid-cols-2">
                            <div className="bg-[#F8F7F3] border-b border-r border-[#E2E1DC] px-8 py-5 flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-[#E2E1DC] flex items-center justify-center shrink-0">
                                    <LuX className="w-3.5 h-3.5 text-[#999]" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-[#999]">CommitFit is not</span>
                            </div>
                            <div className="bg-[#111] border-b border-[#2a2a2a] px-8 py-5 flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-[#E63946]/15 border border-[#E63946]/25 flex items-center justify-center shrink-0">
                                    <LuCheck className="w-3.5 h-3.5 text-[#E63946]" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-[#E63946]">CommitFit is</span>
                            </div>
                        </div>
                        {/* Row pairs */}
                        {notThis.map((notItem, i) => (
                            <div key={i} className="grid grid-cols-2">
                                <div className={`bg-white border-r border-[#E2E1DC] px-8 py-5 flex items-center gap-4 ${i < notThis.length - 1 ? "border-b" : ""}`}>
                                    <div className="w-5 h-5 rounded-full bg-[#F2F1ED] border border-[#E2E1DC] flex items-center justify-center shrink-0">
                                        <LuX className="w-2.5 h-2.5 text-[#bbb]" />
                                    </div>
                                    <span className="text-sm text-[#888] line-through decoration-[#ccc]">{notItem}</span>
                                </div>
                                <div className={`bg-[#111] px-8 py-5 flex items-center gap-4 ${i < thisIs.length - 1 ? "border-b border-[#1e1e1e]" : ""}`}>
                                    <div className="w-5 h-5 rounded-full bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center shrink-0">
                                        <LuCheck className="w-2.5 h-2.5 text-[#E63946]" />
                                    </div>
                                    <span className="text-sm text-[#ddd] font-medium">{thisIs[i]}</span>
                                </div>
                            </div>
                        ))}
                        {/* Footer callout */}
                        <div className="grid grid-cols-2">
                            <div className="bg-[#F8F7F3] border-t border-r border-[#E2E1DC] px-8 py-5" />
                            <div className="bg-[#0D0D0D] border-t border-[#1e1e1e] px-8 py-5">
                                <p className="text-xs text-[#555] leading-relaxed">
                                    Built on the same psychological principle that powers financial contracts and commitment devices used by behavioural economists worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
