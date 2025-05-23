import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <a href="#home" className="flex items-center space-x-2 font-mono text-xl font-bold text-white">
   <img src="https://github.com/JohnnyFenelon/johnnycv/blob/d2d478b6c8e01dcb219b5b148a7b198fdfc57eef/public/mylogo.png?raw=true" alt="Logo" className="w-16 h-15 rounded-full object-cover" />
  <span>
    Johnny<span className="text-blue-500">.Code</span>
  </span>
</a>
          
          <div>
            
          </div>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            <a
              href="https://drive.google.com/drive/folders/18jUr1ZrsHmbvS4k8yBsbgmehRseAVeCj?usp=drive_link"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Curriculum{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
