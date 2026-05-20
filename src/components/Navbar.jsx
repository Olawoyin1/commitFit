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
      <div className="container mx-auto max-w-7xl px-6">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled
          ? "bg-background/70 backdrop-blur-2xl border border-white/10 shadow-2xl"
          : "bg-transparent border border-transparent"
          }`}>
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              C
            </div>
            <span className="text-xl font-black tracking-tighter text-black">CommitFit</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10 text-xs font-bold text-black/60 uppercase tracking-[0.2em]">
            <a href="#how-it-works" className="hover:text-primary text-black transition-colors">Methodology</a>
            <a href="#features" className="hover:text-primary text-black transition-colors">Features</a>
            <a href="#faq" className="hover:text-primary text-black transition-colors">FAQ</a>
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-black hover:text-primary">
              Sign In
            </Button>
            <Button size="sm" variant={isScrolled ? "default" : "outline"} className={isScrolled ? "" : "border-black text-black"}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
