import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const PageTransition = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    );
  }
);

PageTransition.displayName = "PageTransition";

export default PageTransition;
