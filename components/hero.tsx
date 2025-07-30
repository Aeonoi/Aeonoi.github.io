"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <main id="hero" className="h-[75vh]">
      <div className="mt-[10vh] grid grid-cols-2 gap-[6vw] mb-[10vh]">
        <div className="relative z-10 text-center text-[#d3c6aa] max-w-3xl">
          <h1 className="mt-[10vh] text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span>Dylan</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I'm a dedicated student passionate about{" "}
            <span className="font-extrabold">Full Stack Web Development</span>,
            always seeking new challenges to grow my skills and improve my
            applications.
          </p>
          <div className="flex items-center justify-start space-x-5 mx-10 mt-14">
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ stype: "spring", stiffness: 300 }}
            >
              <a href="/Resume.pdf" download="Resume.pdf">
                <button
                  type="button"
                  className="text-center text-xl bg-[#191f23] text-[#d3c6aa] py-2 px-4 rounded-md hover:bg-[#ca4853] transition duration-300"
                >
                  Resume
                </button>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ stype: "spring", stiffness: 300 }}
            >
              <Link href={"https://www.linkedin.com/in/dylan-zhou-714110262/"}>
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
        <div className="flex items-center justify-center">
          <Card className="w-3/5">
            <div className="relative border rounded-xl overflow-hidden">
              <Image
                src={"/icon.png"}
                alt={"icon"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default Hero;
