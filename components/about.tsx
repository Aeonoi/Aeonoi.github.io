"use client";
import Background from "./background";

const About: React.FC = () => {
  return (
    <main id="about" className="animate-fadeIn">
      <Background styles="h-screen flex items-center">
        {/* <div className="grid grid-cols-2 text-black max-w-4xl mx-auto p-6"> */}
        <div className="grid grid-cols-2 text-black justify-items-end mx-auto p-10">
          <section className="mb-8 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Dylan</h1>
            <p className="text-lg">
              I'm a junior Computer Science major studying at Rensselaer
              Polytechnic Institute with a passion for full-stack web
              development. Driven by curiosity, I thrive on exploring new
              technologies and pushing myself to continuously learn and grow.
              Whether I'm building dynamic web applications or diving into a new
              coding challenge, I'm always seeking opportunities to expand my
              skill set and improve. My goal is to create impactful and
              intuitive digital solutions while staying at the forefront of
              innovation in the tech world.
            </p>
          </section>

          <section className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">
              Skills & Technologies
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li>
                <strong>Languages:</strong> JavaScript, TypeScript, C++, C, Java
              </li>
              <li>
                <strong>Frontend:</strong> React.js, Preact.js, Electron.js,
                Next.js, TypeScript, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, MongoDB, Mongoose
              </li>
              <li>
                <strong>Other:</strong> ShadCN UI components, JavaFX, Spring
                Boot
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub Desktop, tmux, VSCode,
                IntelliJ, Neovim
              </li>
            </ul>
          </section>

          <section className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">
              Current Focus & Learning
            </h2>
            <p className="text-lg">
              Right now, I'm honing my skills in full-stack development,
              exploring the latest features of Next.js, and working on projects
              that blend intuitive UI with solid backend functionality. I'm also
              excited about diving deeper into areas like database optimization
              and cloud deployment.
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
