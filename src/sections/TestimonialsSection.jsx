import { motion } from "framer-motion";
import ArrowButton from "../components/ArrowButton.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { fadeUp, staggerContainer } from "../utils/motion.js";

const items = [
  {
    key: "testimonial1",
    avatar: "/images/avatar-1.jpg",
    offset: "lg:translate-y-16 lg:-translate-x-4",
    z: "z-10",
  },
  {
    key: "testimonial2",
    avatar: "/images/avatar-2.jpg",
    offset: "lg:-translate-y-6",
    z: "z-20",
  },
  {
    key: "testimonial3",
    avatar: "/images/avatar-3.jpg",
    offset: "lg:translate-y-16 lg:translate-x-4",
    z: "z-10",
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="bg-cream-100 px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="reviews-title"
    >
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-6xl bg-forest-800 bg-leaf px-6 py-14 shadow-soft md:px-12 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="mb-16 flex items-start justify-between gap-6"
        >
          <h2
            id="reviews-title"
            className="font-serif text-2xl uppercase tracking-wide text-cream-50 md:text-3xl"
          >
            {t("reviews_title")}
          </h2>
        </motion.div>

        {/* Dashed arc */}
        <svg
          className="pointer-events-none absolute left-1/2 top-[42%] hidden w-[70%] -translate-x-1/2 lg:block"
          viewBox="0 0 800 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M40 90 C 200 10, 600 10, 760 90"
            stroke="rgba(250,248,244,0.35)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
        </svg>

        <div className="relative grid gap-14 md:grid-cols-3 md:gap-8 md:pt-8">
          {items.map((item, i) => (
            <motion.article
              key={item.key}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative ${item.z} ${item.offset}`}
            >
              <img
                src={item.avatar}
                alt=""
                className="absolute left-1/2 top-0 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-4 ring-cream-50 shadow-soft"
              />
              <div className="rounded-5xl bg-cream-50 px-6 pb-7 pt-12 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-forest-900">
                    {t(`${item.key}_rating`)}
                  </span>
                  <span className="text-gold-500" aria-hidden="true">
                    ★★★★★
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl text-forest-900">
                  {t(`${item.key}_name`)}
                </h3>
                <p className="mt-1 text-xs text-forest-700/60">{t(`${item.key}_role`)}</p>
                <p className="mt-4 text-sm leading-relaxed text-forest-800/80">
                  {t(`${item.key}_quote`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14">
          <ArrowButton href="#collection" ariaLabel={t("reviews_title")} />
        </div>
      </motion.div>
    </section>
  );
}
