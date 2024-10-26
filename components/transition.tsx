"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Transition: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="pt-14"
    >
      {children}
    </motion.div>
  );
};

export default Transition;
