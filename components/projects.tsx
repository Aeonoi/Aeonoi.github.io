import Background from "./background";
import ProjectCard from "./project-card";

const Projects: React.FC = () => {
  return (
    <main className="scroll-m-14">
      <Background>
        <p
          id="projects"
          className="text-5xl items-center text-center text-[#d3c6aa] scroll-m-14 m-20 lg:m-10"
        >
          Projects
        </p>
        {/* TODO: Add current working project */}
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-10">
          <ProjectCard
            link="https://github.com/Aeonoi/studyit"
            description="A productivity tool to make focusing enjoyable and competitive.
            A all in one solution to study while enjoying a built in youtube player and a balanced rank system.
            In case of work load, there is a built in calendar for events and todos to help manage your schedule."
            title="StudyIt"
            image="/studyit.png"
            stack={["React.js", "Next.js", "MongoDB", "TailwindCSS"]}
          />
          <ProjectCard
            link="https://github.com/Aeonoi/notts"
            description="A minimalistic note taking app that utilizes markdown.
            Easily manage your notes by placing them in folders and quickly editing with auto save. Easily manage your notes by placing them in folders and quickly editing with auto save."
            title="Notts"
            image="/notts.png"
            stack={["React.js", "Electron.js", "MongoDB", "TailwindCSS"]}
          />
          <ProjectCard
            link="https://github.com/wrighs6/leanto"
            description="A simple task management application designed to simplify the process of being on multiple teams.
            leanto aims to provide an interface to display the tasks from each projects while also providing an interface to interact with additional project specific data and controls."
            title="leanto"
            image="/leanto.png"
            stack={["Preact.js", "Electron.js", "MongoDB"]}
          />
        </div>
      </Background>
    </main>
  );
};

export default Projects;
