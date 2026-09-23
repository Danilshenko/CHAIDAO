import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProductCard({ product, index }) {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-5xl border border-white/15 bg-white/10 p-5 shadow-glass backdrop-blur-xl"
    >
      <div className="overflow-hidden rounded-4xl bg-forest-800">
        <img
          src={product.image}
          alt={t(`${product.key}_name`)}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-5 space-y-2 px-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl text-cream-50">{t(`${product.key}_name`)}</h3>
          <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-gold-400">
            {t(`${product.key}_price`)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-cream-200/75">{t(`${product.key}_desc`)}</p>
        <motion.button
          type="button"
          className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          whileHover={{ x: 6 }}
        >
          {t("product_cta")} →
        </motion.button>
      </div>
    </motion.article>
  );
}
