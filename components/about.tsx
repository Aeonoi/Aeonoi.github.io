"use client";
import Background from "./background";

const About: React.FC = () => {
  return (
    <main id="about" className="scroll-m-14">
      <Background styles="h-full md:h-screen flex items-center">
        {/* <div className="grid grid-cols-2 text-black max-w-4xl mx-auto p-6"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-catppuccin_text p-10 w-full justify-items-center">
          <section className="mb-8 max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Dylan</h1>
            <p className="text-lg text-catppuccin_teal">
              I'm a junior Computer Science major studying at{" "}
              <span className="text-catppuccin_red">
                Rensselaer Polytechnic Institute
              </span>{" "}
              with a passion for
              <span className="text-catppuccin_red">
                {" "}
                full-stack web development.
              </span>{" "}
              Driven by curiosity, I thrive on exploring new technologies and
              pushing myself to continuously learn and grow. Whether I'm
              building dynamic web applications or diving into a new coding
              challenge, I'm always seeking opportunities to expand my skill set
              and improve. My goal is to create impactful and intuitive
              solutions while staying at the forefront of innovation in the tech
              world.
            </p>
          </section>

          <section className="mb-8 max-w-xl">
            <h2 className="text-3xl font-semibold mb-4">
              Skills & Technologies
            </h2>
            <ul className="list-disc ml-6 text-lg text-catppuccin_teal">
              <li>
                <strong className="text-catppuccin_red">Languages:</strong> C++,
                Java, JavaScript, TypeScript, C
              </li>
              <li>
                <strong className="text-catppuccin_red">Frontend:</strong>{" "}
                React.js, Next.js, Preact.js, Electron.js, Tailwind CSS, JavaFX
              </li>
              <li>
                <strong className="text-catppuccin_red">Backend:</strong>{" "}
                Node.js, Express.js, MongoDB, Mongoose ORM, PostgreSQL, Spring
                Boot
              </li>
              <li>
                <strong className="text-catppuccin_red">Testing:</strong> JUnit
                5, GDB
              </li>
              <li>
                <strong className="text-catppuccin_red">Other:</strong> Material
                Tailwind, ShadCN UI
              </li>
              {/* <li> */}
              {/*   <strong>Tools:</strong> Git, GitHub, tmux, VSCode, */}
              {/*   IntelliJ, Neovim */}
              {/* </li> */}
            </ul>
          </section>

          <section className="mb-8 max-w-xl">
            <h2 className="text-3xl font-semibold mb-4">
              Current Focus & Interests
            </h2>
            <p className="text-lg text-catppuccin_teal">
              I'm honing my skills in full-stack web development, exploring the
              features of <span className="text-catppuccin_red">Next.js</span>{" "}
              and <span className="text-catppuccin_red">React.js</span>, and
              working on projects that blend intuitive UI with solid backend
              functionality. I'm also excited about diving deeper into areas
              like database optimization and cloud deployment. Recently, I've
              been focusing on implementing user authentication and OAuth to
              enhance security in my applications. In my free time, I’m
              exploring the Rust programming language and its diverse
              applications.
            </p>
          </section>
        </div>
      </Background>
    </main>
  );
};

export default About;
