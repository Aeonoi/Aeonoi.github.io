"use client";

import Background from "./background";

const Resume: React.FC = () => {
  return (
    <main id="resume" className="animate-fadeIn">
      <Background styles="h-max w-max">
        <p className="text-5xl items-center text-center text-black">Resume</p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex">
            <embed
              src="Resume.pdf#zoom=100"
              width={window.innerWidth / 2}
              height={window.innerHeight * 0.8}
              type="application/pdf"
            />
          </div>
          <div className="flex items-center justify-center">
            <a href="/Resume.pdf" download="Resume.pdf">
              <button
                type="button"
                className="text-2xl bg-catppuccin_red text-white py-2 px-4 rounded-md hover:bg-red-400 transition duration-300"
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </Background>
    </main>
  );
};

export default Resume;
