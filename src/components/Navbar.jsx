import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useScrollNav } from "../hooks/useScrollNav.js";

const links = [
  ["nav_home", "#"],
  ["nav_collection", "#collection"],
  ["nav_ritual", "#philosophy"],
  ["nav_reviews", "#testimonials"],
];

export default function Navbar() {
  const scrolled = useScrollNav(40);
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5 md:px-8"
    >
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#"
          className="font-serif text-2xl italic tracking-wide text-cream-50 drop-shadow-md md:text-3xl"
        >
          CHAIDAO
        </a>

        <nav
          aria-label="Main"
          className={`hidden items-center gap-8 rounded-full px-8 py-3 text-sm font-medium tracking-wide text-cream-50 transition-all duration-500 md:flex ${
            scrolled
              ? "border border-white/10 bg-forest-950/80 shadow-soft backdrop-blur-xl"
              : "border border-white/10 bg-forest-900/55 backdrop-blur-md"
          }`}
        >
          {links.map(([key, href]) => (
            <a
              key={key}
              href={href}
              className="transition hover:text-gold-400"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-forest-950/50 p-1 backdrop-blur-md">
          {["en", "ru"].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                lang === code
                  ? "bg-gold-400 text-forest-950"
                  : "text-cream-100 hover:text-gold-300"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
