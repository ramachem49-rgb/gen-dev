import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const contactInfo = [
  { icon: Mail, label: "\u17A2\u17CA\u17B8\u1798\u17C2\u179B", value: "https://t.me/genzdeveloment" },
  { icon: Phone, label: "\u1791\u17BC\u179A\u179F\u17D0\u1796\u17D2\u1791", value: "+855 087 348 928" },
  { icon: MapPin, label: "\u1791\u17B8\u178F\u17B6\u17C6\u1784", value: "\u179A\u17B6\u1787\u1792\u17B6\u1793\u17B8\u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789 \u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "\u2705 \u179F\u17B6\u179A\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1795\u17D2\u1789\u17BE!",
      description: "\u1799\u17BE\u1784\u1793\u17B9\u1784\u1786\u17D2\u179B\u17BE\u1799\u178F\u1794\u1791\u17C5\u17A2\u17D2\u1793\u1780\u1786\u17B6\u1794\u17CB\u17D7\u17D4 \u17A2\u179A\u1782\u17BB\u178E!",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20 relative">
        <div className="absolute inset-0 aurora opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {"\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784\u1798\u1780\u1799\u17BE\u1784"}
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">{"\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784"}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"\u1798\u17B6\u1793\u179F\u17C6\u178E\u17BD\u179A \u17AC\u1799\u17C4\u1794\u179B\u17CB? \u179F\u17BC\u1798\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784\u1798\u1780\u1780\u17B6\u1793\u17CB\u1799\u17BE\u1784 \u1799\u17BE\u1784\u179A\u17B8\u1780\u179A\u17B6\u1799\u1787\u17BD\u1799\u17A2\u17D2\u1793\u1780"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="md:col-span-3 glass gradient-border p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-deep shadow-lg shadow-primary/20">
                  <MessageSquare className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold">{"\u1795\u17D2\u1789\u17BE\u179F\u17B6\u179A\u1798\u1780\u1799\u17BE\u1784"}</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{"\u1788\u17D2\u1798\u17C4\u17C7"}</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={"\u1794\u1789\u17D2\u1785\u17BC\u179B\u1788\u17D2\u1798\u17C4\u17C7\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780"} className="rounded-2xl h-12 glass border-border/40 focus:border-primary/40" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{"\u17A2\u17CA\u17B8\u1798\u17C2\u179B"}</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="rounded-2xl h-12 glass border-border/40 focus:border-primary/40" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{"\u179F\u17B6\u179A"}</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={"\u179F\u179A\u179F\u17C1\u179A\u179F\u17B6\u179A\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u1793\u17C5\u1791\u17B8\u1793\u17C1\u17C7..."} rows={5} className="rounded-2xl glass border-border/40 focus:border-primary/40" required />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full gap-2.5 rounded-2xl h-12 text-base bg-gradient-to-r from-primary via-primary-deep to-primary-glow shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300">
                    <Send className="h-4 w-4" /> {"\u1795\u17D2\u1789\u17BE\u179F\u17B6\u179A"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="md:col-span-2 space-y-6">
              <div className="glass gradient-border p-8 space-y-7">
                <h2 className="text-xl font-bold">{"\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784"}</h2>
                <div className="space-y-6">
                  {contactInfo.map((c, i) => (
                    <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/12 to-primary-glow/8 border border-primary/15 shrink-0">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{c.label}</p>
                        <p className="text-muted-foreground text-sm">{c.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="glass gradient-border p-8 text-center">
                <p className="text-5xl mb-3">{"\uD83C\uDDF0\uD83C\uDDED"}</p>
                <p className="font-bold text-lg mb-1">Made in Cambodia</p>
                <p className="text-sm text-muted-foreground">{"\u1794\u1784\u17D2\u1780\u17BE\u178F\u178A\u17C4\u1799\u1780\u17D2\u179A\u17BB\u1798 Genz Dev \u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u179F\u17A0\u1782\u1798\u1793\u17CD\u1781\u17D2\u1798\u17C2\u179A"}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
