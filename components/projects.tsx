import Background from "./background";

const Projects: React.FC = () => {
  return (
    <main id="projects">
      <Background styles="h-[70vh]">
        <div className="grid grid-cols-2 justify-items-center items-center">
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
          <div>test4</div>
        </div>
      </Background>
    </main>
  );
};

export default Projects;
