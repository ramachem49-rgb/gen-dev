import { Link } from "react-router-dom";
import { Code2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactSection } from "./Contact";

const footerLinks = [
  { to: "/", label: "ទំព័រដើម" },
  { to: "/lessons", label: "មេរៀនទាំងអស់" },
  { to: "/about", label: "អំពីយើង" },
  { to: "/contact", label: "ទំនាក់ទំនង" },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Contact Section */}
      <ContactSection />

      {/* Bottom bar */}
      <div className="relative border-t border-border/30">
        <div className="absolute inset-0 aurora opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary-deep to-primary-glow text-primary-foreground shadow-lg shadow-primary/25">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-extrabold text-lg tracking-tight block">Genz Development</span>
                  <span className="text-[10px] font-semibold text-muted-foreground tracking-[0.2em] uppercase">Cambodia</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                វេទិកាអប់រំសរសេរកូដជាភាសាខ្មែរ សម្រាប់មនុស្សគ្រប់រូប។ រៀនឥតគិតថ្លៃ មិនចាំបាច់ចុះឈ្មោះ។
              </p>
            </div>

            {/* Nav links */}
            <div>
              <h3 className="font-bold mb-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">តំណភ្ជាប់</h3>
              <div className="space-y-3">
                {footerLinks.map((link) => (
                  <motion.div key={link.to} whileHover={{ x: 4 }}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Genz Development. All Rights Reserved.</p>
            <p>បង្កើតឡើងដោយ Genz Dev 🇰🇭</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
