import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { LuFlame, LuClock, LuArrowRight, LuTrendingUp } from "react-icons/lu";
import HeroImg from "@/assets/gym-hero.png";
import gymBg from "@/assets/gym-bg.png";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
            {/* Background image with heavy overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={gymBg}
                    alt=""
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-background/85" />
                <div className="absolute inset-0 bg-gradient-to-r to-transparent from-background via-background/90" />
            </div>

            {/* Crimson radial glow - left */}
            {/* <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] pointer-events-none z-0" /> */}

            <div className=" relative z-10 px-4 pt-24 mx-auto text-center max-w-7xl">
                <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-6rem)]">

                    {/* Left — Copy */}
                    <div className="flex flex-col items-center">


                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-wrap justify-center text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-2 text-center"
                        >
                            Miss the gym.{" "}
                        </motion.h1>
                        <h1 className="flex flex-col items-center md:flex-row md:flex-wrap justify-center w-full gap-y-2 gap-x-3 text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6 text-center">
                            {/* Row 1 on mobile: Pay/Settle + The */}
                            <span className="flex items-center gap-3">
                                <ContainerTextFlip
                                    words={["Pay", "Settle", "Cover", "Face"]}
                                    className="flex px-4 pb-2 rounded-2xl bg-white/10 text-primary"
                                    textClassName="text-primary"
                                    animationDuration={500}
                                    interval={3000}
                                    initial={{ opacity: 0, x: 50, y: 50 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0, x: -50, y: -50 }}
                                    letterAnimation={{
                                        initial: { opacity: 0, y: 20, scale: 0.5 },
                                        animate: { opacity: 1, y: 0, scale: 1 },
                                        transition: { type: "spring", damping: 10, stiffness: 100 }
                                    }}
                                />
                                <span>The</span>
                            </span>
                            {/* Row 2 on mobile: second flip alone */}
                            <span className="inline-block">
                                <ContainerTextFlip
                                    words={["price.", "penalty.", "cost.", "consequence."]}
                                    className="px-4 pb-2 rounded-2xl bg-white/10 text-primary"
                                    textClassName="text-primary"
                                    animationDuration={700}
                                    interval={3000}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    letterAnimation={{
                                        initial: { opacity: 0, x: -50, filter: "blur(20px)" },
                                        animate: { opacity: 1, x: 0, filter: "blur(0px)" },
                                        transition: { type: "spring", damping: 10, stiffness: 100 }
                                    }}
                                />
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-lg mb-5 text-lg leading-relaxed text-muted-foreground"
                        >
                            CommitFit holds you financially accountable. Set your schedule,
                            attach a penalty, and let the consequences do the motivating.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col gap-3 mb-12 sm:flex-row"
                        >
                            <Button
                                size="lg"
                                variant="default"
                                className="group"
                            >
                                Start Your Commitment
                                <LuArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>

                        </motion.div>


                    </div>

                    {/* Right — Face mockup + floating cards */}
                    <div className="relative flex flex-col items-center justify-center w-full max-w-lg  mx-auto">
                        {/* Hero Image */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                            src={HeroImg}
                            alt="CommitFit app"
                            className="relative w-full h-auto max-w-sm"
                        />

                        {/* TOP-LEFT — Streak */}
                        <motion.div
                            initial={{ opacity: 0, x: -40, y: -40 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute left-0 top-4 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-black"
                        >
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-green-500/20 shrink-0 ring-1 ring-green-400/30">
                                <LuFlame className="w-4 h-4 text-green-400" />
                            </div>
                            <div>
                                <div className="text-[11px] text-black/60 font-medium">Current streak</div>
                                <div className="text-sm font-bold whitespace-nowrap text-black">12 days 🔥</div>
                            </div>
                        </motion.div>

                        {/* TOP-RIGHT — Penalty */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, y: -40 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.72 }}
                            className="hidden md:flex absolute right-0 top-4 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-black"
                        >
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-primary/20 shrink-0 ring-1 ring-primary/30">
                                <span className="text-base">⚠️</span>
                            </div>
                            <div>
                                <div className="text-[11px] text-black/60 font-medium">Penalty charged</div>
                                <div className="text-sm font-bold whitespace-nowrap text-black">₦3,000 deducted</div>
                            </div>
                        </motion.div>

                        {/* BOTTOM-LEFT — Next session (centered on mobile, left on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: -40, y: 40 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.84 }}
                            className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-10 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-black"
                        >
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-blue-500/20 shrink-0 ring-1 ring-blue-400/30">
                                <LuClock className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-[11px] text-black/60 font-medium">Next session</div>
                                <div className="text-sm font-bold whitespace-nowrap text-black">Tomorrow, 7:00 AM</div>
                            </div>
                        </motion.div>

                        {/* BOTTOM-RIGHT — Commitment rate (hidden on mobile) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, y: 40 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.96 }}
                            className="hidden md:flex absolute right-0 bottom-10 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-black"
                        >
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-yellow-500/20 shrink-0 ring-1 ring-yellow-400/30">
                                <LuTrendingUp className="w-4 h-4 text-yellow-400" />
                            </div>
                            <div>
                                <div className="text-[11px] text-black/60 font-medium">Commitment rate</div>
                                <div className="text-sm font-bold whitespace-nowrap text-black">87% this month</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-32 pointer-events-none bg-gradient-to-t to-transparent from-background" />
        </section>
    );
}
