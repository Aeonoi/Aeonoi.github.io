import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    // <header className="sticky top-0 w-full h-14 bg-transparent shadow-md z-50 bg-gradient-to-r from-catppuccin_blue via-catppuccin_lavender to-catppuccin_mauve animate-fadeIn">
    <header className="sticky top-0 w-full h-14 bg-transparent shadow-md z-50 animate-fadeIn backdrop-blur-md">
      <nav className="container mx-auto px-3 py-3">
        <div className="flex justify-between items-center text-white">
          <div className="hidden md:flex text-2xl font-bold text-catppuccin_red">
            Dylan Zhou
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Link href="#hero" className="hover:text-red-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-red-500">
              About
            </Link>
            <Link href="#projects" className="hover:text-red-500">
              Projects
            </Link>
            {/* <Link */}
            {/*   href="#contact" */}
            {/*   className="text-gray-800 hover:text-catppuccin_blue" */}
            {/* > */}
            {/*   Contact */}
            {/* </Link> */}
            {/* Resume */}
            <Link href="#resume" className="hover:text-red-500">
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
