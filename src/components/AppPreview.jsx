import { motion } from "framer-motion";
import { LuCheck, LuX, LuMapPin } from "react-icons/lu";
import { Switch } from "@/components/ui/switch";

export default function AppPreview() {
    return (
        <section className="py-32 bg-surface overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The dashboard that keeps you honest.</h2>
                    <p className="text-lg text-muted-foreground">Cold, hard data on your discipline.</p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Streak Panel */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-2xl p-6 shadow-2xl"
                    >
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-6">Current Streak</h3>
                        <div className="flex items-end gap-4 mb-4">
                            <span className="text-5xl font-black">12</span>
                            <span className="text-xl font-medium text-muted-foreground mb-1">/ 14 days</span>
                        </div>
                        <div className="h-3 bg-background rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-green-500 w-[85%] rounded-full" />
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold text-sm">Recent Activity</h4>
                            {[
                                { day: "Today", status: "Checked in 6:15 AM", ok: true },
                                { day: "Yesterday", status: "Checked in 5:45 PM", ok: true },
                                { day: "Wed, Oct 12", status: "Missed", ok: false }
                            ].map((row, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                                    <div>
                                        <div className="text-sm font-medium">{row.day}</div>
                                        <div className={`text-xs ${row.ok ? "text-muted-foreground" : "text-primary"}`}>{row.status}</div>
                                    </div>
                                    {row.ok ? <LuCheck className="w-4 h-4 text-green-500" /> : <LuX className="w-4 h-4 text-primary" />}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Setup Panel */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-6">Commitment Setup</h3>

                            <div className="mb-6">
                                <label className="text-sm font-medium block mb-2">Penalty Amount</label>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold">$</span>
                                    <input type="text" value="25" readOnly className="bg-background border border-border rounded-md px-4 py-2 text-2xl font-bold w-24 focus:outline-none" />
                                    <span className="text-sm text-muted-foreground">per missed session</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                                    <div className="flex items-center gap-3">
                                        <LuMapPin className="w-5 h-5 text-muted-foreground" />
                                        <div>
                                            <div className="text-sm font-medium">GPS Verification</div>
                                            <div className="text-xs text-muted-foreground">Required for check-in</div>
                                        </div>
                                    </div>
                                    <Switch checked={true} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <h4 className="font-semibold text-sm mb-3">Penalty History</h4>
                            <div className="flex items-center justify-between text-sm py-2">
                                <span className="text-muted-foreground">Oct 12</span>
                                <span className="font-medium">-$25.00</span>
                                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold">Charged</span>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2">
                                <span className="text-muted-foreground">Sep 28</span>
                                <span className="font-medium">-$25.00</span>
                                <span className="px-2 py-1 rounded bg-border text-muted-foreground text-xs font-bold">Waived</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
