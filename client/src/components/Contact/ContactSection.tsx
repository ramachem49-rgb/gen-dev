import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";
import SocialLinks from "./SocialLinks";

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    label: "ទីតាំង",
    value: "រាជធានីភ្នំពេញ កម្ពុជា 🇰🇭",
  },
  {
    icon: Phone,
    label: "ទូរស័ព្ទ",
    value: "+855 087 348 928",
    href: "tel:+855087348928",
  },
];

export default function ContactSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora opacity-20 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            ទំនាក់ទំនង
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            ចូលរួម <span className="gradient-text">សហគមន៍</span> យើង
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            តាមដានយើងតាមបណ្តាញសង្គម ឬទំនាក់ទំនងដោយផ្ទាល់
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="mb-14">
          <SocialLinks />
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 justify-center mb-6">
            <div className="h-px flex-1 bg-border/40 max-w-[80px]" />
            <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground px-3">
              <MessageCircle className="h-3.5 w-3.5 text-primary" />
              ព័ត៌មានទំនាក់ទំនងបន្ថែម
            </span>
            <div className="h-px flex-1 bg-border/40 max-w-[80px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const inner = (
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">{info.label}</p>
                    <p className={`text-sm font-bold truncate ${info.href ? "text-primary" : "text-foreground"}`}>
                      {info.value}
                    </p>
                  </div>
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass gradient-border rounded-2xl p-4 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {inner}
                </a>
              ) : (
                <div key={info.label} className="glass gradient-border rounded-2xl p-4">
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14 pt-8 border-t border-border/20"
        >
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <span>🚀</span>
            © {new Date().getFullYear()} CodeKhmerLearning — បង្កើតដោយក្រុម Genz Dev សម្រាប់សហគមន៍ខ្មែរ
          </p>
        </motion.div>

      </div>
    </section>
  );
}
