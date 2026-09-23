import { motion } from "framer-motion";
import ArrowButton from "../components/ArrowButton.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { fadeUp } from "../utils/motion.js";

const rows = [
  {
    titleKey: "benefit1_title",
    descKey: "benefit1_desc",
    image: "/images/benefit-mountain.jpg",
    imageLeft: true,
    label: "Origins",
  },
  {
    titleKey: "benefit2_title",
    descKey: "benefit2_desc",
    image: "/images/benefit-ritual.jpg",
    imageLeft: false,
    label: "Ritual",
  },
];

export default function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="benefits"
      className="bg-cream-50 px-5 py-24 md:px-8 md:py-28"
      aria-label="Benefits"
    >
      <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
        {/* About editorial block (mockup 2 style) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-6xl bg-forest-800 bg-leaf p-8 shadow-soft md:p-12">
              <a
                href="#philosophy"
                className="absolute -top-0 right-10 rounded-b-2xl bg-gold-400 px-4 py-2 text-xs font-semibold text-forest-950"
              >
                {t("about_tab")}
              </a>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                {t("about_label")}
              </p>
              <h2 className="mt-4 font-serif text-3xl uppercase leading-tight text-cream-50 md:text-4xl">
                {t("about_title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-cream-200/80 md:text-base">
                {t("about_body")}
              </p>
              <div className="mt-8">
                <ArrowButton href="#testimonials" ariaLabel={t("about_label")} />
              </div>
            </div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -inset-6 rounded-[45%] bg-forest-600/15 blur-2xl" aria-hidden="true" />
            <img
              src="/images/about-leaves.jpg"
              alt="Loose CHAIDAO tea leaves in ceramic bowl"
              className="relative z-10 w-full rounded-[2rem] object-cover shadow-card"
            />
          </motion.div>
        </motion.div>

        {/* Alternating benefits */}
        {rows.map((row, index) => (
          <motion.div
            key={row.titleKey}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={index}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              row.imageLeft ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            <div className="overflow-hidden rounded-5xl shadow-card">
              <motion.img
                src={row.image}
                alt=""
                className="h-72 w-full object-cover md:h-[26rem]"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">
                {row.label}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-forest-900 md:text-4xl">
                {t(row.titleKey)}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-forest-800/75">
                {t(row.descKey)}
              </p>
              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
