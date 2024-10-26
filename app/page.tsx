import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Transition from "@/components/transition";

const Home: React.FC = () => {
  return (
    <main className="">
      {/* Top Navigation Bar Section */}
      <Navbar />
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
    </main>
  );
};

export default Home;
