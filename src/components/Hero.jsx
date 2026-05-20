import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { LuFlame, LuClock, LuArrowRight } from "react-icons/lu";
import HeroImg from "@/assets/hero.png";
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

            <div className="container relative z-10 px-6 pt-24 pb-16 mx-auto max-w-7xl text-center">
                <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-6rem)]">

                    {/* Left — Copy */}
                    <div className="flex flex-col items-center">
                        

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-nowrap justify-center text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-center"
                        >
                            Miss the gym.{" "}
                        </motion.h1>
                        <h1 className="flex flex-nowrap justify-center items-center gap-3 text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-center">
                            <span>
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
                            </span>
                            The
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
                            className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground"
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
                                <LuArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 text-base font-bold h-13 border-border hover:bg-card"
                                data-testid="button-hero-secondary-cta"
                            >
                                See How It Works
                            </Button>
                        </motion.div>

                      
                    </div>

                    {/* Right — Face mockup + floating cards */}
                    <div className="flex relative flex-col justify-center items-center mx-auto w-full max-w-lg">
                        {/* Face Placeholder */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                            src={HeroImg}
                            alt="CommitFit app"
                            className="relative w-full max-w-sm h-auto"
                        />

                        {/* Floating card — Streak */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex absolute top-1/4 left-1/4 z-20 gap-2 items-center px-3 py-2 text-white rounded-xl border shadow-2xl backdrop-blur-md bg-white/10 shadow-black/60"
                        >
                            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-green-500/10 shrink-0">
                                <LuFlame className="w-4 h-4 text-green-500" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold whitespace-nowrap">Streak: 12 days</div>
                            </div>
                        </motion.div>

                        {/* Floating card — Missed session */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            className="flex absolute top-1/4 right-1/4 z-20 gap-2 items-center px-3 py-2 text-white rounded-xl border shadow-2xl backdrop-blur-md bg-white/10 shadow-black/60"
                        >
                            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-primary/10 shrink-0">
                                <span className="text-sm font-bold text-primary">⚠</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold whitespace-nowrap text-primary">Missed session</div>
                            </div>
                        </motion.div>

                        {/* Floating card — Next gym */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="flex absolute bottom-1/4 left-1/4 z-20 gap-2 items-center px-3 py-2 text-white rounded-xl border shadow-2xl backdrop-blur-md bg-white/10 shadow-black/60"
                        >
                            <div className="flex justify-center items-center w-9 h-9 rounded-full bg-muted shrink-0">
                                <LuClock className="w-4 h-4 text-foreground" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold whitespace-nowrap">Next gym</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute right-0 bottom-0 left-0 z-10 h-32 bg-gradient-to-t to-transparent pointer-events-none from-background" />
        </section>
    );
}
