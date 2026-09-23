import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { products } from "../data/products.js";
import { fadeUp, staggerContainer } from "../utils/motion.js";

export default function CollectionSection() {
  const { t } = useLanguage();

  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-forest-900 px-5 py-24 md:px-8 md:py-32"
      aria-labelledby="collection-title"
    >
      <div className="bg-leaf absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400"
          >
            {t("collection_eyebrow")}
          </motion.p>
          <motion.h2
            id="collection-title"
            variants={fadeUp}
            custom={1}
            className="mt-4 font-serif text-4xl text-cream-50 md:text-5xl"
          >
            {t("collection_title")}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-cream-200/75">
            {t("collection_sub")}
          </motion.p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.key} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
