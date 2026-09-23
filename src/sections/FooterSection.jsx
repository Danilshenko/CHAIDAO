import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import { fadeUp } from "../utils/motion.js";

const nav = [
  ["nav_home", "#"],
  ["nav_collection", "#collection"],
  ["nav_ritual", "#philosophy"],
  ["nav_reviews", "#testimonials"],
  ["nav_shop", "#collection"],
];

const social = [
  { label: "Twitter", href: "#", path: "M18 7c0 0-1.2.5-2 .6 1-.6 1.6-1.5 1.9-2.5-.9.5-1.9.9-3 1.1A3.4 3.4 0 0012 5c-1.9 0-3.4 1.6-3.4 3.5 0 .3 0 .5.1.8C6.5 9.1 4.4 7.9 3 6c-.3.6-.5 1.3-.5 2 0 1.2.6 2.3 1.5 2.9-.5 0-1-.2-1.4-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A6.9 6.9 0 013 17.5 9.7 9.7 0 008.3 19c6.2 0 9.6-5.3 9.6-9.9v-.4c.7-.5 1.3-1.1 1.8-1.8-.6.3-1.3.5-2 .6z" },
  { label: "Instagram", href: "#", path: "M12 7.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zm6.1-8.2a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM17.5 4H6.5A2.5 2.5 0 004 6.5v11A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0017.5 4zm1 13.5a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1h11a1 1 0 011 1z" },
  { label: "Facebook", href: "#", path: "M14 9h2.5V6.2C16 6.1 15 6 13.9 6 11.6 6 10 7.4 10 10v2H7.5v3H10v7h3.2v-7H16l.5-3H13.2v-1.6c0-.9.3-1.4.8-1.4z" },
  { label: "YouTube", href: "#", path: "M19.6 7.2a2.2 2.2 0 00-1.5-1.6C16.7 5.2 12 5.2 12 5.2s-4.7 0-6.1.4A2.2 2.2 0 004.4 7.2 23 23 0 004 12a23 23 0 00.4 4.8 2.2 2.2 0 001.5 1.6c1.4.4 6.1.4 6.1.4s4.7 0 6.1-.4a2.2 2.2 0 001.5-1.6A23 23 0 0020 12a23 23 0 00-.4-4.8zM10.2 14.8V9.2L14.8 12z" },
];

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-cream-100 pt-10">
      <div className="absolute inset-x-0 top-0 h-28 bg-forest-600/20" aria-hidden="true" />

      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-t-6xl bg-forest-900 bg-leaf px-6 pb-8 pt-14 text-cream-50 shadow-soft md:px-12 md:pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">{t("footer_nav")}</h3>
            <ul className="mt-5 space-y-3">
              {nav.map(([key, href]) => (
                <li key={key}>
                  <a href={href} className="text-cream-200/85 transition hover:text-gold-400">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">{t("footer_contacts")}</h3>
            <ul className="mt-5 space-y-3 text-cream-200/85">
              <li>
                <a href={`tel:${t("footer_phone1").replace(/\s/g, "")}`} className="hover:text-gold-400">
                  {t("footer_phone1")}
                </a>
              </li>
              <li>
                <a href={`tel:${t("footer_phone2").replace(/\s/g, "")}`} className="hover:text-gold-400">
                  {t("footer_phone2")}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream-100 transition hover:bg-gold-400 hover:text-forest-950"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="font-serif text-5xl font-semibold leading-none tracking-[0.08em] text-cream-50 md:text-right md:text-6xl">
              CHAI
              <span className="block text-gold-400">DAO</span>
            </p>
            <p className="mt-5 max-w-xs text-sm text-cream-200/70 md:text-right">
              {t("footer_tagline")}
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-cream-200/50">
          {t("footer_rights")}
        </p>
      </motion.div>
    </footer>
  );
}
