import { Target, Eye, Heart, Users, Code2, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } };

const team = [
  { icon: Code2, name: "\u17A2\u17D2\u1793\u1780\u17A2\u1797\u17B7\u179C\u178C\u17D2\u178D\u1793\u17CD", desc: "\u1780\u17D2\u179A\u17BB\u1798\u17A2\u17D2\u1793\u1780\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u178A\u17C2\u179B\u1798\u17B6\u1793\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" },
  { icon: Globe, name: "\u17A2\u17D2\u1793\u1780\u1794\u1784\u17D2\u1780\u17BE\u178F\u1798\u17B6\u178F\u17B7\u1780\u17B6", desc: "\u1794\u1784\u17D2\u1780\u17BE\u178F\u1798\u17C1\u179A\u17C0\u1793\u1782\u17BB\u178E\u1797\u17B6\u1796\u1781\u17D2\u1796\u179F\u17CB\u1787\u17B6\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A" },
  { icon: Users, name: "\u179F\u17A0\u1782\u1798\u1793\u17CD", desc: "\u179F\u1798\u17B6\u1787\u17B7\u1780\u179F\u17A0\u1782\u1798\u1793\u17CD\u178A\u17C2\u179B\u1782\u17B6\u17C6\u1791\u17D2\u179A\u1782\u17D2\u1793\u17B6" },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 relative">
        <div className="absolute inset-0 aurora opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {"\u179F\u17D2\u179C\u17C2\u1784\u1799\u179B\u17CB\u17A2\u17C6\u1796\u17B8\u1799\u17BE\u1784"}
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">{"\u17A2\u17C6\u1796\u17B8\u1799\u17BE\u1784"}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"\u179F\u17D2\u179C\u17C2\u1784\u1799\u179B\u17CB\u1794\u1793\u17D2\u1790\u17C2\u1798\u17A2\u17C6\u1796\u17B8\u1785\u1780\u17D2\u1781\u17BB\u179C\u17B7\u179F\u17D0\u1799 \u1793\u17B7\u1784\u1794\u17C1\u179F\u1780\u1780\u1798\u17D2\u1798\u179A\u1794\u179F\u17CB Genz Development"}
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
            <motion.div variants={item} className="glass gradient-border p-8 sm:p-10">
              <h2 className="text-2xl font-black mb-5 gradient-text inline-block">Genz Development {"\u1787\u17B6\u17A2\u17D2\u179C\u17B8"}?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {`Genz Development \u1782\u17BA\u1787\u17B6\u179C\u17C1\u1791\u17B7\u1780\u17B6\u17A2\u1794\u17CB\u179A\u17C6\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u1787\u17B6\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A \u178A\u17C2\u179B\u1794\u1784\u17D2\u1780\u17BE\u178F\u17A1\u17BE\u1784\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1799\u17BB\u179C\u179C\u17D0\u1799\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6 \u1793\u17B7\u1784\u17A2\u17D2\u1793\u1780\u178A\u17C2\u179B\u1785\u1784\u17CB\u179A\u17C0\u1793\u179F\u179A\u179F\u17C1\u179A\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1780\u17BB\u17C6\u1796\u17D2\u1799\u17BC\u1791\u17D0\u179A\u17D4 \u1799\u17BE\u1784\u1787\u17C6\u1793\u17BE\u1790\u17B6\u1797\u17B6\u179F\u17B6\u1798\u17B7\u1793\u1782\u17BD\u179A\u1787\u17B6\u17A7\u1794\u179F\u1782\u17D2\u1782\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u179A\u17C0\u1793\u1794\u1785\u17D2\u1785\u17C1\u1780\u179C\u17B7\u1791\u17D2\u1799\u17B6\u1791\u17C1\u17D4 \u1782\u17D2\u179A\u1794\u17CB\u1798\u17C1\u179A\u17C0\u1793\u179F\u17BB\u1791\u17D2\u1792\u178F\u17C2\u17A5\u178F\u1782\u17B7\u178F\u1790\u17D2\u179B\u17C3 \u1793\u17B7\u1784\u1798\u17B7\u1793\u1785\u17B6\u17C6\u1794\u17B6\u1785\u17CB\u1785\u17BB\u17C7\u1788\u17D2\u1798\u17C4\u17C7\u17D4`}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={item} whileHover={{ y: -4 }} className="glass gradient-border p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg shadow-primary/20">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{"\u1785\u1780\u17D2\u1781\u17BB\u179C\u17B7\u179F\u17D0\u1799"}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {"\u1780\u17D2\u179B\u17B6\u1799\u1787\u17B6\u179C\u17C1\u1791\u17B7\u1780\u17B6\u17A2\u1794\u17CB\u179A\u17C6\u1794\u1785\u17D2\u1785\u17C1\u1780\u179C\u17B7\u1791\u17D2\u1799\u17B6\u1787\u17B6\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A\u1788\u17B6\u1793\u1798\u17BB\u1781\u1782\u17C1 \u178A\u17C2\u179B\u1795\u17D2\u178F\u179B\u17CB\u17B1\u1780\u17B6\u179F\u179F\u17D2\u1798\u17BE\u1782\u17D2\u1793\u17B6 \u178A\u179B\u17CB\u1798\u1793\u17BB\u179F\u17D2\u179F\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u1793\u17B6\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u179A\u17C0\u1793\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u17D4"}
                </p>
              </motion.div>

              <motion.div variants={item} whileHover={{ y: -4 }} className="glass gradient-border p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-glow to-neon-cyan shadow-lg shadow-primary-glow/20">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{"\u1794\u17C1\u179F\u1780\u1780\u1798\u17D2\u1798"}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {"\u1794\u1784\u17D2\u1780\u17BE\u178F\u1798\u17C1\u179A\u17C0\u1793\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u1782\u17BB\u178E\u1797\u17B6\u1796\u1781\u17D2\u1796\u179F\u17CB\u1787\u17B6\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A \u178A\u17C2\u179B\u1784\u17B6\u1799\u179F\u17D2\u179A\u17BD\u179B\u1799\u179B\u17CB \u1793\u17B7\u1784\u17A2\u17B6\u1785\u17A2\u1793\u17BB\u179C\u178F\u17D2\u178F\u1794\u17B6\u1793\u1787\u17B6\u1780\u17CB\u179F\u17D2\u178F\u17C2\u1784\u17D4"}
                </p>
              </motion.div>
            </div>

            <motion.div variants={item} className="glass gradient-border p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-pink to-primary shadow-lg shadow-neon-pink/20">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{"\u178F\u1798\u17D2\u179B\u17C3\u179F\u17D2\u1793\u17BC\u179B"}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6\u1782\u17BD\u179A\u178F\u17C2\u17A2\u17B6\u1785\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793\u178A\u17C4\u1799\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u1793\u17B6",
                  "\u1798\u17C1\u179A\u17C0\u1793\u1787\u17B6\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A \u1784\u17B6\u1799\u1799\u179B\u17CB \u1793\u17B7\u1784\u1785\u17C6\u178E\u17B6\u1799\u1796\u17C1\u179B\u178F\u17B7\u1785",
                  "\u179A\u17C0\u1793\u178A\u17C4\u1799\u17A2\u1793\u17BB\u179C\u178F\u17D2\u178F \u1798\u17B7\u1793\u1798\u17C2\u1793\u1782\u17D2\u179A\u17B6\u1793\u17CB\u178F\u17C2\u17A2\u17B6\u1793",
                  "\u179F\u17A0\u1782\u1798\u1793\u17CD\u1782\u17B6\u17C6\u1791\u17D2\u179A\u1782\u17D2\u1793\u17B6\u1791\u17C5\u179C\u17B7\u1789\u1791\u17C5\u1798\u1780",
                ].map((v, i) => (
                  <motion.div key={i} whileHover={{ x: 4, scale: 1.01 }} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/30 transition-colors">
                    <span className="text-primary font-bold mt-0.5">{"\u2726"}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{v}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {team.map((t, i) => (
                <motion.div key={i} variants={item} whileHover={{ y: -5 }} className="glass gradient-border p-7 text-center space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-primary-glow/8 border border-primary/15 mx-auto">
                    <t.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
