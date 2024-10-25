"use client";
import Link from "next/link";
import Background from "./background";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <main id="hero" className="animate-fadeIn">
      <Background styles="h-screen flex items-center justify-center">
        <div className="relative z-10 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-catppuccin_red">Dylan Zhou</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I'm a dedicated student passionate about{" "}
            <span className="font-extrabold text-catppuccin_text">
              Full Stack Web Development
            </span>
            , always seeking new challenges to grow my skills and improve my
            applications.
          </p>
          <div className="flex">
            <div className="flex items-center justify-center space-x-5 mx-10">
              <motion.div
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ stype: "spring", stiffness: 300 }}
              >
                <Link
                  href={"https://www.linkedin.com/in/dylan-zhou-714110262/"}
                >
                  <FaLinkedin size={32} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ stype: "spring", stiffness: 300 }}
              >
                <Link href={"https://www.github.com/Aeonoi/"}>
                  <FaGithub size={32} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ stype: "spring", stiffness: 300 }}
              >
                <Link href={"mailto:dzhou527@gmail.com"}>
                  <SiGmail size={32} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Background>
    </main>
  );
};
export default Hero;
