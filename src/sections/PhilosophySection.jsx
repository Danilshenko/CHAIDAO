import { motion } from "framer-motion";
import ArrowButton from "../components/ArrowButton.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { fadeUp, staggerContainer } from "../utils/motion.js";

const values = [
  { key: "value1", icon: "◈" },
  { key: "value2", icon: "◇" },
  { key: "value3", icon: "○" },
];

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-cream-100 px-5 py-24 md:px-8 md:py-28"
      aria-labelledby="philosophy-title"
    >
      {/* Soft green wave top */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-forest-700"
        style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 rounded-5xl bg-forest-950 px-4 py-5 text-cream-50 shadow-soft md:mb-14 md:px-8"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {[
              ["stats_orders", "stats_orders_label"],
              ["stats_years", "stats_years_label"],
              ["stats_natural", "stats_natural_label"],
              ["stats_gardens", "stats_gardens_label"],
              ["stats_countries", "stats_countries_label"],
            ].map(([v, l]) => (
              <div
                key={v}
                className="border-white/10 px-3 lg:border-r lg:px-4 lg:last:border-0"
              >
                <p className="font-serif text-xl text-gold-400 md:text-2xl">{t(v)}</p>
                <p className="mt-1 text-[10px] uppercase leading-snug tracking-wider text-cream-200/70 md:text-xs">
                  {t(l)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main philosophy card */}
        <motion.div
          className="relative overflow-hidden rounded-6xl bg-forest-800 bg-leaf p-8 shadow-soft md:p-12 lg:p-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <motion.div variants={fadeUp} custom={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
                {t("philosophy_eyebrow")}
              </p>
              <h2
                id="philosophy-title"
                className="mt-4 font-serif text-3xl uppercase leading-tight text-cream-50 md:text-4xl lg:text-[2.65rem]"
              >
                {t("philosophy_title")}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-200/80 md:text-base">
                {t("philosophy_body")}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100">
                  {t("philosophy_cta")}
                </span>
                <ArrowButton href="#collection" ariaLabel={t("philosophy_cta")} />
              </div>
            </motion.div>

            {/* Timeline values */}
            <motion.div variants={fadeUp} custom={1} className="relative pl-2">
              <div
                className="absolute bottom-6 left-[1.65rem] top-6 w-px border-l border-dashed border-cream-100/40"
                aria-hidden="true"
              />
              <ul className="space-y-10">
                {values.map((v, i) => (
                  <li key={v.key} className="relative flex gap-5">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-forest-950 font-serif text-xl text-gold-400 shadow-soft">
                      {v.icon}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-cream-50">{t(`${v.key}_title`)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-200/75">
                        {t(`${v.key}_desc`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
