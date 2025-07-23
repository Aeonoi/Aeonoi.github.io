"use client";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAmazonec2,
  SiDrizzle,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Badge } from "./ui/badge";

const About: React.FC = () => {
  return (
    <main id="about" className="scroll-m-14">
      <div className="mb-10">
        <header className="text-5xl font-bold mb-5">About Me</header>
        <div className="grid grid-cols-2 gap-20">
          {/* About Me  */}
          <div className="grid grid-rows-2 text-2xl gap-5">
            <p>
              I'm a Senior studying Computer Science at Rensselaer Polytechnic
              Institute with a passion for frontend development. I enjoy solving
              complex problems and turning them into simple and intuitive
              designs.
            </p>
            <p>
              My journey in tech started with a curiosity about how websites
              work, which led me to explore HTML, CSS, and JavaScript. Since
              then, I've expanded my skills to include modern frameworks like
              React.js, Next.js, and TailwindCSS.
            </p>
          </div>
          {/* Skills */}
          <div>
            <header className="font-semibold text-4xl">Skills</header>
            <div className="grid grid-cols-3 gap-5 mt-3 h-full">
              <div>
                <header className="text-2xl">Frontend</header>
                <div className="pt-3 flex flex-wrap w-full gap-2">
                  <Badge className="h-10 text-2xl">
                    <SiTailwindcss />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiTypescript />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiNextdotjs />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiReact />
                  </Badge>
                </div>
              </div>
              <div className="h-full">
                <header className="text-2xl">Backend</header>
                <div className="pt-3 flex flex-wrap w-full gap-2">
                  <Badge className="h-10 text-2xl">
                    <FaJava />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiC />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiCplusplus />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiDrizzle />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiPostgresql />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiMongodb />
                  </Badge>
                </div>
              </div>
              <div>
                <header className="text-2xl">Tools</header>
                <div className="pt-3 flex flex-wrap w-full gap-2">
                  <Badge className="h-10 text-2xl">
                    <SiGit />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiGithub />
                  </Badge>
                  <Badge className="h-10 text-2xl">
                    <SiAmazonec2 />
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
