"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="w-full h-14 bg-transparent z-50 animate-fadeIn backdrop-blur-md">
      <nav className="container mx-auto my-4 px-20 py-3 text-xl">
        <div className="flex justify-between items-center text-[#d3c6aa]">
          <div className="hidden md:flex text-2xl font-bold items-center">
            <Image src={"/logo.png"} alt={"icon"} width={48} height={48} />
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
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="flex text-center justify-center items-center gap-x-3"
                href={"mailto:dzhou527@gmail.com"}
              >
                Get in touch <FaExternalLinkAlt size={16} />
              </Link>
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
