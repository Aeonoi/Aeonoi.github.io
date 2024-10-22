import Link from "next/link";
import Background from "./background";

const Hero: React.FC = () => {
  return (
    <Background styles="h-screen flex items-center justify-center">
      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-catppuccin_red">Dylan Zhou</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          I'm a dedicated student passionate about{" "}
          <span className="font-extrabold">Full Stack Developer</span>, always
          seeking new challenges to grow my skills and improve my applications.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <Link
            href="#projects"
            className="bg-catppuccin_rosewater text-black font-semibold py-3 px-6 rounded-full hover:bg-catppuccin_flamingo transition duration-300"
          >
            View My Work
          </Link>
          <Link
            href="#resume"
            className="bg-catppuccin_rosewater text-black font-semibold py-3 px-6 rounded-full hover:bg-catppuccin_flamingo transition duration-300"
          >
            View My Resume
          </Link>
        </div>
      </div>
    </Background>
  );
};
export default Hero;
