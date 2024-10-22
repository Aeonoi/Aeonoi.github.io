import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 w-full h-14 bg-transparent shadow-md z-50 bg-gradient-to-r from-catppuccin_blue via-catppuccin_lavender to-catppuccin_mauve">
      <nav className="container mx-auto px-3 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Dylan Zhou</div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#hero" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-800 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
