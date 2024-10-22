import Link from "next/link";
import Background from "./background";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <main id="hero">
      <Background styles="h-screen flex items-center justify-center">
        <div className="relative z-10 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-catppuccin_red">Dylan Zhou</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I'm a dedicated student passionate about{" "}
            <span className="font-extrabold">Full Stack Developer</span>, always
            seeking new challenges to grow my skills and improve my
            applications.
          </p>
          <div className="flex">
            <div className="flex items-center justify-center space-x-5 mx-10">
              <Link href={"https://www.linkedin.com/in/dylan-zhou-714110262/"}>
                <FaLinkedin size={32} />
              </Link>
              <Link href={"https://www.github.com/Aeonoi/"}>
                <FaGithub size={32} />
              </Link>
              <Link
                href="#contact"
                className="bg-catppuccin_rosewater text-black font-semibold py-3 px-6 rounded-full hover:bg-catppuccin_flamingo transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Background>
    </main>
  );
};
export default Hero;
