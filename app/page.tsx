import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Resume from "@/components/resume";

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
      {/* Contacts Section */}
      {/* <Contact /> */}
      {/* Resume Section */}
      <Resume />
    </main>
  );
};

export default Home;
