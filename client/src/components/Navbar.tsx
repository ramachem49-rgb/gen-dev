import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, Moon, Sun, Sparkles, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useAllReadingProgress } from "@/hooks/useAllReadingProgress";

const navItems = [
  { label: "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798", path: "/" },
  { label: "\u1798\u17C1\u179A\u17C0\u1793\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB", path: "/lessons" },
  { label: "\u17A2\u17C6\u1796\u17B8\u1799\u17BE\u1784", path: "/about" },
  { label: "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784", path: "/contact" },
  { label: "⚗ Lab", path: "/lab" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { data } = useAllReadingProgress();
  const savedCount = data.length;

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-3xl border-b border-border/40 shadow-sm shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 py-4 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight leading-none">Genz Dev</span>
              <span className="text-[10px] font-semibold text-muted-foreground tracking-[0.2em] uppercase">Cambodia</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-muted/40 backdrop-blur-xl border border-border/30">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-active-v3"
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary-deep to-primary-glow rounded-xl shadow-lg shadow-primary/30"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* My Lessons shortcut */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="ghost" size="icon" className="rounded-xl h-10 w-10 relative">
                <Link to="/my-lessons">
                  <BookmarkCheck className={savedCount > 0 ? "h-[1.15rem] w-[1.15rem] text-amber-500" : "h-[1.15rem] w-[1.15rem]"} />
                  {savedCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-amber-500 text-[9px] font-bold text-white flex items-center justify-center">
                      {savedCount > 9 ? '9+' : savedCount}
                    </span>
                  )}
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" onClick={toggleDark} className="rounded-xl h-10 w-10">
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0, scale: 0 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}>
                      <Sun className="h-[1.15rem] w-[1.15rem]" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0, scale: 0 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -90, opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}>
                      <Moon className="h-[1.15rem] w-[1.15rem]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="sm" className="rounded-2xl gap-2 px-6 bg-gradient-to-r from-primary via-primary-deep to-primary-glow hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                <Link to="/lessons">
                  <Sparkles className="h-3.5 w-3.5" /> {"\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178A\u17BE\u1798\u179A\u17C0\u1793"}
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleDark} className="rounded-xl h-10 w-10">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10" onClick={() => setIsOpen(!isOpen)}>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 pt-2 space-y-1.5">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-primary via-primary-deep to-primary-glow text-primary-foreground shadow-lg shadow-primary/20"
                          : "text-muted-foreground hover:bg-muted/60"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                {/* My Lessons mobile */}
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: navItems.length * 0.06 }}>
                  <Link to="/my-lessons" onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
                      location.pathname === '/my-lessons'
                        ? "bg-gradient-to-r from-primary via-primary-deep to-primary-glow text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:bg-muted/60"
                    }`}
                  >
                    <BookmarkCheck className="h-4 w-4 text-amber-500" />
                    មេរៀនរបស់ខ្ញុំ
                    {savedCount > 0 && (
                      <Badge className="ml-auto h-5 px-1.5 text-[10px] bg-amber-500 text-white">{savedCount}</Badge>
                    )}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
