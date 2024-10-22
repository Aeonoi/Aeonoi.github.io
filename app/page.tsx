import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
    </main>
  );
};

export default Home;
