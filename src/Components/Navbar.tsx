import { useEffect } from "react";

interface INavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: INavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);
  return (
    <div
      className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.6)] backdrop-blur-lg
     border-b border-white/10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* //mobie menue */}
          <a
            className="tracking-[5px] font-Dancing font-bold md:text-xl text-[18px]"
            href="#home"
          >
            <span className="text-amber-500 font-Outfit">Dev.</span>
            <span className="text-white">Irfan Khan</span>
          </a>
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative cursor-pointer md:hidden"
          >
            &#9776;
          </div>
          {isMenuOpen && (
            <div
              className={`fixed top-0 left-0 font-Outfit w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col
           text-white transform transition-all duration-300 ease-in-out items-center space-y-4 py-4
           ${isMenuOpen ? "translate-y-0 opacity-100" : "hidden opacity-0"}`}
            >
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Close menu"
                className="cursor-pointer rounded-md focus:outline-none absolute top-6 right-6 text-white border-2 h-4 w-4 flex items-center justify-center border-white p-3 text-xl"
              >
                &times;
              </button>
              <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#home"
                >
                  Home
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#Experience"
                >
                  Experience
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#education"
                >
                  Education
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#about"
                >
                  About
                </a>
                <a
                  className={`text-gray-300 hover:text-white transform transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
          {/* //desktop menue */}
          <div className="hidden md:flex font-Outfit items-center space-x-8">
            <a
              className="text-gray-300 hover:text-white transition-colors duration-300"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-300"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-300"
              href="#eduaction"
            >
              Eduaction
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-300"
              href="#about"
            >
              About
            </a>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-300"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
