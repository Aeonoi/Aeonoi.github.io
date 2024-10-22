import Link from "next/link";
import Background from "./background";

const About: React.FC = () => {
  return (
    <Background styles="h-[80vh] flex items-center justify-center">
      <div className="relative z-10 text-center text-white max-w-3xl">
        <div className="flex justify-center items-center flex-wrap gap-8 mt-8">
          {/* TODO: Display skills */}
          {/* TODO: Display a quick about me */}
        </div>
      </div>
    </Background>
  );
};

export default About;
