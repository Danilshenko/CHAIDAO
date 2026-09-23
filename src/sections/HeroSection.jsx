import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import ArrowButton from "../components/ArrowButton.jsx";
import { fadeUp, staggerContainer } from "../utils/motion.js";

const VIDEO_SRC = "/0_Mountain_Forest_1920x1080.mp4";
const TEA_IMAGE = "/images/hero-bowl.jpg";
const POSTER = "/images/benefit-mountain.jpg";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-forest-900" aria-label="Hero">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-900/55 to-forest-800/70" />
      <div
        className="absolute inset-0 bg-leaf opacity-40 mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Diagonal cream accent */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-gradient-to-bl from-cream-100/15 via-transparent to-transparent"
        aria-hidden="true"
        style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <motion.div
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Editorial card */}
        <motion.div variants={fadeUp} custom={0} className="relative">
          <div className="relative overflow-hidden rounded-[2.75rem] bg-forest-950/85 p-8 shadow-soft backdrop-blur-xl md:rounded-[3.25rem] md:p-12 lg:p-14">
            <div className="bg-leaf absolute inset-0 opacity-30" aria-hidden="true" />

            {/* Tab */}
            <motion.a
              href="#collection"
              className="absolute -top-1 right-8 z-10 rounded-b-2xl bg-gold-400 px-4 py-2 text-xs font-semibold tracking-wide text-forest-950 shadow-md md:right-12"
              whileHover={{ y: 2 }}
            >
              {t("hero_tab")}
            </motion.a>

            <div className="relative">
              <h1 className="font-serif text-[clamp(2.4rem,6vw,4.75rem)] font-semibold uppercase leading-[0.95] tracking-tight text-cream-50">
                <span className="block">{t("hero_headline_1")}</span>
                <span className="mt-1 block text-gold-300">{t("hero_headline_2")}</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-200/85 md:text-base">
                {t("hero_sub")}
              </p>

              <div className="mt-10 flex items-center gap-5">
                <ArrowButton href="#collection" ariaLabel={t("hero_cta")} />
                <a
                  href="#collection"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-cream-100 transition hover:text-gold-400"
                >
                  {t("hero_cta")}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none lg:justify-end"
        >
          <div
            className="absolute -inset-8 rounded-[40%] bg-gold-400/10 blur-3xl"
            aria-hidden="true"
          />
          <motion.img
            src={TEA_IMAGE}
            alt="Ceramic tea bowl with CHAIDAO leaves"
            className="relative z-10 w-[88%] max-w-md rounded-full object-cover shadow-soft ring-8 ring-cream-50/10 md:w-full"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div
            className="pointer-events-none absolute -bottom-6 -left-4 h-40 w-40 rounded-full bg-forest-600/40 blur-2xl md:h-56 md:w-56"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
