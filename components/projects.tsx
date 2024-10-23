import Background from "./background";
import ProjectCard from "./project-card";

const Projects: React.FC = () => {
  return (
    <main id="projects">
      <Background styles="h-[70vh]">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-10 gap-y-20 p-5">
          <ProjectCard
            link="https://github.com/Aeonoi/studyit"
            description="This is a nice project."
            title="StudyIt"
            image="studyit.png"
          />
        </div>
      </Background>
    </main>
  );
};

export default Projects;
