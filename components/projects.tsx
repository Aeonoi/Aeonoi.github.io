import Background from "./background";
import ProjectCard from "./project-card";

const Projects: React.FC = () => {
  return (
    <main className="animate-fadeIn">
      <Background>
        <p
          id="projects"
          className="text-5xl items-center text-center text-white scroll-m-14 m-20 lg:m-10"
        >
          Projects
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-y-10 ">
          <ProjectCard
            link="https://github.com/Aeonoi/studyit"
            description="This web application is a productivity tool to make focusing enjoyable and more rewardable.
            The dashboard provides real time widgets for the focus times and the distribution between the different tasks.
            Users can create tasks, set customizable timers, and use integrated tools such as Google search and music through YouTube keywords.
            To manage deadlines, users can create events and view them on the interactive calendar with notifications of upcoming deadlines.
            The application also offers a rank system to better track progress and promote frequent studying habits."
            title="StudyIt"
            image="studyit.png"
          />
          <ProjectCard
            link="https://github.com/Aeonoi/notts"
            description="This desktop application is a user friendly markdown note-taking application with support for folder organization to 
            help users keep notes organized and easily accessible. Users can easily access notes via folders and remove notes and folders quickly.
            Notes are saved on every write."
            title="Notts"
            image="notts.png"
          />
          <ProjectCard
            link="https://github.com/wrighs6/leanto"
            description="Leanto is a simple task management application designed to simplify the process of being on multiple teams.
            It is common to be a part of multiple different projects.
            leanto aims to provide an interface to display the tasks from each projects while also providing an interface to interact with additional project specific data and controls.
            This application is aimed towards students and professionals alike."
            title="leanto"
            image="leanto.png"
          />
        </div>
      </Background>
    </main>
  );
};

export default Projects;
