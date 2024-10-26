"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const HoverBox: React.FC<Props> = ({ children }) => {
  return (
    <motion.button
      className="relative flex justify-center items-center w-20 h-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: draws path */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 220 80"
        className="absolute top-0 left-0"
      >
        <motion.path
          d="M 10 10 H 210 V 70 H 10 Z"
          fill="transparent"
          stroke="#ed8796"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
      {children}
    </motion.button>
  );
};

export default HoverBox;
