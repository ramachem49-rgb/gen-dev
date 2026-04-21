import { motion, type Variants } from "framer-motion";

interface SocialLink {
  name: string;
  url: string;
  logo: string;        // SVG path or emoji
  bgColor: string;
  hoverShadow: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Telegram",
    url: "https://t.me/genzdeveloment",
    logo: "telegram",
    bgColor: "bg-[#229ED9]",
    hoverShadow: "hover:shadow-[#229ED9]/40",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourpage",
    logo: "facebook",
    bgColor: "bg-[#1877F2]",
    hoverShadow: "hover:shadow-[#1877F2]/40",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@yourpage",
    logo: "tiktok",
    bgColor: "bg-black dark:bg-white",
    hoverShadow: "hover:shadow-white/20",
  },
];

// SVG icons
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10">
    <path
      className="fill-white dark:fill-black"
      d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"
    />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  telegram: <TelegramIcon />,
  facebook: <FacebookIcon />,
  tiktok: <TikTokIcon />,
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function SocialLinks() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-5"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          variants={item}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group glass gradient-border rounded-2xl p-8 flex flex-col items-center gap-5
                      hover:-translate-y-2 hover:shadow-2xl ${link.hoverShadow} transition-all duration-300`}
        >
          {/* Icon circle */}
          <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${link.bgColor}
                           shadow-lg transition-transform duration-300 group-hover:scale-110`}>
            {iconMap[link.logo]}
          </div>

          {/* Name */}
          <p className="font-bold text-lg">{link.name}</p>
        </motion.a>
      ))}
    </motion.div>
  );
}
