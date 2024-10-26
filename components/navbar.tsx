"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import HoverBox from "./animated_box_hover";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 w-full h-14 bg-transparent shadow-md z-50 animate-fadeIn backdrop-blur-md">
      <nav className="container mx-auto px-3 py-3">
        <div className="flex justify-between items-center text-white">
          <div className="hidden md:flex text-2xl font-bold text-catppuccin_red">
            Dylan Zhou
          </div>
          <div className="flex justify-center items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#hero" className="hover:text-red-500">
                Home
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#about" className="hover:text-red-500">
                About
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#projects" className="hover:text-red-500">
                Projects
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#resume" className="hover:text-red-500">
                Resume
              </Link>
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
