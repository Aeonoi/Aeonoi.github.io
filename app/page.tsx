import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Transition from "@/components/transition";

const Home: React.FC = () => {
  return (
    <main>
      {/* Top Navigation Bar Section */}
      <Navbar />
      <div className="container px-4 md:px-6 py-6 md:py-12 mx-auto">
        {/* Hero Section */}
        <Transition>
          <Hero />
        </Transition>
        {/* About Section */}
        <Transition>
          <About />
        </Transition>
        {/* Projects Section */}
        <Transition>
          <Projects />
        </Transition>
        {/* Resume Section */}
        <Transition>
          <Resume />
        </Transition>
      </div>
    </main>
  );
};

export default Home;
