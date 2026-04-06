import { Link } from "react-router-dom";
import { Code2, Mail, Phone, Heart, ArrowUpRight, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { to: "/", label: "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798" },
  { to: "/lessons", label: "\u1798\u17C1\u179A\u17C0\u1793\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB" },
  { to: "/about", label: "\u17A2\u17C6\u1796\u17B8\u1799\u17BE\u1784" },
  { to: "/contact", label: "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 mt-20">
      <div className="absolute inset-0 aurora opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary-deep to-primary-glow text-primary-foreground shadow-lg shadow-primary/25">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight block">Genz Development</span>
                <span className="text-[10px] font-semibold text-muted-foreground tracking-[0.2em] uppercase">Cambodia</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              {"\u179C\u17C1\u1791\u17B7\u1780\u17B6\u17A2\u1794\u17CB\u179A\u17C6\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u1787\u17B6\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A \u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1798\u1793\u17BB\u179F\u17D2\u179F\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u1793\u17B6\u17D4 \u179A\u17C0\u1793\u17A5\u178F\u1782\u17B7\u178F\u1790\u17D2\u179B\u17C3 \u1798\u17B7\u1793\u1785\u17B6\u17C6\u1794\u17B6\u1785\u17CB\u1785\u17BB\u17C7\u1788\u17D2\u1798\u17C4\u17C7\u17D4"}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-6 text-xs uppercase tracking-[0.15em] text-muted-foreground">{"\u178F\u17C6\u178E\u1797\u17D2\u1787\u17B6\u1794\u17CB"}</h3>
            <div className="space-y-3.5">
              {footerLinks.map((link) => (
                <motion.div key={link.to} whileHover={{ x: 5 }}>
                  <Link to={link.to} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-xs uppercase tracking-[0.15em] text-muted-foreground">{"\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784"}</h3>
            <div className="space-y-3.5 text-sm text-muted-foreground">
              <p>https://t.me/genzdeveloment</p>
              <p>+855 087348928</p>
              <p>{"\u179A\u17B6\u1787\u1792\u17B6\u1793\u17B8\u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789 \u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6"} {"\uD83C\uDDF0\uD83C\uDDED"}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {"\u00A9"} {new Date().getFullYear()} Genz Development
          </p>
          <p className="flex items-center gap-1.5">
            បង្កើតឡើងដោយ  Genz Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
