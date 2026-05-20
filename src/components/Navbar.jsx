import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-4"
        : "py-6"
        }`}
    >
      <div className="container px-6 mx-auto max-w-7xl">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled
          ? "border shadow-sm backdrop-blur-2xl bg-background/70 border-white/10"
          : "bg-transparent border border-transparent"
          }`}>
          {/* Logo */}
          <div className="flex gap-3 items-center cursor-pointer group">
            <div className="flex justify-center items-center w-10 h-10 text-xl font-black text-white rounded-xl shadow-lg transition-all duration-300 bg-primary shadow-primary/20 group-hover:scale-110 group-hover:rotate-6">
              C
            </div>
            <span className="text-xl font-black tracking-tighter text-black">CommitFit</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10 text-xs font-bold text-black/60 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="text-black transition-colors hover:text-primary">Methodology</a>
            <a href="#features" className="text-black transition-colors hover:text-primary">Features</a>
            <a href="#faq" className="text-black transition-colors hover:text-primary">FAQ</a>
          </div>

          {/* Action */}
          <div className="flex gap-4 items-center">
            <Button size="sm" variant={isScrolled ? "default" : "outline"} className={isScrolled ? "" : "border-black text-black"}>
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
