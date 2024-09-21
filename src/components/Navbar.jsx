import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, User, PresentationIcon, Mail, File } from "lucide-react"; // Import the File icon
import { useState } from "react";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setContentType } = useContentStore();

  const handleTabClick = (tab) => {
    setContentType(tab === "home" ? "" : tab);
    navigate(`/${tab === "home" ? "" : tab}`);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const tabs = [
    { name: "home", icon: <Home /> },
    { name: "about", icon: <User /> },
    { name: "project", icon: <PresentationIcon /> },
    { name: "contact", icon: <Mail /> },
  ];

  return (
    <header className="bg-black max-w-auto mx-auto flex items-center justify-between p-4 h-20 z-50">
      {/* Conditionally show original header only when mobile menu is closed */}
      {!isMobileMenuOpen && (
        <>
          {/* Logo and Menu */}
          <div className="flex items-center gap-10 z-50">
            <Link to="/">
              <img src="/logo.png" alt="App logo" className="m-3 w-8 rounded-md sm:w-12" />
            </Link>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden sm:flex flex-grow justify-center gap-4 items-center">
            {tabs.map(({ name, icon }) => (
              <button
                key={name}
                className={`flex items-center gap-2 py-2 px-4 rounded ${pathname === `/${name}` || (name === "home" && pathname === "/")
                    ? "bg-blue-900"
                    : "bg-gray-800"
                  } hover:bg-blue-500`}
                onClick={() => handleTabClick(name)}
              >
                {icon} {/* Render the icon */}
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </button>
            ))}
          </div>

          {/* Rightmost Resume Button - only visible on larger screens */}
          <div className="hidden sm:flex items-center gap-4 z-50">
            <a
              href="/File/Resume1.pdf" // Link to your resume file
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 rounded bg-gray-800 hover:bg-blue-500 text-white"
            >
              <File />
              Resume
            </a>
          </div>

          {/* Menu Icon for mobile screens (visible on small screens) */}
          <Menu
            className="block sm:hidden size-6 cursor-pointer" // Ensure it's visible on small screens
            onClick={() => setIsMobileMenuOpen(true)}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          />
        </>
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-0 left-0 w-full bg-slate-950 transition-all duration-300 ease-in-out z-10"
        >
          {/* Flex container for logo and X */}
          <div className="flex items-center justify-between p-4">
            <Link to="/">
              <img src="/logo.png" alt="App logo" className="m-3 w-8 rounded-md sm:w-16" />
            </Link>
            <X
              className="size-6 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>

          {/* Stack menu items below the original bar */}
          <div className="flex flex-col items-start gap-4 px-6">
            {tabs.map(({ name, icon }) => (
              <button
                key={name}
                className="flex items-center gap-2 py-2 px-4 w-full text-left hover:underline"
                onClick={() => {
                  handleTabClick(name);
                  setIsMobileMenuOpen(false); // Close the menu after selection
                }}
              >
                {icon} {/* Render the icon */}
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </button>
            ))}

            <button
              className="flex items-center gap-2 py-2 px-4 w-full text-left hover:underline">
              <a
                href="/File/Resume1.pdf" // Link to your resume file
                target="_blank" // Open in a new tab
                rel="noopener noreferrer"
                className="flex gap-2  rounded"
              >
                <File />
                Resume
              </a>
            </button>


          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
