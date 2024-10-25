"use client";
import Background from "./background";

const About: React.FC = () => {
  return (
    <main id="about" className="animate-fadeIn">
      <Background styles="h-full md:h-screen flex items-center">
        {/* <div className="grid grid-cols-2 text-black max-w-4xl mx-auto p-6"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-catppuccin_text justify-items-center mx-auto p-10">
          <section className="mb-8 max-w-3xl">
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
              and improve. My goal is to create impactful and intuitive digital
              solutions while staying at the forefront of innovation in the tech
              world.
            </p>
          </section>

          <section className="mb-8 max-w-3xl">
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
                Node.js, Express, MongoDB, Mongoose, PostgreSQL, Spring Boot
              </li>
              <li>
                <strong className="text-catppuccin_red">Other:</strong> Material
                Tailwind, ShadCN UI components
              </li>
              {/* <li> */}
              {/*   <strong>Tools:</strong> Git, GitHub Desktop, tmux, VSCode, */}
              {/*   IntelliJ, Neovim */}
              {/* </li> */}
            </ul>
          </section>

          <section className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">
              Current Focus & Interests
            </h2>
            <p className="text-lg text-catppuccin_teal">
              I'm honing my skills in full-stack web development, exploring the
              features of{" "}
              <span className="text-catppuccin_red">
                Next.js 14 and React.js
              </span>
              , and working on projects that blend intuitive UI with solid
              backend functionality. I'm also excited about diving deeper into
              areas like database optimization and cloud deployment. In my free
              time, I'm learning the Rust language and exploring the different
              applications that uses Rust.
            </p>
          </section>
          {/* <div className="grid grid-cols-2 justify-center items-center flex-wrap"> */}
          {/*   <div className="flex flex-col gap-5"> */}
          {/*     <div className="min-h-full max-w-full mx-auto p-6 bg-white shadow-md rounded-lg text-black"> */}
          {/*       <h2 className="text-2xl font-semibold mb-3">Hi, I'm Dylan</h2> */}
          {/*       <p className="text-base"> */}
          {/*         I'm a junior Computer Science major studying at Rensselaer */}
          {/*         Polytechnic Institute with a passion for full-stack web */}
          {/*         development. Driven by curiosity, I thrive on exploring new */}
          {/*         technologies and pushing myself to continuously learn and */}
          {/*         grow. Whether I'm building dynamic web applications or diving */}
          {/*         into a new coding challenge, I'm always seeking opportunities */}
          {/*         to expand my skill set and improve. My goal is to create */}
          {/*         impactful and intuitive digital solutions while staying at the */}
          {/*         forefront of innovation in the tech world. */}
          {/*       </p> */}
          {/*     </div> */}
          {/*     <div className="min-h-full max-w-full mx-auto p-6 bg-white shadow-md rounded-lg text-black"> */}
          {/*       <h2 className="text-2xl font-semibold mb-3">Education</h2> */}
          {/*       <p>GPA: 3.62</p> */}
          {/*       <p>Major: Computer Science</p> */}
          {/*       <p>Expected Graduation: May 2026</p> */}
          {/*       <p>Honors: Deans List</p> */}
          {/*     </div> */}
          {/*   </div> */}
          {/*   <div className="min-h-full max-w-full mx-auto p-6 bg-white shadow-md rounded-lg text-black"> */}
          {/*     <h2 className="text-2xl font-semibold mb-3">Skills</h2> */}
          {/*     <div className="flex"> */}
          {/*       <IoLogoJavascript size={32} /> */}
          {/*       <SiTypescript size={32} /> */}
          {/*       <TbBrandCpp size={32} /> */}
          {/*       <FaJava size={32} /> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </Background>
    </main>
  );
};

export default About;
