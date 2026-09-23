import { motion } from "framer-motion";

export default function ArrowButton({ href = "#", className = "", ariaLabel = "Continue" }) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream-50 text-forest-900 shadow-soft transition ${className}`}
      whileHover={{ scale: 1.08, boxShadow: "0 0 36px rgba(201,169,98,0.45)" }}
      whileTap={{ scale: 0.96 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
