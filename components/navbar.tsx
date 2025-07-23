"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="w-full h-14 bg-transparent z-50 animate-fadeIn backdrop-blur-md">
      <nav className="container mx-auto my-4 px-20 py-3 text-xl">
        <div className="flex justify-between items-center text-white">
          <div className="hidden md:flex text-2xl font-bold text-white">
            Dylan Zhou
          </div>
          <div className="flex justify-center items-center space-x-5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#hero" className="hover:text-foreground">
                Home
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#about" className="hover:text-foreground">
                About
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#projects" className="hover:text-foreground">
                Projects
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#resume" className="hover:text-foreground">
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
